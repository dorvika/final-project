import {
  Add,
  FacebookOutlined,
  Instagram,
  Remove,
  Twitter,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import menuList from "../MenuList";
import Subscription from "./Subscription.jsx";

const AccordionMenu = () => {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <Box
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: { display: "none" },
        })}
      >
        {menuList.map((menuChapter) => {
          return (
            <Fragment key={menuChapter.id}>
              <Accordion
                sx={{ m: "0" }}
                expanded={expanded === `panel${menuChapter.panelId}`}
                onChange={handleChange(`panel${menuChapter.panelId}`)}
              >
                <AccordionSummary
                  sx={{ mb: "0" }}
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                  expandIcon={
                    expanded === "panel" + `${menuChapter.panelId}` ? (
                      <Remove sx={{ color: "primary.main" }} />
                    ) : (
                      <Add sx={{ color: "primary.main" }} />
                    )
                  }
                >
                  <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
                    {menuChapter.menuChapter}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    {menuChapter.menuItems.map((menuItem) => {
                      return (
                        <ListItem key={menuItem.key} sx={{ pb: "5px" }}>
                          <Link component={LinkRouter} to={menuItem.link} underline="hover">
                            <Typography variant="body">
                              {menuItem.title}
                            </Typography>
                          </Link>
                        </ListItem>
                      );
                    })}
                  </List>
                </AccordionDetails>
              </Accordion>
            </Fragment>
          );
        })}
        <Accordion
          expanded={expanded === `panel3`}
          onChange={handleChange(`panel3`)}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            expandIcon={
              expanded === "panel3" ? (
                <Remove sx={{ color: "primary.main" }} />
              ) : (
                <Add sx={{ color: "primary.main" }} />
              )
            }
          >
            <Typography variant="h6">Contact Us</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem sx={{ pb: "5px" }}>
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
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === `panel4`}
          onChange={handleChange(`panel4`)}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            expandIcon={
              expanded === "panel4" ? (
                <Remove sx={{ color: "primary.main" }} />
              ) : (
                <Add sx={{ color: "primary.main" }} />
              )
            }
          >
            <Typography variant="h6">Subscribe</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <Typography variant="subtitle2">
                  Subscribe now and get 15% off on your first order
                </Typography>
              </ListItem>
              <ListItem>
                <Subscription />
              </ListItem>
              <ListItem>
                <Box
                  sx={{
                    display: "flex",
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
                    <FacebookOutlined
                      href="https://facebook.com"
                      color="primary"
                    />
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
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default AccordionMenu;
