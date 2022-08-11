import { Box, Container, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import theme from "../../muiTheme/theme";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <hr className="footerLine"></hr>
      <Container>
        <Box>
          <Typography marginTop="81px" variant="h6">
            Shop
          </Typography>
          <List>
            <ListItem
              sx={{
                paddingTop: 0,
                paddingLeft: 0,
                paddingBottom: "15px",
                paddingRight: 0,
              }}
            >
              <Link to="/categories" style={{ textDecoration: "none" }}>
                <Typography variant="body">Catalog</Typography>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link to="/payment" style={{ textDecoration: "none" }}>
                <Typography variant="body">Payment & Delivery</Typography>
              </Link>
            </ListItem>
            <Link to="/returns" style={{ textDecoration: "none" }}>
              <Typography variant="body">Returns</Typography>
            </Link>
            <Link to="/privacypolicy" style={{ textDecoration: "none" }}>
              <Typography variant="body">Privacy Policy</Typography>
            </Link>
            <Link to="/termsofservice" style={{ textDecoration: "none" }}>
              <Typography variant="body">Terms of Service</Typography>
            </Link>
          </List>
        </Box>
      </Container>

      <hr className="footerLine"></hr>
    </footer>
  );
};

export default Footer;
