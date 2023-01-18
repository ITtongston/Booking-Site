import React from "react";
import styled from "styled-components";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

import HowToRegIcon from "@mui/icons-material/HowToReg";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { Link } from "react-router-dom";

const OverviewHighLight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  box-shadow: 0 2px 3px rgba(14, 14, 15, 0.19);
  width: 80%;
  padding: 2%;
  margin: 1rem auto 2rem;
  border-radius: 15px;

  & .conOverview {
    font-size: 14px;
  }
`;

const TargetUl = styled.ul`
  & li {
    width: 60%;
  }
`;

const Unique = styled.div`
  margin: 2rem 0;

  & h3 {
    font-size: 25px;
  }
`;

const TargetAudience = styled.div`
  & h3 {
    font-size: 25px;
  }
`;

const Values = [
  {
    id: 1,
    text: "Unique content: Learners find it easier to learn and practice by adding assessment sessions, and a project completion before getting the certificate ",
    icon: <BookmarkAddedIcon />,
  },
  {
    id: 2,
    text: "Courses are entrepreneurial focused e.g. data analysis training in the medical line will focus on medical related real life content, data collection and analysis or MSE related data for MSMEs",
    icon: <HowToRegIcon />,
  },
  {
    id: 3,
    text: "Gain Knowledge about Cutting-Edge Technology",
    icon: <PsychologyIcon />,
  },
  {
    id: 4,
    text: "High Salary: Learn to increase your competitive advantage, bring more to the table and earn more in your business or where you work.",
    icon: <PriceCheckIcon />,
  },
  {
    id: 5,
    text: "Flexible Learning: You can learn regardless of where you are.",
    icon: <LocalLibraryIcon />,
  },
  {
    id: 6,
    text: `${(
      <span>Gain Entrepreneurial Thinking Skill</span>
    )}Learn from Tongston T-Institute Faculty the skill knowledge, skills and attitude you need to be an innovative entrepreneur and intrapreneur.`,
    icon: <LightbulbIcon />,
  },
];

const BuyButton = styled(Link)`
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
  text-align: center;

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
    background: rgba(1, 2, 50, 0.97);
  }
`;
const Overviews = () => {
  return (
    <div style={{ padding: "0 4%" }}>
      <OverviewHighLight>
        <Box>
          <h3>Accredited</h3>
          <Typography className="conOverview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            deleniti.
          </Typography>
        </Box>
        <Box>
          <h3>100% online</h3>
          <Typography className="conOverview">
            Hands-on learning from anywhere, no travel required
          </Typography>
        </Box>
        <Box>
          <h3>Taught in English</h3>
          <Typography className="conOverview">
            Engage directly with the Instructor on self-paced learning{" "}
          </Typography>
        </Box>
        <Box>
          <h3>3 months</h3>
          <Typography className="conOverview">
            3 courses total, 10-12 hours per week
          </Typography>
        </Box>
        <Box>
          <h3>$60 USD total cost</h3>
          <Typography className="conOverview">
            {" "}
            One-off payment For all level of the course
          </Typography>
        </Box>
      </OverviewHighLight>
      <Box>
        <h1
          style={{ width: "60%", margin: "4rem auto 0", textAlign: "center" }}
        >
          Start or Advance your career with Our top Course in Data Science
        </h1>
        <Typography
          sx={{
            width: "60%",
            py: 3,
            wordSpacing: "2px",
            fontSize: "20px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          The world is currently revolving around data, as such all employees
          (intrapreneurs) and Employers of labor entrepreneurs need the ability
          to collect (research), store and manage and analyze complex business,
          marketing and operational data no matter the field and profession of
          interest.
        </Typography>
        <TargetAudience>
          <h3 style={{ marginBottom: "10px" }}>
            Target Audience for this Course
          </h3>
          <TargetUl sx={{}}>
            <li>
              <h5>Professionals</h5> Professional in any field looking to
              leverage on Data Analysis, Data Science and Research for increased
              performance, proficiency, output or career development.
            </li>
            <li>
              <h5>Entrepreneurs</h5> Entrepreneurs in any field looking to
              leverage on Data Analysis, Data Science and Research for increased
              performance, proficiency, output or business and career
              development.
            </li>
            <li>
              <h5>Individuals</h5> Individuals looking to start a career in Data
              analysis, Data science and Research
            </li>
          </TargetUl>
        </TargetAudience>
        <Unique>
          <h3>Unique Value proposition</h3>
          {Values.map((value) => (
            <List sx={{ width: "50%" }} key={value.id}>
              <ListItem disablePadding={true}>
                <ListItemIcon>{value.icon}</ListItemIcon>
                <ListItemText>{value.text}</ListItemText>
              </ListItem>
            </List>
          ))}
        </Unique>

        <BuyButton to="/">Buy Now</BuyButton>
      </Box>
    </div>
  );
};

export default Overviews;
