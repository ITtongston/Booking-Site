import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box } from "@mui/system";
import { Typography, ListItemText, ListItemIcon } from "@mui/material";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Adons = [
  {
    id: 1,
    adon: "Business address",
  },
  {
    id: 2,
    adon: "Telephone answering service",
  },
  {
    id: 3,
    adon: "Hub green lounge",
  },
  {
    id: 4,
    adon: "Incorporation and tax registration",
  },
  {
    id: 5,
    adon: "Admin, legal, entrepreneurial education, HR, media, data &amp; finance services for all your business needs.",
  },
  
  //   Equipped Pantry
  // Access Green Relaxation Lounge
  // Nearby Food Facilities

  // Access Entrepreneurial Thinkers Network
  // Access Entrepreneurial Content through blogs & newsletters
  // Access Tongston's entrepreneurial products & services

  // {
  //   id: 9,
  //   adon: "Lor",
  // },
  // {
  //   id: 10,
  //   adon: "Lor",
  // },
];

const CardBox3 = () => {
  return (
    <Card sx={{ minWidth: { sm: 250, xs: 200 }, ml: { sm: 6, xs: "0 auto" } }}>
      <CardContent>
        <EmojiTransportationIcon sx={{ fontSize: 40, ml: 5 }} />
        <Divider sx={{}} variant="middle" flexItem />
        <Box sx={{ mt: 3 }}>
          <Typography sx={{ fontSize: "14px", maxWidth: 300 }}>
            Choose your membership plan with virtual office, Upgrade as your
            personal brand or business evolves!
          </Typography>
        </Box>

        <List sx={{ backgroundColor: "#ffffe6", borderRadius: "5px", mt: 3 }}>
      
          <spans style={{margin: '10px 0 15px 15px'}} >Access:</spans>

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
          to="/"
        >
          View Our Plans
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardBox3;
<Typography sx={{ fontSize: "14px" }}>
  {" "}
  <span>NGN6,000 per User/hr</span> <br />
  <span>NGN22,000 per User/day</span> <br />
  NGN20,000 per User/month
</Typography>;
