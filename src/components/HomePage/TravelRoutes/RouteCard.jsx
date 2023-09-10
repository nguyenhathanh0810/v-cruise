"use client"
import { useState } from "react"
import ModalRequestRoute from "./ModalRequestRoute"

export function RouteCard({ route, reversed }) {
  return (
    <div className="grid lg:grid-cols-2">
      <div className={"max-[1023px]:order-1" + (!reversed ? "" : " order-3")}>
        <Poster posterImage={route.backgroundImage} />
      </div>
      <div className="order-2">
        <Details route={route} />
      </div>
    </div>
  )
}

const Poster = ({ posterImage }) => (
  <div className="p-4">
    <div
      className="min-h-[360px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${posterImage})` }}
    >
      {" "}
    </div>
  </div>
)

const Details = ({ route }) => {
  const [showModal, setShowModal] = useState(false)

  function openModal() {
    setShowModal(true)
  }

  function closeModal() {
    setShowModal(false)
  }

  return (
    <div className="flex items-center p-4 -mt-4 lg:p-12">
      <div className="w-full">
        <div className="text-lg text-primary-triadic-by-4">
          Journey takes: {route.journeyTime} hours
        </div>
        <div className="text-[29px] uppercase font-bold leading-tight">
          {route.name}
        </div>
        <p className="text-sm text-primary-triadic-by-4 ellipsis line-clamp-6 mt-2">
          {route.summary}
        </p>
        <div className="mt-8">
          <button
            type="button"
            className="inline-flex gap-2 items-center justify-center bg-primary hover:bg-primary-shades-by-1 focus:outline-none focus:ring focus:ring-primary-analogous-by-2 active:bg-primary-shades-by-1 disabled:bg-slate-300 disabled:text-primary-shades-by-4 disabled:cursor-not-allowed px-6 py-3 text-sm rounded-sm font-semibold text-white"
            onClick={openModal}
          >
            Request this Journey
          </button>
          <ModalRequestRoute
            isOpen={showModal}
            onClose={closeModal}
            routeData={route}
          />
        </div>
      </div>
    </div>
  )
}
