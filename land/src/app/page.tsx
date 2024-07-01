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
    id: "1",
    name: "-41.2802, 174.775696",
    lat: -41.2802,
    lng: 174.775696,
    videoSrc: "/land/video/test.mp4",
    description: "Filmed Tuesday 2 July, 2024.",
  },
  {
    id: "2",
    name: "Location 2",
    lat: 40.7128,
    lng: -74.006,
    audioSrc: "/audio/sample2.mp3",
  },
  {
    id: "3",
    name: "-41.2829895, 174.7765351",
    lat: -41.2829895,
    lng: 174.7765351,
    imageSrc: "/images/3091.jpeg",
    imageAlt: "Birds sitting on top of office building",
  },
];

export default function Home() {
  return (
    <main className="bg-black">
      <Map locations={locations} />
    </main>
  );
}
