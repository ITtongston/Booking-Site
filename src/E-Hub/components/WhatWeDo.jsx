import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "../Assets/css/WhatWeDo.css";
import Picture from "../Assets/img/Picture.png";

const WhatWeDo = () => {
  
  return (
    <div className="whatweCont">
      <div className="whatwe" data-aos="fade-up" data-aos-duration="2000">
        <h2>
          What We Stand For <span className="blink">__</span>?
        </h2>
        <p className="biggerp">
          We bridge the gap between Value-oriented Work-Spaces & Education,
          Media, Enterprise Services for your Brand
        </p>
        <p className="smallerp">
          Tongston Entrepreneurial Hub offers world-class award-winning services
          that make you or your business more valuable, influential &
          profitable, whichever industry you are in, wherever you are in the
          world.
          <p style={{ marginTop: "10px" }}>
            Tongston is a frequently profiled multi-award-winning global
            education, media, finance & enterprise brand.
          </p>
        </p>
      </div>
      <div className="medias">
        <div className="speech">
          <FaQuoteLeft size={20} />
          <p
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "rgba(15, 15, 18, 0.95)",
            }}
          >
            More than a platform to meet, work, learn, network & access
            Tongston’s world-class entrepreneurial Education, Media, Finance,
            Legal, Technology, HR, Data, Research & Admin services.
          </p>
          <FaQuoteRight
            size={20}
            style={{
              color: "red",
              float: "right",
              marginBottom: "2rem",
              marginRight: "3rem",
            }}
          />
        </div>
        <img className="img1" src={Picture} alt="female" />
      </div>
    </div>
  );
};

export default WhatWeDo;
