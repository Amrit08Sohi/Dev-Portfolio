import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Globe2,
  Mail,
  Menu,
  Moon,
  Server,
  Sun,
  Terminal,
  X
} from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedInIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import "@/App.css";
import {
  profile,
  navItems,
  skillGroups,
  projects,
  experience,
  achievements,
} from "@/data/profile";


const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Tell me a little more about the opportunity"),
});
const icons = {
  Backend: Server,
  Frontend: Code2,
  Database,
  "Cloud & DevOps": Cloud,
  Tools: Terminal,
};
const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.7, delay }}
  >
    {children}
  </motion.div>
);
const Heading = ({ eyebrow, title, copy }) => (
  <div className="section-heading">
    <span className="section-eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </div>
);

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("amritpal-theme") || "dark",
  );
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("amritpal-theme", theme);
  }, [theme]);
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15 });
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const onScroll = () => setScrolled(scrollY > 24);
    addEventListener("scroll", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      removeEventListener("scroll", onScroll);
    };
  }, []);
  const go = (id) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const shown = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter(
            (p) => p.tags.includes(filter) || p.category === filter,
          ),
    [filter],
  );
  const contact = (v) => {
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Opportunity for ${profile.name}`)}&body=${encodeURIComponent(`Hi ${profile.name},\n\n${v.message}\n\nName: ${v.name}\nEmail: ${v.email}`)}`;
    reset();
  };
  return (
    <div className="site-shell">
      <div className="noise" />
      <nav
        className={`nav ${scrolled ? "nav-scrolled" : ""}`}
        data-testid="main-navigation"
      >
        <button
          className="brand"
          onClick={() => go("top")}
          data-testid="brand-home"
        >
          <span className="brand-mark">A</span>Amritpal
          <span className="muted">.dev</span>
        </button>
        <div className="nav-links">
          {navItems.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              data-testid={`nav-${n.id}`}
            >
              {n.label}
            </button>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            data-testid="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="resume-btn disabled"
            disabled
            title="Add public/resume.pdf to enable"
            data-testid="nav-resume"
          >
            Resume <ArrowDown size={14} />
          </button>
          <button
            className="menu-btn"
            onClick={() => setMenu(!menu)}
            data-testid="mobile-menu-toggle"
            aria-expanded={menu}
            aria-controls="mobile-navigation"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        {menu && (
          <div className="mobile-menu" id="mobile-navigation">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                data-testid={`mobile-nav-${n.id}`}
              >
                {n.label}
                <ArrowUpRight size={15} />
              </button>
            ))}
          </div>
        )}
      </nav>
      <main id="top">
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
              <span>Turning complex</span>
              <span>
                problems into <em>simple</em>
              </span>
              <span>software solutions.</span>
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
              <button
                className="ghost-btn disabled"
                disabled
                title="Add public/resume.pdf to enable"
                data-testid="hero-resume-button"
              >
                Download resume <ArrowDown size={16} />
              </button>
            </div>
            <div className="social-row">
              <a href={profile.github} data-testid="hero-github">
                <GithubIcon/> Github
              </a>
              <a href={profile.linkedin} data-testid="hero-linkedin">
                {/* { <BrowsseL size={16} />   LinkedIn } */}
                <LinkedinIcon /> LinkedIn
              </a>
              <a href={`mailto:${profile.email}`} data-testid="hero-email">
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
                  <span>focus:</span> <em>"backend"</em>,
                </p>
                <p className="indent">
                  <span>stack:</span> [<em>"Java"</em>, <em>"React"</em>],
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
              <span>Systems / interfaces / intent</span>
            </div>
          </motion.div>
        </section>
        <div className="tech-marquee" data-testid="technology-marquee">
          <div>
            {[
              "Java",
              "Spring Boot",
              "React",
              "TypeScript",
              "SQL",
              "Cloud",
              "Java",
              "Spring Boot",
              "React",
              "TypeScript",
              "SQL",
              "Cloud",
            ].map((t, i) => (
              <span key={i}>
                {t} <b>✦</b>
              </span>
            ))}
          </div>
        </div>
        <section
          id="about"
          className="wrap split-section"
          data-testid="about-section"
        >
          <Reveal>
            <Heading
              eyebrow="01 / About"
              title="Engineer with a bias for clarity."
              copy={profile.positioning}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="about-copy">
              <p>{profile.about}</p>
              <div className="meta-grid">
                <div>
                  <small>Primary focus</small>
                  <strong>Backend development</strong>
                </div>
                <div>
                  <small>Secondary focus</small>
                  <strong>Full-stack engineering</strong>
                </div>
                <div>
                  <small>Based in</small>
                  <strong>{profile.location}</strong>
                </div>
                <div>
                  <small>Currently</small>
                  <strong>Open to opportunities</strong>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
        <section
          id="skills"
          className="wrap section"
          data-testid="skills-section"
        >
          <Reveal>
            <Heading
              eyebrow="02 / Capabilities"
              title="A practical, modern toolkit."
              copy="A configurable stack for turning ideas into maintainable software."
            />
          </Reveal>
          <div className="skills-grid">
            {skillGroups.map((group, i) => {
              const Icon = icons[group.icon];
              return (
                <Reveal delay={i * 0.06} key={group.title}>
                  <article
                    className="skill-card"
                    data-testid={`skill-card-${group.title.toLowerCase().replaceAll(" ", "-")}`}
                  >
                    <Icon size={22} />
                    <h3>{group.title}</h3>
                    <div>
                      {group.skills.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>
        <section
          id="projects"
          className="wrap section"
          data-testid="projects-section"
        >
          <Reveal>
            <div className="project-intro">
              <Heading
                eyebrow="03 / Selected work"
                title="Built for the real world."
                copy="Placeholder case studies ready for your verified links, screenshots and outcomes."
              />
              <a
                className="text-link"
                href={profile.github}
                data-testid="projects-github-link"
              >
                View GitHub <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>
          <div className="filter-row">
            {["All", "Java", "Spring Boot", "React", "Cloud", "Node.js"].map(
              (f) => (
                <button
                  className={filter === f ? "active" : ""}
                  key={f}
                  onClick={() => setFilter(f)}
                  data-testid={`project-filter-${f.toLowerCase().replaceAll(" ", "-")}`}
                >
                  {f}
                </button>
              ),
            )}
          </div>
          <div className="projects-grid">
            {shown.map((p, i) => (
              <Reveal delay={i * 0.08} key={p.id}>
                <article
                  className={`project-card ${p.accent}`}
                  data-testid={`project-card-${p.id}`}
                >
                  <div className="project-art">
                    <span>{p.number}</span>
                    <div className="art-lines">
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <Code2 size={42} />
                  </div>
                  <div className="project-body">
                    <div className="project-top">
                      <span className="project-type">
                        Case study placeholder
                      </span>
                      <button
                        className="round-btn"
                        onClick={() => setSelected(p)}
                        data-testid={`project-details-${p.id}`}
                        aria-label={`View ${p.title} details`}
                      >
                        <ArrowUpRight size={17} />
                      </button>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <div className="tags">
                      {p.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
        <section
          id="experience"
          className="wrap section experience-layout"
          data-testid="experience-section"
        >
          <Reveal>
            <Heading
              eyebrow="04 / Experience"
              title="A timeline in progress."
              copy="Keep this section factual — update the data file with verified roles and contributions."
            />
          </Reveal>
          <div className="timeline">
            {experience.map((item, i) => (
              <Reveal delay={i * 0.1} key={i}>
                <article className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-meta">
                    <span>{item.period}</span>
                    <small>{item.company}</small>
                  </div>
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.description}</p>
                    <div className="tags">
                      {item.tags.map((t, i) => (
                        <span key={i+1}>{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
        <section
          id="achievements"
          className="wrap section"
          data-testid="achievements-section"
        >
          <Reveal>
            <Heading
              eyebrow="05 / Achievements"
              title="Signals of curiosity."
              copy="Add certifications, competitions and milestones as they become part of your story."
            />
          </Reveal>
          <div className="achievement-grid">
            {achievements.map((a, i) => (
              <Reveal delay={i * 0.08} key={a.title}>
                <article className="achievement-card">
                  <span className="achievement-icon">{a.icon}</span>
                  <div>
                    <h3>{a.title}</h3>
                    <p>{a.detail}</p>
                  </div>
                  <ChevronRight size={16} />
                </article>
              </Reveal>
            ))}
          </div>
        </section>
        <section
          id="contact"
          className="contact-section"
          data-testid="contact-section"
        >
          <div className="wrap contact-grid">
            <Reveal>
              <Heading
                eyebrow="06 / Contact"
                title={
                  <>
                    Have an interesting opportunity?
                    <br />
                    <em>Let's connect.</em>
                  </>
                }
                copy="I'm always interested in connecting with people, exploring opportunities and discussing interesting software engineering challenges."
              />
              <div className="contact-links">
                <a href={`mailto:${profile.email}`} data-testid="contact-email">
                  <Mail size={17} />
                  {profile.email}
                </a>
                <a href={profile.linkedin} data-testid="contact-linkedin">
                  {/* <Linkedin size={17} /> */}
                  LinkedIn profile <ExternalLink size={14} />
                </a>
                <a href={profile.github} data-testid="contact-github">
                  {/* <Github size={17} /> */}
                  GitHub profile <ExternalLink size={14} />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <form
                className="contact-form"
                onSubmit={handleSubmit(contact)}
                data-testid="contact-form"
              >
                <label>
                  Name
                  <input
                    {...register("name")}
                    placeholder="Your name"
                    data-testid="contact-name"
                  />
                  {errors.name && <small>{errors.name.message}</small>}
                </label>
                <label>
                  Email
                  <input
                    {...register("email")}
                    placeholder="you@example.com"
                    data-testid="contact-email-input"
                  />
                  {errors.email && <small>{errors.email.message}</small>}
                </label>
                <label>
                  Message
                  <textarea
                    {...register("message")}
                    placeholder="Tell me about the opportunity..."
                    rows="4"
                    data-testid="contact-message"
                  />
                  {errors.message && <small>{errors.message.message}</small>}
                </label>
                <button
                  className="primary-btn"
                  type="submit"
                  data-testid="contact-submit"
                >
                  Open email client <ArrowUpRight size={17} />
                </button>
                <p className="form-note">
                  <Check size={14} /> This opens your email app with a prefilled
                  message.
                </p>
              </form>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="footer wrap">
        <button
          className="brand"
          onClick={() => go("top")}
          data-testid="footer-brand"
        >
          <span className="brand-mark">A</span>Amritpal
          <span className="muted">.dev</span>
        </button>
        <span>© 2025 Amritpal Singh. Built with intent.</span>
        <button
          className="back-top"
          onClick={() => go("top")}
          data-testid="back-to-top"
        >
          <ArrowUp size={16} />
        </button>
      </footer>
      {selected && (
        <div
          className="modal-backdrop"
          onClick={() => setSelected(null)}
          data-testid="project-modal"
        >
          <motion.div
            className="project-modal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              data-testid="project-modal-close"
            >
              <X />
            </button>
            <span className="section-eyebrow">
              {selected.number} / Case study placeholder
            </span>
            <h2>{selected.title}</h2>
            <p>{selected.description}</p>
            <h4>Architecture</h4>
            <p className="architecture">{selected.architecture}</p>
            <h4>Key features</h4>
            <ul>
              {selected.features.map((f) => (
                <li key={f}>
                  <Check size={15} />
                  {f}
                </li>
              ))}
            </ul>
            <div className="modal-actions">
              <a
                className="ghost-btn"
                href={profile.github}
                data-testid="modal-github"
              >
                {/* GitHub profile <Github size={15} /> */}
              </a>
              <a
                className="primary-btn"
                href={`mailto:${profile.email}`}
                data-testid="modal-contact"
              >
                Ask about this project <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
