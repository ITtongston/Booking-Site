import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Assets/css/Hero.css";
import Features from "../components/Features";
import AnimatedText from "./Animations/AnimatedText";
import { Link } from "react-scroll";
import Logo from "../Assets/img/logo.png";
import styled from "styled-components";

const Hero = (props) => {
  // const {workspaces} = ref;

  AOS.init({
    duration: 600,
    easing: "ease",
  });

  const ImgDiv = styled.div`
      position: absolute;
      left: 2rem;
      top 2rem;

      & img{
        width: 6rem;
      }

      `;

  return (
    <div className="HeroContainer">
      <ImgDiv>
        <img src={Logo} alt="logo" />
      </ImgDiv>
      <div className="Hero">
        <h1>
          <AnimatedText />
        </h1>
        <h2 data-aos="fade-up">
          Become a valuable,influential and profitable brand with{" "}
          <span style={{ color: "yellow" }}>Tongston Entrepreneurial Hub</span>
        </h2>
        <div className="Btncont">
          <div className="secondBtn">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="transp"
            >
              <button
                type="button"
                data-aos="fade-down"
                data-aos-once="true"
                className="Herobtn2"
              >
                Book Our Services
              </button>
            </Link>
            <Link
              to="workspace"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="white"
            >
              <button
                type="button"
                data-aos="fade-up"
                data-aos-once="true"
                className="Herobtn2"
              >
                Explore Our Workspaces
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Hero;
