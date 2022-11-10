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
            <h6>E-Hubs</h6>
            Acess to state of the art WorkSpace, Meeting Rooms and a Virtual Office on-demand for your Brand
          </p>
        </div>
        <div>
          <FaHands className="featicon5" size={40} />
          <p>
            <h6>Exquisite Services</h6>
            Boost Your profitability with Professional Media, HR, Legal and Admin servive on the Go!
          </p>
        </div>
        <div>
          <FaGlobeAfrica className="featicon6" size={40} />
          <p>
            <h6>Improve your Human capital</h6>
            leverage our Courses on Data science, entrepreneurship and Technology 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
