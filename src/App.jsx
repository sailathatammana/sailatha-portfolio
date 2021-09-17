import { useState } from "react";

import NavigationBar from "./components/NavigationBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Technologies from "./sections/Technologies";
import Contact from "./sections/Contact";
import Modal from "./components/Modal";
import "./styles/styles.css";

export default function App() {
  const [modal, setModal] = useState(null);

  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <About />
      <Portfolio setModal={setModal} />
      <Technologies />
      <Contact />

      {/* Modal popup */}
      <Modal state={[modal, setModal]} />
    </div>
  );
}
