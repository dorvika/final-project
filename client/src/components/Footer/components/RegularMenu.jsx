import { FacebookOutlined, Instagram, Twitter } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Link,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import menuList from "../MenuList";

const RegularMenu = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: { display: "none" },
        })}
      >
        {menuList.map((menuChapter) => {
          return (
            <Fragment key={menuChapter.id}>
              <Box component="div" marginTop="81px">
                <Typography variant="h6" paddingBottom="15px">
                  {menuChapter.menuChapter}
                </Typography>
                <List>
                  {menuChapter.menuItems.map((menuItem) => {
                    return (
                      <Fragment key={menuItem.key}>
                        <ListItem>
                          <Link href={menuItem.link} underline="hover">
                            <Typography variant="body">
                              {menuItem.title}
                            </Typography>
                          </Link>
                        </ListItem>
                      </Fragment>
                    );
                  })}
                </List>
              </Box>
            </Fragment>
          );
        })}
        <Box sx={{ marginTop: "81px", maxWidth: "235px" }}>
          <Typography variant="h6" paddingBottom="15px">
            Contact Us
          </Typography>
          <ListItem>
            <Link
              href="mailto:postilmarket@gmail.com"
              // href="javascript:void(0)"
              // onClick={() =>
              //   (window.location = "mailto:postilmarket@gmail.com")
              // }
              underline="hover"
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
            <Link href="tel:+38 067 218 2153" underline="hover">
              <Typography variant="body">+38 067 218 2153</Typography>
            </Link>
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
              id="subscribe-adaptive"
              label="E-mail"
              variant="outlined"
            />
            <Button
              variant="contained"
              sx={{
                p: "5px 40px",
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
              <IconButton
                href="https://facebook.com"
                rel="noopener noreferrer"
                target="_blank"
                sx={{ marginRight: "30px" }}
              >
                <FacebookOutlined href="https://facebook.com" color="primary" />
              </IconButton>
              <IconButton
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com"
                sx={{ marginRight: "30px" }}
              >
                <Twitter color="primary" />
              </IconButton>
              <IconButton
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com"
              >
                <Instagram color="primary" />
              </IconButton>
            </Box>
          </ListItem>
        </Box>
      </Stack>
    </>
  );
};

export default RegularMenu;
