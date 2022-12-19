import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import training from "../../Assets/img/training.jpg";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { Oval } from "svg-loaders-react";
import dayjs from "dayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const FormBg = styled.div`
// background: rgba(98, 105, 158, 0.1);
display: flex;
align-items: center;
justify-content: center;
height: 100vh;


}
`;

const FormCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // gap: 1rem;
  position: relative;
  max-width: 70%;

  padding: 2%;
  margin: 3rem 0;
  border-radius: 10px;
  box-shadow: 3px 3px 5px 1px rgba(7, 8, 8, 0.2);
  background: rgba(243, 247, 250, 0.66);

  & .imgdiv {
    width: 90%;
    border-radius: 40% 60% 21% 79% / 40% 10% 90% 60%;
  }

  & form {
    position: relative;
    height: 70%;
    width: 100%;
    display: flex;
    padding: 3% 3%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 1200px) {
    // width: 60%;
    flex-direction: column;
  }
`;

const InputCont = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
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
`;

const DurAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 10px 0;
  margin-right: 10%;
`;

const RadioInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: column;

  & .radio {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

const IncreaseBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 1.3rem;

  & button {
    background-color: rgba(216, 164, 2, 1);
    width: 40px;
    height: 30px;
    outline: none;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  & button:hover {
    background-color: rgba(223, 203, 11, 1);
  }
`;

const SpanDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

const StyledButton = styled.button`
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 7px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: 2px solid rgba(207, 175, 2, 0.98);
  background: rgba(207, 175, 2, 0.98);

  &:hover {
    background: rgba(207, 175, 2, 0.78);
    color: #fff;
  }
`;

const Imgcon = styled.div`
  position: relative;
  width: 70%;
  & h3 {
    margin-bottom: 10px;
  }
`;

const Details = ({ onNext }) => {
  // states
  const [inputValues, setInputValues] = useState({
    FullName: "",
    contactEmail: "",
    PhoneNumber: "",
    capacity: "",
    address: "",
    checkIn: "",
    Dates: "daily",
  });
  const [CheckInDate, setCheckInDate] = React.useState(dayjs("2014-08-18").$d);

  // console.log(CheckInDate.$d);

  const [DayPrice, setDayPrice] = useState(25000);
  const [weekPrice, setWeekPrice] = useState(400000);
  const [dayDuration, setDAyDuration] = useState(1);
  const [weekDuration, setWeekDuration] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // styles

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
      type: "email",
      label: "Contact Email",
      placeholder: "name@email.com",
      name: "contactEmail",
    },
    {
      id: 3,
      type: "text",
      label: "Phone Number",
      placeholder: "phone number...",
      name: "PhoneNumber",
    },
    {
      id: 4,
      type: "number",
      max: "20",
      min: "1",
      placeholder: "10",
      label: "Expected Capacity",
      name: "capacity",
    },

    {
      id: 5,
      type: "text",
      label: "Address",
      placeholder: "enter address",
      name: "address",
    },
    {
      id: 6,
      type: "text",
      label: "Check-in Time",
      placeholder: "input a preferred time",
      name: "checkIn",
    },
  ];

  const handleOnchange = (e) => {
    const { value, type, checked, name } = e.target;

    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleDate = (newValue) => {
    setCheckInDate(newValue);
  };

  let isChecked;

  if (inputValues.Dates === "daily") {
    isChecked = true;
  }
  if (inputValues.Dates === "weekly") {
    isChecked = false;
  }

  const handleDaysIncrease = () => {
    setDayPrice((prevAmount) => prevAmount + 25000);
    setDAyDuration((prevDuration) => prevDuration + 1);
  };
  const handleDaysDecrease = () => {
    if (DayPrice < 25000) {
      return;
    } else if (DayPrice === 25000) {
      return;
    } else {
      setDayPrice((prevAmount) => prevAmount - 25000);
      setDAyDuration((prevDuration) => prevDuration - 1);
    }
  };

  const handleWeekIncrease = () => {
    setWeekPrice((prevAmount) => prevAmount + 400000);
    setWeekDuration((prevDuration) => prevDuration + 1);
  };

  const handleWeekDecrease = () => {
    if (weekPrice < 400000) {
      return;
    } else if (weekPrice === 400000) {
      return;
    } else {
      setWeekPrice((prevAmount) => prevAmount - 400000);
      setWeekDuration((prevDuration) => prevDuration - 1);
    }
  };

  // payments

  const config = {
    public_key: process.env.REACT_APP_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: isChecked ? DayPrice : weekPrice,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: inputValues.contactEmail,
      phone_number: inputValues.PhoneNumber,
      name: inputValues.FullName,
    },
    customizations: {
      title: "Training Room",
      description: "Payment for Training Room",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  // handles Form submission and Payments

  const handleSummitPayment = async (e) => {
    e.preventDefault();
    //
    setIsLoading(true);

    // submitForm details

    // call FlutterModal
    handleFlutterPayment({
      onNext: onNext(),
      callback: (response) => {
        console.log(response);
        // if response.ok do something
        // else do something
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {
        setIsLoading(false);
      },
    });
  };

  return (
    <div>
      <FormBg>
        <FormCont>
          <Imgcon>
            <h3>Your Meeting Room</h3>
            <img className="imgdiv" src={training} alt="" />
          </Imgcon>
          <form onSubmit={handleSummitPayment} action="">
            <InputCont>
              {Inputs.map((input) => (
                <div key={input.id}>
                  <label
                    htmlFor=""
                    style={{ fontWeight: 600, color: "rgba(21, 21, 19, 0.87)" }}
                  >
                    {input.label}
                  </label>{" "}
                  <br></br>
                  <input
                    onChange={handleOnchange}
                    {...input}
                    value={inputValues[input.name]}
                  />
                </div>
              ))}
            </InputCont>
            <Box sx={{ mr: "50%", mt: 3 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Check-In Date"
                  inputFormat="MM/DD/YYYY"
                  value={CheckInDate.$d}
                  name="CheckInDate"
                  onChange={handleDate}
                  renderInput={(params) => <TextField {...params} />}
                  sx={{}}
                />
              </LocalizationProvider>
            </Box>
            <DurAmount>
              <RadioInput>
                <span
                  style={{ color: "rgba(21, 21, 19, 0.87)", fontWeight: 600 }}
                >
                  Preffered Check-In type
                </span>
                <div className="radio">
                  <div>
                    <input
                      type="radio"
                      value="daily"
                      onChange={handleOnchange}
                      name="Dates"
                      id="days"
                      checked={inputValues.Dates === "daily"}
                    />
                    <label htmlFor="" style={{ marginLeft: "5px" }}>
                      Per Day
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="weekly"
                      onChange={handleOnchange}
                      name="Dates"
                      id="week"
                      checked={inputValues.Dates === "weekly"}
                    />
                    <label
                      htmlFor=""
                      style={{
                        marginLeft: "5px",
                        color: "rgba(21, 21, 19, 0.87)",
                      }}
                    >
                      Per Week
                    </label>
                  </div>
                </div>
              </RadioInput>

              <div>
                {isChecked && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "1rem",
                    }}
                  >
                    <SpanDiv>
                      <span
                        style={{
                          border: "1px solid rgba(216, 164, 2, 1)",
                          borderRadius: "5px",
                          padding: "4px",
                          fontFamily: "fantasy",
                        }}
                      >
                        Amount: NGN {DayPrice}
                      </span>
                      <span style={{ fontFamily: "fantasy" }}>
                        Duration {dayDuration} Day/s
                      </span>
                    </SpanDiv>
                    <IncreaseBtn>
                      <button type="button" onClick={handleDaysIncrease}>
                        <FaPlus />
                      </button>
                      <button type="button" onClick={handleDaysDecrease}>
                        <FaMinus />
                      </button>
                    </IncreaseBtn>
                  </div>
                )}
                {!isChecked && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "1rem",
                    }}
                  >
                    <SpanDiv>
                      <span
                        style={{
                          border: "1px solid rgba(216, 164, 2, 1)",
                          borderRadius: "5px",
                          padding: "4px",
                          fontFamily: "fantasy",
                        }}
                      >
                        Amount: NGN {weekPrice}
                      </span>
                      <span style={{ fontFamily: "fantasy" }}>
                        Duration {weekDuration} week/s
                      </span>
                    </SpanDiv>
                    <IncreaseBtn>
                      <button type="button" onClick={handleWeekIncrease}>
                        <FaPlus />
                      </button>
                      <button type="button" onClick={handleWeekDecrease}>
                        <FaMinus />
                      </button>
                    </IncreaseBtn>
                  </div>
                )}
              </div>
            </DurAmount>
            <StyledButton type="submit" onClick={handleSummitPayment}>
              {isLoading ? (
                <Oval stroke="#fff" width="25" height="25" />
              ) : (
                "Proceed to pay"
              )}
            </StyledButton>
          </form>
        </FormCont>
      </FormBg>
    </div>
  );
};

export default Details;
