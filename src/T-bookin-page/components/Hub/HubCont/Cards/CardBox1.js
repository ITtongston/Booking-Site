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
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom'

const CardBox1 = () => {
  return (
    <Card sx={{minWidth: 300, ml: 6}}>
      <CardContent>
      <MeetingRoomIcon sx={{fontSize: 40, ml: 5}}/>
      <Divider sx={{}} variant="middle" flexItem />
        <Box sx={{mt: 3}}>
          <Typography sx={{fontSize: '14px'}}>NGN6,000 per User/hr</Typography>
          <Typography sx={{fontSize: '14px'}}>NGN22,000 per User/day</Typography>
          <Typography sx={{fontSize: '14px'}}>NGN20,000 per User/month</Typography>
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
        <Button sx={{color: "#862828", fontWeight: 'bold'}} size="small" variant='text' component={Link} to='/trainingflow'>Book Now</Button>
      </CardActions>
    </Card>
  );
};

export default CardBox1;
