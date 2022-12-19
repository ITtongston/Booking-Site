import React from "react";
import { Box } from "@mui/material";
import tieec from "../../../Assets/img/tieecBg.jpg";
import styled from 'styled-components';
import TieecNav from './TIEECNav';


const IntroBox = styled.div`
position: relative;

& .imageBg {
  width: 100%;
  height: 80vh;
  background: linear-gradient(rgba(0, 0, 0, 0.663), rgba(0, 0, 0, 0.507)), url(${tieec}) center no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid rgba(255, 255, 255, 0.88);
  flex-direction: column;

}


`;

export const StyledButton = styled.button`
    min-width: 130px;
    height: 40px;
    padding: 5px 10px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    border-radius: 20px;
    z-index: 0;
    background: #fff;
    overflow: hidden;
    border: 2px solid rgba(1, 2, 50, 0.97);
    color: rgba(152, 0, 0, 1); 
    font-size: 17px;


    &:hover {
        color: #fff;
      }

    &:hover:after {
        height: 100%;
      }

    &:after {
        content: "";
        position: absolute;
        z-index: -1;
        transition: all 0.3s ease;
        left: 0;
        bottom: 0;
        height: 0;
        width: 100%;
        background:rgba(152, 0, 0, 1);
    }

`

const TIEEC = () => {
    

  return (
    <Box>
      <IntroBox>
        <Box className="imageBg">
          <h1 style={{ marginBottom: '2rem', color: 'rgba(239, 239, 239, 1)'}}>Become a Better Entrepreneurial Brand with TIEEC</h1>
          <StyledButton style={{textAlign: 'center', margin: '0 auto'}}>Explore</StyledButton>
        </Box>
        <TieecNav/>
      </IntroBox>
    </Box>
  );
};

export default TIEEC;
