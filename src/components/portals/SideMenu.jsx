"use client"
import LogoUrl from "@public/logo.png"
import Image from "next/image"
import Link from "next/link"
import { createPortal } from "react-dom"
import IconBoat from "../icons/IconBoat"
import IconContact from "../icons/IconContact"
import { Italianno } from "next/font/google"
import IconPhone from "../icons/IconPhone"
import IconEnvelop from "../icons/IconEnvelop"
import IconFacebook from "../icons/IconFacebook"
import IconXTwitter from "../icons/IconXTwitter"
import IconInstagram from "../icons/IconInstagram"
import { useEffect } from "react"
import IconAngleLeft from "../icons/IconAngleLeft"
import { useDocumentNoScroll } from "@/hooks/useDocumentNoScroll"

const italianno = Italianno({ subsets: ["latin"], weight: "400" })

function SideMenu({ isOpen, onClose }) {
  useDocumentNoScroll(isOpen)

  if (!isOpen) return null

  function handleClose() {
    onClose?.()
  }

  function handleClick(e) {
    e.stopPropagation()
  }

  const SideBar = () => (
    <aside
      className="fixed inset-0 z-[100] bg-[#00000080]"
      onClick={handleClose}
    >
      <nav
        className="min-w-[320px] w-[75%] h-full flex flex-col bg-white shadow-md"
        onClick={handleClick}
      >
        <div className="pt-2">
          <button
            type="button"
            className="block ml-auto mr-2 p-2 select-none text-slate-400"
            onClick={handleClose}
          >
            <IconAngleLeft size={24} />
          </button>
        </div>
        <div className="flex-shrink-0 flex justify-center py-4">
          <Link href="#" className="">
            <Image src={LogoUrl} alt="Cruise Agency" width={96} />
          </Link>
        </div>
        <ul className="flex-grow p-4">
          <li className="pl-0 py-4 flex justify-center">
            <Link href="#" className="flex items-center gap-2 px-3">
              <IconBoat size={16} />
              <span className="uppercase text-lg font-semibold">
                DESTINATIONS
              </span>
            </Link>
          </li>
          <li className="pl-0 py-4 flex justify-center">
            <Link href="#" className="flex items-center gap-2 px-3">
              <IconContact size={16} />
              <span className="uppercase text-lg font-semibold">
                CONTACT US
              </span>
            </Link>
          </li>
        </ul>
        <ul
          className={
            "flex-shrink-0 pb-4 text-[20px]" + " " + italianno.className
          }
        >
          <li className="w-[25%] mx-auto mb-4 border-b border-primary-shades-by-3">
            {" "}
          </li>
          <li className="flex justify-center py-1">
            <Link href="tel:+84379797979" className="flex items-center gap-2">
              <IconPhone size={16} />
              <span className="tracking-wider">
                Phone/WhatsApp +84379797979
              </span>
            </Link>
          </li>
          <li className="flex justify-center py-1">
            <Link
              href="mailto:cruise-angency@gmail.com"
              className="flex items-center gap-2"
            >
              <IconEnvelop size={16} />
              <span className="tracking-wider">
                Mailbox cruise-angency@gmail.com
              </span>
            </Link>
          </li>
          <li className="flex justify-center py-1">
            <Link href="#" className="flex items-center gap-2">
              <IconFacebook size={16} />
              <span className="tracking-wider">Fanpage</span>
            </Link>
          </li>
          <li className="flex justify-center py-1">
            <Link href="#" className="flex items-center gap-2">
              <IconXTwitter size={16} />
              <span className="tracking-wider">Twitter X</span>
            </Link>
          </li>
          <li className="flex justify-center py-1">
            <Link href="#" className="flex items-center gap-2">
              <IconInstagram size={16} />
              <span className="tracking-wider">Instagram</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )

  return createPortal(<SideBar />, document.getElementById("app-layout"))
}

export default SideMenu
