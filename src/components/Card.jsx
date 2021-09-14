export default function ProjectCard({ information, modalData }) {
  const previewObject = require(`../assets/projects/${information.preview}`);
  const previewURL = previewObject.default;

  function onClick() {
    if (information.isFinished) {
      modalData(information);
    }
  }

  return (
    <article>
      <div
        onClick={() => onClick()}
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
