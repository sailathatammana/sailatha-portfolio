import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="content-section" id="contact">
      <h2>Contact me</h2>
      <div className="content-grid">
        <p>
          Here is my contact information if you are interested in hiring me.
        </p>
        <div className="contact-section">
          <i class="fas fa-envelope"></i>
          <a href="mailto:sailathatammana1997@gmail.com">
            sailathatammana1997@gmail.com
          </a>
          <br />
          <i class="fas fa-phone-square-alt"></i>
          <a href="tel:+46 734856038"> +46 73 485 6038</a>
          <br />
          <i className="fas fa-map-marker-alt m-1"></i>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/Lund/"
          >
            Lund, Sweden
          </a>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}
