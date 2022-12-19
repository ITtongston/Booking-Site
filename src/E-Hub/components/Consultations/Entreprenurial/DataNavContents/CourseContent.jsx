import React from "react";
import CustomizedAccordions from "./AccordionComp";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import styled from 'styled-components'

const CourseContent = () => {


const HowCon = styled.div`
padding: 0 2%;
margin-top: 2rem;

`;

  return (
    <>
      <div>
        <h2 style={{ margin: "1rem auto", textAlign: "center" }}>
          The Course is divided into Three Modules
        </h2>
        <CustomizedAccordions />
      </div>
      <HowCon>
        <h3 style={{ margin: "1rem 0" }}>
          Upon completing this course you will know
        </h3>
        <List sx={{ml: 6}}>
          <ListItem>
            <ListItemIcon>
              <AdjustIcon />
            </ListItemIcon>
            <ListItemText>
              How to clean and prepare your data for analysis
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AdjustIcon />
            </ListItemIcon>
            <ListItemText>
            How to model your data
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AdjustIcon />
            </ListItemIcon>
            <ListItemText>
            How to curve-fit your data
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AdjustIcon />
            </ListItemIcon>
            <ListItemText>
            How to perform basic visualisation of your data
            </ListItemText>
          </ListItem>
        </List>
      </HowCon>
    </>
  );
};

export default CourseContent;
