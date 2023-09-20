import React from "react"

function TopSlider() {
  return (
    <section className="bg-cover bg-center bg-no-repeat bg-[url(/banner.jpg)]">
      <div
        className="h-[560px] flex items-center justify-center p-8 md:p-20 lg:h-[750px]"
        style={{
          backgroundColor: "rgb(0 0 0 / 25%)",
        }}
      >
        <div className="text-center text-white translate-y-[56px] md:w-[760px] lg:w-[820px] lg:translate-y-[37%]">
          <h1 className="text-[36px] font-bold leading-tight lg:text-[50px]">
            Most favorite experience cruising Mekong
          </h1>
          <p className="text-lg mt-6">
            Consider as one of the best activities you must try once in life, we
            provide the service that help you insprired by cruising through
            borders between Vietnam and Cambodia on the Mekong.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TopSlider
