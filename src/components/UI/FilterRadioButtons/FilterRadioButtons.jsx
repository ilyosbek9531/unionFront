import React from "react";
import CAccordion from "../CAccordion/CAccordion";
import { Box } from "@mui/material";
import Input from "../Form/Input/Input";
import { SearchIcon } from "components/Icons";
import CRadioButtons from "../CRadioButtons/CRadioButtons";
import { useGetCategories, useGetUniversities } from "services/main.service";

const FilterRadioButtons = ({
  control,
  setCategory,
  setUniversity,
  category,
  university,
}) => {
  const { data: categories } = useGetCategories({
    queryParams: {
      limit: 0,
      offset: 0,
    },
  });

  const { data: unversities } = useGetUniversities({
    queryParams: {
      limit: 0,
      offset: 0,
    },
  });

  const getCategory = categories?.datas.map((item) => {
    return {
      label: item.name,
      value: item.id,
    };
  });

  const getUniversity = unversities?.datas.map((item) => {
    return {
      label: item.title,
      value: item.id,
    };
  });

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
            options={getCategory}
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
            options={getUniversity}
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
