import React from "react";
import { Box } from "@mui/system";
import { ListItem, ListItemIcon,ListItemText, Typography} from "@mui/material";
import EditAttributesIcon from "@mui/icons-material/EditAttributes";
import { styled } from "@mui/material/styles";
import Director from "../../../Assets/img/Director.jpg";
import web from '../../../Assets/img/web.jpg';
import branding from '../../../Assets/img/branding.jpg';
import marketing from '../../../Assets/img/marketing.jpg';
import production from '../../../Assets/img/indoorshoot.jpg';
import PostProd from '../../../Assets/img/postproduction.jpg';
import ButtonConsult from "./Button";

const MediaServices = () => {
  const ListItems = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cumque voluptate rem.",
      icon: <EditAttributesIcon />,
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cumque voluptate rem.",
      icon: <EditAttributesIcon />,
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cumque voluptate rem.",
      icon: <EditAttributesIcon />,
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cumque voluptate rem.",
      icon: <EditAttributesIcon />,
    },
  ];

  const items = ListItems.map((item) => (
    <ListItem key={item.id} sx={{}}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText>{item.text}</ListItemText>
    </ListItem>
  ));

  const BrandingCon = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const DigitalCon = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  margin: 4rem 0 ;

  `;

  const PreProduction = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem 0 ;

  `;
  const Production = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;

  `;

  const PostProduction = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem 0 ;

  `;
  const Web = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem 0 ;
  flex-direction: row-reverse;

  `;

  const ImgBox = styled(Box)`
    background: url(${branding}) no-repeat center;
    background-size: cover;
    height: 350px;
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(33, 30, 62, 1);
    transition: all 0.4s linear;

    &:hover {
      background: rgba(255, 239, 20, 0.52) no-repeat center;
      color: rgba(216, 6, 6, 1);
    }

    & h4 {
      position: relative;
    }

    & h4:before {
      position: absolute;
      width: 30%;
      margin: 0 40%;
      top: 150%;
      height: 3px;
      content: "";
      background-color: rgba(251, 250, 250, 1);
      border-radius: 5px;
    }
  `;
  const ImgBox1 = styled(Box)`
    background: url(${marketing}) no-repeat center;
    background-size: cover;
    height: 350px;
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(251, 250, 250, 1);
    transition: all 0.4s linear;

    &:hover {
      background: rgba(33, 30, 62, 1) no-repeat center;
      color: #f6d620;
    }

    & h4 {
      position: relative;
    }

    & h4:before {
      position: absolute;
      width: 30%;
      margin: 0 40%;
      top: 150%;
      height: 3px;
      content: "";
      background-color: rgba(251, 250, 250, 1);
      border-radius: 5px;
    }
  `;
  const ImgBox2 = styled(Box)`
    background: url(${Director}) no-repeat center;
    background-size: cover;
    height: 350px;
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f6d620;
    transition: all 0.4s linear;

    &:hover {
      background: rgba(215, 0, 0, 0.82) no-repeat center;
      color: rgba(242, 240, 240, 1);
    }

    & h4 {
      position: relative;
    }

    & h4:before {
      position: absolute;
      width: 30%;
      margin: 0 40%;
      top: 150%;
      height: 3px;
      content: "";
      background-color: rgba(251, 250, 250, 1);
      border-radius: 5px;
    }
  `;
  const ImgBox3 = styled(Box)`
    background: url(${production}) no-repeat center;
    background-size: cover;
    height: 350px;
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(11, 41, 138, 1);
    transition: all 0.4s linear;

    &:hover {
      background: rgba(248, 248, 248, 1) no-repeat center;
      color: rgba(13, 12, 12, 1);
    }

    & h4 {
      position: relative;
    }

    & h4:before {
      position: absolute;
      width: 30%;
      margin: 0 40%;
      top: 150%;
      height: 3px;
      content: "";
      background-color: rgba(251, 250, 250, 1);
      border-radius: 5px;
    }
  `;
  const ImgBox4 = styled(Box)`
    background: url(${PostProd}) no-repeat center;
    background-size: cover;
    height: 350px;
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(208, 24, 5, 0.94);
    transition: all 0.4s linear;

    &:hover {
      background: rgba(87, 37, 5, 0.94) no-repeat center;
      color: rgba(244, 238, 238, 1);
    }

    & h4 {
      position: relative;
    }

    & h4:before {
      position: absolute;
      width: 30%;
      margin: 0 40%;
      top: 150%;
      height: 3px;
      content: "";
      background-color: rgba(251, 250, 250, 1);
      border-radius: 5px;
    }
  `;
  const ImgBox5  = styled(Box)`
    background: url(${web}) no-repeat center;
    background-size: cover;
    height: 350px;
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f6d620;
    transition: all 0.4s linear;

    &:hover {
      background:rgba(21, 147, 119, 1) no-repeat center;
      color: rgba(244, 238, 238, 1);
    }

    & h4 {
      position: relative;
    }

    & h4:before {
      position: absolute;
      width: 30%;
      margin: 0 40%;
      top: 150%;
      height: 3px;
      content: "";
      background-color: rgba(251, 250, 250, 1);
      border-radius: 5px;
    }
  `;

  return (
    <Box sx={{ mt: "9rem" , px: '3%' }}>
      <Box>
        <Box>
          <BrandingCon>
            <Box  id="branding" sx={{ width: "50%"}} >
              <h4 style={{ fontWeight: 600, fontSize: "20px" }}>
                Branding
              </h4>
              <Typography component="p" sx={{ width: "60%", py: "1rem" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                quod. Hic veritatis perspiciatis perferendis nemo nobis eum,
                officiis asperiores a dolorem quo qui saepe eveniet ipsam
                corrupti?
              </Typography>
              <Box>{items}</Box>
              <ButtonConsult/>
            </Box>

            <Box sx={{ width: "40%" }}>
              <ImgBox
                sx={{
                  borderTopLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                }}
              >
                <h4 style={{ fontSize: "20px" }}>Bring Your Brand to Live</h4>
              </ImgBox>
            </Box>
          </BrandingCon>
          <Box>
            <DigitalCon>
              <Box id="digital" sx={{ width: "50%" }}>
                <h4 style={{ fontWeight: 600, fontSize: "20px" }}>
                  Digital Marketing
                </h4>
                <Typography component="p" sx={{ width: "60%", py: "1rem" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  quod. Hic veritatis perspiciatis perferendis nemo nobis eum,
                  officiis asperiores a dolorem quo qui saepe eveniet ipsam
                  corrupti?
                </Typography>
                <Box>{items}</Box>
                <ButtonConsult/>
              </Box>
              <Box sx={{ width: "40%" }}>
                <ImgBox1
                  sx={{
                    borderTopLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                  }}
                >
                  <h4 style={{ fontSize: "20px" }}>Marketing Solutions for Every Brand</h4>
                </ImgBox1>
              </Box>
            </DigitalCon>
            <PreProduction>
              <Box id="preprod"sx={{ width: "50%" }}>
                <h4 style={{ fontWeight: 600, fontSize: "20px" }}>
                  Pre-Production
                </h4>
                <Typography component="p" sx={{ width: "60%", py: "1rem" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  quod. Hic veritatis perspiciatis perferendis nemo nobis eum,
                  officiis asperiores a dolorem quo qui saepe eveniet ipsam
                  corrupti?
                </Typography>
                
                <Box>{items}</Box>
                <ButtonConsult/>
              </Box>
              <Box sx={{ width: "40%" }}>
                <ImgBox2
                  sx={{
                    borderTopLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                  }}
                >
                  <h4 style={{ fontSize: "20px" }}>Bring Your Ideas to Live</h4>
                </ImgBox2>
              </Box>
            </PreProduction>
            <Production>
              <Box id="prod"sx={{ width: "50%" }}>
                <h4 style={{ fontWeight: 600, fontSize: "20px" }}>
                  Production
                </h4>
                <Typography component="p" sx={{ width: "60%", py: "1rem" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  quod. Hic veritatis perspiciatis perferendis nemo nobis eum,
                  officiis asperiores a dolorem quo qui saepe eveniet ipsam
                  corrupti?
                </Typography>
                <Box>{items}</Box>
                <ButtonConsult/>
              </Box>
              <Box sx={{ width: "40%" }}>
                <ImgBox3
                  sx={{
                    borderTopLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                  }}
                >
                  <h4 style={{ fontSize: "20px" }}>Creating the Moment you want</h4>
                </ImgBox3>
              </Box>
            </Production>
            <PostProduction>
              <Box id="postprod" sx={{ width: "50%" }}>
                <h4 style={{ fontWeight: 600, fontSize: "20px" }}>
                  Post Production
                </h4>
                <Typography component="p" sx={{ width: "60%", py: "1rem" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  quod. Hic veritatis perspiciatis perferendis nemo nobis eum,
                  officiis asperiores a dolorem quo qui saepe eveniet ipsam
                  corrupti?
                </Typography>
                <Box>{items}</Box>
                <ButtonConsult/>
              </Box>
              <Box sx={{ width: "40%" }}>
                <ImgBox4
                  sx={{
                    borderTopLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                  }}
                >
                  <h4 style={{ fontSize: "20px" }}>A Touch of Perfection</h4>
                </ImgBox4>
              </Box>
            </PostProduction>
            <Web>
              <Box id="web"sx={{ width: "50%" }}>
                <h4 style={{ fontWeight: 600, fontSize: "20px" }}>
                  Web Development and Maintenance
                </h4>
                <Typography component="p" sx={{ width: "60%", py: "1rem" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  quod. Hic veritatis perspiciatis perferendis nemo nobis eum,
                  officiis asperiores a dolorem quo qui saepe eveniet ipsam
                  corrupti?
                </Typography>
                <Box>{items}</Box>
                <ButtonConsult/>
              </Box>
              <Box sx={{ width: "40%" }}>
                <ImgBox5
                  sx={{
                    borderTopLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                  }}
                >
                   <h4 style={{ fontSize: "20px" }}>Make your Brand Gobal</h4>
                </ImgBox5>
              </Box>
            </Web>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MediaServices;
