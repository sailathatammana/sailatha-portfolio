import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <div className="content-section" id="about">
      <h2>About me</h2>
      <div className="content-grid">
        <div>
          <p>Hi! A quick word about myself</p>
          <p>
            I am SaiLatha, a frontend developer from India. Software development
            is an art; a science that I use to make technology more accessible
            to people.
          </p>
          <p>
            I specialize in development on React with sleek and minimalist
            design. What does that look like, you might ask?
          </p>
          <p>Scroll ahead! I will let my work do the talking.</p>
        </div>
        <div className="image-about">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
}
