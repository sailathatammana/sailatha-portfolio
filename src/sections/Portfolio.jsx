import Card from "../components/Card";
import ProjectsData from "../data/projects.json";

export default function Portfolio() {
  const ProjectsList = ProjectsData.map((item) => (
    <Card
      key={item.id}
      title={item.title}
      preview={item.preview}
      description={item.description}
      screenshot={item.screenshot}
      technologies={item.technologies}
      isFinished={item.isFinished}
      githubURL={item.githubURL}
      websiteURL={item.websiteURL}
    />
  ));
  return (
    <div className="content-section" id="projects">
      <div>
        <h2>Projects</h2>
        <p>
          Here are the projects I will be making during the Frontend course at
          Novare Potential.
        </p>
      </div>
      <div className="projects-section">{ProjectsList}</div>
    </div>
  );
}
