import PanelContact from "@/components/HomePage/PanelContact"
import TopSlider from "@/components/HomePage/TopSlider"
import TravelRoutes from "@/components/HomePage/TravelRoutes"
import data from "@/app/api/transfer/[route]/routes.json"

export default function Home() {
  return (
    <main className="">
      <TopSlider />
      <div className="bg-topography">
        <TravelRoutes data={data} />
        <PanelContact />
      </div>
    </main>
  )
}
