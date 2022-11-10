import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import CardBox1 from './Cards/CardBox1';
import MeetImg from '../../../Assets/img/meeting-room.jpg'
import Divider from '@mui/material/Divider';
import backpat from '../../../Assets/img/Picture3.png'
import Button from "@mui/material/Button";

const BoxFeatures = styled(Box)`
display: flex;
align-items: center;
max-width: 70%;
gap: 15%;
margin-left: 4em;

& .img{
  border-radius: 60% 40% 19% 81% / 45% 43% 57% 55%     ;
  max-width: 50%;
  margin-bottom: 5em;
  margin-right: 1em;
}

`;

const ContainerBox = styled(Box)`
background: url(${backpat}) center no-repeat;
background-size: 100% 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 10;
margin-top: 2em;
width: 100%;
padding:0 4%;
`
// SC


const Trainingroom = () => {
  return (
    <ContainerBox className="Hub1">
      <Box sx={{border: 'solid 2px #b3b3b3', borderRadius: '5px', p: 3, width: 400, mb: '10%'}}>
        <Typography variant="h6" sx={{fontWeight: 'bold'}}>Training Room</Typography>
        <Typography component="p" sx={{fontSize: '15px', pt: '3'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam accusamus quasi quam, animi voluptate modi at quas repellendus explicabo! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, ea omnis.</Typography>
        <Button sx={{fontSize: 12, fontWeight: 400, textDecoration: 'underline', color: '#FFEB3B'}}>Learn More</Button>
      </Box>
      
      <Divider sx={{py: 7}} orientation="vertical" variant="middle" />
      <BoxFeatures> 
        <div data-aos="fade-up" data-aos-duration="900"><CardBox1/></div>
        <img src={MeetImg} alt="" className="img"/>
      </BoxFeatures>
    </ContainerBox>
  );
};

export default Trainingroom;
