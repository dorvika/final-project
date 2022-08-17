import {
  Button,
  Dialog,
  Slide,
  //   DialogTitle,
  DialogContent,
  //   DialogContentText,
  DialogActions,
  //   Tabs,
  Tab,
  Box,
  IconButton,
  Input,
  Typography,
  //   Typography,
} from "@mui/material";
import { CheckBox, Close, Facebook, Google } from "@mui/icons-material/";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import { closeModal } from "../../store/Modal/actions";
import { useDispatch, useSelector } from "react-redux";
import { forwardRef, useState } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Authorization = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <Dialog
        open={modal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle>{"Use Google's location service?"}</DialogTitle> */}
        <Box display="flex" alignItems="center" justifyContent="flex-end">
          <IconButton onClick={handleClose}>
            <Close size="small" fontSize="small" />
          </IconButton>
        </Box>
        <DialogContent sx={{ pt: "0" }}>
          <Box sx={{ width: "100%", height: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  //   aria-label="lab API tabs example"
                >
                  <Tab
                    sx={{
                      color: "primary.main",
                      backgroundColor: "primary.contrastText",
                    }}
                    label="Sign Up"
                    value="1"
                  />
                  <Tab
                    sx={{
                      color: "primary.main",
                      backgroundColor: "primary.contrastText",
                      borderBottom: "1px solid",
                    }}
                    label="Login"
                    value="2"
                  />
                </TabList>
              </Box>
              <TabPanel value="1">
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
                <Box display="flex">
                  <CheckBox />
                  <Typography>
                    Let&#39;s get personal! We&#39;ll send you only the good
                    stuff: Exclusive early access to Sale, new arrivals and
                    promotions. No nasties.
                  </Typography>
                </Box>
                <Typography>
                  By signing up you agree to Terms of Service and Privacy Policy
                </Typography>
                <DialogActions display="flex" justifyContent="center">
                  <Button onClick={handleClose}>Sign Up</Button>
                  <IconButton>
                    <Google />
                  </IconButton>
                  <IconButton>
                    <Facebook />
                  </IconButton>
                </DialogActions>
                <TabList onChange={handleChange}>
                  <Tab
                    sx={{
                      color: "primary.main",
                      backgroundColor: "primary.contrastText",
                    }}
                    label="I have an account"
                    value="2"
                  />
                </TabList>
              </TabPanel>
              <TabPanel value="2">Login</TabPanel>
            </TabContext>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Authorization;
