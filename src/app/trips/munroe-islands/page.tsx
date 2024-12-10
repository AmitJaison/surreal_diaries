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
    alt: "Backwaters",
  },
  {
    src: "https://images.pexels.com/photos/29717065/pexels-photo-29717065.jpeg",
    alt: "Amaze & Venue",
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
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            A Day Amidst the Serenity of Ashtamudi Lake
          </h2>

          <p className="text-1g-gray-400 mb-8">
            On <strong>26th January 2024</strong>, we embarked on a memorable
            one-day trip from Trivandrum to the breathtaking backwaters of{" "}
            <strong>Ashtamudi Lake</strong> and <strong>Munroe Islands</strong>.
            It was a group of nine of us, full of excitement and anticipation.
            We set off around <strong>9:30 AM</strong> in{" "}
            <strong>two vehicles</strong>, ready for the journey ahead.
          </p>
          <Image
            src={munroeIslands[3].src}
            alt="Two vehicles used for the trip"
            width={1280}
            height={720}
            className="mb-6 rounded-[25px]"
          />

          <p className="text-gray-400 mb-8">
            By <strong>11:30 AM</strong>, we arrived at the{" "}
            <strong>Kollam bus stand</strong>, opposite which lay the{" "}
            <strong>Kollam boat jetty</strong>. Although we were running late,
            the boat awaited us at the harbor, ready for our adventure.
          </p>

          <h3 className="text-2xl font-bold mb-4">The Welcome Aboard</h3>
          <p className="text-gray-400 mb-8">
            As soon as we settled into the boat, we couldn&apos;t resist snapping
            pictures.
          </p>
          <Image
            src={munroeIslands[2].src}
            alt="Group pictures on the boat"
            width={800}
            height={500}
            className="mb-6"
          />

          <p className="text-gray-400 mb-8">
            We were greeted with a refreshing <strong>welcome drink</strong>,
            which we carried to the upper deck to enjoy the panoramic views of
            the backwaters.
          </p>
          <Image
            src={munroeIslands[2].src}
            alt="On the upper deck enjoying the welcome drink"
            width={800}
            height={500}
            className="mb-6"
          />

          <h3 className="text-2xl font-bold mb-4">Stories of Ashtamudi</h3>
          <p className="text-gray-400 mb-8">
            While cruising, the crew shared fascinating tales about the region,
            its traditions, and the lives of people dependent on the lake. A
            sight that caught our attention was a{" "}
            <strong>bridge abruptly ending in the middle of the lake</strong>, a
            project interrupted midway.
          </p>
          <Image
            src={munroeIslands[2].src}
            alt="Unfinished bridge in the middle of the lake"
            width={800}
            height={500}
            className="mb-6"
          />

          <p className="text-gray-400 mb-8">
            We also passed an <strong>island hosting a vibrant party</strong>,
            adorned with decorations.
          </p>
          <Image
            src={munroeIslands[2].src}
            alt="Decorated island hosting a party"
            width={800}
            height={500}
            className="mb-6"
          />

          <p className="text-gray-400 mb-8">
            Another notable landmark was the magnificent{" "}
            <strong>Leela Raviz Ashtamudi</strong>, a luxury hotel standing tall
            by the serene waters.
          </p>
          <Image
            src={munroeIslands[2].src}
            alt="The Leela Raviz Ashtamudi hotel"
            width={800}
            height={500}
            className="mb-6"
          />

          <h3 className="text-2xl font-bold mb-4">
            Culinary Delights and Unique Experiences
          </h3>
          <p className="text-gray-400 mb-8">
            The crew served us a local delicacy of{" "}
            <strong>
              kappa (tapioca) and puzhameen curry (lake fish curry)
            </strong>
            , which was both flavorful and authentic.
          </p>
          <Image
            src={munroeIslands[2].src}
            alt="Kappa and puzhameen curry"
            width={800}
            height={500}
            className="mb-6"
          />

          <p className="text-gray-400 mb-8">
            While dining, we noticed people standing in shallow waters in the
            middle of the lake, and soon, we had the chance to do the same.
          </p>
          <Image
            src={munroeIslands[2].src}
            alt="Standing in the shallow waters between islands"
            width={800}
            height={500}
            className="mb-6"
          />

          <h3 className="text-2xl font-bold mb-4">Exploring the Mangroves</h3>
          <p className="text-gray-400 mb-8">
            We stopped at a <strong>kadavu (dock)</strong> to grab snacks and
            caps for the next adventure—a small boat ride into the{" "}
            <strong>mangrove forests</strong>. This boat was so close to the
            water that we could dip our hands in it.
          </p>
          <Image
            src={munroeIslands[2].src}
            alt="Small boat used for mangrove exploration"
            width={800}
            height={500}
            className="mb-6"
          />

          <p className="text-gray-400 mb-8">
            The crew anchored amidst the mangroves, allowing us to climb to a
            higher vantage point and take in the view.
          </p>
          <Image
            src={munroeIslands[2].src}
            alt="Climbing amidst the mangroves for a better view"
            width={800}
            height={500}
            className="mb-6"
          />

          <h3 className="text-2xl font-bold mb-4">Scenes from the Lake</h3>
          <p className="text-gray-400 mb-8">
            As we cruised along, we saw several <strong>houseboats</strong>,
            both large and small.
          </p>
          <Image
            src={munroeIslands[2].src}
            alt="Houseboats along Ashtamudi Lake"
            width={800}
            height={500}
            className="mb-6"
          />

          <p className="text-gray-400 mb-8">
            We also spotted a <strong>thonikaaran (boatman)</strong> and a
            majestic <strong>crane skimming the water&apos;s surface</strong>,
            hunting for fish.
          </p>
          <Image
            src={munroeIslands[2].src}
            alt="Crane skimming the water&apos;s surface"
            width={800}
            height={500}
            className="mb-6"
          />

          <h3 className="text-2xl font-bold mb-4">
            Farewell to the Backwaters
          </h3>
          <p className="text-gray-400 mb-8">
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
