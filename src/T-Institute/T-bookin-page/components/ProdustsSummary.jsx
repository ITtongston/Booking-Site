import React from "react";
import "../Assets/css/OurOffers.css";
import { FaArrowRight } from "react-icons/fa";

const ProdustsSummary = ({ img, info, prodName }) => {
  return (
    <div className="productListcon">
       <div className="prodlist">
          <img src={img} alt="" />
          <h4>{prodName} </h4>
          <p>{info}</p>
          <div className="span">
            <a href="/">
              Learn more <FaArrowRight id="hidden" />
            </a>
          </div>
        </div>
    </div>
  );
};

export default ProdustsSummary;
