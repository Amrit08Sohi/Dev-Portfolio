import "@/App.css"
import Reveal from "./Reveal";
import Heading from "./Heading";
import { profile } from "@/data/profile";


const About = () => {
  return (
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
  );
};

export default About;