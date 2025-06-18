import './App.css';
import { useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from 'react';
import Header from "./components/header/Header";
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import IntroImage from './components/intro/IntroImage';


function useViewPortSize() {
  const [vSize, setVSize] = useState({ w: window.innerWidth, h: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setVSize({ w: window.innerWidth, h: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return vSize;
}

function App() {
  const vSize = useViewPortSize();

  return (
    <div className="relative min-h-screen w-screen bg-black text-gray-800">
      <Header vSize={vSize} />

      <IntroImage vSize={vSize} />

      <div>
        <Skills vSize={vSize} />
        <Experience />
        <Projects vSize={vSize} />

      </div>
    </div>
  );
}

export default App;
