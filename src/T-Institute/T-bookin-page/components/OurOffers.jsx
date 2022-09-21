import React from "react";
import "../Assets/css/OurOffers.css";
import Oneon1 from "../Assets/consultimg/1on1.jpg";
import ProdustsSummary from "./ProdustsSummary";
import { FaAngleDoubleRight } from "react-icons/fa";


const OurOffers = ({ products }) => {
  return (
    <div>
      <div className="cont">
        <h2>What we offer</h2>
        <div className="conAdvice">
          <div className="offerwrap">
            <div className="imagecon">
              <img src={Oneon1} alt="1on1" />
            </div>
            <div className="AdCon">
              <h3>Advisory And Consultations</h3>
              <p className="consultP">
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
                <a href="/">View our services</a>
              </div>
            </div>
          </div>
          <div className="classh4"><h4>Consult With Us <span >__</span></h4></div>

          <div className="adconList">
           <div className="adcontent">
           {products.map((product)=>{
           return <article> <ProdustsSummary keyProps={product.id}
           info={product.info}
           img={product.img}
           prodName={product.prodName} />
           </article>})}
           </div>
           <div className="moreservices"><a href="/">Explore more <span><FaAngleDoubleRight size={25}/></span></a></div>
          </div>
        </div>
        <div className="spaces">
          <h2>Experience Comfort and Productivity At Its Peak</h2>
          <div className="space1">
            <h4>Product Title1</h4>
            <p></p>
            <ol>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ol>
            <button>
              <a href="/">Book Now</a>
            </button>
          </div>
          <div className="space2">
            <h4>Product Title2</h4>
            <p></p>
            <ol>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ol>
            <button>
              <a href="/">Book Now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOffers;
