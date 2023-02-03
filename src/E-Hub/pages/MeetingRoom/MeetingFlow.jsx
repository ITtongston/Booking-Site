import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Details from "./MeetingRoomForm";
import styled from "@emotion/styled";
import PayBg from "../../Assets/img/payBG.svg";

const steps = [
  "Fill In Your Details",
  "Payments and Billing",
  "Booking Status",
];

const ContBox = styled(Box)`
  width: 100%;
  background: url(${PayBg}) center no-repeat;
  background-size: 100vw;
  backround-image: ;
`;

const StyledButton = styled.button`
  max-width: 130px;
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
    background: transparent;
    color: rgba(207, 175, 2, 0.98);
  }
`;

export default function TrainingFlow() {
  const [activeStep, setActiveStep] = useState(0);

  // setInterval(()=>(setActiveStep((prevActiveStep) => prevActiveStep + 1)
  // ), 3000);

  const handleBack = () => {
    if (activeStep === 1) return;
    else setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const nextHandler = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  let flowContent;

  if (activeStep === 0) {
    flowContent = <Details goBack={handleBack} onNext={nextHandler} />;
  }
  console.log(activeStep);

  if (activeStep === 1) {
    flowContent = (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
        }}
      >
        <span>Please Wait...</span>
      </div>
    );
  }

  return (
    <ContBox>
      <Stepper sx={{ width: "100%", pt: 2, px: 5 }} activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <React.Fragment>
        <Typography sx={{pt: 6, pb: 5}}>{flowContent}</Typography>
      </React.Fragment>

      {activeStep > 1 && (
        <React.Fragment>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              flexDirection: "column",
              gap: "0.5rem",
              textAlign: 'center'
            }}
          >
            <Typography sx={{ mt: 5, fontSize: {sm: '20px', xs: '16px'} }}>
              Thanks For your Esteemed Interest in our Meeting Room, kindly
              check your email for confirmation!
            </Typography>
            <StyledButton
              onClick={() =>
                setActiveStep((prevActiveStep) => prevActiveStep - prevActiveStep)
              }
            >
              Go Back
            </StyledButton>
          </div>
        </React.Fragment>
      )}
      
    </ContBox>
  );
}
