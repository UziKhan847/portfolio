import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Intro from './components/intro/Intro';
import Cave from './images/cave.webp';
import Projects from './components/closing/projects/Projects';
import Footer from './components/footer/Footer';

// rAF-throttled viewport hook: coalesces rapid resize events into one update
// per frame and skips the state update entirely when dimensions are unchanged,
// so children that depend on vSize don't re-render on every resize tick.
function useViewportSize() {
  const [vSize, setVSize] = useState(() => ({
    w: window.innerWidth,
    h: window.innerHeight,
  }));

  useEffect(() => {
    let frame = null;

    const handleResize = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        setVSize((prev) => {
          const w = window.innerWidth;
          const h = window.innerHeight;
          return prev.w === w && prev.h === h ? prev : { w, h };
        });
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return vSize;
}

function App() {
  const vSize = useViewportSize();

  return (
    <div className="relative min-h-screen w-screen">
      <img
        src={Cave}
        alt=""
        aria-hidden="true"
        className="fixed inset-0 h-screen w-screen object-cover"
      />
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
