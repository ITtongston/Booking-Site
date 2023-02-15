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
    & span{
      text-align: center;
    }
  }
`;

const AnimatedText = () => {
  return (
    <>
      <TextDiv>
        <span>
          First Class blend of Entrepreneurial
        </span>
        <MovingText
          type="typewriter"
          dataText={["Media", "WorkSpace", "Enducation", "Enterprise"]}
        />
      </TextDiv>
    </>
  );
};

export default AnimatedText;
