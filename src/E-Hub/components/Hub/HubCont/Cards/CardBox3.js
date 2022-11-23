import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom';


const CardBox3 = () => {
  return (
    <Card sx={{minWidth: {sm: 250, xs: 200}, ml: {sm: 6, xs: '0 auto'}}}>
      <CardContent>
      <EmojiTransportationIcon sx={{fontSize: 40, ml: 5}}/>
      <Divider sx={{}} variant="middle" flexItem />
        <Box sx={{mt: 3}}>
          <Typography sx={{fontSize: '14px', maxWidth: 300}}>Choose your membership plan with virtual office memebership, Get more for more!</Typography>
          
          
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
        <Button sx={{color: "#862828", fontWeight: 'bold'}} size="small" variant='text' component={Link} to='/'>View Our Plans</Button>
      </CardActions>
    </Card>
  );
};

export default CardBox3;
<Typography sx={{fontSize: '14px'}}> <span>NGN6,000 per User/hr</span> <br/>
<span>NGN22,000 per User/day</span>  <br/>NGN20,000 per User/month</Typography>