import React from "react";
import CAccordion from "../CAccordion/CAccordion";
import { Box, Rating } from "@mui/material";
import Input from "../Form/Input/Input";
import { SearchIcon } from "components/Icons";
import { useGetCategories, useGetUniversities } from "services/main.service";
import GroupedRadioButton from "../GroupedRadioButton/GroupedRadioButton";
import { useWatch } from "react-hook-form";

const Ratings = [
  {
    label: <Rating name="read-only" value={"1"} readOnly />,
    value: "1",
  },
  {
    label: <Rating name="read-only" value={"2"} readOnly />,
    value: "2",
  },
  {
    label: <Rating name="read-only" value={"3"} readOnly />,
    value: "3",
  },
  {
    label: <Rating name="read-only" value={"4"} readOnly />,
    value: "4",
  },
  {
    label: <Rating name="read-only" value={"5"} readOnly />,
    value: "5",
  },
];

const FilterRadioButtons = ({ control }) => {
  const categorySearch = useWatch({ control, name: "category-search" });
  const universitySearch = useWatch({ control, name: "university-search" });

  const { data: categories } = useGetCategories({
    queryParams: {
      limit: 0,
      offset: 0,
      search: categorySearch,
    },
  });

  const { data: unversities } = useGetUniversities({
    queryParams: {
      limit: 0,
      offset: 0,
      search: universitySearch,
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
          <GroupedRadioButton
            control={control}
            name="category"
            options={getCategory}
            onQuery={true}
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
          <GroupedRadioButton
            control={control}
            name="university"
            options={getUniversity}
            onQuery={true}
          />
        </Box>
      </CAccordion>
      <CAccordion title="Ratings" id={2}>
        <Box display="flex" flexDirection="column" rowGap="20px">
          <GroupedRadioButton
            control={control}
            name="rating"
            options={Ratings}
            onQuery={true}
          />
        </Box>
      </CAccordion>
    </div>
  );
};

export default FilterRadioButtons;
