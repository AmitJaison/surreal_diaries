"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Navigation.module.css";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Trips", href: "#trips" },
    { name: "Work", href: "#work" },
    { name: "Stories", href: "#stories" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.navScrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Amit Jaison
        </Link>
        <div className={styles.links}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.name}
            </Link>
          ))}
          <Link href="#contact" className={styles.ctaBtn}>
            Get in touch
          </Link>
        </div>
        {!isOpen && (
          <button className={styles.mobileMenuBtn} onClick={() => setIsOpen(true)} aria-label="Open menu" aria-expanded={false}>
            <Menu size={24} />
          </button>
        )}
      </div>
      
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -20 }}
           style={{
             position: 'fixed',
             top: 0,
             left: 0,
             width: '100%',
             height: '100vh',
             background: 'var(--bg-primary)',
             zIndex: 90,
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             justifyContent: 'center',
             gap: '2rem'
           }}
        >
          {links.map((link, i) => (
            <div key={link.href} style={{ width: '100%', textAlign: 'center' }}>
              {i > 0 && (
                <div style={{ width: '60px', height: '1px', background: 'var(--border-light)', margin: '0 auto' }} />
              )}
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block',
                  padding: '1.5rem 0',
                  fontSize: '3rem',
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              >
                {link.name}
              </Link>
            </div>
          ))}
          <button onClick={() => setIsOpen(false)} aria-label="Close menu" style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={32} />
          </button>
        </motion.div>
      )}
    </nav>
  );
}
