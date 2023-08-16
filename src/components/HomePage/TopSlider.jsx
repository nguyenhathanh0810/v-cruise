import React from "react"

function TopSlider() {
  return (
    <section className="bg-cover bg-center bg-no-repeat bg-[url(/slideshow.jpeg)]">
      <div
        className="h-[560px] flex items-center justify-center p-8 md:p-20 lg:h-[750px]"
        style={{
          backgroundImage: "radial-gradient(rgb(0 0 0 / 65%), transparent)",
        }}
      >
        <div className="text-center text-white translate-y-[56px] md:w-[760px] lg:w-[820px] lg:translate-y-[37%]">
          <h1 className="text-[36px] font-bold leading-tight lg:text-[50px]">
            RELIABLE TRANSFER AGENCY IN VIETNAM
          </h1>
          <p className="text-lg mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            quia tempore nobis voluptas cum eius ipsum non sed rem libero
            reiciendis, in quisquam enim numquam cupiditate officiis, possimus
            pariatur soluta?
          </p>
        </div>
      </div>
    </section>
  )
}

export default TopSlider
