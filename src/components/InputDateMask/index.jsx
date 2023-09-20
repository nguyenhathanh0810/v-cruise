import React from "react"
import { InputMask } from "@react-input/mask"

function InputDateMask(props) {
  const { id, label, placeholder, value, onMask, error } = props
  return (
    <>
      <label htmlFor={id} className="inline-block mb-2">
        {label}
      </label>
      <InputMask
        mask="mm/dd/yyyy"
        replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
        name={id}
        id={id}
        placeholder={placeholder}
        className="block w-full px-4 py-3 bg-white border border-primary-square-by-2 rounded-sm shadow-sm focus:outline-none focus:border-primary-shades-by-1 focus:ring-1 focus:ring-primary"
        value={value}
        onMask={onMask}
        showMask
        separate
      />
      <i className="text-sm text-red-700">{error}</i>
    </>
  )
}

export default InputDateMask
