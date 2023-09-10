import InputInteger from "@/components/InputInteger"
import InputText from "@/components/InputText"
import SpinnerModal from "@/components/portals/SpinnerModal"
import Link from "next/link"
import React, { useEffect, useMemo, useState } from "react"
import toast from "react-simple-toasts"
import "react-simple-toasts/dist/theme/failure.css"
import "react-simple-toasts/dist/theme/ocean-wave.css"

const formReset = {
  fullname: "",
  email: "",
  phone: "",
  pickupAddress: "",
  adult: 1,
  children: 0,
  infant: 0,
}

function RouteForm({ route, willSubmit, submitCallback, triggerClose }) {
  const [form, setForm] = useState({ ...formReset })
  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    adult: "",
    children: "",
    infant: "",
  })
  const [isSending, setIsSending] = useState(false)
  const isFormValid = useMemo(() => {
    const hasError = Object.values(errors).some((err) => err && err.length > 0)
    if (hasError) {
      return false
    }
    // when user has not type anything
    return form.fullname && form.email && form.adult > 0
  }, [errors, form])

  useEffect(() => {
    if (willSubmit && isFormValid) {
      function submit() {
        setIsSending(true)
        fetch(`/api/transfer/${route}/reserve`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname: form.fullname,
            email: form.email,
            phone: form.phone,
            pickup: form.pickupAddress,
            passengers: {
              adult: form.adult,
              children: form.children,
              infant: form.infant,
            },
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.error) {
              setErrors((prev) => ({
                ...prev,
                [data.error.field]: data.error.message,
              }))
              triggerClose?.()
              toast(<>Failure on sending your request.</>, {
                theme: "failure",
                duration: 5000,
              })
              return
            }
            setForm({ ...formReset })
            triggerClose?.()
            toast(
              <>
                Thanks for your request.
                <br />
                Our consultant will reach out soon.
                <br />
                {data.mailInfo.preview ? (
                  <Link
                    href={`${data.mailInfo.preview || "#"}`}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Preview your email here
                  </Link>
                ) : null}
              </>,
              {
                theme: "ocean-wave",
                duration: 10000,
              }
            )
          })
          .finally(() => {
            setIsSending(false)
          })
      }
      submit()
    }

    return () => submitCallback?.()
  }, [willSubmit, isFormValid, submitCallback, route, form, triggerClose])

  function handleTextChange(e, postValidator) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    postValidator?.(e)
  }

  function handleNumberChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    validateNumberInput(e)
  }

  function validateFullname(e) {
    let warning = ""
    if (!`${e.target.value}`.trim()) {
      warning = "Fullname cannot be blank"
    }
    setErrors((prev) => ({
      ...prev,
      fullname: warning,
    }))
  }

  function validateEmail(e) {
    let warning = ""
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i.test(e.target.value)) {
      warning = "Email format is incorrect"
    }
    setErrors((prev) => ({
      ...prev,
      email: warning,
    }))
  }

  function validateNumberInput(e) {
    const min = parseInt(e.target.min || 0)
    const max = parseInt(e.target.max || Number.MAX_SAFE_INTEGER)
    const intValue = parseInt(e.target.value || 0)
    let warning = ""
    if (min > intValue || max < intValue) {
      warning = e.target.dataset.rangeMessage || "Number out of bounds"
    }
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: warning,
    }))
  }

  return (
    <section>
      <h4 className="text-2xl text-center font-bold mb-4">
        Customer Information
      </h4>
      <form>
        <div className="grid lg:grid-cols-6 gap-4">
          <div className="lg:col-span-3">
            <InputText
              label="Fullname (*)"
              id="fullname"
              placeholder="What's your fullname?"
              value={form.fullname}
              error={errors.fullname}
              onChange={(e) => handleTextChange(e, validateFullname)}
            />
          </div>
          <div className="lg:col-span-3">
            <InputText
              label="Email (*)"
              id="email"
              placeholder="Email address to receive ticket"
              value={form.email}
              error={errors.email}
              onChange={(e) => handleTextChange(e, validateEmail)}
            />
          </div>
          <div className="lg:col-span-3">
            <InputText
              label="Phone"
              id="phone"
              placeholder="Local phone number (optional)"
              value={form.phone}
              error={errors.phone}
              onChange={handleTextChange}
            />
          </div>
          <div className="lg:col-span-3">
            <InputText
              label="Pickup address"
              id="pickupAddress"
              placeholder="Where could we pick you up? (optional)"
              value={form.pickupAddress}
              onChange={handleTextChange}
            />
          </div>
          <div className="lg:col-span-2">
            <InputInteger
              label="Adult (*, minimum at 1)"
              id="adult"
              placeholder="Number of adults"
              value={form.adult}
              min={1}
              error={errors.adult}
              onChange={handleNumberChange}
            />
          </div>
          <div className="lg:col-span-2">
            <InputInteger
              label="Children"
              id="children"
              placeholder="Number of children"
              value={form.children}
              min={0}
              error={errors.children}
              onChange={handleNumberChange}
            />
          </div>
          <div className="lg:col-span-2">
            <InputInteger
              label="Infant"
              id="infant"
              placeholder="Number of infants"
              value={form.infant}
              min={0}
              error={errors.infant}
              onChange={handleNumberChange}
            />
          </div>
        </div>
      </form>
      {isSending ? <SpinnerModal isOpen={isSending} /> : null}
    </section>
  )
}

export default RouteForm
