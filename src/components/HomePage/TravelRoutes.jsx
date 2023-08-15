import Link from "next/link";
import React from "react";

function TravelRoutes(props) {
  const { data } = props;

  return (
    <section className="py-12 xl:px-[60px]">
      <div className="text-center mb-12">
        <p className="text-lg text-slate-600">Lorem ipsum dolor</p>
        <h1 className="text-[50px] font-bold">ULTIMATE TRAVEL EXPERIENCE</h1>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-4 px-6">
          {data?.length > 0 &&
            data.map((r, idx) => (
              <RouteCard key={idx} route={r} reversed={idx % 2 > 0} />
            ))}
        </div>
      </div>
    </section>
  );
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
  );
  const Details = () => (
    <div className="flex items-center p-12">
      <div className="w-full">
        <div className="text-lg text-slate-600">Journey takes: {route.journeyTime} hours</div>
        <div className="text-[29px] uppercase font-bold leading-tight">{route.caption}</div>
        <p className="text-sm text-slate-600 ellipsis line-clamp-4 mt-2">
          {route.summary}
        </p>
        <div className="mt-6">
          <Link className="text-lg font-bold" href={route.url}>READ MORE</Link>
        </div>
      </div>
    </div>
  );

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
  );
}

export default TravelRoutes;
