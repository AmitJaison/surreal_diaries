"use client";
import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Code } from 'lucide-react';
import styles from './trip.module.css';

// Mock data (in real app, use fetch or getStaticProps equivalent)
const tripData: Record<string, any> = {
  "munroe-islands": {
    title: "Exploring the Beauty of Munroe Islands",
    location: "Kerala, India",
    year: "2024",
    heroImage: "https://images.pexels.com/photos/20035182/pexels-photo-20035182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro: "On 26th January 2024, we embarked on a memorable one-day trip from Trivandrum to the breathtaking backwaters of Ashtamudi Lake and Munroe Islands. It was a group of nine of us, full of excitement and anticipation. The serene backwaters welcomed us as we began our journey.",
    story: [
      { type: "text", content: "While cruising, the crew shared fascinating tales about the region. We passed by several landmarks including the magnificent Leela Raviz Ashtamudi, a luxury hotel standing tall by the serene waters." },
      { type: "image", src: "https://images.pexels.com/photos/29717068/pexels-photo-29717068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", caption: "Cruising through the mangroves." },
      { type: "text", content: "The highlight of our journey was the authentic Kerala cuisine. We were served the famous Karimeen (Pearl Spot) and traditional kappa (tapioca) with fish curry." },
      { type: "image", src: "https://images.pexels.com/photos/20035184/pexels-photo-20035184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", caption: "Reflections on the Ashtamudi Lake." },
      { type: "text", content: "One of the most exciting parts was exploring the dense mangrove forests. We took a smaller boat that brought us closer to nature, allowing us to appreciate the intricate ecosystem of the backwaters." },
      { type: "image", src: "https://images.pexels.com/photos/20035180/pexels-photo-20035180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", caption: "Sunset hues over the water." },
      { type: "text", content: "We witnessed the traditional Chinese fishing nets (Cheenavala) in action, a testament to the area's rich fishing heritage." },
      { type: "image", src: "https://images.pexels.com/photos/20035179/pexels-photo-20035179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", caption: "Traditional Chinese fishing nets." },
      { type: "text", content: "After a delicious lunch on the boat, we started our journey back, soaking in the beauty of the landscapes one last time. As the boat docked back at the jetty, we carried home not just memories but a profound sense of tranquility from the serene backwaters of Ashtamudi." },
      { type: "image", src: "https://images.pexels.com/photos/29717069/pexels-photo-29717069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", caption: "Serene waters." },
      { type: "gallery", images: [
         "https://images.pexels.com/photos/29717066/pexels-photo-29717066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         "https://images.pexels.com/photos/29717076/pexels-photo-29717076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         "https://images.pexels.com/photos/29717075/pexels-photo-29717075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         "https://images.pexels.com/photos/29717070/pexels-photo-29717070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         "https://images.pexels.com/photos/29717067/pexels-photo-29717067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         "https://images.pexels.com/photos/29717071/pexels-photo-29717071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         "https://images.pexels.com/photos/29717074/pexels-photo-29717074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         "https://images.pexels.com/photos/20035181/pexels-photo-20035181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]}
    ],
    tech: "This page uses dynamic routing and Framer Motion to seamlessly transition between the grid view and this detailed narrative."
  },
  "vagamon-2023": {
    title: "Highland Mists",
    location: "Vagamon, Kerala",
    year: "2023",
    heroImage: "/IMG_1437_Original.jpg",
    intro: "A journey through the rolling hills and misty meadows of Vagamon. The cool mountain air and lush greenery provided a perfect escape into nature.",
    story: [
      { type: "image", src: "/IMG_1437_Original.jpg", caption: "Misty rolling hills of Vagamon." },
      { type: "text", content: "Vagamon is a hill station located in Peerumade taluk of Idukki district of Kerala, India. It is a place of inexplicable beauty." }
    ],
    tech: "Photography showcase."
  },
  "varkala-2022": {
    title: "Golden Hour Shores",
    location: "Varkala, India",
    year: "2022",
    heroImage: "/IMG_1828_Original.jpg",
    intro: "witnessing the stunning cliffs meeting the Arabian Sea. Varkala offers a unique blend of geological marvels and beachside tranquility.",
    story: [
      { type: "image", src: "/IMG_1828_Original.jpg", caption: "Golden hour at Varkala Beach." },
      { type: "text", content: "Varkala is the only place in southern Kerala where cliffs are found adjacent to the Arabian Sea." }
    ],
    tech: "Photography showcase."
  },
  "munnar-2021": {
    title: "Mountain Solitude",
    location: "Munnar, India",
    year: "2021",
    heroImage: "/IMG_2520_Original.jpg",
    intro: "Exploring the tea plantations and serene landscapes of Munnar. A testament to nature's ability to sculpt breathtaking vistas.",
    story: [
      { type: "image", src: "/IMG_2520_Original.jpg", caption: "Scenic tea gardens of Munnar." },
      { type: "text", content: "Munnar rises as three mountain streams merge  - Mudrapuzha, Nallathanni and Kundala." }
    ],
    tech: "Photography showcase."
  },
  "tokyo-2024": {
    title: "Neon Streets of Tokyo",
    location: "Tokyo, Japan",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop",
    intro: "Tokyo is a city of contrasts. Ancient temples sit in the shadow of skyscrapers, and quiet gardens offer respite from the frenetic energy of Shibuya Crossing.",
    story: [
      { type: "image", src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop", caption: "Shinjuku at night." },
      { type: "text", content: "Walking through Shinjuku felt like stepping into a sci-fi movie. The lights, the sounds, the sheer verticality of it all." },
      { type: "image", src: "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1000&auto=format&fit=crop", caption: "Quiet moments in a tea house." },
    ],
    tech: "For this trip, I experimented with a WebGL map visualization to track my daily steps."
  },
  // Add others or generic fallback
};

export default function TripPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const trip = tripData[slug] || tripData["tokyo-2024"]; // Fallback for demo

  return (
    <article className={styles.article}>
      {/* Hero */}
      <div className={styles.hero}>
        <Image src={trip.heroImage} alt={trip.title} fill className={styles.bgImage} priority />
        <div className={styles.heroContent}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className={styles.heroTitle}>{trip.title}</h1>
            <div className={styles.heroMeta}>
              <span style={{display: 'flex', gap: '8px', alignItems: 'center'}}><MapPin size={18} /> {trip.location}</span>
              <span style={{display: 'flex', gap: '8px', alignItems: 'center'}}><Calendar size={18} /> {trip.year}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.intro} style={{ maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          {trip.intro}
        </div>
        
        <div>
          {trip.story.map((block: any, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className={styles.storyBlock}
            >
              {block.type === 'image' ? (
                <figure className={styles.figure}>
                  <Image src={block.src} alt={block.caption || ""} fill className={styles.bgImage} />
                  {block.caption && (
                    <figcaption className={styles.caption}>
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              ) : block.type === 'gallery' ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
                  {block.images.map((img: string, i: number) => (
                    <div key={i} style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '4px', overflow: 'hidden' }}>
                      <Image src={img} alt={`Gallery image ${i + 1}`} fill style={{ objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
              ) : (
                <p className={styles.textBlock}>
                  {block.content}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {trip.tech && (
          <motion.div 
            className={styles.techBlock}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className={styles.techHeader}>
              <Code size={24} />
              <h3 className={styles.techTitle}>Behind the Build</h3>
            </div>
            <p className={styles.intro}>
              {trip.tech}
            </p>
          </motion.div>
        )}
      </div>
    </article>
  );
}
