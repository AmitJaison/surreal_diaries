"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const photos = [
  {
    src: "https://images.pexels.com/photos/20035182/pexels-photo-20035182.jpeg",
    alt: "Munroe Islands by Amit Jaison from Pexels",
  },
  {
    src: "https://images.pexels.com/photos/20035179/pexels-photo-20035179.jpeg",
    alt: "Photo by Amit Jaison from Pexels",
  },
  {
    src: "https://images.pexels.com/photos/20035184/pexels-photo-20035184.jpeg",
    alt: "The Raviz Hotel in Kerala in India by Amit Jaison from Pexels",
  },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleExploreClick = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-3 mt-4 fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl bg-black bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-full z-50">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="text-2xl font-bold">Surreal Diaries</div>
          <nav className={`flex space-x-6 ${isOpen ? 'block' : 'hidden'} sm:flex`}>
            <a href="#" className="hover:text-gray-400">Stories</a>
            <a href="#" className="hover:text-gray-400">Collections</a>
            <Link href="/trips" className="hover:text-gray-400">Trips</Link>
          </nav>
          <button className="bg-white text-black px-7 py-2 rounded-full hover:bg-gray-200 mt-2 sm:mt-0">
            My Story
          </button>
          <button className="sm:hidden text-white" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </header>
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
            
            <Image
              className="object-cover rounded-lg"
              src={photo.src}
              alt={photo.alt}
              layout="responsive"
              width={700} // You can adjust the width and height based on your image dimensions
              height={475}
              style={{ borderRadius: "25px" }} // Adjust the border radius here
            />
          </motion.div>
        ))}
      </section>
    </div>
  );
}
