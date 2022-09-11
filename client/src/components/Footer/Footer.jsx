import {
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FacebookOutlined, Twitter, Instagram } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const FooterHr = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.primary.main,
  margin: "0 auto",
  maxWidth: "1310px",
}));

const Footer = () => {
  return (
    <footer>
      <FooterHr />
      <Container>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box component="div" marginTop="81px">
            <Typography variant="h6" paddingBottom="15px">
              Shop
            </Typography>
            <List>
              <ListItem>
                <Link
                  to="/catalog?perPage=9&startPage=1"
                  style={{ textDecoration: "none" }}
                >
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
              <ListItem>
                <Link to="/termsofservice" style={{ textDecoration: "none" }}>
                  <Typography variant="body">Terms of Service</Typography>
                </Link>
              </ListItem>
            </List>
          </Box>

          <Box marginTop="81px" component="div">
            <Typography variant="h6" paddingBottom="15px">
              About
            </Typography>
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
          <Box sx={{ marginTop: "81px", maxWidth: "235px" }}>
            <Typography variant="h6" paddingBottom="15px">
              Contact Us
            </Typography>
            <ListItem>
              <Link
                to="javascript:void(0)"
                onClick={() =>
                  (window.location = "mailto:postilmarket@gmail.com")
                }
                style={{ textDecoration: "none" }}
              >
                <Typography variant="body">postilmarket@gmail.com</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Typography variant="body">
                Studio M, 4th Floor8 Lower Manchester street, M1 5QF
              </Typography>
            </ListItem>
            <ListItem>
              <a href="tel:+38 067 218 2153" style={{ textDecoration: "none" }}>
                <Typography variant="body">+38 067 218 2153</Typography>
              </a>
            </ListItem>
          </Box>
          <Box sx={{ marginTop: "81px" }}>
            <Typography variant="h6" paddingBottom="15px">
              Subscribe
            </Typography>
            <ListItem>
              <Typography variant="subtitle2">
                Subscribe now and get 15% off on your first order
              </Typography>
            </ListItem>
            <ListItem>
              <TextField
                size="small"
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
              />
              <Button
                variant="contained"
                sx={{
                  color: "secondary.main",
                  p: "6px 40px",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Send
              </Button>
            </ListItem>
            <ListItem>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ marginRight: "35px" }}>
                  Follow Us
                </Typography>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://facebook.com"
                >
                  <FacebookOutlined
                    color="primary"
                    sx={{ marginRight: "30px" }}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com"
                >
                  <Twitter color="primary" sx={{ marginRight: "30px" }} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://instagram.com"
                >
                  <Instagram color="primary" sx={{ marginRight: "30px" }} />
                </a>
              </Box>
            </ListItem>
          </Box>
        </Box>
      </Container>

      <FooterHr />
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingTop: "25px",
                paddingBottom: "21px",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/logo/logo_switch.png"}
                alt="logo"
              ></img>
              <Typography fontFamily="Roboto" variant="h6" paddingLeft="10px">
                POSTEL&#39;
              </Typography>
            </Box>
          </Link>
          <Typography variant="body">
            © 2021 — 2022 FE2_Online Studio
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
