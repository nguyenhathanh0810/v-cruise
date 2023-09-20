import React from "react"

function RouteInformation({ routeData }) {
  return (
    <section>
      <h4 className="text-2xl font-bold text-center">{routeData.name}</h4>
      <div className="my-4">
        <b>Price: ${routeData.price}</b> (Adult)
        <ul>
          <li>Children (5-11, 50% ticket rate, owned seat)</li>
          <li>Infant ( below 5, shared seat with parents, free of charged)</li>
        </ul>
      </div>
      <div className="grid lg:grid-cols-6 gap-4 my-4">
        <p className="md:col-span-2">
          <b>Departure:</b> {routeData.departure}
        </p>
        <p className="md:col-span-2">
          <b>Arrival:</b> {routeData.arrival}
        </p>
        <p className="md:col-span-2">
          <b>Duration:</b> {routeData.journeyTime} hours
        </p>
        <p className="md:col-span-6">{routeData.summary}</p>
        <div className="md:col-span-3">
          <p className="font-bold">Inclusions</p>
          <div dangerouslySetInnerHTML={{ __html: routeData.inclusions }} />
        </div>
        <div className="md:col-span-3">
          <p className="font-bold">Exclusions</p>
          <div dangerouslySetInnerHTML={{ __html: routeData.exclusions }} />
        </div>
      </div>
    </section>
  )
}

export default RouteInformation
