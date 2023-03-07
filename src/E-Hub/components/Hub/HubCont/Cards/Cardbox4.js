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
    adon: "WhiteBoard",
  },
  {
    id: 3,
    adon: "Free Parking & Public Transport Nearby",
  },
  {
    id: 4,
    adon: "HDMI / VGA Cable",
  },
  {
    id: 5,
    adon: "Equipped Pantry & Green Relaxation Lounge",
  },
  {
    id: 6,
    adon: "Access to Entrepreneurial Content through blogs & newsletters",
  },
  {
    id: 7,
    adon: "Access Tongston's entrepreneurial products & services ",
  },
  {
    id: 8,
    adon: "Nearby Food Facilities",
  },
  {
    id: 9,
    adon: "Audio/video conferencing facilities",
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
              <i>from ₦ 13,718 /day</i>
            </span>
            <br />
            <span>
              <i>from ₦61,731 /week</i>
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
