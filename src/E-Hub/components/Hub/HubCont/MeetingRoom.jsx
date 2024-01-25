import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Cardbox4 from "./Cards/Cardbox4";
import MeetImg from "../../../Assets/img/meeting.jpg";
import MeetImg1 from "../../../Assets/img/workspace/BoardRoom.jpg";
import Divider from "@mui/material/Divider";
import backpat from "../../../Assets/img/Picture3.png";
import Button from "@mui/material/Button";
import { Carousel } from "react-responsive-carousel";

const BoxFeatures = styled(Box)`
  display: flex;
  align-items: center;
  max-width: 90%;
  gap: 10%;
  margin-left: 1em;

  & .img {
    border-radius: 60% 40% 19% 81% / 45% 43% 57% 55%;
    max-width: 40%;
    margin-bottom: 40%;
    // margin-right: 4em;
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;

    & .img {
      margin-bottom: 10%;
      max-width: 60%;
    }
  }
`;

const ContainerBox = styled(Box)`
  background: url(${backpat}) center no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 2em;
  width: 100%;
  padding: 0 5%;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0 2%;
  }
`;
// SC

const Meetingroom = () => {
  const images = [
    {
      id: 1,
      url: MeetImg,
    },
    {
      id: 2,
      url: MeetImg1,
    },
  ];

  return (
    <ContainerBox className="Hub1">
      <Box
        sx={{
          border: "solid 2px #b3b3b3",
          borderRadius: "5px",
          p: 3,
          width: { sm: 400, xs: 300 },
          mb: "10%",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#0C0145",
            fontSize: { xs: "11px", sm: "17px", mb: 1 },
            fontWeight: 600,
          }}
        >
          {/* Meeting Room For Your Team */}
          Superior meeting room with professional Assistance
        </Typography>

        <Typography component="p" sx={{ fontSize: "15px", pt: "3" }}>
          {/* Our entrepreneurial training & meeting rooms are state-of-the-art in
          the heart of the city of Abuja, fully equipped with projector, white
          boards, HMDI & VGA converters, TV screen, video and audio conferencing
          facilities and Wi-Fi. */}
          Our entrepreneurial meeting room is state-of-the-art in the heart of
          the city of Abuja, by the Central Bank of Nigeria, fully equipped with
          projector, whiteboards, HMDI & VGA converters, TV screen, video and
          audio-conferencing facilities for a hybrid or virtual experience, and
          Wi-Fi. Can take up to 10 people. Our meeting room comes with access to
          our multi-media studio services to capture your event with
          high-definition pictures and videos for marketing purposes. We provide
          design services to put together marketing collateral to amplify your
          meetings, events or workshops. We have an on-site team that can
          arrange refreshments & food for your guests to have a great
          experience. You can also access our fully equipped pantry. <br />
          Book now!
        </Typography>
      </Box>
      <Divider
        sx={{ ml: 4, display: { xs: "none", sm: "block" } }}
        orientation="vertical"
        variant="middle"
        flexItem
      />
      <BoxFeatures>
        <div data-aos="fade-up" data-aos-duration="900">
          <Cardbox4 />
        </div>
        {/* <img src={MeetImg} alt="" className="img" /> */}
        <Carousel
          className="crsl"
          autoFocus={true}
          autoPlay={true}
          infiniteLoop
          centerMode
        >
          {images.map((image) => (
            <img
              key={image.id}
              src={image.url}
              alt=""
              // className="img"
            />
          ))}
        </Carousel>
      </BoxFeatures>
    </ContainerBox>
  );
};

export default Meetingroom;
