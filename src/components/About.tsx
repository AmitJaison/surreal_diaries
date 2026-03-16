"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./About.module.css";
import Image from "next/image";

const facts = [
  { label: "Based in", value: "Kerala, India" },
  { label: "Currently at", value: "TechFlow" },
  { label: "Available for", value: "Freelance & Contracts" },
];

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <span className="chapterLabel">04 / About</span>
        <motion.div
          className={styles.headlineBlock}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.headline}>
            I craft digital experiences with a focus on motion, typography, and storytelling.
          </h2>
        </motion.div>
      </div>

      {/* Full-bleed parallax image */}
      <motion.div
        ref={imageRef}
        className={styles.imageWrapper}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div style={{ y, width: "100%", height: "120%", position: "absolute", top: "-10%" }}>
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop"
            alt="Landscape photography by Amit"
            fill
            className={styles.portrait}
          />
        </motion.div>
      </motion.div>

      {/* Body: narrative + aside */}
      <div className={styles.bodyRow}>
        <motion.div
          className={styles.narrative}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p>
            My background in photography shapes how I see the web—not just as code, but as composition.
            Every pixel, every interaction, and every transition is an opportunity to guide the user&apos;s eye and
            evoke a feeling.
          </p>
          <p>
            Currently, I&apos;m a Senior Frontend Engineer at TechFlow, where I build design systems and interactive
            marketing pages. Before that, I spent a year backpacking through Asia, capturing stories and
            learning that the best designs often come from the most unexpected places.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me scanning 35mm film, brewing coffee, or planning my next
            trip to a place with bad reception and good light.
          </p>
        </motion.div>

        <motion.aside
          className={styles.aside}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {facts.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <span className={styles.factLabel}>{fact.label}</span>
              <span className={styles.factValue}>{fact.value}</span>
            </div>
          ))}
        </motion.aside>
      </div>
    </section>
  );
}
