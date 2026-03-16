"use client";

import { motion } from "framer-motion";
import styles from "./Work.module.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Analytics",
    description: "A comprehensive dashboard for online retailers with real-time data visualization.",
    tags: ["React", "Next.js", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    slug: "ecommerce-dashboard",
  },
  {
    id: 2,
    title: "Travel Journal",
    description: "Interactive map-based journaling app allowing users to pin locations and attach memories.",
    tags: ["Mapbox", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop",
    slug: "travel-journal",
  },
  {
    id: 3,
    title: "Design System Kit",
    description: "A reusable component library built with accessibility and flexibility in mind.",
    tags: ["Storybook", "A11y", "CSS Modules"],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop",
    slug: "ui-kit",
  },
  {
    id: 4,
    title: "Fintech Dashboard",
    description: "Financial planning tool for millennials with budget tracking and investment insights.",
    tags: ["Vue.js", "Firebase", "Chart.js"],
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000&auto=format&fit=crop",
    slug: "fintech-dashboard",
  },
  {
    id: 5,
    title: "Art Gallery Portfolio",
    description: "Minimalist portfolio for a contemporary artist with immersive gallery view.",
    tags: ["Gatsby", "GraphQL", "Sanity"],
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop",
    slug: "art-gallery",
  },
  {
    id: 6,
    title: "Health Tracker App",
    description: "Mobile-first web app for tracking daily habits and wellness metrics.",
    tags: ["PWA", "React Native", "Redux"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop",
    slug: "health-tracker",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "tween", ease: "easeOut", duration: 0.5 } as const },
};

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.header}>
        <span className="chapterLabel">02 / Selected Work</span>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Selected Work
        </motion.h2>
      </div>

      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <Link href={`/work/${project.slug}`} className={styles.card}>
              <div className={styles.thumbnailWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.thumbnail}
                />
              </div>

              <div className={styles.content}>
                <div className={styles.projectTitle}>
                  {project.title}
                  <ArrowUpRight size={18} />
                </div>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
