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
    adon: "Business address valid for tax & incorporation purposes",
  },
  {
    id: 2,
    adon: "Telephone answering & executive admin services",
  },
  {
    id: 3,
    adon: "Use our entrepreneurial green lounge to meet others and collaborate",
  },
  {
    id: 4,
    adon: "Available to access for hours, days, weeks or unlimited months",
  },
  {
    id: 5,
    adon: "Access our Entrepreneurial Content through blogs & news",
  },
  {
    id: 6,
    adon: "Access media, education and enterprise services with your membership",
  },
  {
    id: 7,
    adon: "Enjoy exclusive member discounts and benefits",
  },
  {
    id: 8,
    adon: "Access Legal, entrepreneurial education, HR, media, data & finance services for all your business needs",
  },
  
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
          to="/plans"
        >
          View Our Plans
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardBox3;
<Typography sx={{ fontSize: "14px" }}>
  <span>NGN6,000 per User/hr</span> <br />
  <span>NGN22,000 per User/day</span> <br />
  NGN20,000 per User/month
</Typography>;
