import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
// import ListItemText from '@mui/material/ListItemText';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import Divider from "@mui/material/Divider";
import {Link} from 'react-router-dom'
const CardBox2 = () => {
  return (
    <Card sx={{ minWidth: 300, ml: 6 }}>
      <CardContent>
        <DashboardCustomizeIcon sx={{ fontSize: 40, ml: 5 }} />
        <Divider sx={{}} variant="middle" flexItem />
        <Box sx={{ mt: 3 }}>
          <Typography sx={{ fontSize: "14px" }}>NGN500 per User/hr</Typography>
          <Typography sx={{ fontSize: "14px" }}>
            NGN3800 per User/day
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            NGN10,545 per User - 3Days
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            NGN17,100 per User - a Week
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            NGN57,000 per User/month
          </Typography>
        </Box>

        <List sx={{ backgroundColor: "#ffffe6", borderRadius: "5px", mt: 3 }}>
          <ListItem>Wifi Availability</ListItem>
          <ListItem>Projector Setup </ListItem>
          <ListItem>White Board</ListItem>
          <ListItem>HDMI Cable</ListItem>
          <ListItem>Constant Power Supply</ListItem>
        </List>
      </CardContent>
      <CardActions>
        <Button sx={{color: "#862828", fontWeight: 'bold'}} size="small" variant='text' component={Link} to='/'>Book Now</Button>
      </CardActions>
    </Card>
  );
};

export default CardBox2;
