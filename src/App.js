import logo from './logo.svg';
import './App.css';
import Mynav from './config/Mynav';
import Hero from './components/Hero';
import About from './components/About';
import Feature from './components/Feature';
import Guide from './components/Guide';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Trending from './components/Trending';

function App() {
  return (
    <div>
      <Mynav />
      <Hero />
      <About />
      <Feature />
      <Guide />
      <Testimonial />  
      <Trending />  
      <Footer />
    </div>
  );
}

export default App;
