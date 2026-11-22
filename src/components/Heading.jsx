import "@/App.css";

const Heading = ({ eyebrow, title, copy }) => (
  <div className="section-heading">
    <span className="section-eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </div>
);

export default Heading;