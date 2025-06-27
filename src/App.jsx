import './App.css';
import { useState, useEffect } from 'react';
import Header from "./components/header/Header";
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Intro from './components/intro/Intro';
import Cave from '../src/images/cave.webp'
import Projects from './components/closing/projects/Projects';
import Footer from './components/footer/Footer';


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
    <div className="relative min-h-screen w-screen">
      <img
        src={Cave}
        alt='Cave'
        className='fixed inset-0 h-screen w-screen object-cover'
      ></img>
      <Header vSize={vSize} />
      <Intro vSize={vSize} />
      <Skills vSize={vSize} />
      <Experience vSize={vSize} />
      <Projects vSize={vSize} />
      <Footer vSize={vSize} />
    </div>
  );
}

export default App;

