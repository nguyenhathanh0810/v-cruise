"use client";
import React from "react";

function ContactForm() {
  function handleSubmission(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log("Fullname", formData.get("contact-fullname"));
    console.log("Email", formData.get("contact-email"));
    console.log("Idea", formData.get("contact-idea"));
    return false;
  }

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <div className="grid grid-cols-2 gap-4">
          <div className="col">
            <input
              type="text"
              name="contact-fullname"
              id="contact-fullname"
              placeholder="Your fullname"
              className="block w-full px-4 py-3 bg-white border border-slate-300 rounded-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="contact-email"
              id="contact-email"
              placeholder="Your email"
              className="block w-full px-4 py-3 bg-white border border-slate-300 rounded-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
          </div>
          <div className="col-span-2">
            <textarea
              type="text"
              name="contact-idea"
              id="contact-idea"
              rows={5}
              placeholder="Tell us what kind of experience you're looking for"
              className="block w-full px-4 py-3 bg-white border border-slate-300 rounded-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 resize-none"
            />
          </div>
          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="min-w-[220px] bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-6 py-3 text-sm rounded-sm font-semibold text-white"
            >
              SEND
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
