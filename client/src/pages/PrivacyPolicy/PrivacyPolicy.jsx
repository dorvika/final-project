import { Add, Remove } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { data } from "./data";

const PrivacyPolicy = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const itemsToShow = data.map(({ id, title, description }) => (
    <Accordion
      key={id}
      expanded={expanded === `panel${id}`}
      onChange={handleChange(`panel${id}`)}
    >
      <AccordionSummary
        sx={{ flexDirection: "row-reverse", gap: "10px" }}
        expandIcon={
          expanded === `panel${id}` ? (
            <Remove sx={{ color: "primary.main" }} />
          ) : (
            <Add sx={{ color: "primary.main" }} />
          )
        }
      >
        <Typography variant="h3" color="primary" fontWeight={700}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{description}</Typography>
      </AccordionDetails>
    </Accordion>
  ));

  return (
    <Container sx={{ mb: "20px" }}>
      <Typography variant="h2" textAlign="center">
        Privacy Policy
      </Typography>
      {itemsToShow}
    </Container>
  );
};

export default PrivacyPolicy;
