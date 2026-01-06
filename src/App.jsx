
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Proyects from './components/Proyects';
import Contact from './components/Contact';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Languages />
      <Proyects />
      <Contact />
    </div>
  );
}

export default App;
