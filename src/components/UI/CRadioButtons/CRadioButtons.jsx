import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Collapse } from "@mui/material";
import CollapseLabel from "../CollapseLabel/CollapseLabel";

const useStyles = makeStyles({
  root: {
    display: "flex !important",
    flexDirection: "column",
    "& .MuiSvgIcon-root": {
      fill: "var(--primary-color)",
    },
    "& .Mui-checked": {
      fill: "var(--primary-color)",
    },
  },
});

const collapseHeight = 245;

function CRadioButtons({
  options,
  setCategory,
  setUniversity,
  category,
  university,
  name,
}) {
  const [collapse, setCollapse] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const classes = useStyles();

  const handleClick = (value) => {
    if (name == "category") {
      setCategory(value);
    }
    if (name == "university") {
      setUniversity(value);
    }
  };

  const handleCollapse = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <>
      <Collapse in={collapse} collapsedSize={collapseHeight}>
        <RadioGroup
          classes={{ root: classes.root }}
          className="collapse-element"
        >
          {options?.map((option) => (
            <FormControlLabel
              value={
                name == "category"
                  ? category.value
                  : name == "university"
                  ? university.value
                  : ""
              }
              control={<Radio onClick={() => handleClick(option)} />}
              label={option.label}
              key={option.value}
              checked={
                name == "category"
                  ? category.value == option.value
                  : name == "university"
                  ? university.value == option.value
                  : ""
              }
              labelPlacement="end"
            />
          ))}
        </RadioGroup>
      </Collapse>
      <CollapseLabel
        collapse={collapse}
        handleChange={handleCollapse}
        collapseHeight={collapseHeight}
        setShowLabel={setShowLabel}
        showLabel={showLabel}
      />
    </>
  );
}

export default CRadioButtons;
