import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <div className="content-section" id="about">
      <h2>About me</h2>
      <p>
        Hi! I’m SaiLatha, a junior frontend developer from India. This is my
        portfolio, where you can find the projeccts that I developed.
      </p>
      <p>
        I specialize in React development with a minimalist design and attention
        to detail. Why do I need minimalistic design and attention to detail,
        you might ask?
      </p>
      <p>Well, Scroll down to see some of my work!</p>
      <div className="image-about">
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
}
