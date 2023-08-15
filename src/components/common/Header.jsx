import Image from "next/image"
import Link from "next/link"
import React from "react"
import IconPhone from "../icons/IconPhone"
import IconEnvelop from "../icons/IconEnvelop"
import IconFacebook from "../icons/IconFacebook"
import IconInstagram from "../icons/IconInstagram"
import IconXTwitter from "../icons/IconXTwitter"

function Header() {
  return (
    <header className="fixed inset-x-0 xl:px-[60px]">
      <div className="flex h-10 border-b border-[#ffffff80] text-white">
        <div className="flex flex-grow gap-6 items-center">
          <div className="flex items-center">
            <span className="mr-1">
              <IconPhone size={20} />
            </span>
            <Link href="tel:+84355848720">
              <i>(+84) 355848720</i>
            </Link>
          </div>
          <div className="flex items-center">
            <span className="mr-1">
              <IconEnvelop size={20} />
            </span>
            <Link href="mailto:cruise-angency@gmail.com">
              <i>cruise-agency@gmail.com</i>
            </Link>
          </div>
        </div>
        <div className="flex flex-shrink-0 gap-4 items-center">
          <i className="text-lg">Socials</i>
          <Link href="#">
            <IconFacebook size={20} />
          </Link>
          <Link href="#">
            <IconInstagram size={20} />
          </Link>
          <Link href="#">
            <IconXTwitter size={20} />
          </Link>
        </div>
      </div>
      <nav className="py-4 border-b border-[#ffffff80] text-white">
        <ul className="flex gap-12 items-center justify-center">
          <li>
            <Link href="#">
              <span className="uppercase text-lg font-semibold">
                Our Routes
              </span>
            </Link>
          </li>
          <li>
            <Link href="#" className="py-2">
              <Image
                src="/logo-mandarin.png"
                alt="Cruise Agency"
                width={96}
                height={96}
              />
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="uppercase text-lg font-semibold">
                Contact Us
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
