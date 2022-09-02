// import { Button } from "@mui/material";
import Authorization from "../Authorization/Authorization.jsx";
import { openModal } from "../../store/Modal/actions";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-duplicates
import {
  Input,
  Typography,
  Container,
  Box,
  InputAdornment,
  IconButton,
  Divider,
  Badge,
} from "@mui/material";
import Logo from "./headerComponents/logoSvg";
import Catalog from "./headerComponents/catalogButton";
// import Icons from "./headerComponents/iconsButton";
// eslint-disable-next-line import/no-duplicates
// import { Container } from "@mui/material";
import {
  FavoriteBorderOutlined,
  PersonOutlined,
  Search,
  ShoppingBagOutlined,
} from "@mui/icons-material";
// import { Box } from "@mui/system";
// import InputAdornment from "@mui/material/InputAdornment";

const Header = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const cart  = useSelector((state) => state.cart.cart);
  const favorites  = useSelector((state) => state.favorites.favorites);

  const handleOpen = () => {
    dispatch(openModal());
  };
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
        <Link style={{marginLeft: "-2.6041666666666665vw"}} to={"/"}>
          <Logo></Logo>
        </Link>
        <Catalog></Catalog>
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
          <Input
            endAdornment={
              <InputAdornment position="start">
                <Search></Search>
              </InputAdornment>
            }
            sx={{ width: "379px", padding: "0 0 0 0", color: "primary.main" }}
            id="standard-basic"
            placeholder="Search"
            variant="standard"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "10%",
          }}
        >
          <IconButton sx={{ p: "0" }} onClick={handleOpen}>
            <PersonOutlined sx={{ color: "primary.main" }} />
          </IconButton>
          <Link
            style={{ textDecoration: "none", color: "#373F41" }}
            to={"/favorite"}
          >
            <Badge badgeContent={favorites.length} color="error">
              <FavoriteBorderOutlined />
            </Badge>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#373F41" }}
            to={"/cart"}
          >
            <Badge badgeContent={cart.length} color="error">
              <ShoppingBagOutlined />
            </Badge>
            
          </Link>
        </Box>
        {modal && <Authorization />}
      </Container>
      <Divider sx={{ borderColor: "primary.main", mb: "20px" }} />
    </header>
  );
};

export default Header;
