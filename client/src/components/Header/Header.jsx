import { Button } from "@mui/material";
import Authorization from "../Authorization/Authorization.jsx";
import { openModal } from "../../store/Modal/actions";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-duplicates
import { Input, Typography } from "@mui/material";
import Logo from "./headerComponents/logoSvg";
import Catalog from "./headerComponents/catalogButton";
import Icons from "./headerComponents/iconsButton";
// eslint-disable-next-line import/no-duplicates
import { Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import InputAdornment from "@mui/material/InputAdornment";

const Header = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

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
        <Link to={"/"}>
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
                <SearchIcon></SearchIcon>
              </InputAdornment>
            }
            sx={{ width: "379px", padding: "0 0 0 0", color: "primary.main" }}
            id="standard-basic"
            placeholder="Search"
            variant="standard"
          />
        </Box>
        <Icons></Icons>
        {modal && <Authorization />}
      </Container>
    </header>
  );
};

export default Header;
