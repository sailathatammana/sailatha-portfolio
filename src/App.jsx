import NavigationBar from "./components/NavigationBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Technologies from "./sections/Technologies";
import Contact from "./sections/Contact";
import "./styles/styles.css";

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <About />
      <Portfolio />
      <Technologies />
      <Contact />
    </div>
  );
}
