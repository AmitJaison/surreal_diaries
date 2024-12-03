import Header from "../../components/Header/page";
import Image from "next/image";

const munroeIslands = [
  {
    src: "https://images.pexels.com/photos/20035182/pexels-photo-20035182.jpeg", // Replace with the actual path
    alt: "Munroe Islands",
  },
];

export default function MunroeIslands() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="flex flex-col items-center text-center py-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6">
          Exploring the Beauty of Munroe Islands
        </h1>
        <p className="text-gray-400 max-w-2xl mb-8">
          Experience tranquility and scenic backwaters in the heart of Kerala.
        </p>
        <Image
          src={munroeIslands[0].src}
          alt={munroeIslands[0].alt}
          width={800} // Adjust the width as needed
          height={600} // Adjust the height as needed
          className="object-cover rounded-lg mb-8"
        />
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">
          Plan Your Visit
        </button>
      </main>
    </div>
  );
}
