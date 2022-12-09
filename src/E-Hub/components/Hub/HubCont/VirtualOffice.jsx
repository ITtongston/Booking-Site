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


const VirtualOffice = () => {
  return (
    <ContainerBox className="Hub1">
      <Box sx={{border: 'solid 2px #b3b3b3', borderRadius: '5px', p: 3, width:{sm: 400, xs: 300}, mb: '10%'}}>
        <Typography variant='h6' sx={{color: "#0C0145", fontSize: {xs: '11px', sm: '13px'}, fontWeight: 600}}> Your Office with a Difference</Typography>
        <Typography variant="h5" sx={{fontWeight: 'bold', fontSize: {sm: '16px'}}}>Virtual Office</Typography>
        <Typography component="p" sx={{fontSize: '15px', pt: '3'}}>Access business address, telephone answering service and hub green lounge. Valid for incorporation and tax registration.

        Alongside the virtual office, access our entrepreneurial workspaces (meeting & training room), our entrepreneurial enterprise consulting services (admin, technology, legal, HR, data & accounting); entrepreneurial education and media services for all your business/brand needs.
</Typography>
        <Button sx={{fontSize: 12, fontWeight: 400, textDecoration: 'underline', color: "#862828"}}>Learn More</Button>
      </Box>
      <Divider sx={{ml: 4, display: {xs: 'none', sm: 'block'}}}orientation="vertical" variant="middle" flexItem />
      <BoxFeatures>
        <div data-aos="fade-up" data-aos-duration="900"><CardBox3/></div>
        <img src={MeetImg} alt="" className="img"/>
      </BoxFeatures>
    </ContainerBox>
  );
};

export default VirtualOffice;
