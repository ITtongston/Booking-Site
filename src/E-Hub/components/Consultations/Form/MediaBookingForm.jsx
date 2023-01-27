import React from "react";
import FormInput from "./FormInput";
import { useState } from "react";
import styled from "styled-components";
import FormBg from '../../../Assets/img/mediaformBg.svg'
import Handshake from '../../../Assets/img/handshake.gif';
import ServicesDropdown from '../../Consultations/Form/MediaServicesDropDown'
import { FaEnvelope } from "react-icons/fa";


// styles

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
display: flex;
align-items: center;
justify-content: center;
padding: 0 2%;

  & h2{
    display: flex;
    align-center: center;
    font-weight: bold;
  }

  & h2 img{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 1000px) {
    & h2{
      font-size: 20px;
      width: 70%;
      text-align: center;
    }
  }

  `;

  const StyledTextarea = styled.textarea`
margin: 1rem 0;
border: none;
border-bottom: 2px solid #2E2C2C;
padding: 2px 4px 2px;
outline: none;
width: 100%;
background-color: transparent; 
&::placeholder{
 opacity: 0.8;
}
`;


  const StyledButton = styled.button`
  padding: 10px 10px;
  border-radius: 10px;
  width: 40%;
  cursor: pointer;
  margin: 1rem auto 0;
  background: transparent;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
gap: 10px;
transition: 0.3s all ease;
font-weight: 600;

  &:hover{
    gap: 15px;
  }
  @media (max-width: 1000px){
    width: 50%;
  }
`
  const Styledform = styled.form`
  max-width: 60%;
  min-width: 35%;
  @media (max-width: 1000px){
    min-width: 70%;
  }
`
const BookingForm = () => {
  const [values, setValues] = useState({
    organisationName: "",
    contactPerson: "",
    contactEmail: "",
    organisationEmail: "",
    organisationPhone: "",
    address: "",
    dateOfInterest: "",
    mediaService: "",
    moreInfo: ""
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
      placeholder: "organisation's address",
      errowMessage: "Field is required...",
      label: "Address",
    },
    {
      id: 5,
      name: "dateOfInterest",
      type: "date",
      label: "Date of Interest",
    },
  ];

  
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

      <Styledform
        style={{
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
        <ServicesDropdown values={values} onHandleChange={handleOnchange}/>
        <StyledTextarea placeholder="enter any other detail..." name="moreInfo" onChange={handleOnchange} min="300" max="1000"/>
        <StyledButton
          type="submit"
          
        >
          Submit <FaEnvelope size={15}/>
        </StyledButton>
      </Styledform>
    </StyledCont>
  );
};

export default BookingForm;
