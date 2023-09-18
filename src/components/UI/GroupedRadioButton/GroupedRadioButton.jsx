import React from "react";
import { Controller } from "react-hook-form";
import { FormControl, FormControlLabel, RadioGroup } from "@mui/material";
import Radio from "@mui/material/Radio";
import { makeStyles } from "@mui/styles";
import ShowMoreCollapse from "../ShowMoreCollapse/ShowMoreCollapse";
import styles from "./GroupedRadioButton.module.scss";

const useStyles = makeStyles({
  root: {
    display: "flex !important",
    flexDirection: "row",
    "& .MuiSvgIcon-root": {
      fill: "var(--primary-color)",
    },
    "& .Mui-checked": {
      fill: "var(--primary-color)",
    },
  },
});

const GroupedRadioButton = ({ control, name, options }) => {
  const classes = useStyles();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl>
          <RadioGroup
            {...field}
            aria-labelledby="demo-radio-buttons-group-label"
            classes={{ root: classes.root }}
          >
            <ShowMoreCollapse
              data={options}
              initialData={
                <div className={styles.options}>
                  {options?.slice(0, 10).map((el, index) => (
                    <FormControlLabel
                      key={index}
                      value={el.value}
                      onChange={field.onChange}
                      label={el.label}
                      checked={el.value === field.value}
                      control={<Radio />}
                    />
                  ))}
                </div>
              }
              collapseData={
                <div className={styles.options}>
                  {options?.slice(10).map((el, index) => (
                    <FormControlLabel
                      key={index}
                      value={el.value}
                      onChange={field.onChange}
                      label={el.label}
                      checked={el.value === field.value}
                      control={<Radio />}
                    />
                  ))}
                </div>
              }
              initialVisible={10}
            />
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};

export default GroupedRadioButton;
