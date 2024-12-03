import Header from "../../components/Header/page";
import Image from "next/image";

const munroeIslands = [
  {
    src: "https://images.pexels.com/photos/20035182/pexels-photo-20035182.jpeg",
    alt: "Munroe Islands",
  },
  {
    src: "https://www.pexels.com/photo/houseboats-20035180/",
    alt: "Scenic View",
  },
  {
    src: "https://images.pexels.com/photos/20035184/pexels-photo-20035184.jpeg",
    alt: "Backwaters",
  },
];

export default function MunroeIslands() {
  return (
    <div className="min-h-screen bg-gray-200 text-white">
      <Header />
      <main className="relative flex flex-col items-center justify-center text-center py-20 px-4 sm:px-6 lg:px-8 h-screen">
        <div className="fixed inset-0 h-screen">
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
            Read More
          </button>
        </div>
      </main>
      <section className="relative z-30 py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Day 1: Arrival</h2>
          <Image
            src={munroeIslands[1].src}
            alt={munroeIslands[1].alt}
            width={800}
            height={500}
            className="mb-6"
          />
          <p className="text-gray-400 mb-8">
            Placeholder text for the story of the first day. Describe the journey, the arrival, and the first impressions of Munroe Islands.
          </p>
          <h2 className="text-3xl font-bold mb-6">Day 2: Exploring the Backwaters</h2>
          <Image
            src={munroeIslands[2].src}
            alt={munroeIslands[2].alt}
            width={800}
            height={500}
            className="mb-6"
          />
          <p className="text-gray-400 mb-8">
            Placeholder text for the story of the second day. Describe the activities, the scenic views, and the experiences of exploring the backwaters.
          </p>
        </div>
      </section>
    </div>
  );
}
