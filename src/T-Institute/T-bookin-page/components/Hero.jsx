
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../Assets/css/Home.css";
import Features from "../components/Features";

const Hero = () => {
    AOS.init({
        duration: 600,
        easing: 'ease',
      });

  return (
    <div className="HeroContainer">
    <div className="Hero">
      <h1 data-aos="fade-up">
        Explore Unique blend of Accessibility and Real-time Professionals
      </h1>
      <h2 data-aos="fade-up">
        Book Advisory and consultation Sessions with Entrepreneurial Experts
        Today!
      </h2>
      <button type="button" data-aos="fade-down" data-aos-once="true" className="Herobtn2">
        See Our Services
      </button>
    </div>
    <Features />
  </div>
  )
}

export default Hero
