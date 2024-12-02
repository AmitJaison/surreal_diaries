// src/app/trips/page.tsx
import Image from "next/image";
import Link from 'next/link';

const trips = [
  { src: "/home/flower.jpg", alt: "Trip 1", title: "Exploring the Desert", description: "A soulful journey through Rajasthan's majestic landscapes." },
  { src: "/home/scene.jpg", alt: "Trip 2", title: "4 States 4 Days", description: "An unforgettable journey through enchanting landscapes." },
  { src: "/home/vala.jpg", alt: "Trip 3", title: "Unveiling the Hills", description: "Discovering the hidden charms of Kodaikanal." },
];

export default function Trips() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-3 fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl bg-black bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Surreal Diaries</div>
          <nav className="flex space-x-6">
            <Link href="/" className="hover:text-gray-400">Home</Link>
            <Link href="/trips" className="hover:text-gray-400">Trips</Link>
          </nav>
          <button className="bg-white text-black px-7 py-2 rounded-full hover:bg-gray-200">
            My Story
          </button>
        </div>
      </header>
      <main className="flex flex-col justify-center items-center text-center py-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          <span className="block bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 bg-clip-text text-transparent">
            Discover my adventures and travels
          </span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-48 mb-4">
                <Image
                  className="object-cover rounded-lg"
                  src={trip.src}
                  alt={trip.alt}
                  fill
                />
              </div>
              <h2 className="text-xl font-bold mb-2">{trip.title}</h2>
              <p className="text-gray-400 mb-4">{trip.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                Let's Travel
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}