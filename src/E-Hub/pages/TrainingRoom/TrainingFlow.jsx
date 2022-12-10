import React, {useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Details from "./TrainingRoomForm";

const steps = [
  "Fill In Your Details",
  "Payments and Billing",
  "Booking Status",
];

export default function TrainingFlow() {
  const [activeStep, setActiveStep] = useState(0);
 
  const handleNext = () => {
   
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  
  };

    // setInterval(()=>(setActiveStep((prevActiveStep) => prevActiveStep + 1)
    // ), 3000);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

 const nextHandler = ()=>{
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
 }
  
  let flowContent;

    if (activeStep === 0) {
      flowContent = <Details  onNext={nextHandler}/>;
      
    } 
    console.log(activeStep); 

    if (activeStep === 1) {
     flowContent = 'Second';
    }

    if (activeStep === 2) {
      flowContent = 'Third';
    }
  

  return (
    <Box sx={{ width: "100%",  pt: 5 }}>
      <Stepper sx={{ width: "100%",  pt: 2, px: 2 }} activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <React.Fragment>
        <Typography sx={{ mt: 6, mb: 1 }}>{flowContent}</Typography>
      </React.Fragment>

      {activeStep === 3 ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Thanks For your Esteemed Interest in our Training Room, kindly check
            your email for confirmation!
          </Typography>
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
    </Box>
  );
}
