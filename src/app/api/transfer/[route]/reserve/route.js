import { sendMail } from "@/services/mailer"
import ejs from "ejs"
import { NextResponse } from "next/server"
import transferRoutes from "../routes.json"
import template from "../template.ejs"

export async function POST(req, { params }) {
  const customer = await req.json()
  const { route } = params
  let destination
  try {
    destination = validateRoute(route)
    validateCustomer(customer)
  } catch (error) {
    let field = error.message.split(":")
    field = field[0]
    return NextResponse.json({
      error: {
        field,
        code: error.message,
        message:
          error.message === "route:notfound"
            ? "Invalid route"
            : "Customer information invalid",
      },
    })
  }
  let mailInfo
  try {
    mailInfo = await publishReservation(
      {
        ...customer,
        departureDate: new Date(customer.departureDate).toLocaleDateString(
          undefined,
          {
            timeZone: "Asia/Ho_Chi_Minh",
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        ),
      },
      destination
    )
  } catch (err) {
    console.error(err)
    return NextResponse.json({
      successful: false,
      error: {
        field: "mail",
        code: "mail:error",
        code: err.message,
      },
    })
  }
  return NextResponse.json({
    successful: true,
    mailInfo,
  })
}

async function publishReservation(customer, service) {
  let receivers
  receivers = `${process.env.MAIL_SYSTEM_RECEIVERS}`
    .split(",")
    .map((r) => r.trim())
  const content = ejs.render(template, {
    app: {
      name: process.env.APP_NAME,
    },
    service,
    customer,
  })
  return await sendMail(
    [/*customer.email,*/ ...receivers],
    `[${process.env.APP_NAME} RESERVATION] Ticket from <${customer.fullname}>`,
    content
  )
}

function validateRoute(route) {
  const destination = transferRoutes.find((r) => r.id === route)
  if (destination === undefined) {
    throw new Error("route:notfound")
  }
  return destination
}

function validateCustomer(customer) {
  const $customer = customer || {}
  if (!$customer.fullname) {
    throw new Error("fullname:empty")
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i.test($customer.email)) {
    throw new Error("email:wrong_format")
  }
  const adult = parseInt($customer.passengers?.adult)
  if (isNaN(adult) || adult < 1) {
    throw new Error("passenger:adult:zero")
  }
  if (!$customer.nationality) {
    throw new Error("nationality:empty")
  }
  validateDepartureDate($customer.departureDate)
}

function validateDepartureDate(dateStr) {
  const departureDate = new Date(dateStr)
  if (isNaN(departureDate)) {
    throw new Error("departureDate:wrong_format")
  }
  if (!isDateEfficient(dateStr)) {
    throw new Error("departureDate:invalid")
  }
  let tomorrow = Date.now() + 86400000
  if (departureDate.getTime() < tomorrow) {
    throw new Error("departureDate:too_close")
  }
}

const isDateEfficient = (str) => {
  try {
    const _d = new Date(str)
    const [m, d, y] = str.split("/").map((x) => parseInt(x))
    return (
      _d.getFullYear() === y && _d.getMonth() + 1 === m && _d.getDate() === d
    )
  } catch (error) {
    return false
  }
}
