import React from "react";
import "../Assets/css/Features.css";
import { FaHands, FaUsersCog, FaCity } from "react-icons/fa";

const Features = () => {
  return (
    <div data-aos="fade-up" className="featurescont">
      <div className="pointers">
        <div className="divs">
          <FaCity className="featicon1" size={40} />
          <h3
            style={{ padding: "0.5rem 0", fontWeight: 700, fontSize: "20px" }}
          >
            OUR ENTREPRENEURIAL WORKSPACES
          </h3>
          <p style={{ fontSize: "16px", fontWeight: 600 }}>
            Access state of the art WorkSpaces, Meeting Room, Training Room and
            a Virtual Office on-demand for your Brand
          </p>
        </div>
        <div className="divs">
          <FaHands className="featicon2" size={40} />
          <h3
            style={{ padding: "0.5rem 0", fontWeight: 700, fontSize: "20px" }}
          >
            MEDIA & ENTERPRISE SERVICES
          </h3>
          <p style={{ fontSize: "16px", fontWeight: 600 }}>
            Boost your Value, Influence & Profitability with Entrepreneurial
            Media, HR, Legal, Admin, Data, Technology & Accounting services on
            the Go!
          </p>
        </div>
        <div className="divs">
          <FaUsersCog className="featicon3" size={40} />
          <h3
            style={{ padding: "0.5rem 0", fontWeight: 700, fontSize: "20px" }}
          >
            {" "}
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

export default Features;
