import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
})

export async function sendMail(receivers, subject, htmlBody) {
  if (!(receivers && receivers.length)) {
    console.error("No receivers provided")
    return false
  }
  const info = await transporter.sendMail({
    from: `"${process.env.MAIL_SENDER}" <${process.env.MAIL_USERNAME}>`,
    to: receivers.join(),
    subject,
    html: htmlBody,
  })
  console.log("✔️ Message sent: ", info.messageId)
  console.log("  Preview at: ", nodemailer.getTestMessageUrl(info))
  return true
}
