import Header from './components/header/Header';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Intro from './components/intro/Intro';
import Cave from './images/cave.webp';
import Projects from './components/closing/projects/Projects';
import Footer from './components/footer/Footer';
import { ViewportProvider } from './viewport';

function App() {
  return (
    <ViewportProvider>
      <div className="relative min-h-screen w-screen">
        <img
          src={Cave}
          alt=""
          aria-hidden="true"
          className="fixed inset-0 h-screen w-screen object-cover"
        />
        <Header />
        <Intro />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </ViewportProvider>
  );
}

export default App;
