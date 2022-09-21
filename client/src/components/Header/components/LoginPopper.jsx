import { PersonOutlined } from "@mui/icons-material";
import {
  Button,
  ClickAwayListener,
  Fade,
  IconButton,
  Popper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedOut } from "../../../store/isLogged/actions";
import { removeAllFromCart } from "../../../store/cart/actions";
import { removeAllFromWishlist } from "../../../store/favorites/actions"
const LoginPopper = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.loggedIn);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const handleLogOut = () => {
    dispatch(setLoggedOut());
    dispatch(removeAllFromCart())
    dispatch(removeAllFromWishlist())
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
            placement="bottom-end"
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    maxwidth: "340px",
                    padding: "14px",
                    background: "white",
                    border: "1px solid main",
                  }}
                >
                  <Typography variant="h5" sx={{ m: "25px" }}>
                    Hello {userData.firstName + " " + userData.lastName}
                  </Typography>
                  <Typography variant="h5" sx={{ m: "10px" }}>
                    This is your account profile which you will be able to
                    review in nearest future.
                  </Typography>
                  <Button
                    onClick={handleLogOut}
                    sx={{ p: "5px 20px", m: "25px" }}
                    variant="contained"
                  >
                    LogOut
                  </Button>
                </Stack>
              </Fade>
            )}
          </Popper>
          <Tooltip title={userData.firstName + " " + userData.lastName}>
            <PersonOutlined sx={{ color: "primary.main" }} />
          </Tooltip>
        </IconButton>
      </ClickAwayListener>
    </>
  );
};
export default LoginPopper;
