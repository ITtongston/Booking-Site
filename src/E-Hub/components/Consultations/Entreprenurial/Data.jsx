import React from "react";
import { Box } from "@mui/material";
import Data2 from "../../../Assets/img/data2.jpg";
import styled from 'styled-components';
import DataNav from './DataNav';


const IntroBox = styled.div`
position: relative;

& .imageBg {
  width: 100%;
  height: 80vh;
  background: url(${Data2}) center no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid rgba(198, 31, 31, 0.97);
  flex-direction: column;

}


`;

export let StyledButton = styled.button`
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
    color: rgba(1, 2, 50, 0.97); 
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
        background:rgba(1, 2, 50, 0.97);
    }

`

const Data = () => {
    

  return (
    <Box>
      <IntroBox>
        <Box className="imageBg">
          <h1 style={{ marginBottom: '2rem', color: 'rgba(232, 201, 7, 0.97)'}}>Leverage Data Science for the 21st century!</h1>
          <StyledButton style={{textAlign: 'center', margin: '0 auto'}}>Explore</StyledButton>
        </Box>
        <DataNav/>
      </IntroBox>
    </Box>
  );
};

export default Data;
