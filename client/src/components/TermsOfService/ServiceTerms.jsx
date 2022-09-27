import { Add, Remove } from "@mui/icons-material";
import { Box, Divider, Link, List, Typography, Stack } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import { Fragment, useState } from "react";
import listOfTerms from "./ListOfTerms";
import {
  CustomListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "./styles";

const ServiceTerms = () => {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Stack
        direction={{ sm: "column", md: "row" }}
        justifyContent="space-between"
        sx={{ mb: "80px" }}
      >
        <Box sx={{ mt: "15px", width: { sm: "100%", md: "30%", lg: "20%" } }}>
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
            {listOfTerms.map((term) => {
              return (
                <Fragment key={term.id}>
                  <CustomListItem>
                    <Link
                      component={LinkRouter}
                      to={`#${term.chapter}`}
                      variant="h6"
                      underline="hover"
                      sx={{ letterSpacing: "0.04em" }}
                    >
                      {term.chapter}
                    </Link>
                  </CustomListItem>
                </Fragment>
              );
            })}
          </List>
        </Box>
        <Box sx={{ width: { sm: "100%", md: "70%", lg: "80%" } }}>
          {listOfTerms.map((termItem) => {
            return (
              <Fragment key={termItem.id}>
                <Typography
                  id={termItem.chapter}
                  key={termItem.id}
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
          <Divider sx={{ borderColor: "neutral.light" }}></Divider>
        </Box>
      </Stack>
    </>
  );
};

export default ServiceTerms;
