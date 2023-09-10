import "./globals.css"
import { Noto_Sans } from "next/font/google"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"

const noto = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans",
})

export const metadata = {
  title: "Mandarin Cruises VN",
  description: "The most reliable waterway-transfer Agency among Mekong Delta",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${noto.variable} ${noto.className}`}>
        <div className="min-h-screen flex flex-col bg-slate-300">
          <div className="flex-shrink-0">
            <Header />
          </div>
          <div className="flex-grow">{children}</div>
          <div className="flex-shrink-0">
            <Footer />
          </div>
        </div>
        <div id="app-layout"></div>
        <div id="modals"></div>
      </body>
    </html>
  )
}
