import React from "react";
import "../Assets/css/WhatWeDo.css";
import college from "../Assets/img/collegues.jpg";
import infograph from "../Assets/vid/infograph15.mp4";

const WhatWeDo = () => {
  return (
    <div className="whatweCont">
      <div className="whatwe" data-aos="fade-up"
     data-aos-duration="2000">
      <h2>
          What We Stand For <span className="blink">__</span>?
      </h2>
        <p className="biggerp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          repellendus corrupti vitae odio ratione sunt officia
        </p>
        <p className="smallerp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          odio accusantium velit officia laborum, autem quod repudiandae aut eos
          deleniti fugiat excepturi suscipit atque perspiciatis dicta voluptas
          doloribus libero. Sunt.
        </p>
      </div>
      <div className="medias">
        <img src={college} alt="collegue" />
        <video src={infograph} autoPlay muted></video>
      </div>
    </div>
  );
};

export default WhatWeDo;
