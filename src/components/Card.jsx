export default function ProjectCard({ information, onClick }) {
  const previewObject = require(`../assets/projects/${information.preview}`);
  const previewURL = previewObject.default;
  return (
    <article onClick={onClick}>
      <div
        onClick={() => information.isFinished}
        className={information.isFinished ? "normal" : "overlayed"}
      >
        {information.isFinished === false && (
          <div className="overlay-text">
            <p>Coming soon</p>
          </div>
        )}
        <img src={previewURL} alt="" />
        <h3>{information.title}</h3>
      </div>
    </article>
  );
}
