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
import { validationForm } from "./ValidationForm.jsx";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const newLogin = {
    loginOrEmail: loginData.email,
    password: loginData.password,
  };
  // const dispatch = useDispatch();

  // const handleClose = () => {
  //   dispatch(closeModal());
  // };

  const handleSubmit = (values) => {
    setLoginData(values);
    console.log(values);
    postData("/customers/login", newLogin)
      .then((loginRequest) => console.log(loginRequest))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Formik
        initialValues={loginData}
        validationSchema={validationForm}
        validateOnChange
        validateOnBlur
        onSubmit={(values) => {
          handleSubmit(values);
        }}
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
                // error={props.touched.email && Boolean(props.errors.email)}
                // helperText={props.touched.email && props.errors.email}
              />
              <TextField
                hiddenLabel
                // type={showPassword ? "text" : "password"}
                size="small"
                variant="standard"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={props.values.password}
                onChange={props.handleChange}
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
              <Button
                variant="contained"
                type="submit"
                onClick={() => handleSubmit(props.values)}
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
