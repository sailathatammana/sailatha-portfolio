import { useState } from "react";
import Modal from "./Modal";

export default function ProjectCard({
  title,
  preview,
  description,
  screenshot,
  technologies,
  isFinished,
  websiteURL,
  githubURL,
}) {
  const previewObject = require(`../assets/pictures/${preview}`);
  const previewURL = previewObject.default;
  const screenshotObject = require(`../assets/pictures/${screenshot}`);
  const screenshotURL = screenshotObject.default;

  const ProjTechList = technologies.map((item) => (
    <li className="pills">{item}</li>
  ));

  const [isOpen, setIsOpen] = useState(false);
  return (
    <article>
      <div
        onClick={() => isFinished && setIsOpen(true)}
        className={isFinished ? "normal" : "overlayed"}
      >
        {isFinished === false && (
          <div className="overlay-text">
            <p>Coming soon</p>
          </div>
        )}
        <img src={previewURL} alt="" />
        <h3>{title}</h3>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div id="modal-popup">
          <img src={screenshotURL} alt="" />
          <h2>{title}</h2>
          <p>{description}</p>
          <ul id="technologies-list">{ProjTechList}</ul>
          <div className="buttons">
            <button className="purple-button">
              <a target="blank" href={websiteURL}>
                Visit website/app
              </a>
            </button>
            <button className="white-button">
              <a target="blank" href={githubURL}>
                Git repository
              </a>
            </button>
          </div>
        </div>
      </Modal>
    </article>
  );
}
