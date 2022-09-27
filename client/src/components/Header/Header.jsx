import Authorization from "../Authorization/Authorization.jsx";
import { openModal } from "../../store/modal/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Typography,
  Container,
  IconButton,
  Divider,
  Badge,
  Tooltip,
} from "@mui/material";
import { HeaderLinks, IconsButtonContainer } from "./components/styles";
import Catalog from "./components/catalogButton.jsx";
import Logo from "./components/logoSvg";
import {
  FavoriteBorderOutlined,
  PersonOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";

import BagPopper from "./components/BagPopper.jsx";
import SearchBar from "./components/SearchBar.jsx";

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, userData } = useSelector((state) => state.loggedIn);
  const modal = useSelector((state) => state.modal);
  const favorites = useSelector((state) => state.favorites.favorites);
  const bag = useSelector((state) => state.cart);
  const isBagEmpty = bag.cart.length === 0;

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
        <Link style={{ marginLeft: "-40px" }} to={"/"}>
          <Logo />
        </Link>
        <Catalog />

        <HeaderLinks>
          <Link to="/aboutus" style={{ textDecoration: "none" }}>
            <Typography variant="body">About</Typography>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Typography variant="body">Contact</Typography>
          </Link>
          <Link to="/blog" style={{ textDecoration: "none" }}>
            <Typography variant="body">Blog</Typography>
          </Link>
        </HeaderLinks>
        <SearchBar />
        <IconsButtonContainer
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {isLoggedIn ? (
            <>
              <IconButton component={Link} to="/cabinet">
                <Tooltip title={userData.firstName + " " + userData.lastName}>
                  <PersonOutlined sx={{ color: "primary.main" }} />
                </Tooltip>
              </IconButton>
            </>
          ) : (
            <IconButton onClick={handleOpen}>
              <PersonOutlined sx={{ color: "primary.main" }} />
            </IconButton>
          )}

          <IconButton sx={{ color: "primary.main" }} component={Link} to="/favorites">
            <Badge badgeContent={favorites.length} color="error">
              <FavoriteBorderOutlined />
            </Badge>
          </IconButton>
          {isBagEmpty ? (
            <IconButton sx={{ color: "primary.main" }} component={Link} to="/cart">
              <Badge badgeContent={bag.cart.length} color="error">
                <ShoppingBagOutlined />
              </Badge>
            </IconButton>
          ) : (
            <BagPopper />
          )}
        </IconsButtonContainer>
        {modal && <Authorization />}
      </Container>
      <Divider sx={{ borderColor: "primary.main", mb: "20px" }} />
    </header>
  );
};

export default Header;
