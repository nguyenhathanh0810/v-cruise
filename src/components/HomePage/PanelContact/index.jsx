import React from "react"
import ContactForm from "./ContactForm"

function PanelContact() {
  return (
    <section className="py-20 bg-brushed">
      <div className="container">
        <div className="flex items-center justify-center gap-16 sm:p-6">
          <div className="flex-shrink-0 w-[380px] h-[328px] bg-contain bg-center bg-no-repeat bg-[url(/contact.png)] 2xl:w-[510px] max-[919px]:hidden"></div>
          <div className="flex-grow max-[919px]:max-w-[560px]">
            <div className="mb-4">
              <p className="text-lg text-primary-triadic-by-4">
                Lorem ipsum dolor
              </p>
              <h1 className="text-[36px] font-bold leading-tight text-primary lg:text-[50px]">
                LOOKING FOR AN OUTTA BOX EXPERIENCE
              </h1>
              <p className="mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, blanditiis quis magnam iure consequatur aut eius
                delectus nulla.
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
