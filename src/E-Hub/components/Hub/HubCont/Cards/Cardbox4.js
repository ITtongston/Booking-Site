import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box } from "@mui/system";
import { ListItemIcon, ListItemText, Typography } from "@mui/material";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Adons = [
  {
    id: 1,
    adon: "Wi-Fi",
  },
  {
    id: 2,
    adon: "Complimentary TV Screen & WhiteBoard",
  },
  {
    id: 3,
    adon: "Complimentary Video & Audio-Conferencing Facilities",
  },
  {
    id: 4,
    adon: "Free Parking",
  },
  {
    id: 5,
    adon: " Easy access to Bolt/Uber/Rider ng, with Public Transport Nearby",
  },
  {
    id: 6,
    adon: "Complimentary HDMI / VGA Cable Converters",
  },
  {
    id: 7,
    adon: "Complimentary Equipped Pantry & Green Relaxation Lounge",
  },
  {
    id: 8,
    adon: "Photography & Videography from our studio",
  },
  {
    id: 9,
    adon: "Marketing & Brand collateral for your event from our multi-media studio",
  },
  {
    id: 10,
    adon: "Weekend and public holiday access",
  },
  {
    id: 11,
    adon: "Nearby Refreshment Facilities arranged by the team",
  },
  {
    id: 12,
    adon: "Corporate workshop/events management services",
  },
];

const CardBox4 = () => {
  return (
    <Card sx={{ minWidth: { sm: 300, xs: 200 }, ml: { sm: 6, xs: "0 auto" } }}>
      <CardContent>
        <AssuredWorkloadIcon sx={{ fontSize: 40, ml: 5 }} />
        <Divider sx={{}} variant="middle" flexItem />
        <Box sx={{ mt: 3 }}>
          <Typography
            sx={{ fontSize: "14px", minWidth: { xs: 300, sm: "100%" } }}
          >
            <span>
              <i>from ₦20,216/day</i>
            </span>
            <br />
            <span>
              <i>from ₦90,972/week</i>
            </span>
            <br />
          </Typography>
        </Box>

        <List sx={{ backgroundColor: "#ffffe6", borderRadius: "5px", mt: 3 }}>
          <spans style={{ margin: "10px 0 15px 15px" }}>Access:</spans>
          {Adons.map((item) => (
            <ListItem key={item.id} disablePadding={true}>
              <ListItemIcon>
                <CheckCircleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>{item.adon}</ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Button
          sx={{ color: "#862828", fontWeight: "bold" }}
          size="small"
          variant="text"
          component={Link}
          to="/meetingflow"
        >
          Book this Space
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardBox4;
