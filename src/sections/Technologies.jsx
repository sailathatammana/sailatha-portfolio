import TechnologiesCard from "../components/TechnologiesCard";
import TechnologiesData from "../data/technologies.json";

export default function Technologies() {
  const TechnologiesList = TechnologiesData.map((item) => (
    <TechnologiesCard key={item.id} title={item.title} logo={item.logo} />
  ));
  return (
    <div className="content-section" id="tech">
      <div>
        <h2>Technologies I use</h2>
        <p>
          Here are the techologies that I already know and also starting to
          learn.
        </p>
      </div>
      <div className="grid-technologies">{TechnologiesList}</div>
    </div>
  );
}
