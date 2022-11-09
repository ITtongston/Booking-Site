import React from "react";
import FormInput from "./FormInput";
import styled from "styled-components";
import { useState } from "react";
import Calendly from "../Calendly";

const BookingForm = () => {
  const [values, setValues] = useState({
    FullName: "",
    email: "",
    organisation: "",
  });

  //  styles
 
  

  const Inputs = [
    {
      id: 1,
      name: "FullName",
      placeholder: "Full Name",
      label: "Full Name",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your email",
      label: "Email",
    },
    {
      id: 3,
      name: "organisation",
      type: "text",
      placeholder: "e.g Tongston Institute",
      label: "Name of Organisation",
    },
  ];

  const handleOnchange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  const Submithandler = () => {}

  return (
    <div style={{display: "flex", alignItems: 'center', justifyContent: 'center', flexDirection: "column", backgroundColor: "#FFF9B9", opacity: 0.5}}>
      <form style={{width: "30%", marginTop: "4%" }} onSubmit={Submithandler}>
      <h6 style={{ fontSize: "25px", textAlign: "center", opacity: "0.5"}}>
        Personal Information
      </h6>
        
        {Inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            onChange={handleOnchange}
            value={values[input.name]}
          />
        ))}
        <button type="submit" style={{padding: "10px", borderRadius: "15px", width: "20%"}}>Submit</button>
      </form>

      <Calendly ></Calendly>
    </div>
  );
};

export default BookingForm;
