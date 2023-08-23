"use client"
import IconPaperPlane from "@/components/icons/IconPaperPlane"
import SpinnerModal from "@/components/portals/SpinnerModal"
import { useReducer, useState } from "react"
import toast from "react-simple-toasts"
import "react-simple-toasts/dist/theme/failure.css"
import "react-simple-toasts/dist/theme/ocean-wave.css"

const reducer = function (state, action) {
  if (action.type == "fullname_changed") {
    let error = ""
    if (!action.data) {
      error = "Please provide your name"
    }
    return {
      ...state,
      fullname: action.data,
      fullnameError: error,
    }
  }
  if (action.type == "email_changed") {
    let error = ""
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(action.data)) {
      error = "Please use a valid email"
    }
    return {
      ...state,
      email: action.data,
      emailError: error,
    }
  }
  if (action.type == "idea_changed") {
    let error = ""
    if (!action.data) {
      error = "Please give us your idea of an experience"
    }
    return {
      ...state,
      idea: action.data,
      ideaError: error,
    }
  }
  if (action.type == "submission_error") {
    return {
      ...state,
      [`${action.field}Error`]: action.errorMessage,
    }
  }
  if (action.type == "reset") {
    return {
      fullname: "",
      email: "",
      idea: "",
      fullnameError: "",
      emailError: "",
      ideaError: "",
    }
  }
  throw Error("Unknown action.")
}

function ContactForm() {
  const [state, dispatch] = useReducer(reducer, {
    fullname: "",
    email: "",
    idea: "",
    fullnameError: "",
    emailError: "",
    ideaError: "",
  })
  const [isSending, setSending] = useState(false)

  function onFullnameChange(e) {
    dispatch({
      type: "fullname_changed",
      data: e.target.value,
    })
  }

  function onEmailChange(e) {
    dispatch({
      type: "email_changed",
      data: e.target.value,
    })
  }

  function onIdeaChange(e) {
    dispatch({
      type: "idea_changed",
      data: e.target.value,
    })
  }

  function handleSubmission(e) {
    e.preventDefault()
    setSending(true)

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: state.fullname,
        email: state.email,
        idea: state.idea,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          dispatch({
            type: "submission_error",
            field: data.error.field,
            errorMessage: data.error.message,
          })
          toast(<>Failure on sending your request.</>, {
            theme: "failure",
            duration: 5000,
          })
        }
        dispatch({ type: "reset" })
        toast(
          <>
            Thanks for your request.
            <br />
            Our consultant will reach out soon.
          </>,
          {
            theme: "ocean-wave",
            duration: 5000,
          }
        )
      })
      .finally(() => {
        setSending(false)
      })
    return false
  }

  return (
    <>
      <p className="mb-2 text-sm italic">
        * In order to process your request, please fill out all information
        below
      </p>
      <form onSubmit={handleSubmission}>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="col">
            <input
              type="text"
              name="contact-fullname"
              id="contact-fullname"
              placeholder="What is your name?"
              className="block w-full px-4 py-3 bg-white border border-primary-square-by-2 rounded-sm shadow-sm focus:outline-none focus:border-primary-shades-by-1 focus:ring-1 focus:ring-primary"
              value={state.fullname}
              onChange={onFullnameChange}
            />
            <i className="text-sm text-red-700">{state.fullnameError}</i>
          </div>
          <div className="col">
            <input
              type="email"
              name="contact-email"
              id="contact-email"
              placeholder="What is your email address?"
              className="block w-full px-4 py-3 bg-white border border-primary-square-by-2 rounded-sm shadow-sm focus:outline-none focus:border-primary-shades-by-1 focus:ring-1 focus:ring-primary"
              value={state.email}
              onChange={onEmailChange}
            />
            <i className="text-sm text-red-700">{state.emailError}</i>
          </div>
          <div className="lg:col-span-2">
            <textarea
              type="text"
              name="contact-idea"
              id="contact-idea"
              rows={5}
              placeholder="Tell us what kind of experience you're looking for"
              className="block w-full px-4 py-3 bg-white border border-primary-square-by-2 rounded-sm shadow-sm focus:outline-none focus:border-primary-shades-by-1 focus:ring-1 focus:ring-primary"
              value={state.idea}
              onChange={onIdeaChange}
            />
            <i className="text-sm text-red-700">{state.ideaError}</i>
          </div>
          <div className="lg:col-span-2 text-center">
            <button
              className="min-w-[220px] inline-flex gap-2 items-center justify-center bg-primary hover:bg-primary-shades-by-1 focus:outline-none focus:ring focus:ring-primary-analogous-by-2 active:bg-primary-shades-by-1 disabled:bg-slate-300 disabled:text-primary-shades-by-4 disabled:cursor-not-allowed px-6 py-3 text-sm rounded-sm font-semibold text-white"
              disabled={!state.fullname || !state.email || !state.idea}
            >
              SEND <IconPaperPlane size={20} />
            </button>
          </div>
        </div>
      </form>
      {isSending ? <SpinnerModal isOpen={isSending} /> : null}
    </>
  )
}

export default ContactForm
