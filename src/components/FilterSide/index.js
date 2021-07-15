import React from "react";
import Select from "../../core/components/Select/";
import { FilterSideWrapper } from "./styles";

//filtre verisini
const filtersOption = [
  {
    type: "gender",
    options: [
      { value: "all", text: "all" },
      { value: "female", text: "female" },
      { value: "male", text: "male" },
      { value: "genderless", text: "genderless" },
      { value: "unknown", text: "unknown" },
    ],
    label: "Gender",
  },
  {
    type: "status",
    options: [
      { value: "all", text: "all" },
      { value: "alive", text: "alive" },
      { value: "dead", text: "dead" },
      { value: "unknown", text: "unknown" },
    ],
    label: "Status",
  },
];

export const FilterSide = ({ filtersValue, setFiltersValue }) => {
  const onSelect = (type, value) => {
    const _filtersValue = { ...filtersValue };
    _filtersValue[type] = value;
    setFiltersValue(_filtersValue);
  };
  return (
    <FilterSideWrapper>
      {filtersOption.map((filter, index) => {
        return (
          <Select
            key={index}
            type={filter.type}
            options={filter.options}
            label={filter.label}
            selected={filtersValue[filter.type]}
            onSelect={(type, value) => onSelect(type, value)}
          />
        );
      })}
    </FilterSideWrapper>
  );
};
