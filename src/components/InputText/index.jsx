import React from "react"

function InputText({ label, id, placeholder, value, onChange, error }) {
  return (
    <>
      <label htmlFor={id} className="inline-block mb-2">
        {label}
      </label>
      <input
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        className="block w-full px-4 py-3 bg-white border border-primary-square-by-2 rounded-sm shadow-sm focus:outline-none focus:border-primary-shades-by-1 focus:ring-1 focus:ring-primary"
        value={value}
        onChange={onChange}
      />
      <i className="text-sm text-red-700">{error}</i>
    </>
  )
}

export default InputText
