import './App.css';
import Hero from './Components/Homepage/Hero';
import Navbar from './Components/Homepage/Navbar';
import PreLoader from './Components/Homepage/PreLoader';
import Facts from './Components/Homepage/Facts';
import Services from './Components/Homepage/Services';
import Features from './Components/Homepage/Features';
import Pricing from './Components/Homepage/Pricing';
import Quotes from './Components/Homepage/Quotes';
import Team from './Components/Homepage/Team';
import Footer from './Components/Homepage/Footer';
import Testimonial from './Components/Homepage/Testimonial';
import About from './Components/Homepage/About';

function App() {
  return (
    <div>
      {/* <PreLoader/> */}
      <Navbar/>
      <Hero/>
      <Facts/>
      <About/>
      <Services/>
      <Features/>
      <Pricing/>
      <Testimonial/>
      <Quotes/>
      <Team/>
      <Footer/>

    </div>
  );
}

export default App;
