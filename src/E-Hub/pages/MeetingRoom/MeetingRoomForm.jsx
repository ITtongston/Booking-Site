import styled from "styled-components";
import React from "react";
import { useState, useRef } from "react";
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
import workspaceApi from "../../api/workspaceApi";
import { Paper, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import emailjs from "@emailjs/browser";

const FormBg = styled.div`
  // background: rgba(98, 105, 158, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormCont = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  // gap: 1rem;
  position: relative;
  max-width: 60%;
  background-color: #fcf8dc;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%23a2a2a1' fill-opacity='0.29'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
  padding: 3% 1% 2%;

  & .imgdiv {
    width: 70%;
    border-radius: 40% 60% 21% 79% / 40% 10% 90% 60%;
  }

  & form {
    position: relative;
    height: 70%;
    width: 100%;
    display: flex;
    padding: 3% 1%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 1200px) {
    max-width: 90%;
    flex-direction: column;
  }
`;

const InputCont = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: center;
  align-items: center;

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
    & input {
      width: 300px;
    }
  }
`;

const DurAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 10px 10%;
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
  width: 80%;

  & h3 {
    margin-bottom: 10px;
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

  @media (max-width: 1000px){
    width: 70%;
  }
`;

const Details = ({ onNext, goBack }) => {

  // states
  const [inputValues, setInputValues] = useState({
    FullName: "",
    contactEmail: "",
    PhoneNumber: "",
    capacity: 1,
    address: "",
    checkIn: "",
    checkOut: "",
    Dates: "daily",
    orgName: "",
    UseFor: "",
    workSpace: "Training Room",
  });
  const [CheckInDate, setCheckInDate] = React.useState(dayjs("2014-08-18").$d);
  const [CheckOutDate, setCheckOutDate] = React.useState(
    dayjs("2014-08-18").$d
  );

  const form = useRef()

  const [DayPrice, setDayPrice] = useState(13718);
  const [weekPrice, setWeekPrice] = useState(61731);
  const [dayDuration, setDAyDuration] = useState(1);
  const [weekDuration, setWeekDuration] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [checkedStates, setCheckedStates] = useState({
    BoardMarker: false,
    BoardDuster: false,
    Water: false,
    WeekendUse: false,
    HDMICable: false,
    Wifi: false,
  });

  const checkBoxes = [
    {
      id: 1,
      label: "White Board Marker",
      checked: checkedStates.BoardMarker,
      name: "BoardMarker",
    },
    {
      id: 2,
      label: "White Board Duster",
      checked: checkedStates.BoardDuster,
      name: "BoardDuster",
    },
    {
      id: 3,
      label: "Water",
      checked: checkedStates.Water,
      name: "Water",
    },
    {
      id: 4,
      label: "Weekend Use Surcharge",
      checked: checkedStates.WeekendUse,
      name: "WeekendUse",
    },
    {
      id: 5,
      label: "HDMI Cable",
      checked: checkedStates.HDMICable,
      name: "HDMICable",
    },
    {
      id: 6,
      label: "Wi-FI",
      checked: checkedStates.Wifi,
      name: "Wifi",
    },
  ];

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
      type: "text",
      label: "Organisation's Name",
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
      max: "20",
      min: "1",
      label: "Expected Capacity",
      name: "capacity",
    },

    {
      id: 6,
      type: "text",
      label: "Organisation's Address",
      placeholder: "enter address",
      name: "address",
    },
    {
      id: 7,
      type: "text",
      label: "Check-in Time",
      placeholder: "input a preferred time",
      name: "checkIn",
    },
    {
      id: 8,
      type: "text",
      label: "Check-Out Time",
      placeholder: "input a preferred time",
      name: "checkOut",
    },
  ];

  // handleFunctions

  const handleOnchange = (e) => {
    const { value,name } = e.target;

    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnChecked = (e) => {
    const { type, checked, name } = e.target;
    setCheckedStates((prevStates) => ({ ...prevStates, [name]: checked }));
  };

  const handleInDate = (newValue) => {
    setCheckInDate(newValue);
  };

  const handleOutDate = (newValue) => {
    setCheckOutDate(newValue);
  };

  let isChecked;

  if (inputValues.Dates === "daily") {
    isChecked = true;
  }
  if (inputValues.Dates === "weekly") {
    isChecked = false;
  }

  const handleDaysIncrease = () => {
    setDayPrice((prevAmount) => prevAmount + 13718);
    setDAyDuration((prevDuration) => prevDuration + 1);
  };

  const handleDaysDecrease = () => {
    if (DayPrice < 13718) {
      return;
    } else if (DayPrice === 13718) {
      return;
    } else {
      setDayPrice((prevAmount) => prevAmount - 13718);
      setDAyDuration((prevDuration) => prevDuration - 1);
    }
  };

  const handleWeekIncrease = () => {
    setWeekPrice((prevAmount) => prevAmount + 61731);
    setWeekDuration((prevDuration) => prevDuration + 1);
  };

  const handleWeekDecrease = () => {
    if (weekPrice < 61731) {
      return;
    } else if (weekPrice === 61731) {
      return;
    } else {
      setWeekPrice((prevAmount) => prevAmount - 61731);
      setWeekDuration((prevDuration) => prevDuration - 1);
    }
  };

  const mappedBoxes = checkBoxes.map((checkBox) => (
    <FormGroup key={checkBox.id}>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleOnChecked}
            name={checkBox.name}
            checked={checkedStates[checkBox.checked]}
          />
        }
        label={checkBox.label}
      />
    </FormGroup>
  ));

  console.log(checkedStates);

  let waterPrice;
  let hdmiPrice;
  let markerPrice;
  let dusterPrice;
  let weekendCharge;
  let wifi;

  if (checkedStates.Water) waterPrice = 150;
  else waterPrice = 0;
  if (checkedStates.BoardDuster) dusterPrice = 300;
  else dusterPrice = 0;
  if (checkedStates.BoardMarker) markerPrice = 500;
  else markerPrice = 0;
  if (checkedStates.HDMICable) hdmiPrice = 500;
  else hdmiPrice = 0;
  if (checkedStates.Wifi) wifi = 1200;
  else wifi = 0;
  if (checkedStates.WeekendUse) weekendCharge = 5000;
  else weekendCharge = 0;

  let naira = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
    useGrouping: true,
  });

  let totalDayPrice =
    DayPrice +
    waterPrice * inputValues.capacity +
    hdmiPrice +
    markerPrice +
    wifi * inputValues.capacity +
    dusterPrice +
    weekendCharge;
  let totalWeekPrice =
    weekPrice +
    waterPrice * inputValues.capacity +
    hdmiPrice +
    markerPrice +
    wifi * inputValues.capacity +
    dusterPrice +
    weekendCharge;

  const finalTotalDayPrice = naira.format(totalDayPrice);
  const finalTotalWeekPrice = naira.format(totalWeekPrice);

  // payments

  const config = {
    public_key: process.env.REACT_APP_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: isChecked ? totalDayPrice : totalWeekPrice,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: inputValues.contactEmail,
      phone_number: inputValues.PhoneNumber,
      name: inputValues.FullName,
    },
    customizations: {
      title: "Meeting Room",
      description: "Payment for Meeting Room",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  // handles Form submission and Payments

  const handleSummitPayment = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      const formBody = {
        name: inputValues.FullName,
        email: inputValues.contactEmail,
        Phone: inputValues.PhoneNumber,
        checkInTime: CheckInDate,
        capacity: inputValues.capacity,
        address: inputValues.address,
        CheckInDate: inputValues.Dates,
        UseFor: inputValues.UseFor,
        workSpace: inputValues.workSpace,
        finalTotalDayPrice,
        finalTotalWeekPrice,
        addOns: {
          BoardMarker: false,
          BoardDuster: false,
          Water: false,
          WeekendUse: false,
          HDMICable: false,
          Wifi: false,
        },
      };
      const response = await workspaceApi.post("/workspace.json", formBody);
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }

    // submitForm details

    // call FlutterModal
    handleFlutterPayment({
      onNext: onNext(),
      callback: (response) => {
        if (response.status !== "successful") return;
        closePaymentModal();
        onNext();
      },

      onClose: () => {
        setIsLoading(false);
        goBack();
      },
    });

    // emailJs

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID3,
        process.env.REACT_APP_TEMPLATE_ID3,
        form.current,
        process.env.REACT_APP_PUBLIC_ID3
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
  console.log(inputValues.UseFor);

  
  return (
    <>
      <FormBg>
        <FormCont>
          <Imgcon>
            <h3>Your Meeting Room</h3>
            <img className="imgdiv" src={training} alt="" />
            <h3>Add-Ons</h3>
            <span style={{ fontSize: "0.7rem" }}>
              <i>Kindly tick to include:</i> <br />
              <i>Note: add-ons comes at an extra cost</i>
            </span>
            {mappedBoxes}
          </Imgcon>

          <form onSubmit={handleSummitPayment} ref={form}>
            <InputCont>
              {Inputs.map((input) => (
                <div key={input.id}>
                  <label
                    htmlFor=""
                    style={{ fontWeight: 600, color: "rgba(21, 21, 19, 0.87)" }}
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: { sm: "row", xs: "column" },
                gap: "1rem",
                mt: 3,
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Check-In Date"
                  inputFormat="MM/DD/YYYY"
                  value={CheckInDate.$d}
                  name="CheckInDate"
                  onChange={handleInDate}
                  renderInput={(params) => <TextField {...params} />}
                  sx={{ width: 100 }}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Check-Out Date"
                  inputFormat="MM/DD/YYYY"
                  value={CheckOutDate.$d}
                  name="CheckOutDate"
                  onChange={handleOutDate}
                  renderInput={(params) => <TextField {...params} />}
                  sx={{}}
                />
              </LocalizationProvider>
            </Box>
            <div style={{ marginTop: "1rem" }}>
              <label
                htmlFor=""
                style={{ fontWeight: 600, color: "rgba(21, 21, 19, 0.87)" }}
              >
                Reason for Use
              </label>
            </div>
            <Textarea
              name="UseFor"
              value={inputValues.UseFor}
              onChange={handleOnchange}
            />

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
                    <label
                      htmlFor=""
                      style={{
                        marginLeft: "5px",
                        color: "rgba(21, 21, 19, 0.87)",
                        fontSize: "13px",
                      }}
                    >
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
                        fontSize: "13px",
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
                        Amount: {finalTotalDayPrice}
                      </span>
                      <div
                        style={{
                          border: "1px solid rgba(216, 164, 2, 1)",
                          borderRadius: "5px",
                          padding: "4px",
                        }}
                      >
                        <span style={{ fontFamily: "fantasy" }}>
                          Duration {dayDuration} Day/s
                        </span>
                        <IncreaseBtn>
                          <button type="button" onClick={handleDaysIncrease}>
                            <FaPlus />
                          </button>
                          <button type="button" onClick={handleDaysDecrease}>
                            <FaMinus />
                          </button>
                        </IncreaseBtn>
                      </div>
                    </SpanDiv>
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
                        Amount:{finalTotalWeekPrice}
                      </span>
                      <div
                        style={{
                          border: "1px solid rgba(216, 164, 2, 1)",
                          borderRadius: "5px",
                          padding: "4px",
                        }}
                      >
                        <span style={{ fontFamily: "fantasy" }}>
                          Duration {weekDuration} week/s
                        </span>
                        <IncreaseBtn>
                          <button type="button" onClick={handleWeekIncrease}>
                            <FaPlus />
                          </button>
                          <button type="button" onClick={handleWeekDecrease}>
                            <FaMinus />
                          </button>
                        </IncreaseBtn>
                      </div>
                    </SpanDiv>
                  </div>
                )}
              </div>
            </DurAmount>
            <StyledButton type="submit">
              {isLoading ? (
                <Oval stroke="#fff" width="25" height="25" />
              ) : (
                "Proceed to pay"
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
              By clicking sign up, I acknowledge that I have read and do hereby
              accept the terms and conditions in the Tongston's Hub Terms of
              Use, and Privacy Policy.
            </Typography>
          </form>
        </FormCont>
      </FormBg>
    </>
  );
};

export default Details;
