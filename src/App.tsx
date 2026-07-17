import About from './components/About/About';
import ArchitectureDiagram from './components/ArchitectureDiagram/ArchitectureDiagram';
import ChatSection from './components/Chatbot/ChatSection';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Trajectory from './components/Trajectory/Trajectory';
import {
  portfolioCopy,
  portfolioEducation,
  portfolioProjects,
  portfolioTimeline,
  skillAttention,
} from './data/portfolioData';
import styles from './App.module.css';

function App() {
  const copy = portfolioCopy;

  return (
    <div className={styles.root}>
      <div className={styles.grid} />

      <Nav name={copy.name} />
      <Hero name={copy.name} title={copy.title} tagline={copy.tagline} />
      <ArchitectureDiagram />
      <About p1={copy.about_p1} p2={copy.about_p2} p3={copy.about_p3} attention={skillAttention} />
      <Trajectory timeline={portfolioTimeline} />
      <Projects projects={portfolioProjects} />
      <Education education={portfolioEducation} />
      <ChatSection name={copy.name} />
      <Contact copy={copy} />
      <Footer name={copy.name} />
    </div>
  );
}

export default App;
