import React from "react";
import "../Assets/css/Feature1.css";
import { FaUsers, FaHands, FaGlobeAfrica } from "react-icons/fa";

const Feature1 = () => {
  return (
    <div className="featurescont1">
      <div className="pointers1">
        <div>
          <FaUsers className="featicon4" size={40} />
          <h3 style={{padding: '0.5rem 0', fontWeight: 700}}>E-HUBS</h3>
          <p style={{fontSize: "16px", fontWeight: 600}}>
            Acess to state of the art WorkSpace, Meeting Room and a Virtual Office on-demand for your Brand
          </p>
        </div>
        <div>
          <FaHands className="featicon5" size={40} />
          <h3 style={{padding: '0.5rem 0', fontWeight: 700 }}>EXQISITE SERVICES</h3>
          <p style={{fontSize: "16px", fontWeight: 600}}>
            Boost Your profitability with Professional Media, HR, Legal and Admin services on the Go!
          </p>
        </div>
        <div>
          <FaGlobeAfrica className="featicon6" size={40} />
          <h3 style={{padding: '0.5rem 0', fontWeight: 700}}> SCALE YOUR HUMAN CAPITAL</h3>
          <p style={{fontSize: "16px", fontWeight: 600}}>
            Leverage our Courses on Data science, Entrepreneurship and Technology 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
