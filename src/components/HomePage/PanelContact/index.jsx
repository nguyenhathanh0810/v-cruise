import React from "react"
import ContactForm from "./ContactForm"

function PanelContact() {
  return (
    <section className="py-20 --bg-brushed bg-cover bg-center bg-no-repeat bg-[url(/contact.webp)]">
      <div className="container">
        <div className="flex items-center justify-center gap-16 sm:p-6">
          <div className="flex-shrink-0 w-[308px] h-[328px] bg-contain bg-center bg-no-repeat --bg-[url(/contact.png)] 2xl:w-[510px] max-[919px]:hidden"></div>
          <div className="flex-grow max-[919px]:max-w-[560px] p-8 contact-form__bg">
            <div className="mb-4">
              <p className="text-lg font-bold">Want more???</p>
              <h1 className="text-[36px] font-bold leading-tight text-primary lg:text-[50px]">
                LOOKING FOR AN OUTTA BOX EXPERIENCE
              </h1>
              <p className="mb-8">
                If you look for a private cruise with quite unordinary
                destination please fill out and we will try our best
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PanelContact
