import { Facebook, Google } from "@mui/icons-material";
import { Box, Button, DialogActions, Input } from "@mui/material";
import { Stack } from "@mui/system";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/Modal/actions";
import ConfirmationPromo from "./ConfirmationPromo.jsx";

const SignUp = () => {
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
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm Password" />
      </Box>
      <ConfirmationPromo />
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button onClick={handleClose} sx={{ p: "15px 94px", mb: "30px" }}>
          Sign Up
        </Button>
        <Stack direction="row">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://google.com"
          >
            <Google color="primary" sx={{ marginRight: "30px" }} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://facebook.com"
          >
            <Facebook color="primary" />
          </a>
        </Stack>
      </DialogActions>
    </>
  );
};

export default SignUp;
