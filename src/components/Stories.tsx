"use client";

import { motion } from "framer-motion";
import styles from "./Stories.module.css";
import { Linkedin, Twitter, Instagram, BookOpen } from "lucide-react";

const stories = [
  {
    id: 1,
    title: "Why designers should code",
    platform: "LinkedIn",
    date: "Feb 14",
    link: "https://linkedin.com",
  },
  {
    id: 2,
    title: "Kyoto's alleyways",
    platform: "Instagram",
    date: "Jan 20",
    link: "https://instagram.com",
  },
  {
    id: 3,
    title: "React Server Components",
    platform: "Blog",
    date: "Dec 10",
    link: "/blog/react-rsc",
  },
  {
    id: 4,
    title: "Just shipped portfolio!",
    platform: "Twitter",
    date: "Nov 05",
    link: "https://twitter.com",
  },
  {
    id: 5,
    title: "The Art of Slow Travel",
    platform: "Blog",
    date: "Oct 22",
    link: "/blog/slow-travel",
  },
];

const PlatformIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "LinkedIn": return <Linkedin size={16} />;
    case "Twitter": return <Twitter size={16} />;
    case "Instagram": return <Instagram size={16} />;
    default: return <BookOpen size={16} />;
  }
};

export default function Stories() {
  return (
    <section id="stories" className={styles.section}>
      <div className={styles.header}>
        <span className="chapterLabel">03 / Stories &amp; Notes</span>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Stories &amp; Notes
        </motion.h2>
      </div>

      <div className={styles.listTopRule} />

      <div className={styles.list}>
        {stories.map((story, i) => (
          <motion.a
            key={story.id}
            href={story.link}
            target={story.platform === "Blog" ? "_self" : "_blank"}
            rel={story.platform !== "Blog" ? "noopener noreferrer" : undefined}
            className={styles.row}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className={styles.rowLeft}>
              <span className={styles.platformIcon}>
                <PlatformIcon platform={story.platform} />
              </span>
              <span className={styles.rowTitle}>{story.title}</span>
            </div>
            <div className={styles.rowMeta}>
              <span className={styles.platform}>{story.platform}</span>
              <span className={styles.date}>{story.date}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
