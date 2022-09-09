import {
  // Box,
  Button,
  DialogActions,
  // Input,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import { postData } from "../../utils/api";
// import { useDispatch } from "react-redux";
// import { closeModal } from "../../store/Modal/actions";
import ConfirmationPromo from "./ConfirmationPromo.jsx";
import { validationLogInForm } from "./ValidationForm.jsx";

const Login = () => {
  const [loginData, setLoginData] = useState({ status: "", data: "" });

  // const dispatch = useDispatch();

  // const handleClose = () => {
  //   dispatch(closeModal());
  // };

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);
    // setLoginData(values);
    console.log("values", values);
    postData("/customers/login", {
      loginOrEmail: values.email,
      password: values.password,
    })
      .then((loginRequest) => {
        setLoginData({ status: loginRequest.status, data: loginRequest.data });
        console.log(loginRequest);
        const token = loginRequest.data.token;
        localStorage.setItem("userToken", token);
      })
      .catch((error) => {
        setLoginData({
          status: error.response.status,
          data: error.response.data,
        });
        console.log(error);
      })
      .finally(() => actions.setSubmitting(false));
  };
  console.log("loginData", loginData);

  return (
    <>
      {/* {loginData} */}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationLogInForm}
        validateOnChange
        validateOnBlur
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form id="logIn">
            <Stack direction="column">
              <TextField
                type="email"
                hiddenLabel
                size="small"
                variant="standard"
                id="email"
                name="email"
                placeholder="Email"
                value={props.values.email}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={props.touched.email && Boolean(props.errors.email)}
                helperText={props.touched.email && props.errors.email}
              />
              <TextField
                hiddenLabel
                // type={showPassword ? "text" : "password"}
                size="small"
                variant="standard"
                id="password"
                name="password"
                // type="password"
                placeholder="Password"
                value={props.values.password}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                // endAdornment={
                //   <InputAdornment position="end">
                //     <IconButton
                //       aria-label="toggle password visibility"
                //       onClick={handleClickShowPassword}
                //       onMouseDown={handleMouseDownPassword}
                //     >
                //       {showPassword ? <VisibilityOff /> : <Visibility />}
                //     </IconButton>
                //   </InputAdornment>
                // }
                error={props.touched.password && Boolean(props.errors.password)}
                helperText={props.touched.password && props.errors.password}
              />
            </Stack>
            <ConfirmationPromo />
            <DialogActions
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {loginData.status !== 200 && (
                <Typography
                  variant="subtitle2"
                  sx={{ color: "error.main", mb: "20px", fontWeight: 700 }}
                >
                  {loginData.data !== undefined
                    ? Object.values(loginData.data)
                    : "Unknown error, update fields"}
                </Typography>
              )}
              <Button
                variant="contained"
                type="submit"
                disabled={props.isSubmitting}
                // onClick={() => handleSubmit(props.values)}
                sx={{ padding: "15px 94px", mb: "30px" }}
              >
                log in
              </Button>
            </DialogActions>
            <Typography
              variant="subtitle1"
              sx={{ textTransform: "uppercase", mb: "50px" }}
            >
              forgot password?
            </Typography>
          </Form>
        )}
      </Formik>
      {/* <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
        display="flex"
        flexDirection="column"
      >
        <Input placeholder="Email" />
        <Input placeholder="Password" />
      </Box> */}
      {/* <ConfirmationPromo />
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Button onClick={handleClose} sx={{ padding: "15px 94px", mb: "30px" }}>
          log in
        </Button>
      </DialogActions>
      <Typography
        variant="subtitle1"
        sx={{ textTransform: "uppercase", mb: "50px" }}
      >
        forgot password?
      </Typography> */}
    </>
  );
};

export default Login;
