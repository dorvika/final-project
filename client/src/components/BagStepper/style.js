const stepperStyle = {
  stepper: {
    position: "relative",
    paddingTop: "30px",
    paddingBottom: "19px",
    borderBottom: "1px solid #FFFFFF",

    "& .MuiStepConnector-root": {
      display: "none",
    },
  },
  step: {
    flex: "33.33%",
    padding: 0,
    "& .MuiStepLabel-iconContainer": {
      display: "none",
    },
  },
  stepButton: {
    padding: 0,
    margin: 0,
    cursor: "inherit",
    "& .MuiStepLabel-label": {
      color: "##949697",
    },
    "& .MuiStepLabel-label.Mui-active": {
      color: "#ffffff",
      "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: "-19px",
        width: "100%",
        height: "5px",
        backgroundColor: "#FFFFFF",
      },
    },
  },
};

export default stepperStyle