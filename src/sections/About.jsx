import profile from "../assests/profile.jpg";

export default function About() {
  return (
    <div id="about">
      <h1>About me</h1>
      <p>
        Hi! I’m SaiLatha, a junior frontend developer from India. This is my
        portfolio, where you can find the projeccts that I developed.
      </p>
      <p>
        I specialize in React development with a minimalist design and attention
        to detail. Why do I need minimalistic design and attention to detail,
        you might ask? Well, scroll down and let me convince you.
      </p>
      <p>Scroll down to see some of my work!</p>
      <img src={profile} alt="" />
    </div>
  );
}
