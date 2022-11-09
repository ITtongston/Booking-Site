import React from "react";
import "../Assets/css/OurOffers.css";
import Oneon1 from "../Assets/consultimg/1on1.jpg";
import ProdustsSummary from "./ProdustsSummary";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import BasicTabs from "./Hub/HubNav";

const OurOffers = ({ products }) => {
  return (
    <div>
      <div className="cont">
        <h2>What we offer</h2>
        <div className="conAdvice">
          <div className="offerwrap">
            <div className="imagecon" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
              <img src={Oneon1} alt="1on1" />
            </div>
            <div className="AdCon">
              <h3>Advisory And Consultations</h3>
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
                <Link to="/">View our services</Link>
              </div>
            </div>
          </div>
          <div className="classh4"><h4>Consult With Us <span ></span></h4></div>

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
        <BasicTabs/>
        {/* <div className="Hubs">
          <h2>Experience workplace Profitabilty with Our Entreprenuerial Hubs and services</h2>
          <div className="Hub1">
            <h4>Training and Meeting Rooms</h4>
            <img src="" alt="" />
            <ol>
              <li>Wifi Availability</li>
              <li>Projector Setup</li>
              <li>White Board</li>
              <li>HDMI Cable</li>
              <li>Constant Power Supply</li>
              <li>TV screen Setup</li>
            </ol>
            <button>
            <Link to="/">Book Now</Link>
            </button>
          </div>
          <div className="Hub2">
            <h4>Your Own Virtual Office</h4>
            <img src="" alt="" />
            <ol>
              <li>Valid for incorporation</li>
              <li>tax registration</li>
              <li>With Admin, legal, education, HR, media, data & finance services</li>
            </ol>
            <button>
            <Link to="/">Book Now</Link>
            </button>
          </div>
          <div className="Hub3">
            <h4>Admin, Education, Finance, Media, HR, Data, Legal Services </h4>
            <img src="" alt="" />
            <ol>
              <li>Administrative services through the Executive Admin Den</li>
              <li>Accounting and Audit Services through the Finance & Accounting Den</li>
              <li>Accounting and Audit Services</li>
              <li>Multimedia, branding, digital marketing, events management services
              </li>
              <li>Data Analytics training; consulting; data collection and research
              </li>
              <li>Recruitment, Talent and Incentive Management, Organizational Structuring and Performance Management services
              </li>
            </ol>
            <button>
              <Link to="/">Book Now</Link>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default OurOffers;
