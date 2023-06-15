import React from "react";
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";

const StyledRating = styled(Rating)({
  "&.MuiRating-root": {
    display: "flex",
  },
});

const CRating = ({ value, setValue, defaultValue = 0, name }) => {
  return (
    <>
      <StyledRating
        name={name}
        max={5}
        defaultValue={defaultValue}
        value={value}
        readOnly={name === "read-only"}
        onChange={(event, newValue) => {
          name !== "read-only" && setValue(newValue);
        }}
      />
    </>
  );
};

export default CRating;
