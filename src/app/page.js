import PanelContact from "@/components/HomePage/PanelContact";
import TopSlider from "@/components/HomePage/TopSlider";
import TravelRoutes from "@/components/HomePage/TravelRoutes";

export default function Home() {
  return (
    <main className="">
      <TopSlider />
      <TravelRoutes data={data} />
      <PanelContact />
    </main>
  );
}

const data = [
  {
    caption: "Moving trough: the everyday urban jungle of your city",
    backgroundImage: "/slideshow.jpeg",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam consectetur adipisicing elit, sed do eiusmod tempor incididu",
    journeyTime: 6.5,
    url: "#",
  },
  {
    caption: "Moving trough: the everyday urban jungle of your city",
    backgroundImage: "/slideshow.jpeg",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam consectetur adipisicing elit, sed do eiusmod tempor incididu",
    journeyTime: 6.5,
    url: "#",
  },
];
