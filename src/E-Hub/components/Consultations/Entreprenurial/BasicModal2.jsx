import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { FaCaretRight } from "react-icons/fa";


const Btn = styled.a`
  color: rgba(217, 6, 6, 1);
  display: flex;
  align-items: center;
  margin-top: 15px;

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledBox = styled(Box)`
  max-width: 70%;
  color: #fff;
  padding: 5px 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border: 1px solid #000;
  color: #000;
  background: transparent;
  margin: 0 auto;
  tex &:hover h2 {
    transform: scale(0.9);
  }

  & h2 {
    margin-left: 5px;
    transition: all 0.3s ease;
  }

  &:after {
    content: "";
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 5px;
    left: 5px;
    transition: 0.2s;
    background-color: rgba(206, 206, 202, 0.55);
  }

  &:hover:after {
    top: 0;
    left: 0;
  }

  @media (max-width: 1000px) {
    max-width: 80%;
  }
`;

const InputCont = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items
  gap: 0.6rem;

  & input {
    width: 300px;
    height: 2.3rem;
    border-radius: 5px;
    outline: none;
    border: 2px solid rgba(4, 4, 4, 0.34);
    padding-left: 10px;
  }

  & input:focus {
    border: 2px solid rgba(148, 216, 255, 0.66);
  }
`;



export default function BasicModal2() {
  
  return (
    <div>
      <Box sx={{display: "flex", alignItems: 'center', justifyCenter: 'center'}}>
        <StyledBox>
          <h2 style={{ width: "100%" }}>Finance & Fundraising</h2>
          <p>
          A 3-part comprehensive session on building & scaling a profitable, valuable & influential business; managing & projecting your business finances.
          </p>
          <Btn href="https://tongston.selar.co/ow9a" sx={{ color: "rgba(217, 6, 6, 1)" }}>
            More
            <span>
              <FaCaretRight />
            </span>
          </Btn>
        </StyledBox>
      </Box>
    </div>
  );
}
