import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Assets/css/Hero.css";
import Features from "../components/Features";
import AnimatedText from "./Animations/AnimatedText";
import { Link } from "react-scroll";
import Logo from "../Assets/img/logo.png";
import styled from "styled-components";
import { Typography } from "@mui/material";

const Hero = (props) => {
  // const {workspaces} = ref;

  AOS.init({
    duration: 600,
    easing: "ease",
  });

  const ImgDiv = styled.div`
      position: absolute;
      left: 1rem;
      top 1rem;

      & img{
        width: 20rem;
      }

      @media (max-width: 900px){
        & img{
          width: 5rem;
        }
      }

      `;

  return (
    <div className="HeroContainer">
      <Link style={{ cursor: "pointer" }} to="/">
        <ImgDiv>
          <img src={Logo} alt="logo" />
        </ImgDiv>
      </Link>
      <div className="Hero">
        <h1>
          <AnimatedText />
        </h1>
        <h2 data-aos="fade-up">
          Become a{" "}
          <Typography
            component="span"
            sx={{
              color: "yellow",
              fontWeight: 900,
              fontSize: { sm: "25px", xs: "17px" },
            }}
          >
            V
          </Typography>
          aluable,{" "}
          <Typography
            component="span"
            sx={{
              color: "yellow",
              fontWeight: "900",
              fontSize: { sm: "25px", xs: "17px" },
            }}
          >
            I
          </Typography>
          nfluential &{" "}
          <Typography
            component="span"
            sx={{
              color: "yellow",
              fontWeight: "900",
              fontSize: { sm: "25px", xs: "17px" },
            }}
          >
            P
          </Typography>
          rofitable brand with
          <span
            style={{
              color: "yellow",
              marginLeft: "10px",
            }}
          >
            Tongston Entrepreneurial Hub
          </span>
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
                See our Enterprise Services
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
                Book Our Workspaces
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
