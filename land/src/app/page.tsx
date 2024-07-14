import dynamic from "next/dynamic";
import { ClipLoader } from "react-spinners";

const Map = dynamic(() => import("./components/Map"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#4A90E2" size={50} />
    </div>
  ),
});

const locations = [  
  {
    id: 1,
    lat: -41.2829895,
    lng: 174.7765351,
    imageSrc: "/land/images/3091.jpeg",
    imageAlt: "Birds sitting on top of office building",
  },
  {
    id: 2,
    lat: -36.8660046,
    lng: 174.7422192,
    imageSrc: "/land/images/3231.jpeg",
    imageAlt: "A handsome, young, successful man points at a computer screen with the Discord app open.",
  },
  {
    id: 3,
    lat: -36.625204, 
    lng: 174.740450,
    imageSrc: "/land/images/IMG_0288.jpeg",
    imageAlt: "A blurry image of a young man laughing in motion.",
  },
  {
    id: 4,
    lat: -36.754524, 
    lng: 174.698166,
    imageSrc: "/land/images/IMG_2275.jpeg",
    imageAlt: "A shadow cast by a couple looking at the camera",
  },
];

export default function Home() {
  return (
    <main className="bg-black">
      <Map locations={locations} />
    </main>
  );
}
