import React from "react";
import { Box } from "@mui/system";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import web from "../../../Assets/img/web.jpg";
import branding from "../../../Assets/img/branding.jpg";
import marketing from "../../../Assets/img/marketing.jpg";
import PostProd from "../../../Assets/img/postproduction.jpg";
import ButtonConsult from "./Button";
import { Branding, Digital, MediaStudio, Comms } from "./MediaData";


const MediaServices = () => {
  const items1 = Branding.map((item) => (
    <ListItem disablePadding="true" key={item.id}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText>{item.text}</ListItemText>
    </ListItem>
  ));
  const items2 = Digital.map((item) => (
    <ListItem disablePadding="true" key={item.id} >
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText>{item.text}</ListItemText>
    </ListItem>
  ));
  const items3 = MediaStudio.map((item) => (
    <ListItem disablePadding="true" key={item.id} >
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText>{item.text}</ListItemText>
    </ListItem>
  ));
  const items4 = Comms.map((item) => (
    <ListItem disablePadding="true" key={item.id} >
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText>{item.text}</ListItemText>
    </ListItem>
  ));

  const BrandingCon = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;

    @media (max-width: 1000px) {
      flex-direction: column;
      gap: 1rem;
    }
  `;
  const DigitalCon = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    margin: 4rem 0;
    gap: 3rem;

    @media (max-width: 1000px){
      flex-direction: column;
      
  `;

  const MediaStudioBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 4rem 0;

    @media (max-width: 1000px){
      flex-direction: column;
  `;

  const CommsBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 4rem 0;
    flex-direction: row-reverse;
    gap: 3rem;

    @media (max-width: 1000px){
      flex-direction: column;

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
  const ImgBox5 = styled(Box)`
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
      background: rgba(21, 147, 119, 1) no-repeat center;
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
    <Box sx={{ mt: "5rem", px: "3%" }}>
      <Box>
        <Box>
          <BrandingCon>
            <Box id="branding" sx={{ width: { sm: "60%", xs: "80%" } }}>
              <h4 style={{ fontWeight: 600, fontSize: "20px" }}>BRANDING</h4>
              <Typography
                component="p"
                sx={{ width: { sm: "60%", xs: "100%" }, py: "1rem" }}
              >
                Corporate Branding is the core of our business focus. Elevate
                your brand with our suite of products and services. Make
                customized decisions for your business.
              </Typography>
              <Box sx={{ width: { sm: "70%", xs: "100%" } }}>{items1}</Box>
              <ButtonConsult />
            </Box>

            <Box sx={{ width: { sm: "60%", xs: "80%" } }}>
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
              <Box
                id="digital"
                sx={{ width: { sm: "60%", xs: "100%" }, px: 3 }}
              >
                <h4 style={{ fontWeight: 600, fontSize: "20px" }}>
                  DIGITAL MARKETING
                </h4>
                <Typography
                  component="p"
                  sx={{ width: { sm: "60%", xs: "100%" }, py: "1rem" }}
                >
                  Advertisements are visual messages for promoting your
                  products/services. We can help you craft effective marketing
                  strategies to communicate your brand, through campaigns, SEO,
                  digital media marketing through videos, flyers, short stories
                  etc.
                </Typography>
                <Box sx={{ width: { sm: "70%", xs: "100%" } }}>{items2}</Box>
                <ButtonConsult />
              </Box>
              <Box sx={{ width: { sm: "60%", xs: "90%" } }}>
                <ImgBox1
                  sx={{
                    borderTopLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                  }}
                >
                  <h4 style={{ fontSize: "20px", textAlign: "center" }}>
                    Marketing Solutions for Every Brand
                  </h4>
                </ImgBox1>
              </Box>
            </DigitalCon>

            <MediaStudioBox>
              <Box id="prod" sx={{ width: { sm: "60%", xs: "100%" }, px: 3 }}>
                <h4 style={{ fontWeight: 600, fontSize: "20px" }}>MEDIA</h4>
                <Typography
                  component="p"
                  sx={{ width: { sm: "60%", xs: "100%" }, py: "1rem" }}
                >
                  Starting at ₦ 3,999, we have a range of premium services from
                  scripting, to audio & video recording to editing, to
                  animations & photography in our state of the art studio to
                  meet all your needs.
                </Typography>
                <Box sx={{ width: { sm: "70%", xs: "100%" } }}>{items3}</Box>
                <ButtonConsult />
              </Box>
              <Box sx={{ width: { sm: "60%", xs: "90%" } }}>
                <ImgBox4
                  sx={{
                    borderTopLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                  }}
                >
                  <h4 style={{ fontSize: "20px" }}>A Touch of Perfection</h4>
                </ImgBox4>
              </Box>
            </MediaStudioBox>
            <CommsBox>
              <Box id="comms" sx={{ width: { sm: "60%", xs: "90%" } }}>
                <h4 style={{ fontWeight: 600, fontSize: "20px" }}>
                  CORPORATE COMMUNICATIONS & PR
                </h4>
                <Typography
                  component="p"
                  sx={{ width: { sm: "60%", xs: "90%" }, py: "1rem" }}
                >
                  We help you design and disseminate effective communication &
                  PR strategies to advance internal and external efficiency in
                  executing tasks, boosting employee, investor, suppliers and
                  customer engagement and increase knowledge sharing within your
                  organization
                </Typography>
                <Box sx={{ width: { sm: "70%", xs: "100%" } }}>{items4}</Box>
                <ButtonConsult />
              </Box>
              <Box sx={{ width: { sm: "60%", xs: "90%" } }}>
                <ImgBox5
                  sx={{
                    borderTopLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                  }}
                >
                  <h4 style={{ fontSize: "20px" }}>Make your Brand Gobal</h4>
                </ImgBox5>
              </Box>
            </CommsBox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MediaServices;
