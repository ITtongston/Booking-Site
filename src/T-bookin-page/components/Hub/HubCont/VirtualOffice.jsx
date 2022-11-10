import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import CardBox3 from './Cards/CardBox3';
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


const VirtualOffice = () => {
  return (
    <ContainerBox className="Hub1">
      <Box sx={{border: 'solid 2px #b3b3b3', borderRadius: '5px', p: 3, width: 400, mb: '10%'}}>
        <Typography sx={{color: "#0C0145"}}> Your Office with a Difference</Typography>
        <Typography variant="h6" sx={{fontWeight: 'bold'}}>Virtual Office</Typography>
        <Typography component="p" sx={{fontSize: '15px', pt: '3'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam accusamus quasi quam, animi voluptate modi at quas repellendus explicabo! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, ea omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas sint et suscipit incidunt cupiditate.</Typography>
        <Button sx={{fontSize: 12, fontWeight: 400, textDecoration: 'underline', color: '#FFEB3B'}}>Learn More</Button>
      </Box>
      <Divider sx={{ml: 4}}orientation="vertical" variant="middle" flexItem />
      <BoxFeatures>
        <div data-aos="fade-up" data-aos-duration="900"><CardBox3/></div>
        <img src={MeetImg} alt="" className="img"/>
      </BoxFeatures>
    </ContainerBox>
  );
};

export default VirtualOffice;
