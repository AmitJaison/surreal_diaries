import Image from "next/image";
import Link from 'next/link';
// import { SpeedInsights } from "@vercel/speed-insights/next"

const photos = [
  { src: "/home/flower.jpg", alt: "Photo 1" },
  { src: "/home/scene.jpg", alt: "Photo 2" },
  { src: "/home/vala.jpg", alt: "Photo 3" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-3 mt-4 fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl bg-black bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-full z-50" style={{ borderRadius: '25px' }}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Surreal Diaries</div>
          <nav className="flex space-x-6">
            <a href="#" className="hover:text-gray-400">Stories</a>
            <a href="#" className="hover:text-gray-400">Collections</a>
            <Link href="/trips" className="hover:text-gray-400">Trips</Link>
          </nav>
          <button className="bg-white text-black px-7 py-2 rounded-full hover:bg-gray-200">
            My Story
          </button>
        </div>
      </header>
      <main className="flex flex-col justify-center items-center text-center py-20">
        <div className="mb-7 mt-12 pt-12">
          <span className="bg-black-100 px-3 py-1 border border-gray-700 rounded-full z-50">Welcome to my visual diary.</span>
        </div>
        <h1 className="text-5xl font-bold mb-4">
          <span className="block bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 bg-clip-text text-transparent">
            Unveiling life&apos;s beauty through my personal
          </span>
          <span className="block bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300 bg-clip-text text-transparent">
            collection of stories and frames.
          </span>
        </h1>
        <p className="text-lg mb-8">
          Feel the stories that each photograph brings to life.
        </p>
      </main>
      <section className="flex flex-col items-center space-y-8 p-8">
        {photos.map((photo, index) => (
            <div key={index} className="relative w-full max-w-7xl" style={{ height: 'auto' }}>
            <Image
              className="object-cover rounded-lg"
              src={photo.src}
              alt={photo.alt}
              layout="responsive"
              width={700} // You can adjust the width and height based on your image dimensions
              height={475}
              style={{ borderRadius: '25px' }} // Adjust the border radius here
            />
            </div>
        ))}
      </section>
    </div>
  );
}