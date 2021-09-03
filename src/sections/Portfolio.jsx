import Card from "../components/Card";
import ProjectsData from "../data/projects.json";

export default function Portfolio() {
  const ProjectsList = ProjectsData.map((item) => (
    <Card key={item.id} information={item} />
  ));
  return (
    <div className="content-section" id="projects">
      <h2>Projects</h2>
      <div className="content-grid">
        <div>
          <p>
            Here are the projects I will be making during the Frontend course at
            Novare Potential.
          </p>
        </div>
        <div className="projects-section">{ProjectsList}</div>
      </div>
    </div>
  );
}
