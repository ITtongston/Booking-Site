import React from "react";
import { Box,Button } from "@mui/material";
import Business from "../../Assets/consultimg/Businesses.jpg";
import { Typography } from "@mui/material";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Grid } from "@mui/material";
import redB from "../../Assets/consultimg/redB.jpg";
import { Link } from "react-router-dom";

const Consult1 = () => {
  const ListItems = [
    {
      id: 1,
      icon: <RadioButtonCheckedIcon fontSize="small" />,
      itemText:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque fuga dolore quasi",
    },
    {
      id: 2,
      icon: <RadioButtonCheckedIcon  fontSize="small" />,
      itemText:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque fuga dolore quasi",
    },
    {
      id: 3,
      icon: <RadioButtonCheckedIcon fontSize="small"  />,
      itemText:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque fuga dolore quasi",
    },
    {
      id: 4,
      icon: <RadioButtonCheckedIcon fontSize="small"  />,
      itemText:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque fuga dolore quasi",
    },
  ];

  const StyledBox = styled(Box)``;
  const BgBox = styled(Box)`
    background: url(${redB}) center no-repeat;
    // background-size: cover;

    & .help {
      position: relative;
      width: 100%;
    }

    & .help:before {
      position: absolute;
      width: 50%;
      height: 4px;
      content: "";
      top: 100%;
      border-radius: 2px;
      background-color: black;
    }
  `;
  const IntroBox = styled(Box)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;

    & img {
      width: 100%;
    }
  `;

  const BookBtn = styled(Button)`
  outline: none;
  transition: 0.3s all linear;
  &:hover{
    background-color: #970B04;
    color: white;
    border: none;
  }
  `

  return (
    <Box sx={{}}>
      <IntroBox>
        <BgBox sx={{ textAlign: "center" }}>
          <Typography
            className="help"
            sx={{ fontSize: "30px", fontWeight: "bold", pt: 20 }}
            
            >
            We help Scale your Business
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              fontSize: "40px",
              ml: 10,
              mt:3,
              fontWeght: "bold",
              color: "#F6D620",
              textDecoration: "none",
            }}
          >
            CBA
          </Typography>
        </BgBox>
        <img src={Business} alt="" />
      </IntroBox>

      <Box sx={{ px: 5, pt: 6 }}>
        <Typography variant="h6" sx={{ fontSize: "25px", fontWeight: "bold" }}>
          Consulting And Advisory Board
        </Typography>
        <Typography component="p" sx={{width: "60%", fontSize: "16px", letterSpacing: "2px", mt: 3}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae
          nulla qui sequi amet accusantium, provident natus? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Id porro quod sint sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maiores nesciunt, eveniet quae culpa voluptatem doloremque id enim. Quidem culpa reiciendis aut obcaecati eaque vero quibusdam est natus iusto praesentium.
        </Typography>

        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Our Value Proposition
          </Typography>
          <StyledBox>
            <List>
              {ListItems.map((Item) => (
                <ListItem key={Item.id}>
                  <ListItemIcon>{Item.icon}</ListItemIcon>
                  <ListItemText
                    primary={Item.itemText}
                    // secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
              ))}
            </List>
            <BookBtn variant="outlined" sx={{borderColor: "#970B04", color: "#970B04", fontWeight: "bold" , my: 3 }} component={Link} to="/bookform">Book Now</BookBtn>
          </StyledBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default Consult1;
