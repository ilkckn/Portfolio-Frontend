import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`container ${theme}`}>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
