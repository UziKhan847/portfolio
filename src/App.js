import './App.css';
import { useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from 'react';
import Header from "./components/header/Header";
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import IntroImage from './components/intro/IntroImage';
import Cave from '../src/images/cave.webp'
import Closing from './components/closing/Closing';


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
      <IntroImage vSize={vSize} />
      <Skills vSize={vSize} />
      <Experience vSize={vSize} />
      <Closing vSize={vSize} />
      <div className='relative h-screen w-screen bg-white'></div>
    </div>
  );
}

export default App;
