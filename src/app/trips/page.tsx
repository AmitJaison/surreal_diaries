// src/app/trips/page.tsx
"use client";

import Header from "../components/Header/page";
import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';

const trips = [
  {
    src: "https://images.pexels.com/photos/20035182/pexels-photo-20035182.jpeg",
    alt: "Trip 1",
    title: "Exploring the Beauty of Munroe Islands",
    description:
      "Experience tranquility and scenic backwaters in the heart of Kerala.",
  },
  {
    src: "https://images.pexels.com/photos/20035179/pexels-photo-20035179.jpeg",
    alt: "Trip 2",
    title: "4 States 4 Days",
    description: "An unforgettable journey through enchanting landscapes.",
  },
  {
    src: "https://images.pexels.com/photos/20035184/pexels-photo-20035184.jpeg",
    alt: "Trip 3",
    title: "Unveiling the Hills",
    description: "Discovering the hidden charms of Kodaikanal.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const gradientVariants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%"],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

export default function Trips() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="flex flex-col justify-center items-center text-center py-20 px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-3xl sm:text-5xl font-bold mb-4"
          variants={gradientVariants}
          animate="animate"
          style={{
            background: "linear-gradient(90deg, #ff7e5f, #feb47b, #ff7e5f)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Discover my adventures and travels
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
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
              {index === 0 ? (
                <Link href="/trips/munroe-islands" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                  Let&apos;s Travel
                </Link>
              ) : (
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                  Let&apos;s Travel
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}