"use client";

import Header from "./components/Header/page";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";

const photos = [
  {
    src: "https://images.pexels.com/photos/20035182/pexels-photo-20035182.jpeg",
    alt: "Munroe Islands by Amit Jaison from Pexels",
    title: "Munroe Islands",
    description: "A beautiful view of Munroe Islands.",
  },
  // {
  //   src: "https://images.pexels.com/photos/20035179/pexels-photo-20035179.jpeg",
  //   alt: "Photo by Amit Jaison from Pexels",
  //   title: "4 States 4 Days",
  //   description: "An unforgettable journey through enchanting landscapes.",
  // },
  // {
  //   src: "https://images.pexels.com/photos/20035184/pexels-photo-20035184.jpeg",
  //   alt: "The Raviz Hotel in Kerala in India by Amit Jaison from Pexels",
  //   title: "Unveiling the Hills",
  //   description: "Discovering the hidden charms of Kodaikanal.",
  // },
];

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleExploreClick = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="flex flex-col justify-center items-center text-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="mb-7 mt-12 pt-12">
          <span className="bg-black-100 px-3 py-1 border border-gray-700 rounded-full z-50">Welcome to my visual diary.</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
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
        <div className="flex space-x-4">
          <button
            className="bg-transparent border border-white px-6 py-3 rounded-full hover:bg-gray-800"
            onClick={handleExploreClick}
          >
            Explore
          </button>
        </div>
      </main>
      <section ref={sectionRef} className="flex flex-col items-center space-y-8 p-8">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="relative w-full max-w-7xl"
            style={{ height: "auto" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.5 }}
          >
            <div className="relative group">
              <Image
                className="object-cover rounded-lg"
                src={photo.src}
                alt={photo.alt}
                layout="responsive"
                width={700}
                height={475}
                style={{ borderRadius: "25px" }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h2 className="text-xl font-bold mb-2">{photo.title}</h2>
                <p className="mb-4">{photo.description}</p>
                {index === 0 ? (
                  <Link href="/trips/munroe-islands">
                    <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200">
                      Learn More
                    </button>
                  </Link>
                ) : (
                  <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200">
                    Learn More
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
