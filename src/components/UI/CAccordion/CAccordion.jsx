import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { styled } from "@mui/material/styles";

import styles from "./CAccordion.module.scss";
import { ArrowIcon } from "components/Icons";

const StyledAccordion = styled(Accordion)({
  "&.MuiAccordion-root": {
    boxShadow: "none",
    margin: "0",
    borderRadius: "0px",
    padding: "4px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    "@media (max-width: 768px)": {
      padding: "6px 0",
    },
  },
});
const StyledAccordionSummary = styled(AccordionSummary)({
  "&.MuiAccordionSummary-root": {
    margin: "0",
    padding: "0",

    "&.Mui-expanded": {
      margin: "0",
      padding: "0",
    },
  },

  "&.Mui-expanded": {
    margin: "0",
    minHeight: "0",
    padding: "0",
  },
  "&.MuiAccordionSummary-content": {
    "&.Mui-expanded": {
      margin: "0 !important",
      padding: "0",
    },

    padding: "0",
    margin: "0 !important",
  },
});
const StyledAccordionDetails = styled(AccordionDetails)({
  "&.MuiAccordionDetails-root": {
    margin: "0",
    padding: "0",
  },
});

const CAccordion = ({ children, title, id, expanded = true, bg }) => {
  return (
    <div className={styles.root}>
      <StyledAccordion defaultExpanded={expanded} sx={{ background: bg }}>
        <StyledAccordionSummary
          expandIcon={<ArrowIcon />}
          aria-controls={`panel${id}a-content`}
          id={`panel${id}a-header`}
        >
          <p>{title}</p>
        </StyledAccordionSummary>
        <StyledAccordionDetails>{children}</StyledAccordionDetails>
      </StyledAccordion>
    </div>
  );
};

export default CAccordion;
