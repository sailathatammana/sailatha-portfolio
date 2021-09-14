export default function TechnologyCard({ title, logo }) {
  const logoObject = require(`../assets/technologies/${logo}`);
  const logoURL = logoObject.default;

  return (
    <div className="tech-section">
      <img src={logoURL} alt="" />
      <h3>{title}</h3>
    </div>
  );
}
