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
  Badge,
} from "@mui/material";
import {
  HeaderInput,
  HeaderLinks,
  IconsButtonContainer,
} from "./components/styles";
import Catalog from "./components/catalogButton.jsx";
import Logo from "./components/logoSvg";
import {
  FavoriteBorderOutlined,
  PersonOutlined,
  Search,
} from "@mui/icons-material";

import BagPopper from "./components/BagPopper.jsx";
import LoginPopper from "./components/LoginPopper.jsx";
import { useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";
// import { postSearchQuery } from "../../utils/api.js";

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.loggedIn);
  const modal = useSelector((state) => state.modal);
  const favorites = useSelector((state) => state.favorites.favorites);
  const [searchPhrase, setSearchPhrase] = useState("");

  const changeHandler = (event) => {
    setSearchPhrase(event.target.value);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 300),
    []
  );

  useEffect(() => {
    // if (searchPhrase) {
    //   postSearchQuery("products/search", { query: searchPhrase }).then((data) =>
    //     console.log(data)
    //   );
    // }
  }, [searchPhrase]);

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, []);

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
        <Link style={{ marginLeft: "-2.6041666666666665vw" }} to={"/"}>
          <Logo></Logo>
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
            onChange={debouncedChangeHandler}
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
            <IconButton onClick={handleOpen}>
              <PersonOutlined sx={{ color: "primary.main" }} />
            </IconButton>
          )}

          <IconButton sx={{ color: "primary.main" }} href={"/favorites"}>
            <Badge badgeContent={favorites.length} color="error">
              <FavoriteBorderOutlined />
            </Badge>
          </IconButton>
          <BagPopper />
        </IconsButtonContainer>
        {modal && <Authorization />}
      </Container>
      <Divider sx={{ borderColor: "primary.main", mb: "20px" }} />
    </header>
  );
};

export default Header;
