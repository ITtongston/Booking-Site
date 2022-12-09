import React from "react";
import "../Assets/css/Features.css";
import { FaHands, FaUsersCog, FaCity } from "react-icons/fa";

const Features = () => {
  return (
    <div data-aos="fade-up" className="featurescont">
      <div className="pointers">
        <div>

          <FaCity className="featicon1" size={40} />
          <h3 style={{padding: '0.5rem 0', fontWeight: 700, fontSize: '20px'}}>OUR WORKSPACES</h3>
          <p style={{fontSize: "16px", fontWeight: 600}}>
            Access to state of the art WorkSpace, Meeting Room and a Virtual Office on-demand for your Brand
          </p>
        </div>
        <div>
          <FaHands className="featicon2" size={40} />
          <h3 style={{padding: '0.5rem 0', fontWeight: 700,fontSize: '20px' }}>EXQUISITE SERVICES</h3>
          <p style={{fontSize: "16px", fontWeight: 600}}>
            Boost Your profitability with Professional Media, HR, Legal and Admin services on the Go!
          </p>
        </div>
        <div>
          <FaUsersCog className="featicon3" size={40} />
          <h3 style={{padding: '0.5rem 0', fontWeight: 700,fontSize: '20px'}}> SCALE YOUR HUMAN CAPITAL</h3>
          <p style={{fontSize: "16px", fontWeight: 600}}>
            Leverage our Courses on Data science, Entrepreneurship and Technology 
          </p>
        </div>
        <div>
          <FaUsersCog className="featicon3" size={40} />
          <h3 style={{padding: '0.5rem 0', fontWeight: 700,fontSize: '20px'}}> SCALE YOUR HUMAN CAPITAL</h3>
          <p style={{fontSize: "16px", fontWeight: 600}}>
            Leverage our Courses on Data science, Entrepreneurship and Technology 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
