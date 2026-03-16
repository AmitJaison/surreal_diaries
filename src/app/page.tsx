import Hero from "@/components/Hero";
import FeaturedTrips from "@/components/FeaturedTrips";
import Work from "@/components/Work";
import Stories from "@/components/Stories";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedTrips />
      <Work />
      <Stories />
      <About />
      <Contact />
      
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
          {["Trips", "Work", "Stories", "About", "Contact"].map(name => (
            <a
              key={name}
              href={`#${name.toLowerCase()}`}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                textTransform: "uppercase" as const,
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
          textAlign: "right" as const,
        }}>
          © {new Date().getFullYear()} Amit Jaison
        </span>
      </footer>
    </main>
  );
}
