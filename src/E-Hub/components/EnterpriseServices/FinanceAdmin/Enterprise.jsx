import { Typography, Box, Paper, Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import image from "../../../Assets/img/enterprise.jpg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Link } from "react-router-dom";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import Logo from "../../../Assets/img/logo.png";

const StyledCont = styled.div`
  display: flex;
  align-items: center;
  jusify-content: center;
  flex-direction: column;
  padding: 5% 3%;
  gap: 2em;

  background: linear-gradient(
      to right,
      rgba(97, 4, 4, 0.663),
      rgba(153, 64, 64, 0.993)
    )
    center no-repeat;
  background-size: 100vw 100%;

  @media (max-wwidth: 1000px) {
    padding: 5% 5%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  border-radius: 4px;
`;

const StyledList = styled(ListItemText)`
  & .MuiListItemText-primary {
    font-weight: bold;
  }
`;

const EServices = styled.div`
  padding: 0 0 2rem;
`;

const ImgDiv = styled.div`
      position: absolute;
      left: 2rem;
      top 2rem;

      & img{
        width: 13rem;
      }

      @media (max-width: 900px){
        & img{
          width: 5rem;
        }
      }
  `;

const StyledButton = styled(Link)`
  min-width: 130px;
  margin: 0 auto;
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
  background: rgba(0, 0, 0, 1);
  overflow: hidden;
  border: 2px solid rgba(1, 2, 50, 0.97);
  color: #fff;
  font-size: 17px;
  margin: 0 auto;
  text-align: center;

  &:hover {
    color: rgba(0, 0, 0, 1);
    background: #fff;
  }

  &:hover:after {
    height: 0%;
    background: #fff;
  }

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.3s ease;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 1);
  }
`;

const Enterprise = () => {
  return (
    <StyledCont>
      <ImgDiv>
        <img src={Logo} alt="logo" />
      </ImgDiv>
      <Typography
        variant="h4"
        sx={{ fontWeight: { sm: "bold", xs: 600 }, color: "whitesmoke" }}
      >
        Your Enterprise-In-A-Box
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mt: "2rem",
          position: "relative",
          "& > :not(style)": {
            mt: 1,
            position: "relative",
            minWidth: "7rem",
            maxWidth: "75rem",
            height: "100%",
          },
        }}
      >
        <Paper elevation={0}>
          <Img src={image} alt="image" />

          <Box sx={{ pt: "3rem", px: "3%" }}>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", color: "darkgray" }}
            >
              The Perfect Tool Box for Your Entreprenuerial Needs
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  wordSpacing: "5px",
                  textAlign: "center",
                  width: { sm: "70%", xs: "90%" },
                  margin: "1rem auto",
                }}
              >
                We have created templates for your business needs across
                finance, legal, governance, data, strategy, technology, HR and
                administration. Our templates are at zero cost to you compared
                to the cost of hiring HR experts, lawyers, strategy consultants,
                governance & data experts, business & systems analysts or
                administrators. Our professional Templates & Tools are organized
                by category, document type, and business industry, and are
                designed to enable you achieve value, influence and
                profitability. Access templates, guides & tools; opportunities;
                training, experts and consultation for all your business needs,
                on demand, anywhere you are!
              </Typography>
            </Box>

            <EServices>
              <List
                sx={{
                  width: "100%",
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <PriceChangeOutlinedIcon
                      sx={{
                        fontSize: "4rem",
                        color: "rgba(229, 133, 4, 0.97)",
                      }}
                    />
                  </ListItemAvatar>
                  <StyledList
                    primary="Finance & Accounting"
                    sx={{ ml: "2rem" }}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Acces to Accounting and Audit Services
                        </Typography>
                        <Typography sx={{ my: "1rem" }}>
                          <li> ● Expense Reports</li>
                          <li>● Managing Expense Payments and Retirements</li>
                          <li> ● Financial Record Keeping</li>
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <SupervisorAccountOutlinedIcon
                      sx={{
                        fontSize: "4rem",
                        color: "rgba(229, 133, 4, 0.97)",
                      }}
                    />
                  </ListItemAvatar>
                  <StyledList
                    primary="HR & Admin"
                    sx={{ ml: "2rem" }}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Access Administration, Recruitment, Talent
                        </Typography>
                        <Typography sx={{ my: "1rem" }}>
                          <li> ● Meeting organization and management </li>
                          <li>● Sending emails, memos and letters </li>
                          <li> ● Minutes Taking and client Relations</li>
                          <li> ● Organizational Change </li>
                          <li> ● HR Analytics </li>
                          <li> ● Compensation & Benefits</li>
                          <li> ● Talent Management – Recruitment</li>
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <TroubleshootOutlinedIcon
                      sx={{
                        fontSize: "4rem",
                        color: "rgba(229, 133, 4, 0.97)",
                      }}
                    />
                  </ListItemAvatar>
                  <StyledList
                    primary="Data & Research"
                    sx={{ ml: "2rem" }}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Access Data Science Consulting and Research
                        </Typography>
                        <Typography sx={{ my: "1rem" }}>
                          <li> ● Introductory Data science</li>
                          <li>● Data Science - intermediate </li>
                          <li> ● Advance Data science</li>
                          <li> ● Organizational Change </li>
                          <li> ● Introduction to Research </li>
                          <li> ● Data gathering methods and Techniques</li>
                          <li>
                            ● Results, Presentation of Finding, and Drawing
                            Conclusion
                          </li>
                          <li>
                            ● Research Methodology and appropriateness of
                            methods
                          </li>
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <GavelOutlinedIcon
                      sx={{
                        fontSize: "4rem",
                        color: "rgba(229, 133, 4, 0.97)",
                      }}
                    />
                  </ListItemAvatar>
                  <StyledList
                    primary="Legal & Governance"
                    sx={{ ml: "2rem" }}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Access Legal, Governance & Corporate Secretarial
                          Services
                        </Typography>
                        <Typography sx={{ my: "1rem" }}>
                          <li> ● Company Formation / incorporation</li>
                          <li> ● Filing Annual Returns</li>
                          <li> ● Contracts Drafting </li>
                          <li> ● Regulatory certification procurement </li>
                          <li> ● Policies and Procedures Drafting</li>
                          <li>
                            ● Development of a purpose-built governance
                            structure
                          </li>
                          <li>
                            ● Research Methodology and appropriateness of
                            methods
                          </li>
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
              <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <StyledButton to="/enterprise-calendly">
                  Get started
                </StyledButton>
              </Box>
            </EServices>
          </Box>
        </Paper>
      </Box>
    </StyledCont>
  );
};

export default Enterprise;
