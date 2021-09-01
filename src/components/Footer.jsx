import Github from "../assests/icons/github.png";
import Linkedin from "../assests/icons/linkedin.png";

export default function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/sai-latha-tammana/"
            target="blank"
          >
            <img src={Linkedin} alt="" />
          </a>
        </li>
        <li>
          <a href="https://github.com/sailathatammana" target="blank">
            <img src={Github} alt="" />
          </a>
        </li>
      </ul>
      <p>2021 . SaiLatha Tammana</p>
    </footer>
  );
}
