"use client"
import React, { useEffect, useRef, useState } from "react"
import RouteInformation from "./RouteInformation"
import RouteForm from "./RouteForm"
import { useDocumentNoScroll } from "@/hooks/useDocumentNoScroll"
import "./styles/modal.css"

function ModalRequestRoute({ isOpen, onClose, routeData }) {
  const dialogRef = useRef(null)
  const [willSubmit, setWillSubmit] = useState(false)

  useDocumentNoScroll(isOpen)
  useEffect(() => {
    if (!isOpen) return
    const element = dialogRef.current
    element.showModal()
    element.classList.remove("-translate-y-5")

    return () => {
      element.classList.add("-translate-y-5")
      element.close()
    }
  }, [isOpen])

  return (
    <dialog ref={dialogRef} className="transition-transform duration-200">
      <section className="lg:p-6">
        <div className="mb-12">
          <RouteForm
            route={routeData.id}
            willSubmit={willSubmit}
            submitCallback={() => setWillSubmit(false)}
            triggerClose={onClose}
          />
        </div>
        <div className="mb-12">
          <RouteInformation routeData={routeData} />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button
            className="min-w-[110px] inline-flex gap-2 items-center justify-center bg-slate-400 hover:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-400 active:bg-slate-500 px-6 py-3 text-sm rounded-sm font-semibold text-white"
            type="button"
            disabled={false}
            onClick={onClose}
          >
            CANCEL
          </button>
          <button
            className="min-w-[150px] inline-flex gap-2 items-center justify-center bg-primary hover:bg-primary-shades-by-1 focus:outline-none focus:ring focus:ring-primary-analogous-by-2 active:bg-primary-shades-by-1 disabled:bg-slate-300 disabled:text-primary-shades-by-4 disabled:cursor-not-allowed px-6 py-3 text-sm rounded-sm font-semibold text-white"
            disabled={false}
            type="button"
            onClick={() => setWillSubmit(true)}
          >
            RESERVE NOW
          </button>
        </div>
      </section>
    </dialog>
  )
}

export default ModalRequestRoute
