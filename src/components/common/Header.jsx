"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import IconPhone from "../icons/IconPhone"
import IconEnvelop from "../icons/IconEnvelop"
import IconFacebook from "../icons/IconFacebook"
import IconInstagram from "../icons/IconInstagram"
import IconXTwitter from "../icons/IconXTwitter"
import LogoUrl from "@public/logo.png"
import { Italianno } from "next/font/google"
import IconBars from "../icons/IconBars"
import SideMenu from "../portals/SideMenu"

const italianno = Italianno({ subsets: ["latin"], weight: "400" })

function Header() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 px-4 xl:px-[60px]">
      <div
        className={
          "hidden text-white md:flex md:h-10 md:border-b md:border-[#ffffff80" +
          " " +
          italianno.className
        }
      >
        <div className="flex flex-grow gap-8 items-center text-[20px]">
          <div className="flex items-center">
            <span className="mr-2">
              <IconPhone size={14} />
            </span>
            <Link href="tel:+84379797979">
              <span className="tracking-wider">(+84) 379797979</span>
            </Link>
          </div>
          <div className="flex items-center">
            <span className="mr-2">
              <IconEnvelop size={14} />
            </span>
            <Link href="mailto:cruise-angency@gmail.com">
              <span className="tracking-wider">cruise-agency@gmail.com</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-shrink-0 gap-4 items-center">
          <i className="mr-2 text-[22px] tracking-wider">Socials</i>
          <Link href="#">
            <IconFacebook size={14} />
          </Link>
          <Link href="#">
            <IconInstagram size={14} />
          </Link>
          <Link href="#">
            <IconXTwitter size={14} />
          </Link>
        </div>
      </div>
      <nav className="text-white py-4 md:border-b md:border-[#ffffff80]">
        <ul className="flex gap-12 items-center justify-center relative">
          <li className="absolute left-6 md:hidden">
            <button
              type="button"
              className="select-none"
              onClick={() => setSideMenuOpen(true)}
            >
              <IconBars size={24} />
            </button>
            {sideMenuOpen === true || true ? (
              <SideMenu
                isOpen={sideMenuOpen}
                onClose={() => setSideMenuOpen(false)}
              />
            ) : null}
          </li>
          <li className="hidden md:list-item">
            <Link href="#">
              <span className="uppercase text-lg font-semibold">
                DESTINATIONS
              </span>
            </Link>
          </li>
          <li>
            <Link href="#" className="py-2">
              <Image src={LogoUrl} alt="Cruise Agency" width={105} />
            </Link>
          </li>
          <li className="hidden md:list-item">
            <Link href="#">
              <span className="uppercase text-lg font-semibold">
                CONTACT US
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
