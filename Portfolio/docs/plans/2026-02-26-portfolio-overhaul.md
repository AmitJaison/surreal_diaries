# Portfolio Visual Overhaul — Refined Editorial Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Overhaul every section (except Hero) of the portfolio to a Refined Editorial aesthetic using the existing cream/charcoal/burnt-orange palette and Cormorant + Instrument Sans font stack.

**Architecture:** Each section gets a chapter label (`01 / SECTION NAME` in burnt orange small-caps), sharp edges (no border-radius on images/cards), horizontal rule lines as a recurring motif, and precise burnt orange hover states. The Work section becomes a dense 3-column grid. The Stories section becomes a horizontal editorial index. Global grain texture adds warmth.

**Tech Stack:** Next.js 14, TypeScript, CSS Modules, Framer Motion

**No git operations** — user does not want commits.

---

## Verification approach

Since this is a visual project, each task ends with a **visual check** step:
- Run `npm run dev` (if not already running)
- Navigate to `http://localhost:3000`
- Confirm the described visual output

---

## Task 1: Global Tokens & Grain Texture

**Files:**
- Modify: `src/app/globals.css`

**Step 1: Add new CSS variables to `:root`**

In `src/app/globals.css`, inside the `:root` block after the existing variables, add:

```css
/* Editorial additions */
--rule-line: 1px solid rgba(20, 20, 20, 0.12);
--chapter-label-size: 0.7rem;
--chapter-label-tracking: 0.18em;
```

**Step 2: Add grain texture overlay to body**

After the `html, body` block, add:

```css
body::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 128px 128px;
}
```

**Step 3: Add shared chapter-label utility class**

At the bottom of `globals.css`, add:

```css
/* Chapter label — used across all section headers */
.chapterLabel {
  display: block;
  font-family: var(--font-sans);
  font-size: var(--chapter-label-size);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--chapter-label-tracking);
  color: var(--accent-primary);
  margin-bottom: 1rem;
}
```

**Step 4: Visual check**

Open `http://localhost:3000`. The page should have a very faint grain texture visible when looking closely at the cream background. No layout changes yet.

---

## Task 2: Navigation

**Files:**
- Modify: `src/components/Navigation.tsx`
- Modify: `src/components/Navigation.module.css`

### Navigation.module.css

**Step 1: Update `.logo`** — change to italic Cormorant

Replace the `.logo` block:
```css
.logo {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
  font-size: 1.4rem;
  color: var(--text-primary);
  letter-spacing: 0.01em;
  text-decoration: none;
}
```

**Step 2: Update `.navScrolled`** — change to cream backdrop (not white)

Replace the `.navScrolled` block:
```css
.navScrolled {
  background: rgba(245, 243, 239, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 1rem 2rem;
  border-bottom: var(--rule-line);
}
```

**Step 3: Update `.link::after`** — change underline to burnt orange

Replace `.link::after` block:
```css
.link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 1.5px;
  background: var(--accent-primary);
  transition: width 0.3s ease;
}
```

**Step 4: Update `.link` hover** — change opacity to color change

Replace `.link:hover` block:
```css
.link:hover {
  opacity: 1;
  color: var(--accent-primary);
}
```

**Step 5: Update `.ctaBtn` hover** — burnt orange fill

Replace `.ctaBtn:hover` block:
```css
.ctaBtn:hover {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  color: white;
}
```

### Navigation.tsx

**Step 6: Add rule lines to mobile overlay**

In `Navigation.tsx`, find the mobile overlay `motion.div`. Replace the inner `links.map(...)` section with:

```tsx
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
```

**Step 7: Visual check**

- Nav logo should now appear in italic Cormorant
- Hovering a nav link shows burnt orange underline and orange text
- Scrolling down: nav becomes blurred cream, not white
- Mobile: open hamburger menu and confirm italic serif links with rule lines between them

---

## Task 3: FeaturedTrips — "Visual Stories"

**Files:**
- Modify: `src/components/FeaturedTrips.tsx`
- Modify: `src/components/FeaturedTrips.module.css`

### FeaturedTrips.module.css

**Step 1: Replace `.section`**
```css
.section {
  padding: 10rem 0;
  background: var(--bg-primary);
  border-top: var(--rule-line);
}
```

**Step 2: Replace `.header`**
```css
.header {
  margin-bottom: 3rem;
  padding: 0 1.5rem;
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
}
```

**Step 3: Replace `.title`**
```css
.title {
  font-size: 3.5rem;
  margin-bottom: 0;
  color: var(--text-primary);
}
```

**Step 4: Add `.headerRule`** (full-width rule beneath header)
```css
.headerRule {
  width: 100%;
  height: 1px;
  background: rgba(20, 20, 20, 0.12);
  margin-top: 2rem;
}
```

**Step 5: Remove border-radius from `.cardWrapper`**

Replace the existing `.cardWrapper`:
```css
.cardWrapper {
  position: relative;
  grid-column: span 12;
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: 0;
  cursor: pointer;
}
```

**Step 6: Add orange hover rule line at card bottom**

Add after `.cardWrapper`:
```css
.cardWrapper::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 3px;
  background: var(--accent-primary);
  z-index: 20;
  transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.cardWrapper:hover::after {
  width: 100%;
}
```

**Step 7: Update `.cardTitle`**
```css
.cardTitle {
  font-family: var(--font-serif);
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: white;
  font-style: italic;
}
```

**Step 8: Update `.cardMeta`**
```css
.cardMeta {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: 0.85;
  color: white;
  margin-bottom: 0.5rem;
}
```

**Step 9: Add `.viewAll` link styles**
```css
.viewAll {
  display: flex;
  justify-content: flex-end;
  padding: 2rem 1.5rem 0;
  max-width: var(--max-width);
  margin: 0 auto;
}

.viewAllLink {
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-primary);
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
}

.viewAllLink::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--accent-primary);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.viewAllLink:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.viewAllLink:hover {
  color: var(--accent-primary);
}
```

### FeaturedTrips.tsx

**Step 10: Add chapter label and rule to header, add view-all link**

Replace the entire `return` statement:

```tsx
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
          <Link href={`/trips/${trip.slug}`} className="block w-full h-full relative group">
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
```

**Step 11: Visual check**

- Section should open with burnt orange `01 / VISUAL STORIES` label above the serif heading
- Full-width rule line beneath the heading
- Photo cards should have sharp corners (no radius)
- Hovering a card: burnt orange bar animates in from left along the bottom edge
- Bottom-right: "View all journeys →" with orange underline animation on hover

---

## Task 4: Work — "Selected Work"

**Files:**
- Modify: `src/components/Work.tsx`
- Modify: `src/components/Work.module.css`

### Work.module.css

**Step 1: Replace `.section`**
```css
.section {
  padding: 10rem 0;
  background: var(--bg-primary);
  border-top: var(--rule-line);
}
```

**Step 2: Replace `.header`**
```css
.header {
  margin-bottom: 3rem;
  padding: 0 1.5rem;
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
}
```

**Step 3: Replace `.title`**
```css
.title {
  font-size: 3.5rem;
  margin-bottom: 0;
  color: var(--text-primary);
}
```

**Step 4: Replace `.subtitle`**
```css
.subtitle {
  display: none;
}
```

**Step 5: Replace `.grid`** — tighter gap, same 3-col structure
```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 0 1.5rem;
  max-width: var(--max-width);
  margin: 0 auto;
}
```

**Step 6: Replace `.card`** — sharp corners, border, structured layout
```css
.card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid var(--border-light);
  border-radius: 0;
  overflow: hidden;
  background: var(--bg-card);
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}

.card:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  border-color: rgba(20, 20, 20, 0.2);
}
```

**Step 7: Replace `.thumbnailWrapper`** — 55% height, no radius
```css
.thumbnailWrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 3/2;
  overflow: hidden;
  border-radius: 0;
  background: var(--bg-secondary);
  flex-shrink: 0;
}
```

**Step 8: Keep `.thumbnail` scale, remove radius**
```css
.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  border-radius: 0;
}

.card:hover .thumbnail {
  transform: scale(1.04);
}
```

**Step 9: Replace `.content`**
```css
.content {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.25rem;
  background: var(--bg-primary);
}
```

**Step 10: Replace `.projectTitle`**
```css
.projectTitle {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--text-primary);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  line-height: 1.2;
}

.projectTitle svg {
  opacity: 0;
  transform: translate(-6px, 6px);
  transition: all 0.3s ease;
  flex-shrink: 0;
  margin-top: 4px;
}

.card:hover .projectTitle svg {
  opacity: 1;
  transform: translate(0, 0);
}
```

**Step 11: Replace `.description`**
```css
.description {
  font-family: var(--font-sans);
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.5;
}
```

**Step 12: Replace `.tags` and `.tag`** — burnt orange outlined pills
```css
.tags {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-top: 0.4rem;
}

.tag {
  font-family: var(--font-sans);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.25rem 0.6rem;
  border: 1px solid var(--accent-primary);
  color: var(--accent-primary);
  background: transparent;
  border-radius: 0;
}
```

**Step 13: Update responsive breakpoints**
```css
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

### Work.tsx

**Step 14: Add chapter label and header rule**

Replace the header `motion.h2` and `motion.p` block with:

```tsx
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
```

**Step 15: Visual check**

- Section opens with `02 / SELECTED WORK` in burnt orange small-caps
- Work cards form a tight 3-column grid with `1px` border all around
- Cards have zero border-radius (sharp corners)
- Tag pills are outlined in burnt orange with no fill
- Hover: card lifts with shadow, image scales subtly, ArrowUpRight slides in from bottom-left
- On tablet (resize window): 2 columns; on mobile: 1 column

---

## Task 5: Stories — "Stories & Notes"

**Files:**
- Modify: `src/components/Stories.tsx`
- Modify: `src/components/Stories.module.css`

### Stories.module.css

**Step 1: Replace entire file** with new horizontal-list layout:

```css
.section {
  padding: 10rem 0;
  background: var(--bg-primary);
  border-top: var(--rule-line);
}

.header {
  margin-bottom: 3rem;
  padding: 0 1.5rem;
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
}

.title {
  font-size: 3.5rem;
  margin-bottom: 0;
  color: var(--text-primary);
}

/* Editorial index list — replaces card grid */
.list {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

.row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.75rem 0;
  border-bottom: var(--rule-line);
  text-decoration: none;
  color: inherit;
  position: relative;
  cursor: pointer;
  transition: color 0.2s ease;
}

.row::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background: var(--accent-primary);
  transition: width 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.row:hover::before {
  width: 100%;
}

.rowLeft {
  display: flex;
  align-items: baseline;
  gap: 1.25rem;
  flex: 1;
  min-width: 0;
}

.platformIcon {
  color: var(--text-muted);
  flex-shrink: 0;
  position: relative;
  top: 2px;
  transition: color 0.2s ease;
}

.row:hover .platformIcon {
  color: var(--accent-primary);
}

.rowTitle {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--text-primary);
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.2s ease;
}

.row:hover .rowTitle {
  color: var(--accent-primary);
}

.rowMeta {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

.platform {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-muted);
}

.date {
  font-family: var(--font-sans);
  font-size: 0.85rem;
  color: var(--text-secondary);
  white-space: nowrap;
}

/* Top rule above first item */
.listTopRule {
  width: 100%;
  height: 1px;
  background: rgba(20, 20, 20, 0.12);
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

@media (max-width: 640px) {
  .rowTitle {
    font-size: 1.2rem;
    white-space: normal;
  }
  .platform {
    display: none;
  }
}
```

### Stories.tsx

**Step 2: Replace entire component**

```tsx
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
            rel={story.platform === "Blog" ? "" : "noopener noreferrer"}
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
```

**Step 3: Visual check**

- Stories no longer shows cards — it shows a clean editorial list of rows
- Each row: icon + title (Cormorant italic) on left, platform label + date on right
- Hovering: title and icon shift to burnt orange, orange rule animates in from left along the bottom border
- 5 rows stagger in on scroll

---

## Task 6: About

**Files:**
- Modify: `src/components/About.tsx`
- Modify: `src/components/About.module.css`

### About.module.css

**Step 1: Replace entire file**

```css
.section {
  padding: 10rem 0;
  background: var(--bg-primary);
  border-top: var(--rule-line);
}

.inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

.headlineBlock {
  margin-bottom: 0;
}

.headline {
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 400;
  line-height: 1.15;
  color: var(--text-primary);
  max-width: 900px;
  margin-bottom: 0;
}

/* Full-bleed image — breaks out of container */
.imageWrapper {
  width: 100%;
  aspect-ratio: 21/9;
  position: relative;
  overflow: hidden;
  margin: 4rem 0;
}

.portrait {
  object-fit: cover;
}

/* Body content below image */
.bodyRow {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 5rem;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

.narrative {
  font-family: var(--font-sans);
  font-size: 1.1rem;
  line-height: 1.85;
  color: var(--text-secondary);
  max-width: 640px;
}

.narrative p + p {
  margin-top: 1.5rem;
}

/* Aside quick-facts */
.aside {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 0.25rem;
}

.fact {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.factLabel {
  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--accent-primary);
}

.factValue {
  font-family: var(--font-sans);
  font-size: 0.95rem;
  color: var(--text-primary);
  line-height: 1.4;
}

@media (max-width: 1024px) {
  .bodyRow {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .aside {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem 3rem;
  }
}

@media (max-width: 640px) {
  .imageWrapper {
    aspect-ratio: 4/3;
  }
}
```

### About.tsx

**Step 2: Replace entire component**

```tsx
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
```

**Step 3: Visual check**

- `04 / ABOUT` chapter label above large serif headline
- Below headline: full-bleed panoramic image with gentle parallax as you scroll through it
- Below image: narrative text left, 3 quick-facts aside right (burnt orange labels)
- On mobile: aside stacks below narrative in a row

---

## Task 7: Contact

**Files:**
- Modify: `src/components/Contact.tsx`
- Modify: `src/components/Contact.module.css`

### Contact.module.css

**Step 1: Replace entire file**

```css
.section {
  padding: 10rem 0;
  background: var(--bg-primary);
  border-top: var(--rule-line);
}

.inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.availability {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.statusDot {
  width: 8px;
  height: 8px;
  background: #10B981;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2); }
  50% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.1); }
}

.title {
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 400;
  line-height: 1.1;
  color: var(--text-primary);
  margin-bottom: 3rem;
  max-width: 800px;
}

/* Social links: icon + label pairs with dot separators */
.socials {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  justify-content: center;
}

.socialLink {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.socialLink:hover {
  color: var(--accent-primary);
}

.socialDot {
  color: var(--border-hover);
  font-size: 1rem;
  line-height: 1;
}

/* Form */
.form {
  width: 100%;
  max-width: 580px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
}

.inputGroup {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.label {
  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent-primary);
}

.input, .textarea {
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--border-light);
  padding: 0.75rem 0;
  font-family: var(--font-serif);
  font-size: 1.2rem;
  color: var(--text-primary);
  border-radius: 0;
  transition: border-color var(--transition-fast);
  width: 100%;
}

.input::placeholder, .textarea::placeholder {
  color: var(--text-muted);
  font-style: italic;
}

.input:focus, .textarea:focus {
  outline: none;
  border-color: var(--accent-primary);
}

.textarea {
  min-height: 100px;
  resize: vertical;
}

.submitBtn {
  width: 100%;
  margin-top: 0.5rem;
  padding: 1.1rem 2rem;
  background: var(--accent-primary);
  color: white;
  border: none;
  border-radius: 0;
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  cursor: pointer;
  transition: background 0.2s ease, transform var(--transition-bounce);
}

.submitBtn:hover {
  background: #b35420;
  transform: translateY(-2px);
}
```

### Contact.tsx

**Step 2: Replace entire component**

```tsx
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
          {socials.map((social, i) => (
            <>
              {i > 0 && <span key={`dot-${i}`} className={styles.socialDot}>·</span>}
              <a key={social.label} href={social.href} className={styles.socialLink} aria-label={social.label}>
                <social.icon size={14} />
                {social.label}
              </a>
            </>
          ))}
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
```

**Step 3: Visual check**

- Section: centered layout, `05 / CONTACT` chapter label
- Large Cormorant headline centered, full width
- Social links: `LinkedIn · Twitter · GitHub · Email` with icons — dot-separated, hover → burnt orange
- Form inputs: borderless with bottom rule only, form labels in burnt orange small-caps
- Submit button: full-width solid burnt orange, no radius, uppercase

---

## Task 8: Footer

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Replace the inline `<footer>` block in page.tsx**

Find the current footer:
```tsx
<footer style={{
  padding: "2rem",
  textAlign: "center",
  borderTop: "1px solid var(--border-light)",
  color: "var(--text-secondary)",
  fontSize: "0.9rem"
}}>
  <p>© {new Date().getFullYear()} Amit Jaison. All rights reserved.</p>
  <p style={{ marginTop: "0.5rem", fontSize: "0.8rem", opacity: 0.7 }}>
    Built with Next.js, Framer Motion & Love.
  </p>
</footer>
```

Replace with:
```tsx
<footer style={{
  borderTop: "1px solid rgba(20,20,20,0.12)",
  padding: "2.5rem 1.5rem",
  display: "grid",
  gridTemplateColumns: "1fr auto 1fr",
  alignItems: "center",
  maxWidth: "var(--max-width)",
  margin: "0 auto",
  gap: "1rem",
}}>
  <span style={{
    fontFamily: "var(--font-serif)",
    fontStyle: "italic",
    fontSize: "1.1rem",
    color: "var(--text-primary)",
  }}>
    Amit Jaison
  </span>
  <nav style={{
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
  }}>
    {["Trips","Work","Stories","About","Contact"].map(name => (
      <a
        key={name}
        href={`#${name.toLowerCase()}`}
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "var(--text-muted)",
          textDecoration: "none",
        }}
      >
        {name}
      </a>
    ))}
  </nav>
  <span style={{
    fontFamily: "var(--font-sans)",
    fontSize: "0.75rem",
    color: "var(--text-muted)",
    textAlign: "right",
  }}>
    © {new Date().getFullYear()} Amit Jaison
  </span>
</footer>
```

**Step 2: Visual check**

- Footer shows three columns: italic "Amit Jaison" left, nav links center, copyright right
- Rule line above
- All text small, muted

---

## Final Visual QA Checklist

Walk through the page top to bottom and confirm:

- [ ] Grain texture visible (faint) on cream background
- [ ] Nav: italic logo, burnt orange hover underlines, cream blur on scroll
- [ ] FeaturedTrips: chapter label `01`, sharp card corners, orange bottom-edge hover rule
- [ ] Work: chapter label `02`, tight 3-col grid, outlined burnt orange tag pills, sharp corners, hover lift
- [ ] Stories: chapter label `03`, horizontal editorial rows, hover → orange title + orange rule
- [ ] About: chapter label `04`, large headline, full-bleed parallax image, narrative + aside quick-facts
- [ ] Contact: chapter label `05`, centered huge headline, dot-separated socials, full-width burnt orange button
- [ ] Footer: three-column, italic logo, muted nav links
- [ ] Mobile (375px): all sections stack correctly, no overflow
