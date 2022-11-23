import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles"; 
import { Button } from "@mui/material";


const BookBtn = styled(Button)`
    outline: none;
    transition: 0.3s all linear;
    &:hover {
      background-color: #970b04;
      color: white;
      border: none;
    }
  `;

const ButtonConsult = () => {
  

  return (
    <div>
      <BookBtn
        variant="text"
        sx={{
          borderColor: "#970B04",
          color: "#970B04",
          fontWeight: "bold",
          my: 3,
        }}
        component={Link}
        to="/bookform"
      >
        Consult us
      </BookBtn>
    </div>
  );
};

export default ButtonConsult;
