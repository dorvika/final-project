import { Add, Remove } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const CategoriesAccordion = ({ children, title }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded((prevValue) => !prevValue)}
      sx={{
        "&.Mui-expanded": {
          m: "2px 0",
        },
        "& .MuiAccordionSummary-root": { flexDirection: "row-reverse" },
      }}
    >
      <AccordionSummary>
        <Stack direction="row" alignItems="center">
          {expanded ? (
            <Remove sx={{ mr: "20px" }} />
          ) : (
            <Add sx={{ mr: "20px" }} />
          )}
          <Typography
            variant="h6"
            sx={{ mb: "0px", textTransform: "uppercase" }}
          >
            {title}
          </Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          "&.MuiAccordionDetails-root": {
            p: "0 0 10px 50px",
          },
        }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default CategoriesAccordion;
