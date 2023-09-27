"use client"
import LogoUrl from "@public/logo.png"
import { Italianno, Noto_Sans } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import IconBars from "../icons/IconBars"
import IconEnvelop from "../icons/IconEnvelop"
import IconFacebookRounded from "../icons/IconFacebookRounded"
import IconPhone from "../icons/IconPhone"
import IconTripadvisor from "../icons/IconTripadvisor"
import SideMenu from "../portals/SideMenu"

const italianno = Italianno({ subsets: ["latin"], weight: "400" })
const noto = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-noto-sans",
})

function Header() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)
  const refDestinationMenu = useRef(null)
  const refContactMenu = useRef(null)

  useEffect(() => {
    refDestinationMenu.current.addEventListener(
      "click",
      scrollTo("panel-travel-routes")
    )
    refContactMenu.current.addEventListener("click", scrollTo("panel-contact"))
  }, [])

  function scrollTo(id) {
    const el = document.getElementById(id)
    console.log({ el })
    if (!el) {
      return
    }
    return () =>
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
  }

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
              <IconPhone size={16} />
            </span>
            <Link href="tel:+84939777833">
              <span className={`${noto.variable} ${noto.className} text-sm`}>
                (+84) 939777833
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <span className="mr-2">
              <IconEnvelop size={16} />
            </span>
            <Link href="mailto:mandarincruisesvn@gmail.com">
              <span className={`${noto.variable} ${noto.className} text-sm`}>
                mandarincruisesvn@gmail.com
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-shrink-0 gap-4 items-center">
          <i className="mr-2 text-[22px] tracking-wider">Socials</i>
          <Link href="https://www.facebook.com/MandarinCruises" target="_blank">
            <IconFacebookRounded size={18} />
          </Link>
          <Link
            href="https://www.tripadvisor.com.vn/Attraction_Review-g311303-d10117306-Reviews-Mandarin_Cruises-Chau_Doc_An_Giang_Province.html"
            target="_blank"
          >
            <IconTripadvisor size={24} />
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
            <a className="menu-item" ref={refDestinationMenu}>
              <span className="uppercase text-lg font-semibold">
                DESTINATIONS
              </span>
            </a>
          </li>
          <li>
            <Link href="#" className="py-2">
              <Image src={LogoUrl} alt="Cruise Agency" width={135} />
            </Link>
          </li>
          <li className="hidden md:list-item">
            <a className="menu-item" ref={refContactMenu}>
              <span className="uppercase text-lg font-semibold">
                CONTACT US
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
