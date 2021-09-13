import TechnologiesCard from "../components/TechnologiesCard";
import TechnologiesData from "../data/technologies.json";

export default function Technologies() {
  const TechnologiesList = TechnologiesData.map((item) => (
    <TechnologiesCard key={item.id} title={item.title} logo={item.logo} />
  ));
  return (
    <div className="content-section" id="tech">
      <h2>Technologies I use</h2>
      <div className="content-grid">
        <div>
          <p>Technologies that I'm comfortable with and also geting there.</p>
        </div>
        <div className="grid-technologies">{TechnologiesList}</div>
      </div>
    </div>
  );
}
