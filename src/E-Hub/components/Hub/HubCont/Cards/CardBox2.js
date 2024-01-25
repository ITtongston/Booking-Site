import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box } from "@mui/system";
import { Typography, ListItemText, ListItemIcon } from "@mui/material";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Adons = [
  {
    id: 1,
    adon: "Flexible access – hourly, daily, weekly, monthly or annually, with Wi-Fi",
  },
  {
    id: 2,
    adon: "Access as a hot desk or as a fixed desk for you and your team",
  },
  {
    id: 3,
    adon: " Access media, education, finance and enterprise services with your membership",
  },
  {
    id: 4,
    adon: " Bundle with virtual office, meeting and training room solutions to give you a complete corporate work presence",
  },
  {
    id: 5,
    adon: "Access Multimedia studio services",
  },
  {
    id: 6,
    adon: "Access Parking Facilities",
  },
  {
    id: 7,
    adon: "Easy access to Bolt/Uber/Rider ng, with Public Transport Nearby",
  },
  {
    id: 8,
    adon: "Access to Entrepreneurial Content through Tongston events, blog & newsletters",
  },
  {
    id: 9,
    adon: "Make use of our green lounge to meet others and collaborate",
  },
  {
    id: 10,
    adon: "Enjoy exclusive member discounts and benefits",
  },
];

const CardBox2 = () => {
  return (
    <Card sx={{ minWidth: { sm: 250, xs: 200 }, ml: { sm: 6, xs: "0 auto" } }}>
      <CardContent>
        <DashboardCustomizeIcon sx={{ fontSize: 40, ml: 5 }} />
        <Divider sx={{}} variant="middle" flexItem />
        <Box sx={{ mt: 3 }}>
          <Typography sx={{ fontSize: "14px", minWidth: { sm: "100%" } }}>
            <span>
              {" "}
              <i>from ₦2,900 per desk/day </i>
            </span>{" "}
            <br />
            <span>
              <i>from ₦11,600 per desk/week</i>
            </span>{" "}
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
          to="/coworkingflow"
        >
          Book this Space
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardBox2;
