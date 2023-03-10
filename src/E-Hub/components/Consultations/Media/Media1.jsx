import React from "react";
import { Box, Button } from "@mui/material";
import Business from "../../../Assets/consultimg/Businesses.jpg";
import { Typography } from "@mui/material";
import { Link } from "react-scroll";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import redB from "../../../Assets/consultimg/redB.jpg";
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import LogoDevOutlinedIcon from "@mui/icons-material/LogoDevOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ScreenshotMonitorOutlinedIcon from "@mui/icons-material/ScreenshotMonitorOutlined";
import ScreenShareOutlinedIcon from "@mui/icons-material/ScreenShareOutlined";
import Logo from "../../../Assets/img/logo.png";

const Media = () => {
  const ListItems = [
    {
      id: 1,
      icon: <ImageSearchOutlinedIcon fontSize="large" />,
      service: "BRANDING",
      itemText:
        "...that across Web Development, Brand Identity & Value Creation, Corperate Brand Design & Print",
      path: "branding",
    },
    {
      id: 2,
      icon: <MovieOutlinedIcon fontSize="large" />,
      service: "MULTIMEDIA STUDIO",
      itemText:
        "...premium services from scripting, to audio & video recording to editing, to animations & photography",
      path: "prod",
    },
    {
      id: 3,
      icon: <ScreenshotMonitorOutlinedIcon fontSize="large" />,
      service: "CORPORATE COMMUNICATIONS & PR",
      itemText:
        "...communication & PR strategies for Pitch Books & Investor Pitch Decks, Written Communications & Press Releases and Presentations ",
      path: "comms",
    },
    {
      id: 4,
      icon: <BarChartOutlinedIcon fontSize="large" />,
      service: "DIGITAL MARKETING",
      itemText:
        "...effective marketing through campaigns, SEO, digital media marketing",
      path: "digital",
    },
  ];

  const StyledBox = styled(Box)``;

  const BgBox = styled(Box)`
    background: url(${redB}) center no-repeat;
    background-size: 100%;

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

    @media (max-width: 1000px) {
      background-size: 100%;
      padding: 2%;
    }
  `;

  const IntroBox = styled(Box)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;

    & img {
      width: 100%;
    }

    @media (max-width: 1000px) {
      grid-template-columns: 1fr;

      & img {
        width: 100%;
        height: 70%;
        object-fit: cover;
      }
    }
  `;

  const ServicesList = styled(Box)`
    display: grid;
    max-width: 90%;
    margin: 0 auto;
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 900px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `;
  const StyledListItem = styled(ListItem)`
    transition: all 0.3s ease;
    max-width: 100%;

    &:hover {
      transform: scale(1.02);
      border: 2px solid rgba(50, 1, 1, 0.27);
    }
  `;

  const ImgDiv = styled(Box)`
      position: absolute;
      left: 1rem;
      top:1rem;

      & img{
        width: 18rem;
      }

      @media (max-width: 900px){
        & img{
          width: 5rem;
        }
      }
  `;

  return (
    <>
      <IntroBox>
        <ImgDiv>
          <img src={Logo} alt="logo" />
        </ImgDiv>
        <BgBox sx={{ textAlign: "center" }}>
          <Typography
            className="help"
            sx={{
              fontSize: { sm: "30px", xs: "25px" },
              fontWeight: "bold",
              mt: 30,
            }}
          >
            We help Scale your Business
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              fontSize: { sm: "40px", xs: "30px" },
              ml: 10,
              mt: 3,
              fontWeght: "bold",
              color: "#F6D620",
              textDecoration: "none",
            }}
          >
            MEDIA
          </Typography>
        </BgBox>
        <img src={Business} alt="" />
      </IntroBox>

      <Box sx={{ px: 3, pt: 3 }}>
        <Typography variant="h6" sx={{ fontSize: "25px", fontWeight: "bold" }}>
          MEDIA AND MORE
        </Typography>
        <Typography
          component="p"
          sx={{
            width: { sm: "60%", xs: "100%" },
            fontSize: { sm: "25px", xs: "20px" },
            letterSpacing: "2px",
            mt: 3,
            textAlign: { sm: "left", xs: "center" },
          }}
        >
          Tongston Entrepreneurship Media is an award-winning media agency with
          the ability to make the most out of your media spend, whilst making
          you or your institution or government valuable, influential and
          profitable.
        </Typography>
        <p
          style={{
            width: "70%",
            fontSize: "16px",
            letterSpacing: "2px",
            margin: "15px auto 0",
            textAlign: "center",
          }}
        >
          Whatever your needs are, we have the solution and more! Our aim is to
          make you valuable, influential & profitable. Break through the noise
          and stand out today
        </p>

        <Box sx={{ my: 10 }}>
          <Typography
            sx={{ mt: 4, mb: 2, textAlign: "center", fontWeight: 600 }}
            variant="h5"
            component="div"
          >
            Our Services
          </Typography>
          <StyledBox>
            <ServicesList>
              {ListItems.map((Item) => (
                <StyledListItem
                  key={Item.id}
                  sx={{ background: "rgba(255, 239, 20, 0.52)" }}
                >
                  <ListItemIcon>{Item.icon}</ListItemIcon>

                  <ListItemText>
                    <Typography variant="h6">{Item.service}</Typography>
                    <p>{Item.itemText}</p>
                    <Link
                      to={Item.path}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                      <Button
                        variant="text"
                        sx={{
                          float: "right",
                          textTransform: "lowercase",
                          color: "rgba(208, 9, 9, 1)",
                        }}
                      >
                        see more
                      </Button>
                    </Link>
                  </ListItemText>
                </StyledListItem>
              ))}
            </ServicesList>
          </StyledBox>
        </Box>
      </Box>
    </>
  );
};

export default Media;
