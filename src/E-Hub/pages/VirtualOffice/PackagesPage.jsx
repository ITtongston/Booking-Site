import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import DoneSharpIcon from "@mui/icons-material/DoneSharp";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Gold, Silver, Bronze, GoldPlus, Platinum } from "./Packages";
import styled from "styled-components";
import PackageBg from "../../Assets/img/packageBg.svg";
import { fontWeight } from "@mui/system";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";

const PackageCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${PackageBg}) center no-repeat;
  background-size: 100vw;
  padding: 0 4%;
`;

const HeadingText = styled.div`
  margin-top: 3rem;
`;

const Papercard = styled.div`
display: flex;
justify-content: center;
alignItems: center;
// flexWrap: wrap;
gap: 1.5rem;
& > :not(style){
  margin: 1;
  width: 380px;
  padding: 1rem 1rem 0.5rem;
  height: 80%;
  margin-top: 4rem;
  border-radius: 10px;
  background-color: #f1f1f1;
  background-image: url(
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23320008' fill-opacity='0.18' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"
  )
`;

const PlanButton = styled(Link)`
  width: 50%;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: 2px solid #d90429;
  background: rgba(194, 29, 44, 0.98);
  text-align: center;
  margin-left:50%;

  &:hover {
    background: none;
    color: #d90429;
  }
`;

const BronzeTags = Bronze.map((tags) => (
  <ListItem>
    <ListItemIcon>
      <DoneSharpIcon />
    </ListItemIcon>
    <ListItemText>{tags.tag}</ListItemText>
  </ListItem>
));
const GoldTags = Gold.map((tags) => (
  <ListItem>
    <ListItemIcon>
      <DoneSharpIcon />
    </ListItemIcon>
    <ListItemText>{tags.tag}</ListItemText>
  </ListItem>
));
const GoldPlusTags = GoldPlus.map((tags) => (
  <ListItem>
    <ListItemIcon>
      <DoneSharpIcon />
    </ListItemIcon>
    <ListItemText>{tags.tag}</ListItemText>
  </ListItem>
));
const SilverTags = Silver.map((tags) => (
  <ListItem>
    <ListItemIcon>
      <DoneSharpIcon />
    </ListItemIcon>
    <ListItemText>{tags.tag}</ListItemText>
  </ListItem>
));
const PlatinumTags = Platinum.map((tags) => (
  <ListItem>
    <ListItemIcon>
      <DoneSharpIcon />
    </ListItemIcon>
    <ListItemText>{tags.tag}</ListItemText>
  </ListItem>
));

const PackagePages = () => {
  return (
    <>
      <HeadingText>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontSize: "30px",
            color: "#373434",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          Membership Plans that suits your Brand
        </Typography>
        <Typography component="p" sx={{ m: "1rem auto", textAlign: "center" }}>
          Upgrade As your personal brand Grows
        </Typography>
      </HeadingText>
      <PackageCon>
        <Papercard>
          <Paper variant="outlined">
            <h3>Bronze</h3>

            <h2>
              NGN 75000 <span style={{ fontSize: ".8rem" }}>/yr</span>
            </h2>
            <Typography>Perfect for Business who wants to scale up</Typography>
            <List>{BronzeTags}</List>

            
              <PlanButton to="/">Choose Plan</PlanButton>
          </Paper>
          <Paper variant="outlined">
            <h3>Gold</h3>
            <h2>
              NGN 150000 <span style={{ fontSize: "0.8rem" }}>/yr</span>
            </h2>
            <Typography>Perfect for Business who wants to scale up</Typography>
            <List>{GoldTags}</List>
            <PlanButton to="/">Choose Plan</PlanButton>
          </Paper>
          <Paper variant="outlined">
            <h3>GoldPlus</h3>
            <h2>
              NGN 375000 <span style={{ fontSize: ".8rem" }}>/yr</span>
            </h2>
            <Typography>Perfect for Business who wants to scale up</Typography>
            <List>{GoldPlusTags}</List>
            <PlanButton to="/">Choose Plan</PlanButton>
          </Paper>
        </Papercard>
      </PackageCon>
      <PackageCon>
        <Papercard>
          <Paper variant="outlined">
            <h3>Silver</h3>
            <h2>
              NGN 900000 <span style={{ fontSize: ".8rem" }}>/yr</span>
            </h2>
            <Typography>Perfect for Business who wants to scale up</Typography>
            <List>{SilverTags}</List>
            <PlanButton to="/">Choose Plan</PlanButton>
          </Paper>
          <Paper variant="outlined">
            <h3>Platinum</h3>
            <h2>
              NGN 1.2m <span style={{ fontSize: ".8rem" }}>/yr</span>
            </h2>
            <Typography>Perfect for Business who wants to scale up</Typography>
            <List>{PlatinumTags}</List>
            <PlanButton to="/">Choose Plan</PlanButton>
          </Paper>
        </Papercard>
      </PackageCon>
      <ScrollToTop/>
    </>
  );
};

export default PackagePages;
