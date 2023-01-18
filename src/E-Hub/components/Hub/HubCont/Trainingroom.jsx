import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CardBox1 from "./Cards/CardBox1";
import Training from "../../../Assets/img/Trainingroom.jpg";
import Divider from "@mui/material/Divider";
import backpat from "../../../Assets/img/Picture3.png";
import Button from "@mui/material/Button";


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
          Training Room For Your Team
        </Typography>
        <Typography component="p" sx={{ fontSize: "15px", pt: "3" }}>
          Our entrepreneurial training & meeting rooms are state-of-the-art in
          the heart of the city of Abuja, fully equipped with projector, white
          boards, HMDI & VGA converters, TV screen, video and audio conferencing
          facilities and Wi-Fi.
        </Typography>
        <Button
          sx={{
            fontSize: 12,
            fontWeight: 400,
            textDecoration: "underline",
            color: "#862828",
          }}
        >
          Learn More
        </Button>
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
        <img src={Training} alt="" className="img" />
      </BoxFeatures>
    </ContainerBox>
  );
};

export default Trainingroom;
