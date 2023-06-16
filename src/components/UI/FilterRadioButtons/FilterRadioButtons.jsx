import React from "react";
import CAccordion from "../CAccordion/CAccordion";
import { Box } from "@mui/material";
import Input from "../Form/Input/Input";
import { SearchIcon } from "components/Icons";
import CRadioButtons from "../CRadioButtons/CRadioButtons";

const options = [
  { label: "hi", value: "1" },
  { label: "hello", value: "2" },
  { label: "welcome", value: "3" },
  { label: "bitch", value: "4" },
  { label: "baklashka", value: "5" },
  { label: "xotin", value: "6" },
  { label: "noProblem", value: "7" },
  { label: "cola", value: "8" },
  { label: "pepsi", value: "9" },
  { label: "xurrak", value: "10" },
];

const FilterRadioButtons = ({
  control,
  setCategory,
  setUniversity,
  category,
  university,
}) => {
  return (
    <div>
      <CAccordion title="Kategoriyalar" id={2}>
        <Box display="flex" flexDirection="column" rowGap="20px">
          <Input
            icon={<SearchIcon />}
            type="text"
            control={control}
            name="category-search"
            placeholder="Kategoriyalar"
          />
          <CRadioButtons
            options={options}
            control={control}
            name="category"
            setCategory={setCategory}
            category={category}
          />
        </Box>
      </CAccordion>
      <CAccordion title="Unverstetlar" id={2}>
        <Box display="flex" flexDirection="column" rowGap="20px">
          <Input
            icon={<SearchIcon />}
            type="text"
            control={control}
            name="university-search"
            placeholder="Unverstetlar"
          />
          <CRadioButtons
            options={options}
            control={control}
            name="university"
            setUniversity={setUniversity}
            university={university}
          />
        </Box>
      </CAccordion>
    </div>
  );
};

export default FilterRadioButtons;
