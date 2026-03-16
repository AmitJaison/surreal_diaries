"use client";
import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import styles from './work.module.css';

const projects: Record<string, any> = {
  "ecommerce-dashboard": {
    title: "E-Commerce Dashboard",
    subtitle: "A comprehensive analytics dashboard for online retailers with real-time data visualization.",
    tags: ["React", "Next.js", "TypeScript", "Recharts"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    problem: "Retailers needed a single source of truth for their sales data, inventory levels, and customer insights, which were previously scattered across multiple legacy systems.",
    approach: "I built a highly performant dashboard using Next.js for server-side rendering and Recharts for data visualization. The UI is designed to be dense yet scannable.",
    outcome: "Reduced reporting time by 80% and helped identifying inventory bottlenecks in real-time."
  },
  // Fallback
};

export default function WorkPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = projects[slug] || projects["ecommerce-dashboard"];

  return (
    <article className={styles.article}>
      <header className={styles.hero}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="container mx-auto"
        >
          <div className={styles.tag} style={{display: 'inline-block', marginBottom: '1rem', color: 'var(--accent-primary)'}}>Case Study</div>
          <h1 className={styles.heroTitle}>{project.title}</h1>
          <p className={styles.heroSubtitle}>{project.subtitle}</p>
          
          <div className={styles.tags}>
            {project.tags.map((tag: string) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>

          <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem'}}>
            <a href="#" className={styles.tag} style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', background: 'var(--text-primary)', color: 'var(--bg-primary)', fontWeight: '600'}}>
              Live Demo <ExternalLink size={16} />
            </a>
            <a href="#" className={styles.tag} style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
              GitHub <Github size={16} />
            </a>
          </div>
        </motion.div>
      </header>
      
      <div className={styles.content}>
        <motion.div 
          className={styles.mockup}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Image src={project.image} alt={project.title} fill className={styles.mockupImage} />
        </motion.div>

        <div className={styles.grid}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>The Problem</h2>
            <p className={styles.paragraph}>{project.problem}</p>
            
            <h2 className={styles.sectionTitle}>The Approach</h2>
            <p className={styles.paragraph}>{project.approach}</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className={styles.sectionTitle}>Outcome & Learnings</h2>
            <p className={styles.paragraph}>{project.outcome}</p>
            
            <div style={{padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid var(--border-light)'}}>
              <h3 style={{fontSize: '1.1rem', marginBottom: '1rem', fontWeight: '600'}}>Key Tech Stack</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                {project.tags.map((tag: string) => (
                  <li key={tag} style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <span style={{width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-primary)'}}></span>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  );
}
