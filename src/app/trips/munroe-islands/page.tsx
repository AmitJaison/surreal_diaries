import Header from "../../components/Header/page";
import Image from "next/image";

const munroeIslands = [
  {
    src: "https://images.pexels.com/photos/20035182/pexels-photo-20035182.jpeg",
    alt: "Munroe Islands",
  },
  {
    src: "https://images.pexels.com/photos/20035180/pexels-photo-20035180.jpeg",
    alt: "Scenic View",
  },
  {
    src: "https://images.pexels.com/photos/20035184/pexels-photo-20035184.jpeg",
    alt: "The Leela Raviz Ashtamudi hotel",
  },
  {
    src: "https://images.pexels.com/photos/29717065/pexels-photo-29717065.jpeg",
    alt: "Amaze & Venue",
  },
  {
    src: "https://images.pexels.com/photos/20035180/pexels-photo-20035180.jpeg",
    alt: "Backwaters of Munroe Islands",
  },
  {
    src: "https://images.pexels.com/photos/29717076/pexels-photo-29717076.jpeg",
    alt: "Delicious food",
  },
  {
    src: "https://images.pexels.com/photos/29717075/pexels-photo-29717075.jpeg",
    alt: "Small boat used for mangrove exploration",
  },
  {
    src: "https://images.pexels.com/photos/29717070/pexels-photo-29717070.jpeg",
    alt: "Island resort",
  },
  {
    src: "https://images.pexels.com/photos/20035179/pexels-photo-20035179.jpeg",
    alt: "Karimeen",
  },
  {
    src: "https://images.pexels.com/photos/20035181/pexels-photo-20035181.jpeg",
    alt: "JCB under construction",
  },
  {
    src: "https://images.pexels.com/photos/29717066/pexels-photo-29717066.jpeg",
    alt: "Cheenavala",
  },
  {
    src: "https://images.pexels.com/photos/29717067/pexels-photo-29717067.jpeg",
    alt: "Unfinished bridge in the middle of the lake",
  },
  {
    src: "https://images.pexels.com/photos/29717068/pexels-photo-29717068.jpeg",
    alt: "Bushes",
  },
  {
    src: "https://images.pexels.com/photos/29717069/pexels-photo-29717069.jpeg",
    alt: "Small boat used for mangrove exploration",
  },
  {
    src: "https://images.pexels.com/photos/29717071/pexels-photo-29717071.jpeg",
    alt: "Inside the houseboat",
  },
  {
    src: "https://images.pexels.com/photos/29717074/pexels-photo-29717074.jpeg",
    alt: "On the tree",
  },
];

export default function MunroeIslands() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src={munroeIslands[0].src}
          alt={munroeIslands[0].alt}
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 font-serif">
              Exploring the Beauty of Munroe Islands
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience tranquility and scenic backwaters in the heart of Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-300 leading-relaxed font-serif">
            On <strong>26th January 2024</strong>, we embarked on a memorable
            one-day trip from Trivandrum to the breathtaking backwaters of{" "}
            <strong>Ashtamudi Lake</strong> and <strong>Munroe Islands</strong>.
            It was a group of nine of us, full of excitement and anticipation.
          </p>
        </div>
      </section>

      {/* Journey Start - Full Width Image */}
      <section className="relative w-full">
        <div className="aspect-[2520/1417] relative">
          <Image
            src={munroeIslands[12].src}
            alt={munroeIslands[1].alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end">
          <p className="text-white p-8 text-lg font-light max-w-3xl mx-auto">
            The serene backwaters welcomed us as we began our journey
          </p>
        </div>
      </section>

      {/* Content Sections with Alternating Layout */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Stories of Ashtamudi */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-serif text-white mb-6">Stories of Ashtamudi</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  While cruising, the crew shared fascinating tales about the region.
                  We passed by several landmarks including the magnificent{" "}
                  <strong>Leela Raviz Ashtamudi</strong>, a luxury hotel standing tall
                  by the serene waters.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                  <Image
                    src={munroeIslands[2].src}
                    alt={munroeIslands[2].alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Local Delicacies */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4">
              <div>
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                  <Image
                    src={munroeIslands[8].src}
                    alt={munroeIslands[8].alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-serif text-white mb-6">Local Delicacies</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  The highlight of our journey was the authentic Kerala cuisine.
                  We were served the famous <strong>Karimeen (Pearl Spot)</strong> and
                  traditional <strong>kappa (tapioca)</strong> with fish curry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Break */}
      <section className="relative w-full">
        <div className="aspect-[21/9] relative">
          <Image
            src={munroeIslands[4].src}
            alt={munroeIslands[4].alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      {/* More Content Sections */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Mangrove Exploration */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-serif text-white mb-6">Exploring the Mangroves</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  One of the most exciting parts was exploring the dense mangrove forests.
                  We took a smaller boat that brought us closer to nature, allowing us
                  to appreciate the intricate ecosystem of the backwaters.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                  <Image
                    src={munroeIslands[13].src}
                    alt={munroeIslands[13].alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Traditional Fishing */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4">
              <div>
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                  <Image
                    src={munroeIslands[10].src}
                    alt={munroeIslands[10].alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-serif text-white mb-6">Traditional Fishing</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We witnessed the traditional Chinese fishing nets (Cheenavala) in action,
                  a testament to the area's rich fishing heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery - Masonry Layout */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-[2000px] mx-auto px-4">
          <h2 className="text-4xl font-serif text-white mb-16 text-center">Captured Moments</h2>
          
          {/* First Row - Large Feature Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={munroeIslands[5].src}
                alt={munroeIslands[5].alt}
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg">{munroeIslands[5].alt}</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={munroeIslands[6].src}
                alt={munroeIslands[6].alt}
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg">{munroeIslands[6].alt}</p>
              </div>
            </div>
          </div>

          {/* Second Row - Mixed Heights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src={munroeIslands[7].src}
                alt={munroeIslands[7].alt}
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg">{munroeIslands[7].alt}</p>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src={munroeIslands[11].src}
                alt={munroeIslands[11].alt}
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg">{munroeIslands[11].alt}</p>
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src={munroeIslands[14].src}
                alt={munroeIslands[14].alt}
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg">{munroeIslands[14].alt}</p>
              </div>
            </div>
          </div>

          {/* Third Row - Wide Panorama */}
          <div className="relative aspect-[21/9] rounded-lg overflow-hidden">
            <Image
              src={munroeIslands[15].src}
              alt={munroeIslands[15].alt}
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white text-lg">{munroeIslands[15].alt}</p>
            </div>
          </div>

          {/* Fourth Row - Three Equal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={munroeIslands[9].src}
                alt={munroeIslands[9].alt}
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg">{munroeIslands[9].alt}</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={munroeIslands[12].src}
                alt={munroeIslands[12].alt}
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg">{munroeIslands[12].alt}</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={munroeIslands[13].src}
                alt={munroeIslands[13].alt}
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg">{munroeIslands[13].alt}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farewell Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif text-white mb-8">Farewell to the Backwaters</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            After a delicious lunch on the boat, we started our journey back,
            soaking in the beauty of the landscapes one last time. As the boat
            docked back at the jetty, we carried home not just memories but a
            profound sense of tranquility from the serene backwaters of
            Ashtamudi.
          </p>
        </div>
      </section>
    </div>
  );
}
