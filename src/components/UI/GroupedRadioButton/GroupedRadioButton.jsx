import React from "react";
import { Controller } from "react-hook-form";
import { FormControl, FormControlLabel, RadioGroup } from "@mui/material";
import Radio from "@mui/material/Radio";
import { makeStyles } from "@mui/styles";
import ShowMoreCollapse from "../ShowMoreCollapse/ShowMoreCollapse";
import styles from "./GroupedRadioButton.module.scss";
import { useRouter } from "next/router";

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

const GroupedRadioButton = ({ control, name, options, onQuery = false }) => {
  const classes = useStyles();
  const router = useRouter();

  const handleChange = (value) => {
    const currentQuery = { ...router.query };

    if (currentQuery[name] === value) {
      delete currentQuery[name];
      router.push({
        pathname: router.pathname,
        query: currentQuery,
      });
    } else {
      currentQuery[name] = value;
      onQuery
        ? router.push({
            pathname: router.pathname,
            query: { ...router.query, [name]: value },
          })
        : field.onChange(e);
    }
  };
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
                      onClick={() => handleChange(el.value)}
                      label={el.label}
                      checked={
                        el.value ===
                        (onQuery ? router.query[name] : field.value)
                      }
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
                      onClick={() => handleChange(el.value)}
                      label={el.label}
                      checked={
                        el.value ===
                        (onQuery ? router.query[name] : field.value)
                      }
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
