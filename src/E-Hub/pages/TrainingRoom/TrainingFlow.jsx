import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Details from "./TrainingRoomForm";
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
export default function TrainingFlow() {
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
          AlignItems: "center",
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
        <Typography sx={{ my: 6, mb: 1 }}>{flowContent}</Typography>
      </React.Fragment>

      {activeStep === 2 ? (
        <React.Fragment>
          <div
            style={{
              display: "flex",
              AlignItems: "center",
              justifyContent: "center",
              height: "50vh",
            }}
          >
            <Typography sx={{mt: 5, fontSize: '20px'}}>
              Thanks For your Esteemed Interest in our Training Room, kindly
              check your email for confirmation!
            </Typography>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
          </Box>
        </React.Fragment>
      )}
    </ContBox>
  );
}
