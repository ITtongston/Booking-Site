import React from "react";
import styled, {keyframes} from "styled-components";
import Bitrix from "../Assets/patnerlogo/Bitrix24.png";
import CDI from "../Assets/patnerlogo/CDI.png";
import GFEL2 from "../Assets/patnerlogo/GFEL2.jpg";
import Leader from "../Assets/patnerlogo/Leadership.png";
import Gombe from "../Assets/patnerlogo/Gombe.jpg";
import NITDA from "../Assets/patnerlogo/NITDA.png";
import SOS from "../Assets/patnerlogo/SOS.png";
import Thinkific from "../Assets/patnerlogo/thinkific.png";
import Raw from "../Assets/patnerlogo/Raw.jpg";
import PF5 from "../Assets/patnerlogo/PF5.jpg";
import Onegrey from "../Assets/patnerlogo/onegrey.png";
import { Typography, Box } from "@mui/material";


const Images = [
  {
    id: 1,
    img: Bitrix,
  },

  {
    id: 2,
    img: GFEL2,
  },
  {
    id: 3,
    img: Leader,
  },
  {
    id: 4,
    img: Gombe,
  },
  {
    id: 5,
    img: NITDA,
  },
  {
    id: 6,
    img: SOS,
  },
  {
    id: 7,
    img: Thinkific,
  },
  {
    id: 8,
    img: Onegrey,
  },
  {
    id: 9,
    img: CDI,
  },
  {
    id: 10,
    img: PF5,
  },
  {
    id: 11,
    img: Raw,
  },
];

const Img = styled.img`
  width: 6rem;
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  margin: auto;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const Slide = styled(Box)`
  display: flex;
  align-items: center;
  padding: 15px;
  perspective: 50px;
  height: 250px;
  width: 250px;

  @media (max-width: 1000px){
    padding: 5px;
    width: 140px;
  }
`;

const ScrollAnimation = keyframes`
0%{
  transform: translateX(0);
}
100%{
  transform: translateX(calc(-100px * 5.5));
}
`
const SliderTrack = styled.div`
  display: flex;
  animation: ${ScrollAnimation} 30s linear infinite;
`;

const Partners = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: {sm: '30px', xs: '20px'},
          mb: "2em",
          color: "#373434",
        }}
      >
        Our Trusted Partners
      </Typography>
      <Slider>
        <SliderTrack data-aos-duration="1000" data-aos="fade-up">
          {Images.map((imgs) => (
            <Slide>
              <Img key={imgs.id} src={imgs.img} alt="images" />
            </Slide>
            
          ))}
        </SliderTrack>
      </Slider>
    </>
  );
};

export default Partners;
