import React from "react";
import "../Assets/css/WhatWeDo.css";
import infograph from "../Assets/vid/infograph15.mp4";
import Picture from '../Assets/img/Picture.png'
const WhatWeDo = () => {
  return (
    <div className="whatweCont">
      <div className="whatwe" data-aos="fade-up"
     data-aos-duration="2000">
      <h2>
          What We Stand For <span className="blink">__</span>?
      </h2>
        <p className="biggerp">
         We bridge the gap between Value-oriented Work-Spaces and Entrepreneurial Services for your Business and Brand  
        </p>
        <p className="smallerp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          odio accusantium velit officia laborum, autem quod repudiandae aut eos
          deleniti fugiat excepturi suscipit atque perspiciatis dicta voluptas
          doloribus libero. Sunt.
        </p>
      </div>
      <div className="medias">
        <img className="img1" src={Picture} alt="female"/>
        <video src={infograph} autoPlay muted loop></video>
      </div>
    </div>
  );
};

export default WhatWeDo;
