import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  RadioGroup,
  Select,
  Typography,
  Alert
} from "@mui/material";
import { Formik, Form, } from "formik";
import { CustomHr } from "../../../Cart/index";
import CustomBackButton from "../CustomBackButton/CustomBackButton.jsx";
import {
  CustomRadio,
  CustomLabel,
  TextFieldShipping,
  NumberFormatCustom
} from "../CustomInputs/CustomInputs";
import { validationSchemaShipping } from "../../../../utils/ValidationSchema";

const ShippingForm = ({ data, next, prev, shipping }) => {

  const handleSubmit = (value) => {
    next(value); 
  };
  const handleBack = (values) => {
    prev(values);
  };
  
  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchemaShipping}
      validateOnChange
      validateOnBlur
      onSubmit={(values) => {
        handleSubmit(values);
      }}
      
    >
      {(props) => (
        <Form id="shipping">
          <Grid container sx={{ maxWidth: {md: "726px", xs: "100%"} }} spacing={{md:10, xs:0}} rowGap={{md:0, xs:10}}>
            <Grid item xs={12} md={6}>
              <TextFieldShipping
                id="firstname"
                name="firstname"
                label="First Name"
                placeholder="First Name"
                size="small"
                value={props.values.firstname}
                onChange={props.handleChange}
                fullWidth
                error={props.touched.firstname && Boolean(props.errors.firstname)}
                helperText={props.touched.firstname && props.errors.firstname}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextFieldShipping
                id="lastname"
                name="lastname"
                label="Last Name"
                placeholder="Last Name"
                size="small"
                value={props.values.lastname}
                onChange={props.handleChange}
                fullWidth
                error={props.touched.lastname && Boolean(props.errors.lastname)}
                helperText={props.touched.lastname && props.errors.lastname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextFieldShipping
                id="address1"
                name="address1"
                label="Address"
                placeholder="Address"
                value={props.values.address1}
                size="small"
                onChange={props.handleChange}
                fullWidth
                error={props.touched.address1 && Boolean(props.errors.address1)}
                helperText={props.touched.address1 && props.errors.address1}
              />
            </Grid>
            <Grid item xs={12}>
              <TextFieldShipping
                id="address2"
                name="address2"
                label="Address 2"
                placeholder="Address 2"
                size="small"
                value={props.values.address2}
                onChange={props.handleChange}
                fullWidth
                error={props.touched.address2 && Boolean(props.errors.address2)}
                helperText={props.touched.address2 && props.errors.address2}
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
                  size="small"
                  onChange={props.handleChange}
                  error={props.touched.country && Boolean(props.errors.country)}
                  helpertext={props.touched.country && props.errors.country}
                >
                  <MenuItem value={"Ukraine"}>Ukraine</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextFieldShipping
                id="city"
                name="city"
                label="City"
                placeholder="City"
                size="small"
                value={props.values.city}
                onChange={props.handleChange}
                fullWidth
                error={props.touched.city && Boolean(props.errors.city)}
                helperText={props.touched.city && props.errors.city}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextFieldShipping
                id="email"
                name="email"
                label="Email"
                placeholder="Email"
                size="small"
                value={props.values.email}
                onChange={props.handleChange}
                fullWidth
                error={props.touched.email && Boolean(props.errors.email)}
                helperText={props.touched.email && props.errors.email}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextFieldShipping
                id="phone"
                name="phone"
                label="Phone Number"
                placeholder="Phone Number"
                size="small"
                value={props.values.phone}
                onChange={props.handleChange}
                fullWidth
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                error={props.touched.phone && Boolean(props.errors.phone)}
                helperText={props.touched.phone && props.errors.phone}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomHr />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <RadioGroup

                  id="delivery"
                  name="delivery"
                  value={props.values.delivery}
                  onChange={props.handleChange}
                  row
                  helpertext={props.touched.delivery && props.errors.delivery}
                >
                  <Grid item xs={12} md={6} sx={{ paddingRight: {md: "10px", xs: "0"}, paddingBottom:{md:"0", xs:"15px"}}}>
                    <CustomLabel
                      value="free"
                      onClick={()=> shipping("free")}
                      control={<CustomRadio />}
                      label={
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography variant="h3" sx={{ mb: "10px" }}>
                            Free Shipping
                          </Typography>
                          <Typography variant="subtitle2">
                            Between 2-5 working days
                          </Typography>
                        </Box>
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ paddingLeft: {md: "10px", xs: "0"}}}>
                    <CustomLabel
                      value="nextday"
                      onClick={()=> shipping("nextday")}
                      label={
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            paddingLeft:"30px"
                          }}
                        >
                          <Typography variant="h3" sx={{ mb: "10px" }}>
                            Next Day Delivery - 10$
                          </Typography>
                          <Typography variant="subtitle2">
                            24 hours from checkout
                          </Typography>
                        </Box>
                      }
                      control={<CustomRadio/>}
                    />
                  </Grid>
                </RadioGroup>
              </FormControl>
              {(props.touched.delivery && Boolean(props.errors.delivery))?
                    <Alert severity="error">Please choose delivery method</Alert>
                    :
                    ''
                    }
            </Grid>
           
          </Grid>
          <CustomHr sx={{ mb: "20px", mt: "30px" }} />
          <CustomBackButton onClick={() => handleBack(props.values)} />
        </Form>
      )}
    </Formik>
  );
};

export default ShippingForm;
