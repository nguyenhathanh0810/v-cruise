import React from "react"

function TopSlider() {
  return (
    <section className="bg-cover bg-center bg-no-repeat bg-[url(/slideshow.jpeg)]">
      <div
        className="h-[750px] flex items-center justify-center p-20"
        style={{
          backgroundImage: "radial-gradient(rgb(0 0 0 / 65%), transparent)",
        }}
      >
        <div className="md:w-[760px] text-center text-white">
          <h1 className="text-[55px] font-bold leading-tight">
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
