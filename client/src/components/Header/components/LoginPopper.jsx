import { PersonOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  ClickAwayListener,
  Fade,
  IconButton,
  Popper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

const LoginPopper = () => {
  const { userData } = useSelector((state) => state.loggedIn);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <IconButton
          style={{ textDecoration: "none", color: "#373F41" }}
          aria-describedby={id}
          onClick={handleClick}
        >
          <Popper
            sx={{ zIndex: "10000" }}
            id={id}
            open={open}
            anchorEl={anchorEl}
            transition
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Box
                  sx={{
                    width: "340px",
                    padding: "14px",
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography>
                    {userData.firstName + userData.lastName}
                  </Typography>
                  <Button
                    sx={{ width: "320px", height: "40px" }}
                    variant="outlined"
                  >
                    LogOut
                  </Button>
                </Box>
              </Fade>
            )}
          </Popper>

          <PersonOutlined sx={{ color: "primary.main" }} />
        </IconButton>
      </ClickAwayListener>
    </>
  );
};
export default LoginPopper;
