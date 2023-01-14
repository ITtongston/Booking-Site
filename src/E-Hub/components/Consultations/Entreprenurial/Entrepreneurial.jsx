import React from "react";
import styled from "styled-components";
import { Box} from "@mui/material";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";
import { Typography } from "@mui/material";

const courses = [
  {
    id: 1,
    title: "Data Science",
    text: "Data science training targeted at individuals between ages 15 and 50 who want to be well grounded in data science, analysis and research in whatever field thier in.",
    path: "/data",
  },
  {
    id: 2,
    title: "Tongston Introduction to Entrepreneurial Education",
    text: " Introductory entrepreneurial education for professional, career, academic, business performance improvement and development.",
    path: "http://tieec.webflow.io/",
  },
  {
    id: 3,
    title: "Career & Business Advisory Session",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate corrupti odit at magni.",
    path: "https://mailchi.mp/ace0a675887b/careerbusiness_advisory",
  },
  {
    id: 4,
    title: "Programmers Den",
    text: "A platform to learn programming and leverage our access to new technologies such as Vue.js, NodeJs, Javascript and Python",
    path: "/",
  },
];

const StyledBox = styled(Box)`
  max-width: 100%;
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

  &:hover h2 {
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
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
  align-items: center;
  justify-content: center;
`;

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

const Entrepreneurial = () => {
  return (
    <>
      <div style={{ margin: "10% 0", padding: "0 4%" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "30px",
            mb: "2em",
            color: "#373434",
          }}
        >
          Entrepreneurial Education
        </Typography>
        <StyledDiv>
          {courses.map((items) => (
            <StyledBox key={items.id}>
              <h2 style={{ width: "100%" }}>{items.title}</h2>
              <p>{items.text}</p>
              <Btn href={items.path} sx={{ color: "rgba(217, 6, 6, 1)" }}>
                More
                <span>
                  <FaCaretRight />
                </span>
              </Btn>
            </StyledBox>
          ))}
        </StyledDiv>
      </div>
    </>
  );
};

export default Entrepreneurial;
