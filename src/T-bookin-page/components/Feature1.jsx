import React from "react";
import "../Assets/css/Feature1.css";
import { FaUsers, FaHands, FaGlobeAfrica } from "react-icons/fa";

const Feature1 = () => {
  return (
    <div className="featurescont1">
      <div className="pointers1">
        <div>
          <FaUsers className="featicon4" size={40} />
          <p>
            We're committed to leaving organisations and their people in a truly
            better place - more changeable, equipped for creating a better
            future.
          </p>
        </div>
        <div>
          <FaHands className="featicon5" size={40} />
          <p>
            We're committed to leaving organisations and their people in a truly
            better place - more changeable, equipped for creating a better
            future.
          </p>
        </div>
        <div>
          <FaGlobeAfrica className="featicon6" size={40} />
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

export default Feature1;
