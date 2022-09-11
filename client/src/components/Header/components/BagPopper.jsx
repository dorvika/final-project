import { ShoppingBagOutlined } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button, ClickAwayListener,
  Fade,
  IconButton,
  Popper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import CartProductModal from "./CartProductModal";

const BagPopper = () => {
  const cart = useSelector((state) => state.cart.cart);
  const cartTotalSum = () => {
    return cart.reduce((sum, cartItem) => {
      return sum + cartItem.product.currentPrice * cartItem.cartQuantity;
    }, 0);
  };
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
          sx={{
            height: "600px",
            zIndex: "1000",
            overflowY: "scroll",
            overflowX: "none"
        }}
          placement="bottom-end"
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
                <Typography>Bag({cart.length})</Typography>
                <Typography>TOTAL: USD ${cartTotalSum()}</Typography>
                <Link style={{ textDecoration: "none" }} to={"/cart"}>
                  <Button
                    sx={{ width: "320px", height: "40px" }}
                    variant="outlined"
                  >
                    VIEW BAG
                  </Button>
                </Link>
                <Link
                  style={{ textDecoration: "none", marginTop: "10px" }}
                  to={"/cart/checkout"}
                >
                  <Button
                    sx={{ width: "320px", height: "40px" }}
                    variant="contained"
                  >
                    CHECKOUT
                  </Button>
                </Link>
                <Box >
                  {cart.map((cartItem) => {
                    return (
                        <CartProductModal
                            key={cartItem.product._id}
                            cartQuantity={cartItem.cartQuantity}
                            product={cartItem.product}
                        />
                    );
                  })}
                </Box>
              </Box>
            </Fade>
          )}
        </Popper>

        <Badge badgeContent={cart.length} color="error">
          <ShoppingBagOutlined />
        </Badge>
      </IconButton>
</ClickAwayListener>
    </>
  );
};
export default BagPopper;
