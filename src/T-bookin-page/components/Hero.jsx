
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../Assets/css/Hero.css";
import Features from "../components/Features";
import AnimatedText from './Animations/AnimatedText';

const Hero = () => {
    AOS.init({
        duration: 600,
        easing: 'ease',
      });

  return (
    <div className="HeroContainer">
    <div className="Hero">
      <h1>
        <AnimatedText/>
      </h1>
      <h2 data-aos="fade-up">
       Esteemed Experience at Your Finger Tips
      </h2>
     <div className="Btncont">
      <div className="secondBtn">
        <span className='transp'><button type="button" data-aos="fade-down" data-aos-once="true" className="Herobtn2">
          See Our Services
        </button>
        </span>
        <span className='white'><button type="button"  data-aos="fade-up" data-aos-once="true"  className="Herobtn2">
            Book Our Hubs
        </button>
        </span>
      </div>
     </div>
    </div>
    <Features />
  </div>
  )
}

export default Hero
