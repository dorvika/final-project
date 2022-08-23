import { Box, Button, DialogActions, Input, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/Modal/actions";
import ConfirmationPromo from "./ConfirmationPromo.jsx";

const Login = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <Box
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
      </Box>
      <ConfirmationPromo />
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
      </Typography>
    </>
  );
};

export default Login;
