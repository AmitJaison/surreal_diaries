"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <span className="chapterLabel">05 / Contact</span>

        <motion.div
          className={styles.availability}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles.statusDot} />
          Available for new projects
        </motion.div>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Let&apos;s build something<br />meaningful together.
        </motion.h2>

        <motion.div
          className={styles.socials}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {socials.map((social, i) => {
            const Icon = social.icon;
            return (
              <span key={social.label} style={{ display: 'contents' }}>
                {i > 0 && <span className={styles.socialDot}>·</span>}
                <a href={social.href} className={styles.socialLink} aria-label={social.label}>
                  <Icon size={14} />
                  {social.label}
                </a>
              </span>
            );
          })}
        </motion.div>

        <motion.form
          className={styles.form}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input type="text" id="name" className={styles.input} placeholder="Jane Doe" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="email" id="email" className={styles.input} placeholder="jane@example.com" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea id="message" className={styles.textarea} placeholder="Tell me about your project..." required />
          </div>
          <button type="submit" className={styles.submitBtn}>Send Message</button>
        </motion.form>
      </div>
    </section>
  );
}
