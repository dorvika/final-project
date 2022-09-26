import {
  Box,
  FormControl,
  Grid,
  RadioGroup,
  Typography,
  Alert,
} from "@mui/material";
import { Formik, Form } from "formik";
import { CustomHr } from "../../../Cart/index";
import CustomBackButton from "../CustomBackButton/CustomBackButton.jsx";
import {
  CustomTextField,
  CustomRadio,
  CustomLabel,
  NumberFormatCustom,
} from "../CustomInputs/CustomInputs";
import { validationSchemaPayment } from "../../../../utils/ValidationSchema";

const PaymentForm = ({ data, next, prev }) => {
  const handleSubmit = (values) => {
    next(values);
  };
  const handleBack = (values) => {
    prev(values);
  };

  return (
    <Formik
      initialValues={data}
      validateOnChange
      validateOnBlur
      validationSchema={validationSchemaPayment}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {(props) => (
        <Form id="payment">
          <FormControl fullWidth>
            <RadioGroup
              id="paymentmethod"
              name="paymentmethod"
              value={props.values.paymentmethod}
              onChange={props.handleChange}
              row
              helpertext={props.touched.paymentmethod && props.errors.paymentmethod}
            >
              <Grid container sx={{ maxWidth: { md: "100%" } }} rowGap={20}>
                <Grid item xs={12}>
                  <CustomLabel
                    sx={{
                      height: {sm:"230px", xs:"300px"},
                      alignItems: "flex-start",
                      "& .MuiFormControlLabel-label": {
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        pt: "15px",
                        pl: "75px",
                      },
                    }}
                    value="creditcard"
                    label={
                      <Box>
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography variant="h3" sx={{ mb: "10px" }}>
                            Credit Card
                          </Typography>
                          <Typography variant="subtitle2">
                            Please enter your credit card details
                          </Typography>
                        </Box>
                        <Box>
                          <Grid
                            container
                            spacing={15}
                            sx={{
                              position: "absolute",
                              top: 65,
                              left: 0,
                              padding: "20px",
                            }}
                          >
                            <Grid item sm={6} xs={12}>
                              <CustomTextField
                                sx={{
                                  width: "100%",
                                  border: "none",
                                }}
                                disabled={
                                  props.values.paymentmethod !== "creditcard"
                                }
                                variant="outlined"
                                id="cardnumber"
                                size="small"
                                name="cardnumber"
                                label="Card Number"
                                value={props.values.cardnumber}
                                onChange={props.handleChange}
                                InputProps={{
                                  inputComponent: NumberFormatCustom,
                                }}
                                error={
                                  props.touched.cardnumber &&
                                  Boolean(props.errors.cardnumber)
                                }
                                helperText={
                                  props.touched.cardnumber &&
                                  props.errors.cardnumber
                                }
                              />
                            </Grid>
                            <Grid item sm={3} xs={4}>
                              <CustomTextField
                                sx={{ width: "100%" }}
                                disabled={
                                  props.values.paymentmethod !== "creditcard"
                                }
                                size="small"
                                id="mmyy"
                                name="mmyy"
                                label="MM/YY"
                                value={props.values.mmyy}
                                onChange={props.handleChange}
                                InputProps={{
                                  inputComponent: NumberFormatCustom,
                                }}
                                error={
                                  props.touched.mmyy &&
                                  Boolean(props.errors.mmyy)
                                }
                                helperText={
                                  props.touched.mmyy && props.errors.mmyy
                                }
                              />
                            </Grid>
                            <Grid item sm={3} xs={4}>
                              <CustomTextField
                                sx={{ width: "100%" }}
                                disabled={
                                  props.values.paymentmethod !== "creditcard"
                                }
                                size="small"
                                id="cvv"
                                name="cvv"
                                label="CVV"
                                value={props.values.cvv}
                                onChange={props.handleChange}
                                InputProps={{
                                  inputComponent: NumberFormatCustom,
                                }}
                                error={
                                  props.touched.cvv && Boolean(props.errors.cvv)
                                }
                                helperText={
                                  props.touched.cvv && props.errors.cvv
                                }
                              />
                            </Grid>
                            <Grid item xs={10}>
                              <CustomTextField
                                sx={{ width: "100%" }}
                                disabled={
                                  props.values.paymentmethod !== "creditcard"
                                }
                                size="small"
                                id="cardholdername"
                                name="cardholdername"
                                label="Card Holder Name"
                                value={props.values.cardholdername}
                                onChange={props.handleChange}
                                error={
                                  props.touched.cardholdername &&
                                  Boolean(props.errors.cardholdername)
                                }
                                helperText={
                                  props.touched.cardholdername &&
                                  props.errors.cardholdername
                                }
                              />
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    }
                    control={<CustomRadio />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomLabel
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        justifyContent: "flex-start",
                        pl: "75px",
                      },
                    }}
                    value="cash"
                    onClick={props.resetForm}
                    label={
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography variant="h3" sx={{ mb: "10px" }}>
                          Payment to the courier
                        </Typography>
                        <Typography variant="subtitle2">
                          Cash or card payment to the courier upon delivery
                        </Typography>
                      </Box>
                    }
                    control={<CustomRadio />}
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
          {props.touched.paymentmethod && Boolean(props.errors.paymentmethod) ? (
            <Alert severity="error">Please choose payment method</Alert>
          ) : (
            ""
          )}

          <CustomHr sx={{ mb: "20px", mt: "30px" }} />
          <CustomBackButton onClick={() => handleBack(props.values)} />
        </Form>
      )}
    </Formik>
  );
};

export default PaymentForm;
