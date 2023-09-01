import { sendMail } from "@/services/mailer"
import ejs from "ejs"
import { NextResponse } from "next/server"
import template from "./template.ejs"

export async function POST(request) {
  const { fullname, email, idea } = await request.json()
  if (!fullname) {
    return NextResponse.json({
      error: {
        field: "fullname",
        code: "contact:fullname:empty",
        message: "Fullname is missing",
      },
    })
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return NextResponse.json({
      error: {
        field: "email",
        code: "contact:email:invalid",
        message: "Email is format-invalid",
      },
    })
  }
  if (!idea) {
    return NextResponse.json({
      error: {
        field: "idea",
        code: "contact:idea:empty",
        message: "Idea is missing",
      },
    })
  }

  let mailInfo
  try {
    mailInfo = await publishContact({ fullname, email, idea })
  } catch (err) {
    console.error(err)
  }

  return NextResponse.json({
    info: { fullname, email, idea },
    mailInfo,
  })
}

async function publishContact(customer) {
  let receivers
  receivers = `${process.env.MAIL_SYSTEM_RECEIVERS}`
    .split(",")
    .map((r) => r.trim())
  const content = ejs.render(template, {
    app: {
      name: process.env.APP_NAME,
    },
    customer,
  })
  return await sendMail(
    receivers,
    `[${process.env.APP_NAME} NEWS] Contact from <${customer.fullname}>`,
    content
  )
}
