import Footer from "../components/Footer";
import Mail from "../assets/icons/mail.jpg";
import Call from "../assets/icons/call.jpg";
import Location from "../assets/icons/location.jpg";

export default function Contact() {
  return (
    <div className="content-section" id="contact">
      <div className="contact-section">
        <div>
          <h2>Contact me</h2>
          <p>
            Here is my contact information if you are interested in hiring me.
          </p>
        </div>
        <div>
          <ul>
            <li>
              <a href="mailto:sailathatammana1997@gmail.com">
                <img src={Mail} alt="" />
                sailathatammana1997@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+46 734856038">
                <img src={Call} alt="" /> +46 73 485 6038
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://en.wikipedia.org/wiki/Lund"
              >
                <img src={Location} alt="" /> Lund, Sweden
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
