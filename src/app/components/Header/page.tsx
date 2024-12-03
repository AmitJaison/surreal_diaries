"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="p-3 mt-4 fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl bg-black bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-full z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Surreal Diaries</Link>
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
  );
}
