import React from "react";
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import {  FaFacebookF, FaTwitter,FaLinkedinIn } from "react-icons/fa";
import WavesComp from "./waves";
import Logo from '../Assets/img/logo.png';






const FooterContainer2 = styled.div`
 background:rgba(32, 27, 47, 0.96);
 width: 100%;

 
 }
`;

const FooterContainer1 = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
gap: 3rem;
 justify-content: space-between;
 align-items: center;
 padding: 0rem 3rem 1em;
 margin-top: 2em;

 @media (max-width: 1000px){
  grid-template-columns: repeat(2,1fr);
  gap: 2rem;
  margin-left: 2rem;
 }

  @media (max-width: 800px){
    grid-template-columns: repeat(1,1fr);
    text-align: center;
gap: 4rem;

    .firstDiv p{
      width: 60%;
      margin: 0 auto;
    }

    .fourthDiv form {
      width: 100%;
      margin: 0 auto;
    }

  }


`;

const DividerEnd = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 3rem;

@media (max-width: 1000px){
  padding: 1rem 2rem;

& ul li{
  font-size: 14px;
}

& p{
  font-size: 14px;
}

`;

const Lists = styled.ul`
list-style: none;
margin-left: 0.5rem; 
& li a{
  color: 
}
& li{
  margin-top: 0.5rem;
}

@media (max-width: 800px){
  display: inline-flex;
  gap: 2rem
}

`;

const IconsUl = styled.ul`
display: inline-flex;
gap: 2rem;
list-style: none;
margin-top: 1.5rem;

& li a{
  color:rgba(221, 219, 234, 0.57);
}

& li a:hover{
  color:white;
  transition: all 0.3s ease;
}

@media (max-width: 800px){
  gap: 3rem;
}

`;

const Anchorstyle = styled.a`
 color: rgba(221, 219, 234, 0.57);
 font-weight: 600;
&:hover{
  color: white;
  margin-left: 5px;
  
  transition: all 0.3s ease;
  
}
 

`;

const FooterLogo = styled.div`

& img{
  width: 4rem;
}
`


const Footer = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', paddingTop: '2rem'}}>
      <WavesComp/>
    <FooterContainer2>
     <FooterContainer1 >
       <div className="firstDiv">
         <FooterLogo><img src={Logo} alt="footerLogo" /></FooterLogo>
         <p style={{color: 'rgba(221, 219, 234, 0.57)'}}>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
         <IconsUl>
           <li>
             <a href="#"><FaFacebookF size={25}/></a>
           </li>
           <li>
             <a href="#"><FaTwitter size={25}/></a>
           </li>
           <li>
             <a href="#"><FaLinkedinIn size={25}/></a>
           </li>
         </IconsUl>
       </div>

       <div className="seconddiv">
         <h2 style={{color: 'white'}}>Company</h2>
         <Lists>
           <li>
             <Anchorstyle href="#">Home</Anchorstyle>
           </li>
           <li>
             <Anchorstyle href="">Careers</Anchorstyle>
           </li>
           <li>
             <Anchorstyle href="">Pricing</Anchorstyle>
           </li>
         </Lists>
       </div>
       <div className="thirdDiv">
         <h2 style={{color: 'white'}}>Get in Touch</h2>
         <Lists>
           <li>
             <h4 style={{color: 'rgba(221, 219, 234, 0.57)'}}>Our customer care</h4>
             <a href="" style={{color: 'white'}}>+(1) 123 456 7890</a>
           </li>
           <li>
             <h4 style={{color: 'rgba(221, 219, 234, 0.57)'}}>Need Assistance?</h4>
             <a href="" style={{color: 'white'}}>info@tongston.com</a>
           </li>
         </Lists>
       </div>
       <div className="fourthDiv">
         <h2 style={{color: 'white'}}>Newsletter</h2>
         <ul>
           <h4 style={{padding: '1.5rem 0', color: "rgba(221, 219, 234, 0.57)"}}>Subscribe to Our Newsletter</h4>
           <form action="" style={{ display: "flex", alignItems: 'center', justifyContent: 'center'}}>
           <input type="text" placeholder=" Your email address..." style={{outline: 'none', width: '70%', height: '2rem', borderBottomLeftRadius: '5px', borderTopLeftRadius: '5px',border: "none", backgroundColor: "rgba(231, 230, 242, 0.76)", paddingLeft: '10px'}}/><button type="button" style={{height: '2rem', outline: 'none',border: 'none',borderTopRightRadius: '5px',borderBottomRightRadius: '5px',backgroundColor: "rgba(231, 230, 242, 0.76)", marginLeft: '1px', padding: '2px 8px',fontWeight: 'bold'}}>Subscribe</button>
           </form>
         </ul>
       </div>
     </FooterContainer1>

     <Divider  sx={{marginTop: "2rem", backgroundColor: 'rgba(221, 219, 234, 0.27)'}} flexItem variant="middle"/>

     <DividerEnd>
     <ul style={{listStyle: 'none', display: 'inline-flex', gap: '1em'}}>
       <li><a style={{color: 'rgba(221, 219, 234, 0.57)'}} href="">Privacy Policy</a></li>
       <li><a href="" style={{color: 'rgba(221, 219, 234, 0.57)'}}>Terms and Conditions</a></li>
     </ul>

     <p style={{color: 'rgba(221, 219, 234, 0.57)'}}> &copy; 2022, All rights reserved</p>

     </DividerEnd>


   </FooterContainer2>
    </div>
    
  );
};

export default Footer;
