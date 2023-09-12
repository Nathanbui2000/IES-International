import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "remixicon/fonts/remixicon.css";
import Header from './components/Header/Header';
import Hero from './components/UI/Hero';
import Counter from './components/UI/Counter';
import  Services from './components/UI/Services';
import About from './components/UI/About';
import Team from './components/UI/Team';
import Blog from './components/UI/Blog'
import Testimonial from './components/UI/Testimonial';
import Newsletter from './components/UI/Newsletter';
import Footer from './components/UI/Footer';
function App() {
  return <>
    <Header/>
    <Hero/>
    <Counter/>
    <Services/>
    <About/>
    <Team/>
    <Blog/>
    <Testimonial/>
    <Newsletter/>
    <Footer/>
  </>
}

export default App;
