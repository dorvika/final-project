import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { CustomHr } from "../Cart/index";
import { Formik, Form } from "formik";

const CustomLabel = styled(FormControlLabel)(() => ({
  width: "100%",
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
    justifyContent: "center",
  },
}));

const CustomRadio = styled(Radio)(() => ({
  zIndex: "1",
  "&.Mui-checked": {
    "&, & + .MuiFormControlLabel-label, & + .MuiTypography-root": {
      color: "#ffffff",
    },
  },
  "&.Mui-checked + .MuiFormControlLabel-label": {
    backgroundColor: "#373F41",
  },
}));

const ShippingDetails = ({ data, next }) => {
  const handleSubmit = (values) => {
    next(values);
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
          <Grid container sx={{ maxWidth: "726px" }} spacing={10}>
            <Grid item xs={12} md={6}>
              <TextField
                id="firstname"
                name="firstname"
                label="First Name"
                placeholder="First Name"
                value={props.values.firstname}
                onChange={props.handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="lastname"
                name="lastname"
                label="Last Name"
                placeholder="Last Name"
                value={props.values.lastname}
                onChange={props.handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address1"
                name="address1"
                label="Address"
                placeholder="Address"
                value={props.values.address1}
                onChange={props.handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address2"
                name="address2"
                label="Address 2"
                placeholder="Address 2"
                value={props.values.address2}
                onChange={props.handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="select-label">Country</InputLabel>
                <Select
                  labelId="select-label"
                  name="country"
                  id="country"
                  value={props.values.country}
                  label="Country"
                  onChange={props.handleChange}
                >
                  <MenuItem value={"UA"}>Ukraine</MenuItem>
                  <MenuItem value={"USA"}>United States of America</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="city"
                name="city"
                label="City"
                placeholder="City"
                value={props.values.city}
                onChange={props.handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="zip"
                name="zip"
                label="Zip/Postal Code"
                placeholder="Zip/Postal Code"
                value={props.values.zip}
                onChange={props.handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="phone"
                name="phone"
                label="Phone Number"
                placeholder="Phone Number"
                value={props.values.phone}
                onChange={props.handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <CustomHr />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  id="delivery"
                  name="delivery"
                  value={props.values.delivery}
                  onChange={props.handleChange}
                  row
                >
                  <Grid item xs={12} md={6} sx={{ paddingRight: "10px" }}>
                    <CustomLabel
                      value="free"
                      control={<CustomRadio />}
                      label={
                        <Box
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Typography variant="subtitle1" sx={{ mb: "10px" }}>
                            Free Shipping
                          </Typography>
                          <Typography variant="subtitle2">
                            Between 2-5 working days
                          </Typography>
                        </Box>
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ paddingLeft: "10px" }}>
                    <CustomLabel
                      value="nextday"
                      label={
                        <Box
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Typography variant="subtitle1" sx={{ mb: "10px" }}>
                            Next Day Delivery - 10$
                          </Typography>
                          <Typography variant="subtitle2">
                            24 hours from checkout
                          </Typography>
                        </Box>
                      }
                      control={<CustomRadio />}
                    />
                  </Grid>
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default ShippingDetails;
