import { NextResponse } from "next/server"
import { sendMail } from "@/services/mailer"
import ejs from "ejs"
import path from "path"
import { promises as fs } from "fs"

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
  const templatePath =
    path.join(process.cwd(), "public/templates") + "/contact_email.ejs"
  const content = await ejs.renderFile(templatePath, {
    app: {
      name: process.env.APP_NAME,
    },
    customer: { fullname, email, idea },
  })
  const sent = await sendMail([email], `Contact From <${fullname}>`, content)
  return NextResponse.json({
    info: { fullname, email, idea },
    messageSent: sent,
  })
}
