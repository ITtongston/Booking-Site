import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CardBox1 from "./Cards/CardBox1";
import Training from "../../../Assets/img/Trainingroom.jpg";
import Training1 from "../../../Assets/img/workspace/TrainingRoom1.jpg";
import Training2 from "../../../Assets/img/workspace/TrainingRoom2.jpg";
import Training3 from "../../../Assets/img/workspace/TrainingRoom3.jpg";
import Training4 from "../../../Assets/img/workspace/TrainingRoom4.jpg";
import Training5 from "../../../Assets/img/workspace/TrainingRoom5.jpg";
import Divider from "@mui/material/Divider";
import backpat from "../../../Assets/img/Picture3.png";
import Button from "@mui/material/Button";
import { Carousel } from "react-responsive-carousel";

const BoxFeatures = styled(Box)`
  display: flex;
  align-items: center;
  max-width: 90%;
  gap: 10%;
  margin-left: 1em;

  & .img {
    border-radius: 47% 53% 77% 23% / 37% 40% 60% 63%;
    max-width: 40%;
    margin-bottom: 40%;
    // margin-right: 4em;
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;

    & .img {
      margin-bottom: 10%;
      max-width: 60%;
    }
  }
`;

const ContainerBox = styled(Box)`
  background: url(${backpat}) center no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 2em;
  width: 100%;
  padding: 0 5%;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0 2%;
  }
`;
// SC

const Trainingroom = () => {
  const images = [
    {
      id: 1,
      url: Training,
    },
    {
      id: 2,
      url: Training1,
    },
    {
      id: 3,
      url: Training2,
    },
    {
      id: 4,
      url: Training3,
    },
    {
      id: 5,
      url: Training4,
    },
    {
      id: 6,
      url: Training5,
    },
  ];
  return (
    <ContainerBox className="Hub1">
      <Box
        sx={{
          border: "solid 2px #b3b3b3",
          borderRadius: "5px",
          p: 2,
          width: { sm: 400, xs: 300 },
          mb: "17%",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#0C0145",
            fontSize: { xs: "11px", sm: "17px" },
            fontWeight: 600,
            mb: 1,
          }}
        >
          Superior training room with professional Assistance
          {/* Training Room For Your Team */}
        </Typography>
        <Typography component="p" sx={{ fontSize: "15px", pt: "3" }}>
          {/* Our entrepreneurial training & meeting rooms are state-of-the-art in
          the heart of the city of Abuja, fully equipped with projector, white
          boards, HMDI & VGA converters, TV screen, video and audio conferencing
          facilities and Wi-Fi. */}
          Our entrepreneurial training room is state-of-the-art in the heart of
          the city of Abuja, by the Central Bank of Nigeria, fully equipped with
          a projector, whiteboards, HMDI & VGA converters, video and
          audio-conferencing facilities for a hybrid or virtual experience, and
          Wi-Fi. Can take up to 25 people. Our training room comes with access
          to our multi-media studio services to capture your event with
          high-definition pictures and videos for marketing purposes. We provide
          design services to put together marketing collateral to amplify your
          events or workshops. We have an on-site team that can arrange
          refreshments & food for your guests to have a great experience. You
          can also access our fully equipped pantry. <br /> Book now!
        </Typography>
      </Box>
      <Divider
        sx={{ ml: 4, display: { xs: "none", sm: "block" } }}
        orientation="vertical"
        variant="middle"
        flexItem
      />
      <BoxFeatures>
        <div data-aos="fade-up" data-aos-duration="900">
          <CardBox1 />
        </div>

        <Carousel
          className="crsl"
          autoFocus={true}
          autoPlay={true}
          infiniteLoop
          centerMode
        >
          {images.map((image) => (
            <img
              key={image.id}
              src={image.url}
              alt=""
              // className="img"
            />
          ))}
        </Carousel>
        {/* <img src={Training} alt="" className="img" /> */}
      </BoxFeatures>
    </ContainerBox>
  );
};

export default Trainingroom;
