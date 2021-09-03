import { useState } from "react";
import Modal from "./Modal";
import Pills from "./Pills";

export default function ProjectCard({ information }) {
  const previewObject = require(`../assets/projects/${information.preview}`);
  const previewURL = previewObject.default;
  const screenshotObject = require(`../assets/projects/${information.screenshot}`);
  const screenshotURL = screenshotObject.default;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <article>
      <div
        onClick={() => information.isFinished && setIsOpen(true)}
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
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div id="modal-popup">
          <div className="modal-grid">
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
        </div>
      </Modal>
    </article>
  );
}
