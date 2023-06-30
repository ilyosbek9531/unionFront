import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Controller } from "react-hook-form";

const RangeSlider = ({
  control,
  name,
  marks,
  step,
  defaultValue,
  maxRange,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => {
        return (
          <Box
            padding="8px 10px"
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Slider
              aria-label="Custom marks"
              marks={marks}
              step={step}
              defaultValue={defaultValue}
              max={maxRange}
              min={0}
              value={value}
              valueLabelDisplay="auto"
              onChange={onChange}
            />
          </Box>
        );
      }}
    />
  );
};

export default RangeSlider;
