import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
// import theme from "../../muiTheme/theme";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <hr className="footerLine"></hr>
      <Container>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box component="div">
            <Typography marginTop="81px" variant="h6">
              Shop
            </Typography>
            <List>
              <ListItem>
                <Link to="/categories" style={{ textDecoration: "none" }}>
                  <Typography variant="body">Catalog</Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/payment" style={{ textDecoration: "none" }}>
                  <Typography variant="body">Payment & Delivery</Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/returns" style={{ textDecoration: "none" }}>
                  <Typography variant="body">Returns</Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/privacypolicy" style={{ textDecoration: "none" }}>
                  <Typography variant="body">Privacy Policy</Typography>
                </Link>
              </ListItem>
              <ListItem sx={{ pb: "38px" }}>
                <Link to="/termsofservice" style={{ textDecoration: "none" }}>
                  <Typography variant="body">Terms of Service</Typography>
                </Link>
              </ListItem>
            </List>
          </Box>

          <Box component="div">
            <Typography variant="h6">About</Typography>
            <ListItem>
              <Link to="/aboutus" style={{ textDecoration: "none" }}>
                <Typography variant="body">About Us</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/reviews" style={{ textDecoration: "none" }}>
                <Typography variant="body">Reviews</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/blog" style={{ textDecoration: "none" }}>
                <Typography variant="body">Blog</Typography>
              </Link>
            </ListItem>
          </Box>
          <Box>
            <Typography variant="h6">Contact Us</Typography>
            <ListItem>
              <Typography variant="body">hello@gmail.com</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body">
                Studio M, 4th Floor8 Lower Manchester street, M1 5QF
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body">+38 093 875 9922</Typography>
            </ListItem>
          </Box>
          <Box>
            <Typography variant="h6">Subscribe</Typography>
            <ListItem>
              <Typography variant="subtitle2">
                Subscribe now and get 15% off on your first order
              </Typography>
            </ListItem>
            <ListItem>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <Button variant="outlined">Send</Button>
            </ListItem>
          </Box>
        </Box>
      </Container>

      <hr className="footerLine"></hr>
    </footer>
  );
};

export default Footer;
