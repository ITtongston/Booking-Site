import React, { useState, useRef } from "react";
import styled from "styled-components";
import PackageBg from "../../Assets/img/packageBg.svg";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { Oval } from "svg-loaders-react";
import dayjs from "dayjs";
import { Paper, Typography, Box } from "@mui/material";
import PackagesDropDown from "./PackagesDropdown";
import emailjs from "@emailjs/browser";

const FormCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${PackageBg}) center no-repeat;
  background-size: 100vw;
  padding: 0 5% 5%;
  flex-direction: column;
`;

const InputCont = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  // border: 2px solid rgba(4, 4, 4, 0.34);
  gap: 0.6rem;
  

  & input {
    width: 200px;
    height: 2.3rem;
    border-radius: 5px;
    outline: none;
    border: 2px solid rgba(4, 4, 4, 0.34);
    padding-left: 10px;
  }

  & input:focus {
    border: 2px solid rgba(148, 216, 255, 0.66);
  }
  @media (max-width: 1000px) {
    justify-content: center;
  align-items: center;

  & input {
    width: 250px;
  }
  }

`;

const StyledButton = styled.button`
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 7px 10px;
  margin-top: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: 2px solid rgba(194, 29, 44, 0.98);
  background: rgba(194, 29, 44, 0.98);

  &:hover {
    background: rgba(194, 29, 44, 0.78);
    color: #fff;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 5rem;
  border-radius: 5px;
  outline: none;
  border: 2px solid rgba(4, 4, 4, 0.34);
  padding-left: 10px;

  &:focus {
    border: 2px solid rgba(148, 216, 255, 0.66);
  }

  @media (max-width: 1000px) {
    width: 70%;
  }
`;

const Papercard = styled.div`
display: flex;
justify-content: center;
alignItems: center;
// flexWrap: wrap;
gap: 1.5rem;
& > :not(style){
  margin: 1;
  max-width: 480px;
  padding: 2rem 1.5rem 1.5rem;
  height: 80%;
  margin-top: 2rem;
  border-radius: 10px;
  background-color: #f1f1f1;
  background-image: url(
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23320008' fill-opacity='0.18' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"
  )

  & form{
    display: flex;
        padding: 3% 1%;
        align-items: center;
        justify-content: center;
  }
`;

const BoxAmount = styled(Box)`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Packages = () => {
  const [inputValues, setInputValues] = useState({
    FullName: "",
    contactEmail: "",
    PhoneNumber: "",
    capacity: "",
    address: "",
    checkIn: "",
    Dates: "daily",
    orgName: "",
    planAmount: 75000,
    UseFor: "",
  });

  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  let naira = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
    useGrouping: true,
  });
  const AmountPlan = naira.format(inputValues.planAmount);

  const config = {
    public_key: process.env.REACT_APP_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: inputValues.planAmount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: inputValues.contactEmail,
      phone_number: inputValues.PhoneNumber,
      name: inputValues.FullName,
    },
    customizations: {
      title: "Virtual Membership",
      description: "Payment for Virtual membership",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const Inputs = [
    {
      id: 1,
      type: "text",
      label: "Contact Name",
      placeholder: "",
      name: "FullName",
    },
    {
      id: 2,
      type: "text",
      label: "Registered Org. Name",
      placeholder: "Enter your city",
      name: "orgName",
    },
    {
      id: 3,
      type: "email",
      label: "Contact Email",
      placeholder: "name@email.com",
      name: "contactEmail",
    },
    {
      id: 4,
      type: "text",
      label: "Phone Number",
      placeholder: "phone number...",
      name: "PhoneNumber",
    },
    {
      id: 5,
      type: "number",
      max: "2",
      min: "1",
      placeholder: "10",
      label: "Personnel Capacity",
      name: "capacity",
    },

    {
      id: 6,
      type: "text",
      label: "Organisation's Address",
      placeholder: "enter address",
      name: "address",
    },
  ];

  // handleFunctions

  const handleOnchange = (e) => {
    const { value, name } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  // payments

  const handleFlutterPayment = useFlutterwave(config);

  // handles Form submission and Payments

  const handleSummitPayment = (e) => {
    // submission
    setIsLoading(true);
    e.preventDefault();
    const { name, value } = e.target;

    // Payment

    // call FlutterModal
    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        if (response.status === "completed") return;
        setIsLoading(false);
        // closePaymentModal(); // this will close the modal programmatically
      },

      onClose: () => {
        setIsLoading(false);
        setInputValues({
          FullName: "",
          contactEmail: "",
          PhoneNumber: "",
          capacity: "",
          address: "",
          checkIn: "",
          Dates: "daily",
          orgName: "",
          planAmount: 75000,
          UseFor: "",
        });
      },
    });

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // console.log(AmountPlan);

  return (
    <>
      <FormCon>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "20px",
            mt: "2em",
            color: "#373434",
          }}
        >
          Virtual Office Membership Sign-Up
        </Typography>
        <Papercard>
          <Paper variant="outlined">
            <form ref={form} onSubmit={handleSummitPayment}>
              <InputCont>
                {Inputs.map((input) => (
                  <div key={input.id}>
                    <label
                      htmlFor=""
                      style={{
                        fontWeight: 600,
                        color: "rgba(21, 21, 19, 0.87)",
                      }}
                    >
                      {input.label}
                    </label>
                    <br></br>
                    <input
                      onChange={handleOnchange}
                      {...input}
                      value={inputValues[input.name]}
                      required
                    />
                  </div>
                ))}
              </InputCont>

              <Box sx={{marginTop: "1rem", marginLeft: {sm: 0, xs: '15%'}}}>
                <label
                  htmlFor=""
                  style={{ fontWeight: 600, color: "rgba(21, 21, 19, 0.87)" }}
                >
                  Details/Reason for Use
                </label>
              </Box>

              <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Textarea
                  name="UseFor"
                  value={inputValues.UseFor}
                  onChange={handleOnchange}
                />
              </Box>

              <BoxAmount>
                <PackagesDropDown
                  amount={inputValues.planAmount}
                  onHandleChange={handleOnchange}
                />
                <Box
                  sx={{
                    fontWeight: "bold",
                    borderBottom: "solid 2px blue",
                    pb: 0.5,
                    mt: 2,
                  }}
                >
                  {AmountPlan}
                </Box>
              </BoxAmount>
              <StyledButton type="submit">
                {isLoading ? (
                  <Oval stroke="#fff" width="25" height="25" />
                ) : (
                  "Sign Up"
                )}
              </StyledButton>
              <Typography
                sx={{
                  fontSize: "11px",
                  width: "70%",
                  color: "rgba(17, 17, 17, 0.72)",
                  mt: "10px",
                }}
              >
                By clicking sign up, I acknowledge that I have read and do
                hereby accept the terms and conditions in the Tongston's Hub
                Terms of Use, and Privacy Policy.
              </Typography>
            </form>
          </Paper>
        </Papercard>
      </FormCon>
    </>
  );
};

export default Packages;
