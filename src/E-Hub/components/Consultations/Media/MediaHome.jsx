import { Box, Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import media from "../../../Assets/img/Mediahome.jpg";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";


const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  margin: 4rem 0;

  @media (max-width: 1000px) {
    & {
      flex-direction: column;
    }

  }
`;
// {}


const BoxBg = styled(Box)`
  background: url(${media}) no-repeat center;
  background-size: cover;
  height: 350px;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f6d620;
  transition: all 0.4s linear;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;

  &:hover {
    background: rgba(27, 29, 71, 1) no-repeat center;
    color: rgba(244, 238, 238, 1);
  }

  & h4 {
    position: relative;
  }

  & h4:before {
    position: absolute;
    width: 30%;
    margin: 0 40%;
    top: 150%;
    height: 3px;
    content: "";
    background-color: rgba(251, 250, 250, 1);
    border-radius: 5px;
  }
`;

const MediaHome = () => {
  return (
    <div>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: {sm: '30px', xs: '20px'},
          mb: "2em",
          mt: "1.5em",
          color: "#373434",
        }}
      >
        Entreprenuerial Multimedia
      </Typography>
      <StyledContainer data-aos="fade-up" data-aos-duration="1000">
        <Box sx={{ width: {sm: '50%', xs: '100%'}, marginBottom: "6rem", textAlign: {sm: "left", xs: "center"} }}>
          <Typography component="h2" style={{ fontSize: "1.7rem" }}>
            We help you break through the noise
          </Typography >
          <Typography sx={{ width: {sm: '75%', xs: '90%'}, textAlign: {sm: 'left', xs: 'center'}}}>
            Elevate your brand with our suite of products and services. Make
            customized media decisions for your business, government, or
            yourself. We are an award-winning communications agency with the
            ability to make the most out of your marketing spend.
          </Typography>
          <Button
            variant="text"
            sx={{
              borderColor: "#970B04",
              color: "#970B04",
              fontWeight: "bold",
              my: 3,
            }}
            component={Link}
            to="/media"
          >
            Explore
          </Button>
        </Box>
        <Box sx={{ width: {sm: '50%', xs: '90%'}}}>
          <BoxBg>
            <h4>Become That Choice Brand!</h4>
          </BoxBg>
        </Box>
      </StyledContainer>
    </div>
  );
};

export default MediaHome;
