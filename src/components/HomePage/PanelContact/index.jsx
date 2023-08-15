import React from "react";
import ContactForm from "./ContactForm";

function PanelContact() {
  return (
    <section className="py-12 xl:px-[60px]">
      <div className="flex items-center gap-8">
        <div className="flex-shrink-0 w-[510px] h-[328px] p-8 bg-contain bg-center bg-no-repeat bg-[url(/contact.png)]"></div>
        <div className="flex-grow">
          <div className="mb-4">
            <p className="text-lg text-slate-600">Lorem ipsum dolor</p>
            <h1 className="text-[50px] font-bold leading-tight">
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
    </section>
  );
}

export default PanelContact;
