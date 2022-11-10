import React from "react";
import "../Assets/css/Features.css";
import { FaUsers, FaHands, FaGlobeAfrica } from "react-icons/fa";

const Features = () => {
  return (
    <div data-aos="fade-up" className="featurescont">
      <div className="pointers">
        <div>
          <FaUsers className="featicon1" size={40} />
          <h4 style={{py: 5,}}>E-HUBS</h4>
          <p style={{fontSize: "16px", fontWeight: 600}}>
            Acess to state of the art WorkSpace, Meeting Rooms and a Virtual Office on-demand for your Brand
          </p>
        </div>
        <div>
          <FaHands className="featicon2" size={40} />
          <h4 style={{py: 5, }}>EXQISITE SERVICES</h4>
          <p style={{fontSize: "16px", fontWeight: 600}}>
            Boost Your profitability with Professional Media, HR, Legal and Admin servive on the Go!
          </p>
        </div>
        <div>
          <FaGlobeAfrica className="featicon3" size={40} />
          <h4 style={{py: 5, }}>IMPROVE YOUR HUMAN CAPITAL</h4>
          <p style={{fontSize: "16px", fontWeight: 600}}>
            Leverage our Courses on Data science, Entrepreneurship and Technology 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
