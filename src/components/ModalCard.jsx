import Pills from "./Pills";

export default function ModalCard({ information }) {
  const screenshotObject = require(`../assets/projects/${information.screenshot}`);
  const screenshotURL = screenshotObject.default;

  return (
    <div id="modal-popup">
      <div>
        <img src={screenshotURL} alt="" />
      </div>
      <div>
        <h2>{information.title}</h2>
        <p>{information.description}</p>
        <Pills technologies={information.technologies} />
        <div className="buttons">
          <button className="purple-button">
            <a target="blank" href={information.websiteURL}>
              Visit website/app
            </a>
          </button>
          <button className="white-button">
            <a target="blank" href={information.githubURL}>
              Git repository
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
