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
    <div className="min-h-screen bg-gray-200 text-white">
      <Header />
      <main className="relative flex flex-col items-center justify-center text-center py-20 px-4 sm:px-6 lg:px-8 h-screen">
        <div className="absolute inset-0 h-screen">
          <Image
            src={munroeIslands[0].src}
            alt={munroeIslands[0].alt}
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold mb-6">
            Exploring the Beauty of Munroe Islands
          </h1>
          <p className="text-gray-400 max-w-2xl mb-8">
            Experience tranquility and scenic backwaters in the heart of Kerala.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">
            Plan Your Visit
          </button>
        </div>
      </main>
    </div>
  );
}
