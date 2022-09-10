import Authorization from "../Authorization/Authorization.jsx";
import { openModal } from "../../store/Modal/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Typography,
  Container,
  Box,
  InputAdornment,
  IconButton,
  Divider,
  // Popper,
  Badge,
  // Fade,
  // Button,
} from "@mui/material";
import { HeaderInput, IconsButtonContainer } from "./components/styles";
import Catalog from "./components/catalogButton.jsx";
import Logo from "./components/logoSvg";
import {
  FavoriteBorderOutlined,
  PersonOutlined,
  Search,
  // ShoppingBagOutlined,
} from "@mui/icons-material";
// import { useState } from "react";
import BagPopper from "./components/BagPopper.jsx";
import LoginPopper from "./components/LoginPopper.jsx";
// import { fetchData, getDataLS } from "../../utils/api.js";
// import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const token = getDataLS("userToken");
  // console.log(token);
  // useEffect(() => {
  //   if (token.length !== 0) {
  //     fetchData("/customers/customer").then((response) =>
  //       console.log(response)
  //     );
  //   }
  // });
  const { isLoggedIn } = useSelector((state) => state.loggedIn);

  // const [open, setOpen] = useState(false);
  // const [anchorEl, setAnchorEl] = useState(null);

  // const canBeOpen = open && Boolean(anchorEl);
  // const id = canBeOpen ? "transition-popper" : undefined;

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  //   setOpen((previousOpen) => !previousOpen);
  // };

  const modal = useSelector((state) => state.modal);
  // const cart = useSelector((state) => state.cart.cart);
  const favorites = useSelector((state) => state.favorites.favorites);
  // const cartTotalSum = () => {
  //   return cart.reduce((sum, cartItem) => {
  //     return sum + cartItem.product.currentPrice * cartItem.cartQuantity;
  //   }, 0);
  // };

  const handleOpen = () => {
    dispatch(openModal());
  };
  console.log("islogidin header", isLoggedIn);
  return (
    <header>
      <Container
        sx={{
          fontSize: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link style={{ marginLeft: "-2.6041666666666665vw" }} to={"/"}>
          <Logo></Logo>
        </Link>
        <Catalog />
        <Link to="/aboutus" style={{ textDecoration: "none" }}>
          <Typography variant="body">About</Typography>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <Typography variant="body">Contact</Typography>
        </Link>
        <Link to="/blog" style={{ textDecoration: "none" }}>
          <Typography variant="body">Blog</Typography>
        </Link>
        <Box>
          <HeaderInput
            endAdornment={
              <InputAdornment position={"start"}>
                <Search></Search>
              </InputAdornment>
            }
            id="standard-basic"
            placeholder="Search"
            variant="standard"
          />
        </Box>
        <IconsButtonContainer
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "10%",
          }}
        >
          {isLoggedIn ? (
            <LoginPopper />
          ) : (
            // <IconButton
            //   style={{ textDecoration: "none", color: "#373F41" }}
            //   aria-describedby={id}
            //   onClick={handleClick}
            // >
            //   <Popper
            //     sx={{ zIndex: "10000" }}
            //     id={id}
            //     open={open}
            //     anchorEl={anchorEl}
            //     transition
            //   >
            //     {({ TransitionProps }) => (
            //       <Fade {...TransitionProps} timeout={350}>
            //         <Box
            //           sx={{
            //             width: "340px",
            //             padding: "14px",
            //             background: "white",
            //             display: "flex",
            //             flexDirection: "column",
            //           }}
            //         >
            //           <Typography>
            //             {userData.firstName + userData.lastName}
            //           </Typography>
            //           <Typography>TOTAL: USD ${cartTotalSum()}</Typography>

            //           <Button
            //             sx={{ width: "320px", height: "40px" }}
            //             variant="outlined"
            //           >
            //             LogOut
            //           </Button>
            //         </Box>
            //       </Fade>
            //     )}
            //   </Popper>
            //   <PersonOutlined sx={{ color: "primary.main" }} />
            // </IconButton>
            <IconButton sx={{ p: "0" }} onClick={handleOpen}>
              <PersonOutlined sx={{ color: "primary.main" }} />
            </IconButton>
          )}

          <Link
            style={{ textDecoration: "none", color: "#373F41" }}
            to={"/favorites"}
          >
            <Badge badgeContent={favorites.length} color="error">
              <FavoriteBorderOutlined />
            </Badge>
          </Link>
          <BagPopper />

          {/* <IconButton
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
                  </Box>
                </Fade>
              )}
            </Popper>
            <Badge badgeContent={cart.length} color="error">
              <ShoppingBagOutlined />
            </Badge>
          </IconButton> */}
        </IconsButtonContainer>
        {modal && <Authorization />}
      </Container>
      <Divider sx={{ borderColor: "primary.main", mb: "20px" }} />
    </header>
  );
};

export default Header;
