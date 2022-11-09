import React from "react";
import "../Assets/css/Features.css";
import { FaUsers, FaHands, FaGlobeAfrica } from "react-icons/fa";

const Features = () => {
  return (
    <div data-aos="fade-up" className="featurescont">
      <div className="pointers">
        <div>
          <FaUsers className="featicon1" size={40} />
          <p>
            We're committed to leaving organisations and their people in a truly
            better place - more changeable, equipped for creating a better
            future.
          </p>
        </div>
        <div>
          <FaHands className="featicon2" size={40} />
          <p>
            We're committed to leaving organisations and their people in a truly
            better place - more changeable, equipped for creating a better
            future.
          </p>
        </div>
        <div>
          <FaGlobeAfrica className="featicon3" size={40} />
          <p>
            We're committed to leaving organisations and their people in a truly
            better place - more changeable, equipped for creating a better
            future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
