import './App.css';
import Background from './components/Background';
import Header from './components/Header';
import Initial from './components/Initial';
import Presentation from './components/Presentation';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Background>
      <Header />
      <Initial />
      <Presentation />
      <Skills />
      <Projects />
      <Contact />
    </Background>
  );
}

export default App;
