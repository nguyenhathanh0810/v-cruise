import { RouteCard } from "./RouteCard"

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
          <div className="grid grid-cols-1 gap-12 lg:gap-4">
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

export default TravelRoutes
