import React from "react";
import "../Assets/css/OurOffers.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProdustsSummary = ({ img, info, prodName }) => {
  return (
    <div className="productListcon">
       <div className="prodlist">
          <img src={img} alt="" />
          <h4>{prodName} </h4>
          <p>{info}</p>
          <div className="span">
            <Link to="/">
              Learn more <FaArrowRight id="hidden" />
            </Link>
          </div>
        </div>
    </div>
  );
};

export default ProdustsSummary;
