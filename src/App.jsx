import './App.css';
import Skills from './components/Skills/Skills';
import About from './components/about/About';
import Contact from './components/contect/Contacts';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Scrollup from './components/scrollop/Scrollup';
import Work from './components/work/Work';

export default function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>

      <Footer />
      <Scrollup />
    </>
  );
}
