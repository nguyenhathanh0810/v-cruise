import { sendMail } from "@/services/mailer"
import ejs from "ejs"
import { NextResponse } from "next/server"
import transferRoutes from "../routes.json"
import template from "../template.ejs"

export async function POST(req, { params }) {
  const { route, customer } = await req.json()
  let destination
  try {
    destination = validateRoute(route)
    validateCustomer(customer)
  } catch (error) {
    return NextResponse.json({
      error_code: error.message,
      error_message:
        error.message === "route:notfound"
          ? "Invalid route"
          : "Customer information invalid",
    })
  }
  let mailInfo
  try {
    mailInfo = await publishReservation(customer, destination)
  } catch (err) {
    console.error(err)
    return NextResponse.json({
      successful: false,
      error_code: "mail:error",
      error_message: err.message,
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
    [customer.email, ...receivers],
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
    throw new Error("customer:fullname:empty")
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test($customer.email)) {
    throw new Error("customer:email:wrong_format")
  }
  const adult = parseInt(customer.passengers?.adult)
  if (isNaN(adult) || adult < 1) {
    throw new Error("customer:passenger:adult:zero")
  }
}
