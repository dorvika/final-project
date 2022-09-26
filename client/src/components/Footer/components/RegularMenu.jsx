import { FacebookOutlined, Instagram, Twitter } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";

import { Fragment } from "react";

import menuList from "../MenuList";
import Subscription from "./Subscription.jsx";

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
                          <Link component={LinkRouter} to={menuItem.link} underline="hover">
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
            <Link href="mailto:postilmarket@gmail.com" underline="hover">
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
            <Subscription />
          </ListItem>
          <ListItem>
            <Stack direction="row" alignItems="center">
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
            </Stack>
          </ListItem>
        </Box>
      </Stack>
    </>
  );
};

export default RegularMenu;
