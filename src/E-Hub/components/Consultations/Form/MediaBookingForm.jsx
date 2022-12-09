import React from "react";
import FormInput from "./FormInput";
import { useState } from "react";
import styled from "styled-components";
import FormBg from '../../../Assets/img/mediaformBg.svg'
import Handshake from '../../../Assets/img/handshake.gif';

const BookingForm = () => {
  const [values, setValues] = useState({
    organisationName: "",
    contactPerson: "",
    contactEmail: "",
    organisationEmail: "",
    organisationPhone: "",
    address: "",
    date: "",
    price: "hour",
    mediaService: "",
  });

  const Inputs = [
    {
      id: 1,
      name: "organisationName",
      type: "text",
      placeholder: "",
      errowMessage: "Field is required...",
      label: "Organisation Name",
    },
    {
      id: 2,
      name: "contactPerson",
      type: "text",
      placeholder: "Full Name",
      errowMessage: "Field is required...",
      label: "Contact Person",
    },
    {
      id: 3,
      name: "contactEmail",
      type: "email",
      placeholder: "e.g you@company.com",
      errowMessage: "kindly enter a valid email",
      label: "Contact Email",
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "organisations address",
      errowMessage: "Field is required...",
      label: "Address",
    },
    {
      id: 5,
      name: "date",
      type: "date",
      label: "Date of Interest",
    },
  ];

  const StyledCont = styled.div`
    display: flex;
    align-items: center;
    jusify-content: center;
    flex-direction: column;
    padding: 4% 0;
    gap: 2em;
  background: url(${FormBg}) center no-repeat; 
  background-size: 100vw ;
  `;

  const Header = styled.div`

  & h2{
    display: flex;
    align-center: center;
    font-weight: bold;
  }

  & h2 img{
    width: 4rem;
    border-radius: 50%;

  }

  `

  const handleOnchange = (e) => {
    const { name, type, checked, value } = e.target;

    setValues((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const Submithandler = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <StyledCont>
      <Header>
        <h2>Help Us Know More About Your Media Interest! <img src={Handshake} alt="hand"/></h2>
      </Header>

      <form
        style={{
          width: "45%",
          margin: "0 auto",
          border: "2px solid black",
          borderRadius: "10px",
          padding: "2em",
          backgroundColor: 'rgba(219, 115, 169, 0.1)',
          
        }}
        onSubmit={Submithandler}
      >
        <h6 style={{ fontSize: "20px", textAlign: "center", opacity: "0.5" }}>
          Kindly Fill the below Details
        </h6>
        {Inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            onChange={handleOnchange}
            value={values[input.name]}
          />
        ))}

        <br />
        {/* <div>
          <div>
            <input
              type="radio"
              value="hours"
              onChange={handleOnchange}
              name="price"
              id=""
              checked={values.price === 'hour'}
            />{" "}
            <label htmlFor="">Hourly</label>
          </div>
          <input
            type="radio"
            value="day"
            onChange={handleOnchange}
            name="price"
            id="days"
            checked={values.price === 'days'}
          />
          days
          <input
            type="radio"
            value="month"
            onChange={handleOnchange}
            name="price"
            id="month"
            checked={values.price === 'month'}
          />
          month
        </div> */}
        <button
          type="submit"
          style={{
            padding: "10px 10px",
            borderRadius: "10px",
            width: "30%",
            cursor: "pointer",
            margin: "1rem auto 0",
          }}
        >
          Submit
        </button>
      </form>
    </StyledCont>
  );
};

export default BookingForm;
