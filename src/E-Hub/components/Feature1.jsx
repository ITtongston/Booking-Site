import React from "react";
import "../Assets/css/Feature1.css";
import { FaCity, FaHands, FaUsersCog } from "react-icons/fa";

const Feature1 = () => {
  return (
    <div data-aos-duration="1000" data-aos="fade-up" className="featurescont1">
      <div className="pointers1">
        <div className="divs">
          <FaCity className="featicon1" size={40} />
          <h3
            style={{ padding: "0.5rem 0", fontWeight: 700, fontSize: "20px" }}
          >
            OUR ENTREPRENEURIAL WORKSPACES
          </h3>
          <p style={{ fontSize: "16px", fontWeight: 600 }}>
            Access to state of the art WorkSpace, Meeting Room and a Virtual
            Office on-demand for your Brand
          </p>
        </div>
        <div>
          <FaHands className="featicon2" size={40} />
          <h3
            style={{ padding: "0.5rem 0", fontWeight: 700, fontSize: "20px" }}
          >
            MEDIA, FINANCE & ENTERPRISE SERVICES
          </h3>
          <p style={{ fontSize: "16px", fontWeight: 600 }}>
            Boost Your profitability with Professional Media, Finance HR, Legal and
            Admin services on the Go!
          </p>
        </div>
        <div>
          <FaUsersCog className="featicon3" size={40} />
          <h3
            style={{ padding: "0.5rem 0", fontWeight: 700, fontSize: "20px" }}
          >
            UPSKILL YOUR HUMAN CAPITAL
          </h3>
          <p style={{ fontSize: "16px", fontWeight: 600 }}>
            Leverage our Entrepreneurial Education Courses on Data Science,
            Entrepreneurship & Intrapreneurship, Programming, Finance &
            Fund-Raising, Career & Business Advisory
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
