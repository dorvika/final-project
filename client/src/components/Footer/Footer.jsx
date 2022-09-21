import {
  Box,
  Container,
  Divider,
  Typography,
  Link,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AccordionMenu from "./components/AccordionMenu.jsx";
import RegularMenu from "./components/RegularMenu.jsx";

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
        <AccordionMenu />
        <RegularMenu />
      </Container>

      <FooterHr />
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
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
                POSTIL&#39;
              </Typography>
            </Box>
          </Link>
          <Typography
            variant="body"
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: { display: "none" },
            })}
          >
            © 2021 — 2022 FE2_Online Studio
          </Typography>
          <Typography
            variant="body"
            sx={(theme) => ({
              [theme.breakpoints.up("sm")]: { display: "none" },
            })}
          >
            FE2_Online Studio
          </Typography>
        </Stack>
      </Container>
    </footer>
  );
};

export default Footer;
