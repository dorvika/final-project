import Authorization from "../Authorization/Authorization.jsx";
import { openModal } from "../../store/Modal/actions";
import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import {Link, useLocation, useSearchParams} from "react-router-dom";
import {
    Typography,
    Container,
    Box,
    InputAdornment,
    IconButton,
    Divider, Fade, Popper, Button,
} from "@mui/material";
import {HeaderInput} from "./components/styles";
// eslint-disable-next-line import/no-unresolved
import Catalog from "./components/catalogButton";
import Logo from "./components/logoSvg";
import {
  FavoriteBorderOutlined,
  PersonOutlined,
  Search,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import {useEffect, useState} from "react";
import {setFilterParams} from "../../store/Filters/actions";
// import {fetchData} from "../../utils/api";


const Header = () => {

    const dispatch = useDispatch();

    let [searchParams, setSearchParams] = useSearchParams();
    const [filterObj, setFilterObj] = useState({
        categories: searchParams.get("categories") || "",
    });

    // const [setFilteredProducts] = useState([]);

    const selectedFilters = Object.keys(filterObj)
        .filter((key) => filterObj[key] !== "")
        .reduce((acc, key) => ({ ...acc, [key]: filterObj[key] }), {});

    const queryString = useLocation().search;

    useEffect(() => {
        dispatch(setFilterParams(selectedFilters));
        setSearchParams(selectedFilters);
        // if (queryString) {
        //     fetchData(`/products/filter/${queryString}`).then((data) =>
        //         setFilteredProducts(data.products)
        //     );
        // }
    }, [filterObj, queryString, dispatch, setSearchParams]);

    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };


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
          alignItems: "center"
        }}
      >
        <Link style={{marginLeft: "-2.6041666666666665vw"}} to={"/"}>
          <Logo></Logo>
        </Link>
        <Catalog setFilterObj={setFilterObj} filterObj={filterObj} />
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
            <FavoriteBorderOutlined />
          </Link>
          <IconButton
            style={{ textDecoration: "none", color: "#373F41" }} aria-describedby={id} onClick={handleClick}>

              <Popper sx={{zIndex: "10000"}} id={id} open={open} anchorEl={anchorEl} transition>
                  {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={350}>
                          <Box sx={
                              {

                                  width: "340px",
                                  padding: "14px",
                                  background: "white",
                                  display: "flex",
                                  flexDirection: "column",

                              }}>
                              <Typography>Bag(2)</Typography>
                              <Typography>TOTAL: USD $490</Typography>
                              <Link style={{textDecoration: "none"}} to={"/cart"}>
                              <Button sx={{width: "320px", height: "40px"}} variant="outlined">VIEW BAG</Button>
                              </Link>
                              <Link style={{textDecoration: "none", marginTop: "10px"}} to={"/cart/checkout"}>
                              <Button sx={{width: "320px", height: "40px"}} variant="contained">CHECKOUT</Button>
                              </Link>
                          </Box>
                      </Fade>
                  )}
              </Popper>

            <ShoppingBagOutlined/>
          </IconButton>
        </Box>
        { modal && <Authorization/>}
      </Container>
      <Divider sx={{ borderColor: "primary.main", mb: "20px" }} />
    </header>
  );
};

export default Header;
