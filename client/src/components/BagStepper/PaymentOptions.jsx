import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { CustomHr } from "../Cart/index";
import { styled } from "@mui/material/styles";
import { Formik, Form } from "formik";

const CustomLabel = styled(FormControlLabel)(() => ({
  width: "726px",
  height: "113px",
  position: "relative",
  "& .MuiFormControlLabel-label": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    paddingLeft: "90px",
  },
}));

const CustomRadio = styled(Radio)(() => ({
  zIndex: "1",
  "&.Mui-checked": {
    "&, & + .MuiFormControlLabel-label, & + .MuiTypography-root": {
      color: "#ffffff",
    },
    "~ .MuiFormControlLabel-label": {
      backgroundColor: "#373F41",
    },
  },
}));

const PaymentOptions = ({data, next}) => {
  const handleSubmit = (values) => {
    next(values)
  };

  return (
    <Formik
      initialValues={data}
      validateOnChange
      validateOnBlur
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {(props) => (
        <Form>
          <FormControl>
            <RadioGroup
              id="paymentmethod"
              name="paymentmethod"
              value={props.values.paymentmethod}
              onChange={props.handleChange}
            >
              <CustomLabel
                sx={{
                  height: "261px",
                  alignItems: "flex-start",
                  "& .MuiFormControlLabel-label": {
                    alignItems: "flex-start",
                    pt: "30px",
                  },
                }}
                value="creditcard"
                control={<CustomRadio sx={{ pt: "20px" }} />}
                label={
                  <Box style={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="subtitle1" sx={{ mb: "10px" }}>
                      Credit Card
                    </Typography>
                    <Typography variant="subtitle2">
                      Please enter your credit card details
                    </Typography>
                    <Grid
                      container
                      sx={{ position: "absolute", top: "85px", left: "20px" }}
                    >
                      <Grid item>
                        <TextField
                          sx={{ width: "350px", mr: "10px", mb:"30px", border:"none"}}
                          disabled={props.values.paymentmethod !== "creditcard"}
                          id="cardnumber"
                          name="cardnumber"
                          label="Card Number"
                          placeholder="0000 0000 0000 0000"
                          value={props.values.cardnumber}
                          onChange={props.handleChange}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          sx={{ width: "119px", mr: "10px" }}
                          disabled={props.values.paymentmethod !== "creditcard"}
                          id="mmyy"
                          name="mmyy"
                          label="MM/YY"
                          placeholder="MM/YY"
                          value={props.values.mmyy}
                          onChange={props.handleChange}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          sx={{ width: "119px" }}
                          disabled={props.values.paymentmethod !== "creditcard"}
                          id="cvv"
                          name="cvv"
                          label="CVV"
                          placeholder="CVV"
                          value={props.values.cvv}
                          onChange={props.handleChange}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          sx={{ width: "480px" }}
                          disabled={props.values.paymentmethod !== "creditcard"}
                          id="cardholdername"
                          name="cardholdername"
                          label="Card Holder Name"
                          placeholder="Card Holder Name"
                          value={props.values.cardholdername}
                          onChange={props.handleChange}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                }
              />
              <CustomHr sx={{ m: "30px 0" }} />
              <CustomLabel
                value="cash"
                label={
                  <Box style={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="subtitle1" sx={{ mb: "10px" }}>
                      Payment to the courier
                    </Typography>
                    <Typography variant="subtitle2">
                      Cash or card payment to the courier upon delivery
                    </Typography>
                  </Box>
                }
                control={<CustomRadio />}
              />
            </RadioGroup>
          </FormControl>
        </Form>
      )}
    </Formik>
  );
};

export default PaymentOptions;
