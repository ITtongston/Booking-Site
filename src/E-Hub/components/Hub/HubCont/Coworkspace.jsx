import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import CardBox2 from './Cards/CardBox2';
import MeetImg from '../../../Assets/img/meeting-room.jpg'
import Divider from '@mui/material/Divider';
import backpat from '../../../Assets/img/Picture3.png'
import Button from "@mui/material/Button";
import { Train } from "@mui/icons-material";


const BoxFeatures = styled(Box)`
display: flex;
align-items: center;
max-width: 90%;
gap: 10%;
margin-left: 1em;

& .img{
  border-radius: 60% 40% 19% 81% / 45% 43% 57% 55%     ;
  max-width: 40%;
  margin-bottom: 40%;
  // margin-right: 4em;
  
}

@media (max-width: 1000px){
  flex-direction: column-reverse;
  
  & .img{
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
padding:0 5%;

 @media (max-width: 1000px){

  flex-direction: column;
  padding: 0 2%;
}

`
// SC


const CoworkingSpace = () => {
  return (
    <ContainerBox className="Hub1">
      <Box sx={{border: 'solid 2px #b3b3b3', borderRadius: '5px', p: 3, width:{sm: 400, xs: 300}, mb: '10%'}}>
        <Typography variant='h6' sx={{color: "#0C0145", fontSize: {xs: '11px', sm: '13px'}, fontWeight: 600}}> Your Own WorkSpace</Typography>
        <Typography variant="h5" sx={{fontWeight: 'bold', fontSize: {sm: '16px'}}}>Co-WorkingSpace</Typography>
        <Typography component="p" sx={{fontSize: '15px', pt: '3'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam accusamus quasi quam, animi voluptate modi at quas repellendus explicabo! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, ea omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas sint et suscipit incidunt cupiditate.</Typography>
        <Button sx={{fontSize: 12, fontWeight: 400, textDecoration: 'underline', color: "#862828"}}>Learn More</Button>
      </Box>
      <Divider sx={{ml: 4, display: {xs: 'none', sm: 'block'}}}orientation="vertical" variant="middle" flexItem />
      <BoxFeatures>
        <div data-aos="fade-up" data-aos-duration="900"><CardBox2/></div>
        <img src={MeetImg} alt="" className="img"/>
      </BoxFeatures>
    </ContainerBox>
  );
};

export default CoworkingSpace;
