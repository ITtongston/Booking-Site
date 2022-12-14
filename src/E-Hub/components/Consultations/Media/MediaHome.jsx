import { Box,Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import media from "../../../Assets/img/Mediahome.jpg";

import { Link } from "react-router-dom";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  margin: 4rem 0;
`;

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
      <h3
        style={{ textAlign: "center", fontSize: "1.5rem", marginTop: "2rem" }}
      >
        Entreprenuerial Multimedia
      </h3>
      <StyledContainer>
        <Box sx={{ width: "50%", marginBottom: "6rem" }}>
          <h3 style={{ fontSize: "1.7rem" }}>
            We help you break through the noise
          </h3>
          <p style={{ width: "70%", marginTop: "1rem" }}>
            Elevate your brand with our suite of products and services. Make
            customized media decisions for your business, government, or
            yourself. We are an award-winning communications agency with the
            ability to make the most out of your marketing spend.
          </p>
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
        <Box sx={{ width: "40%" }}>
          <BoxBg>
            <h4>Become That Choice Brand!</h4>
          </BoxBg>
        </Box>
      </StyledContainer>
    </div>
  );
};

export default MediaHome;
