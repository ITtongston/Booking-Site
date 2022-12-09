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

const Media = () => {
  const ListItems = [
    {
      id: 1,
      icon: <ImageSearchOutlinedIcon fontSize="large" />,
      service: "BRANDING",
      itemText:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque fuga dolore quasi",
      path: "branding",
    },
    {
      id: 2,
      icon: <BarChartOutlinedIcon fontSize="large" />,
      service: "DIGITAL MARKETING",
      itemText:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque fuga dolore quasi",
      path: "digital",
    },
    {
      id: 3,
      icon: <ScreenshotMonitorOutlinedIcon fontSize="large" />,
      service: "PRE-PRODUCTION",
      itemText:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque fuga dolore quasi",
      path: "preprod",
    },
    {
      id: 4,
      icon: <MovieOutlinedIcon fontSize="large" />,
      service: "PRODUCTION",
      itemText:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque fuga dolore quasi",
      path: "prod",
    },
    {
      id: 5,
      icon: <ScreenShareOutlinedIcon fontSize="large" />,
      service: "POST-PRODUCTION",
      itemText:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque fuga dolore quasi",
      path: "postprod",
    },
    {
      id: 6,
      icon: <LogoDevOutlinedIcon fontSize="large" />,
      service: "WEB DEVELOPMENT AND MANAGEMENT",
      itemText:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque fuga dolore quasi",
      path: "web",
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

    @media
  `;

  const ServicesList = styled(Box)`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
  `;
  const StyledListItem = styled(ListItem)`
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.02);
      border: 2px solid rgba(50, 1, 1, 0.27);
    }
  `;

  return (
    <>
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

      <Box sx={{ px: 5, pt: 6 }}>
        <Typography variant="h6" sx={{ fontSize: "25px", fontWeight: "bold" }}>
          Multimedia and Branding
        </Typography>
        <Typography
          component="p"
          sx={{ width: "60%", fontSize: "16px", letterSpacing: "2px", mt: 3 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae
          nulla qui sequi amet accusantium, provident natus? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Id porro quod sint sapiente.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          maiores nesciunt, eveniet quae culpa voluptatem doloremque id enim.
          Quidem culpa reiciendis aut obcaecati eaque vero quibusdam est natus
          iusto praesentium.
        </Typography>

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
