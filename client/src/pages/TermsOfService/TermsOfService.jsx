import { Add, Remove } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Container,
  Divider,
  Link,
  List,
  ListItem,
  // Typography,
} from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiTypography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/system";
import { Fragment, useState } from "react";
import listOfTerms from "./ListOfTerms";

const CustomListItem = styled(ListItem)(({ theme }) => ({
  textTransform: "uppercase",
  paddingBottom: "25px",
  letterSpacing: "0.04em",
  color: theme.palette.primary.main,
  display: "inline-block",
}));

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    // backgroundColor:
    // theme.palette.mode === "dark"
    //   ? "rgba(255, 255, 255, .05)"
    //   : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    // "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    //   transform: "rotate(90deg)",
    // },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(5),
    },
  })
);

const Typography = styled((props) => <MuiTypography {...props} />)(
  ({ theme }) => ({
    h6: {
      color: theme.palette.primary.main,
      fontWeight: 600,
      textTransform: "uppercase",
    },
  })
);
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const TermsOfService = () => {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Container>
        <Breadcrumbs sx={{ pb: "30px" }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/termsofservice">
            Terms of Service
          </Link>
        </Breadcrumbs>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ mb: "80px" }}
        >
          <Box sx={{ mt: "15px" }}>
            <Typography
              variant="h5"
              sx={{
                textTransform: "uppercase",
                fontWeight: "700",
                pb: "30px",
              }}
            >
              terms of service
            </Typography>
            <List>
              <CustomListItem>order issues</CustomListItem>
              <CustomListItem>delivery</CustomListItem>
              <CustomListItem>returns and refunds</CustomListItem>
              <CustomListItem>payment</CustomListItem>
            </List>
          </Box>
          <Box sx={{ ml: "98px", maxWidth: "850px" }}>
            {listOfTerms.map((termItem) => {
              return (
                <Fragment key={termItem.id}>
                  <Typography
                    key={termItem.chapter}
                    variant="h6"
                    sx={{
                      color: "neutral.main",
                      textTransform: "uppercase",
                      mb: "15px",
                      pt: "15px",
                    }}
                  >
                    {termItem.chapter}
                  </Typography>
                  <Divider sx={{ borderColor: "neutral.main" }} />
                  {termItem.content.map((panel) => {
                    return (
                      <Fragment key={panel.panelId}>
                        <Accordion
                          expanded={expanded === `panel${panel.panelId}`}
                          onChange={handleChange(`panel${panel.panelId}`)}
                        >
                          <AccordionSummary
                            sx={{ ml: "5px" }}
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                            expandIcon={
                              expanded === "panel" + `${panel.panelId}` ? (
                                <Remove sx={{ color: "primary.main" }} />
                              ) : (
                                <Add sx={{ color: "primary.main" }} />
                              )
                            }
                          >
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 600,
                                textTransform: "uppercase",
                                p: "15px 0",
                              }}
                            >
                              {panel.panelTitle}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography
                              variant="subtitle1"
                              sx={{ fontWeight: 400, pb: "15px", ml: "10px" }}
                            >
                              {panel.panelText}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Divider sx={{ borderColor: "neutral.light" }} />
                      </Fragment>
                    );
                  })}
                </Fragment>
              );
            })}
            {/* <Typography
              variant="h6"
              sx={{
                color: "neutral.main",
                textTransform: "uppercase",
                mb: "15px",
              }}
            >
              order issues
            </Typography> */}
            {/* <Divider sx={{ borderColor: "neutral.main" }}></Divider> */}
            {/* <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                expandIcon={
                  expanded === "panel1" ? (
                    <Remove sx={{ color: "primary.main" }} />
                  ) : (
                    <Add sx={{ color: "primary.main" }} />
                  )
                }
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    textTransform: "uppercase",
                    p: "15px 0",
                  }}
                >
                  duties & taxes
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 400, pb: "15px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Divider sx={{ borderColor: "neutral.light" }}></Divider>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                expandIcon={
                  expanded === "panel2" ? (
                    <Remove sx={{ color: "primary.main" }} />
                  ) : (
                    <Add sx={{ color: "primary.main" }} />
                  )
                }
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    textTransform: "uppercase",
                    p: "15px 0",
                  }}
                >
                  order tracking
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 400, pb: "15px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion> */}
            <Divider sx={{ borderColor: "neutral.light" }}></Divider>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default TermsOfService;
