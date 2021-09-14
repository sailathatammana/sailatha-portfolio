import Card from "../components/Card";
import ModalCard from "../components/ModalCard";
import ProjectsData from "../data/projects.json";

export default function Portfolio({ setModal }) {
  const ProjectsList = ProjectsData.map((item) => (
    <Card key={item.id} information={item} onClick={() => setProjects(item)} />
  ));

  function setProjects(item) {
    setModal(<ModalCard information={item} />);
  }
  return (
    <div className="content-section" id="projects">
      <h2>Projects</h2>
      <div className="content-grid">
        <div>
          <p>
            Here are some projects that I have done so far and the ones that are
            coming up.
          </p>
        </div>
        <div className="projects-section">{ProjectsList}</div>
      </div>
    </div>
  );
}
