// Name -1
// It should be TechnologyCard (singular)
// The parent section is Technologies plural, but each individual item is a singular name not a plural name
export default function TechnologiesCard({ title, logo }) {
  const logoObject = require(`../assets/technologies/${logo}`);
  const logoURL = logoObject.default;

  return (
    <div className="tech-section">
      <img src={logoURL} alt="" />
      <h3>{title}</h3>
    </div>
  );
}
