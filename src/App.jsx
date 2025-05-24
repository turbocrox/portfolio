import './App.css';
import './index.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Hero from './sections/hero.jsx';  // Changed to capital Hero
import ShowcaseSection from './sections/ShowcaseSection.jsx';
import NavBar from './components/NavBar.jsx';
import FeatureCards from './sections/FeaturedCards.jsx';
import  Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
function App() {
  return (<div>

     <NavBar/>
      <Hero />
      <ShowcaseSection/>
      <FeatureCards/>
      <Contact/>
      <Footer/>
    
    </div>
  );
}

export default App;