"use client";

import { motion } from "framer-motion";
import styles from "./FeaturedTrips.module.css";
import Image from "next/image";
import Link from "next/link";

const trips = [
  {
    id: 1,
    title: "Munroe Islands: A Serene Escape",
    location: "Kerala, India",
    year: "2024",
    image: "/trip-munroe.jpg",
    slug: "munroe-islands",
  },
  {
    id: 2,
    title: "Into the Mist",
    location: "Bonacaud, Kerala",
    year: "2025",
    image: "/trip-bonacaud.jpg",
    slug: "bonacaud-2025",
  },
  {
    id: 3,
    title: "Golden Hour Shores",
    location: "Varkala, India",
    year: "2022",
    image: "/trip-varkala.jpg",
    slug: "varkala-2022",
  },
  {
    id: 4,
    title: "Mountain Solitude",
    location: "Ponmudi, Kerala",
    year: "2025",
    image: "/trip-ponmudi.jpg",
    slug: "ponmudi-2025",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "tween", ease: "easeOut", duration: 0.5 } as const },
};

export default function FeaturedTrips() {
  return (
    <section id="trips" className={styles.section}>
      <div className={styles.header}>
        <span className="chapterLabel">01 / Visual Stories</span>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Visual Stories
        </motion.h2>
        <div className={styles.headerRule} />
      </div>

      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {trips.map((trip) => (
          <motion.div key={trip.id} variants={item} className={styles.cardWrapper}>
            <Link href={`/trips/${trip.slug}`} style={{ display: 'block', width: '100%', height: '100%', position: 'relative' }}>
              <Image
                src={trip.image}
                alt={trip.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
                className={styles.cardImage}
              />
              <div className={styles.overlay}>
                <div className={styles.cardMeta}>
                  {trip.location} — {trip.year}
                </div>
                <h3 className={styles.cardTitle}>{trip.title}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className={styles.viewAll}>
        <Link href="#trips" className={styles.viewAllLink}>
          View all journeys →
        </Link>
      </div>
    </section>
  );
}
