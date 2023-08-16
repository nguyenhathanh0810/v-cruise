import Link from "next/link"
import React from "react"

function TravelRoutes(props) {
  const { data } = props

  return (
    <section className="py-12 pt-[105px]">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-lg text-primary-triadic-by-4">Lorem ipsum dolor</p>
          <h1 className="text-[36px] font-bold leading-tight text-primary lg:text-[50px]">
            ULTIMATE <br className="xl:hidden" />
            TRAVEL EXPERIENCE
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-4 px-6">
            {data?.length > 0 &&
              data.map((r, idx) => (
                <RouteCard key={idx} route={r} reversed={idx % 2 > 0} />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function RouteCard({ route, reversed }) {
  const Poster = () => (
    <div className="p-4">
      <div
        className="min-h-[360px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${route.backgroundImage})` }}
      >
        {" "}
      </div>
    </div>
  )
  const Details = () => (
    <div className="flex items-center p-12">
      <div className="w-full">
        <div className="text-lg text-primary-triadic-by-4">
          Journey takes: {route.journeyTime} hours
        </div>
        <div className="text-[29px] uppercase font-bold leading-tight">
          {route.caption}
        </div>
        <p className="text-sm ellipsis line-clamp-4 mt-2">{route.summary}</p>
        <div className="mt-6">
          <Link
            className="text-lg font-bold text-primary-triadic-by-4"
            href={route.url}
          >
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <div className="grid grid-cols-2">
      {!reversed ? (
        <>
          <Poster />
          <Details />
        </>
      ) : (
        <>
          <Details />
          <Poster />
        </>
      )}
    </div>
  )
}

export default TravelRoutes
