import { useState } from "react";
import { Container, Box, Stepper, Step, StepButton } from "@mui/material";
import stepperStyle from "./style";
// import products from "../Cart/ProductsExamples.jsx";
import {
  ShoppingBagPage,
  ShippingDetailsPage,
  PaymentOptionsPage,
  ThanksOrderPage,
} from "./pages/index";

const steps = ["Shopping Bag", "Shipping Details", "Payment Options"];

export default function HorizontalNonLinearStepper({products}) {
  
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    address1: "",
    address2: "",
    country: "",
    city: "",
    zip: "",
    phone: "",
    delivery: "",
    paymentmethod: "",
    cardnumber: "",
    mmyy: "",
    cvv: "",
    cardholdername: "",
  });

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
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const newCompleted = completed;
    newCompleted[activeStep - 1] = false;
    setCompleted(newCompleted);
  };

  const handleComplete = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <ShoppingBagPage
            title={steps[activeStep]}
            products={products}
            next={handleComplete}
          />
        );
      case 1:
        return (
          <ShippingDetailsPage
            title={steps[activeStep]}
            products={products}
            next={handleComplete}
            prev={handleBack}
            data={data}
          />
        );
      case 2:
        return (
          <PaymentOptionsPage
            title={steps[activeStep]}
            products={products}
            next={handleComplete}
            prev={handleBack}
            data={data}
          />
        );
    }
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
              {steps.map((label, index) => (
                <Step key={label} sx={stepperStyle.step} variant="h2">
                  <StepButton color="inherit" sx={stepperStyle.stepButton}>
                    {`${index + 1}. ${label}`}
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
              <>
                <ThanksOrderPage />
              </>
            ) : (
              <Box>{renderStepContent(activeStep)}</Box>
            )}
          </div>
        </Container>
      </Box>
    </>
  );
}
