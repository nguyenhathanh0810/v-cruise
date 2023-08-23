"user client"
import { useDocumentNoScroll } from "@/hooks/useDocumentNoScroll"
import { useEffect } from "react"
import { HashLoader } from "react-spinners"

function SpinnerModal({ isOpen }) {
  useDocumentNoScroll(isOpen)

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[99] select-none"
      style={{
        backgroundImage: "radial-gradient(rgb(0 0 0 / 65%), rgb(0 0 0 / 50%))",
      }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <HashLoader color="#F5333D" size={70} />
      </div>
    </div>
  )
}

export default SpinnerModal
