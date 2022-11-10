import React from "react";
import "../Assets/css/OurOffers.css";
import Oneon1 from "../Assets/consultimg/1on1.jpg";
import ProdustsSummary from "./ProdustsSummary";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import BasicTabs from "./Hub/HubNav";
import Divider from '@mui/material/Divider';

const OurOffers = ({ products }) => {
  return (
    <>
      <BasicTabs/>
      <Divider sx={{px: 20}} variant="middle" />
      <div className="cont">
        <div className="conAdvice">
          <div className="offerwrap">
            <div className="imagecon" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
              <img src={Oneon1} alt="1on1" />
            </div>
            <div className="AdCon">
              <h3>Value at its Peak With our Curated Services</h3>
              <p className="consultP" data-aos="fade-in"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat sed voluptates perspiciatis dolores dolor minus,
                distinctio nostrum at dolore! Tempora repellendus pariatur
                eveniet error harum explicabo cumque sint atque aliquid? Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
                rerum quam consectetur eaque culpa! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Rerum beatae hic eos magnam
                voluptatibus Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reprehenderit dolore quod ipsa culpa.
              </p>
              <div className="span">
                <Link to="/">Find out more</Link>
              </div>
            </div>
          </div>
          <div className="classh4"><h4>Consult Us <span ></span></h4></div>
          <div className="adconList">
           <div className="adcontent">
           {products.map((product)=>{
           return <article key={product.id}  > <ProdustsSummary 
           info={product.info}
           img={product.img}
           prodName={product.prodName} 
           route={product.DetailsLink}/>
           </article>})}
           </div>
           <div className="moreservices"><a href="/">Explore more <span><FaAngleDoubleRight size={25}/></span></a></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurOffers;