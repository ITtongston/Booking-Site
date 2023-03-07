import React from "react";
import { Typography } from "@mui/material";
import { FaHubspot } from "react-icons/fa";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Education, workspaces, Media, Enterprise } from "./HubSummaryBullets";
import { ListItemIcon, ListItemText} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';


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
  margin: 2rem 0 3rem;
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
          fontSize: "30px",
          color: "#373434",
          fontWeight: "bold",
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
                {workspaces.map((tags) => (
                  <ListItem key={tags.id} disablePadding={true}>
                    <ListItemIcon>
                      <RadioButtonCheckedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>{tags.tag}</ListItemText>
                  </ListItem>
                ))}
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
              {Media.map((tags) => (
                  <ListItem key={tags.id} disablePadding={true}>
                    <ListItemIcon>
                      <RadioButtonCheckedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>{tags.tag}</ListItemText>
                  </ListItem>
                ))}
              </RestyledUl>
            </CardContent>
          </Card>
          <Card
            sx={{ minWidth: 275, maxWidth: 300, textAlign: "center" }}
            variant="outlined"
          >
            <CardContent>
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
              {Enterprise.map((tags) => (
                  <ListItem key={tags.id} disablePadding={true}>
                    <ListItemIcon>
                      <RadioButtonCheckedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>{tags.tag}</ListItemText>
                  </ListItem>
                ))}
              </RestyledUl>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275, textAlign: "center" }} variant="outlined">
            <CardContent>
              <FaHubspot color="rgb(179, 36, 0)" />
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
              {Education.map((tags) => (
                  <ListItem key={tags.id} disablePadding={true}>
                    <ListItemIcon>
                      <RadioButtonCheckedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>{tags.tag}</ListItemText>
                  </ListItem>
                ))}
              </RestyledUl>
            </CardContent>
          </Card>
        </Summarycon>
      </SummaryParent>
    </ContainerParent>
  );
};

export default HubSummary;
