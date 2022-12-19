import React from "react";
import "../Assets/css/OurOffers.css";
import Oneon1 from "../Assets/consultimg/1on1.jpg";
import ProdustsSummary from "./ProdustsSummary";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import BasicTabs from "./Hub/HubNav";
import Divider from "@mui/material/Divider";
import styled from "styled-components";




const StyledUL = styled.ul`
margin-top: 20px;
text-align: left;

& li {
  margin-top: 5px;
}

& li span{
  font-weight: bold;
  font-size: 17px;
}
`;

const OurOffers = ({ products }) => {
  return (
    <>
      <div id="workspace">
        <BasicTabs />
      </div>
      <Divider sx={{ px: 20 }} variant="middle" />
      <div className="cont">
        <div className="conAdvice">
          <div id="services" className="offerwrap">
            <div
              className="imagecon"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <img src={Oneon1} alt="1on1" />
            </div>
            <div className="AdCon">
              <h3>
              Focus on Your Core Business with our Entreprise-in-a-box and Consulting Services

              </h3>
              <div
                className="consultP"
                data-aos="fade-in"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
              >
                {/* <p style={{fontSize: '17px', fontWeight: 550, wordSpacing: '5px',textAlign: 'center'}}>
                  
                </p> */}

                <StyledUL>
                  {/* <h4>Available on-demand</h4> */}
                  <li>
                  
                    <span>Administrative Services</span> through the Executive Admin Den
                  </li>
                  <li>
                    <span>Accounting & Audit Services</span>  through the Finance &
                    Accounting Den
                  </li>
                  <li>
                    <span>Legal, Governance & Corporate Secretarial Services</span> through
                    the Legal & Governance Den
                  </li>
                  <li>
                    <span>Data Consulting, Collection, Analysis and Research Services</span> through
                    the Data & Research Den
                  </li>
                  <li>
                    <span>Recruitment, Talent & Incentive Management, Organizational
                    Structuring and Performance Management Services</span> through the
                    HR Den
                  </li>
                </StyledUL>
              </div>
              <div className="span">
                <Link to="/">Find out more</Link>
              </div>
            </div>
          </div>
          <div className="classh4">
            <h4>
              Consult Us <span></span>
            </h4>
          </div>
          <div className="adconList">
            <div className="adcontent">
              {products.map((product) => {
                return (
                  <article key={product.id}>
                  
                    <ProdustsSummary
                      info={product.info}
                      img={product.img}
                      prodName={product.prodName}
                      route={product.DetailsLink}
                    />
                  </article>
                );
              })}
            </div>
            <div className="moreservices">
              <a href="/">
                Explore more{" "}
                <span>
                  <FaAngleDoubleRight size={25} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default React.memo(OurOffers);
