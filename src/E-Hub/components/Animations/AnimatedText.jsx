import { Typography } from "@mui/material";
import React from "react";
import MovingText from "react-moving-text";
import styled from "styled-components";

const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  @media (max-width: 1000px) {
    flex-direction: column;
    & span {
      text-align: center;
    }
  }
`;

const AnimatedText = () => {
  return (
    <>
      <TextDiv>
        <span>First Class blend of Entrepreneurial</span>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { sm: "30px", xs: "20px" },
            color: "rgba(199, 0, 0, 0.88)",
          }}
        >
          <MovingText
            type="typewriter"
            dataText={["Media", "WorkSpace", "Education", "Enterprise"]}
          />
        </Typography>
      </TextDiv>
    </>
  );
};

export default AnimatedText;
