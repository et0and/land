import dynamic from 'next/dynamic';
import { ClipLoader } from 'react-spinners';

const Map = dynamic(() => import('./components/Map'), {
  ssr: false,
  loading: () => <div className="flex justify-center items-center h-screen">
  <ClipLoader color="#4A90E2" size={50} />
</div>
});

const locations = [
  {
    id: '1',
    name: 'Location 1',
    lat: 51.505,
    lng: -0.09,
    audioSrc: '/audio/sample1.mp3',
    imageSrc: '/images/location1.jpg',
    imageAlt: 'Image of Location 1',
    description: 'This is a description.'
  },
  {
    id: '2',
    name: 'Location 2',
    lat: 40.7128,
    lng: -74.0060,
    audioSrc: '/audio/sample2.mp3',
  },
];

export default function Home() {
  return (
    <main>
      <Map locations={locations} />
    </main>
  );
}