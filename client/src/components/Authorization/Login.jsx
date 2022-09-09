import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  // Box,
  Button,
  DialogActions,
  // Input,
  Stack,
  Typography,
  TextField,
  FormControl,
  Input,
  InputAdornment,
  IconButton,
  FormHelperText,
  Box,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import Preloader from "../../pages/Categories/Catalog Product List/Preloader.jsx";
import { postData } from "../../utils/api";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/Modal/actions";
import ConfirmationPromo from "./ConfirmationPromo.jsx";
import { validationLogInForm } from "./ValidationForm.jsx";

const Login = () => {
  const [loginData, setLoginData] = useState({ status: "", data: "" });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);

    postData("/customers/login", {
      loginOrEmail: values.email,
      password: values.password,
    })
      .then((loginRequest) => {
        setLoginData({ status: loginRequest.status, data: loginRequest.data });

        const token = loginRequest.data.token;
        localStorage.setItem("userToken", token);
        setTimeout(() => {
          handleClose();
        }, 2000);
      })
      .catch((error) => {
        setLoginData({
          status: error.response.status,
          data: error.response.data,
        });
      })
      .finally(() => actions.setSubmitting(false));
  };

  return (
    <>
      {loginData.status !== 200 ? (
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
                  hiddenLabel
                  size="small"
                  variant="standard"
                  id="email"
                  name="email"
                  placeholder="Email or Login"
                  value={props.values.email}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props.touched.email && Boolean(props.errors.email)}
                  helperText={props.touched.email && props.errors.email}
                />
                <FormControl
                  error={
                    props.touched.password && Boolean(props.errors.password)
                  }
                >
                  <Input
                    type={showPassword ? "text" : "password"}
                    size="small"
                    variant="standard"
                    id="password"
                    name="password"
                    aria-describedby="password"
                    placeholder="Password"
                    value={props.values.password}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {props.touched.password && Boolean(props.errors.password) && (
                    <FormHelperText sx={{ ml: "0" }} id="password">
                      {props.touched.password && props.errors.password}
                    </FormHelperText>
                  )}
                </FormControl>
              </Stack>
              <ConfirmationPromo />
              <DialogActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                {" "}
                {props.isSubmitting && (
                  <Box sx={{ mt: "20px", mb: "20px" }}>
                    <Preloader />
                  </Box>
                )}
                {!props.isSubmitting && loginData.status !== 200 && (
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
            </Form>
          )}
        </Formik>
      ) : (
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ mt: "40px", mb: "40px" }}
        >
          <Typography variant="h4" sx={{ color: "primary.main", mb: "15px" }}>
            Dear{" "}
            {/* Dear,{" "}
            {signUpResponse.message.data.firstName +
              " " +
              signUpResponse.message.data.lastName}
            ! */}
          </Typography>
          <Typography variant="h6" sx={{ mb: "10px" }}>
            Welcome to your cabinet.
          </Typography>
        </Stack>
      )}
    </>
  );
};

export default Login;
