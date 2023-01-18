import React from "react";
import { Typography } from "@mui/material";
import { FaHubspot } from "react-icons/fa";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Summarycon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const SummaryParent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 2rem;
  // padding: 0 2%;
  width: 100%;

`;

const RestyledUl = styled.ul`
  list-style: none;
  margin-top: 0.5em;

  & li {
    font-size: 0.8rem;
    font-weight: 600;
    color: rgba(56, 56, 56, 0.88);
  }
`;

const ContainerParent = styled.div`
  margin-top: 3rem;
  // padding: 0 2%;
`;

const HubSummary = () => {
  return (
    <ContainerParent>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          fontSize: "25px",
          color: "#373434",
        }}
      >
        <FaHubspot color="rgb(179, 36, 0)" size={50} />
        Tongston Entrepreneurial Hub
      </Typography>
      <SummaryParent data-aos-duration="1000" data-aos="fade-up">
        <Summarycon>
          <Card sx={{ minWidth: 275, textAlign: "center" }} variant="outlined">
            <CardContent>
              <FaHubspot color="rgb(179, 36, 0)" />{" "}
              <span
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Entrepreneurial Workspaces
              </span>
              <RestyledUl>
                <li>Training Room</li>
                <li> Meeting Room</li>
                <li>Co-Working Space</li>
                <li>Virtual Office</li>
              </RestyledUl>
            </CardContent>
          </Card>

          <Card sx={{ minWidth: 275, textAlign: "center" }} variant="outlined">
            <CardContent>
              <FaHubspot color="rgb(179, 36, 0)" />{" "}
              <span
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Entrepreneurial Media
              </span>
              <RestyledUl>
                <li>Branding (Designs, Web Mgt & Identity)</li>
                <li> Advertising</li>
                <li>Public Relations & Communication</li>
                <li>Audio & Video Production & Editing</li>
                <li>Online Events Management</li>
              </RestyledUl>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275, maxWidth: 300,textAlign: "center" }} variant="outlined">
            <CardContent >
              <FaHubspot color="rgb(179, 36, 0)" />{" "}
              <span
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Entrepreneurial Enterprise
              </span>
              <RestyledUl>
                <li>
                  “Enterprise-in-a-box” Tools & Templates with how To Guides
                </li>
                <li>Opportunities Centre</li>
                <li>Entrepreneurial Insights</li>
                <li>
                  Consulting with Admin, HR, Data, Strategy, Technology, Legal,
                  Governance, Finance Experts Virtual Office
                </li>
              </RestyledUl>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275, textAlign: "center" }} variant="outlined">
            <CardContent>
              <FaHubspot color="rgb(179, 36, 0)" />{" "}
              <span
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Entrepreneurial Education
              </span>
              <RestyledUl>
                <li>Data Science</li>
                <li>Tongston Introduction to Entrepreneurial Education </li>
                <li>Career & Business Advisory</li>
                <li>Programmers Den</li>
              </RestyledUl>
            </CardContent>
          </Card>
        </Summarycon>
      </SummaryParent>
    </ContainerParent>
  );
};

export default HubSummary;
