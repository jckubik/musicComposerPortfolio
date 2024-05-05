import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Credits from './components/Credits';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import TopImage from './components/TopImage';

function App() {
  return (
    <div>
      <Header />
      <TopImage />
      <Portfolio />
      <Credits />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;