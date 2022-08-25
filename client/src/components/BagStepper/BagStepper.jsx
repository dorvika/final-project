import { useState } from "react";
import {
  Container,
  Box,
  Stepper,
  Step,
  StepButton,
  Typography,
  Button,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import stepperStyle from "./style";
import ThanksOrder from "./ThanksOrder.jsx";
import ShoppingBag from "./ShoppingBag.jsx";
import ShippingDetails from "./ShippingDetails.jsx";
import PaymentOptions from "./PaymentOptions.jsx";
import { CustomHr } from "../Cart/index";
import { Link } from "react-router-dom";
import products from "../Cart/ProductsExamples.jsx";
import Summary from "./Summary/Summary.jsx";

const steps = ["Shopping Bag", "Shipping Details", "Payment Options"];

export default function HorizontalNonLinearStepper() {
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
    console.log(data);
    return completedSteps() === totalSteps();
  };

  const handleNext = (newData) => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setData((prev) => ({ ...prev, ...newData }));
    setActiveStep(newActiveStep);
  };

  const handleBack = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const newCompleted = completed;
    newCompleted[activeStep - 1] = false;
    setCompleted(newCompleted);
  };
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <ShoppingBag products={products} />;
      case 1:
        return <ShippingDetails next={handleNext} data={data} />;
      case 2:
        return (
          <PaymentOptions next={handleNext} prev={handleBack} data={data} />
        );
    }
  };
  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
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
          cursor: "pointer",
        }}
      >
        <ArrowBackIosNewIcon
          sx={{ fontSize: "16px", mr: "4px", verticalAlign: "middle" }}
        />
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
                <ThanksOrder />
              </>
            ) : (
              <Container
                sx={{
                  p: "80px 0",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "primary.main",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      mb: "15px",
                    }}
                  >
                    {steps[activeStep]}
                  </Typography>
                  <CustomHr sx={{ mb: "20px" }} />
                  <Box>{renderStepContent(activeStep)}</Box>
                  <CustomHr sx={{ mb: "20px", mt: "30px" }} />
                  {activeStep === 0 ? (
                    <Link
                      to="/cart"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <CustomBackButton />
                    </Link>
                  ) : (
                    <CustomBackButton onClick={handleBack} />
                  )}
                </Box>
                <Box
                  sx={{
                    width: "370px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "primary.main",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      mb: "15px",
                    }}
                  >
                    Summary
                  </Typography>
                  <CustomHr />
                  {activeStep !== 0 && (
                    <>
                      <ShoppingBag products={products} small={true} />
                      <CustomHr />
                    </>
                  )}
                  <Summary />
                  <Button
                    variant="contained"
                    sx={{ p: "15px 85px", alignSelf: "flex-end" }}
                    onClick={handleComplete}
                  >
                    Buy
                  </Button>
                </Box>
              </Container>
            )}
          </div>
        </Container>
      </Box>
    </>
  );
}
