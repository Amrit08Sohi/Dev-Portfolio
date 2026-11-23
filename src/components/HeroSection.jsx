import "@/App.css";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  Atom,
  Cloud,
  Code2,
  Coffee,
  Database,
  GitBranch,
  Leaf,
  Mail,
  Wind,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const technologies = [
  { name: "Java", Icon: Coffee },
  { name: "Spring Boot", Icon: Leaf },
  { name: "React", Icon: Atom },
  { name: "TypeScript", Icon: Code2 },
  { name: "SQL", Icon: Database },
  { name: "Cloud", Icon: Cloud },
  { name: "GitHub Actions", Icon: GitBranch },
  { name: "Python", Icon: Code2 },
  { name: "Tailwind", Icon: Wind },
  { name: "MongoDB", Icon: Database },
];

const HeroSection = () => {
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <section className="hero wrap" data-testid="hero-section">
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="pulse" />
            {profile.availability}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span>Building scalable applications</span>
            <em>and</em>
            <span>intelligent AI-powered solutions</span>
          </motion.h1>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {profile.heroDescription}
          </motion.p>
          <div className="hero-actions">
            <button
              className="primary-btn"
              onClick={() => go("projects")}
              data-testid="hero-projects-button"
            >
              Explore my work <ArrowUpRight size={17} />
            </button>
            <a
              className="ghost-btn"
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume in a new tab"
              data-testid="hero-resume-button"
            >
              Download resume <ArrowDown size={16} />
            </a>
          </div>
          <div className="social-row">
            <a href={profile.github} target="_blank" data-testid="hero-github">
              <GithubIcon /> Github
            </a>
            <a href={profile.linkedin} target="_blank" data-testid="hero-linkedin">
              {/* { <BrowsseL size={16} />   LinkedIn } */}
              <LinkedinIcon /> LinkedIn
            </a>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} target="_blank" data-testid="hero-email">
              <Mail size={16} /> Email
            </a>
          </div>
        </div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 1 }}
        >
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="code-window" data-testid="hero-code-window">
            <div className="window-bar">
              <i />
              <i />
              <i />
              <small>amritpal.dev / engineer.ts</small>
            </div>
            <div className="code-content">
              <p>
                <b>const</b> engineer = &#123;
              </p>
              <p className="indent">
                <span>focus:</span> <em>"System Design and AI-Powered Solutions"</em>,
              </p>
              <p className="indent">
                <span>stack:</span> [<em>"Spring Boot"</em>, <em>"React"</em>, <em>"Python"</em>],
              </p>
              <p className="indent">
                <span>mindset:</span> <em>"solve well"</em>
              </p>
              <p>&#125;;</p>
              <div className="code-cursor" />
            </div>
          </div>
          <div className="visual-caption">
            <span>01</span>
            <span>Built with intent</span>
          </div>
        </motion.div>
      </section>
      <div className="tech-marquee" data-testid="technology-marquee">
        <div>
          {[...technologies, ...technologies].map(({ name, Icon }, i) => (
            <span key={`${name}-${i}`}>
              <Icon size={15} aria-hidden="true" />
              {name} <b aria-hidden="true">✦</b>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
