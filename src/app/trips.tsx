// pages/trips.tsx
import Image from "next/image";

const trips = [
  { src: "/home/trip1.jpg", alt: "Trip 1" },
  { src: "/home/trip2.jpg", alt: "Trip 2" },
  { src: "/home/trip3.jpg", alt: "Trip 3" },
];

export default function Trips() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-3 mt-4 fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl bg-black bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-full z-50" style={{ borderRadius: '25px' }}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Surreal Diaries</div>
          <nav className="flex space-x-6">
            <a href="/" className="hover:text-gray-400">Home</a>
            <a href="/trips" className="hover:text-gray-400">Trips</a>
          </nav>
          <button className="bg-white text-black px-7 py-2 rounded-full hover:bg-gray-200">
            My Story
          </button>
        </div>
      </header>
      <main className="flex flex-col justify-center items-center text-center py-20">
        <div className="mb-7 mt-12 pt-12">
          <span className="bg-black-100 px-3 py-1 border border-gray-700 rounded-full z-50">Welcome to my trips.</span>
        </div>
        <h1 className="text-5xl font-bold mb-4">
          <span className="block bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 bg-clip-text text-transparent">
            Discover my adventures and travels
          </span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip, index) => (
            <div key={index} className="relative w-full h-64">
              <Image
                className="object-cover rounded-lg"
                src={trip.src}
                alt={trip.alt}
                layout="fill"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}