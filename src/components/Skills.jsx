import "@/App.css";
import Heading from "./Heading";
import Reveal from "./Reveal";
import { skillGroups } from "@/data/profile";
import { Cloud, Code2, Database, Server, Terminal } from "lucide-react";


const Skills = () => {
  const icons = {
    Backend: Server,
    Frontend: Code2,
    Database,
    "Cloud & DevOps": Cloud,
    Tools: Terminal,
  };
  return (
    <section id="skills" className="wrap section" data-testid="skills-section">
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
            <Reveal delay={i * 0.08} key={group.title}>
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
  );
};

export default Skills;
