import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";
import stepperStyle from "./style";
import ThanksOrder from "./ThanksOrder.jsx";

const steps = ["1. Shopping Bag", "2. Shipping Details", "3. Payment Options"];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const newCompleted = completed;
    newCompleted[activeStep - 1] = false;
    setCompleted(newCompleted);
    console.log(completed);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
    console.log(completed);
  };

  const CustomBackButton = ({ onClick }) => {
    return (
      <Typography
        variant="body"
        component="span"
        onClick={onClick}
        sx={{
          fontSize: "18px",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: "16px", mr: "4px" }} />
        Back
      </Typography>
    );
  };
  return (
    <>
      <Box backgroundColor="primary.main" pb={15}>
        <Container>
          <Box sx={{ width: "100%" }}>
            <Stepper
              nonLinear
              activeStep={activeStep}
              sx={stepperStyle.stepper}
            >
              {steps.map((label) => (
                <Step key={label} sx={stepperStyle.step} variant="h2">
                  <StepButton color="inherit" sx={stepperStyle.stepButton}>
                    {label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container>
          <div>
            {allStepsCompleted() ? (
              <React.Fragment>
                <ThanksOrder/>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Step {activeStep + 1}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  {activeStep === 0 ? (
                    <Link
                      to="/cart"
                      style={{
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <CustomBackButton />
                    </Link>
                  ) : (
                    <CustomBackButton onClick={handleBack} />
                  )}

                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button sx={{p: "15px 85px"}} onClick={handleComplete}>
                    {completedSteps() === 0 ? "Buy" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </div>
        </Container>
      </Box>
    </>
  );
}
