import React from "react";
import { Option, SelectLabel, SelectWrapper } from "./styles";

const Select = ({ type, options, selected, onSelect, label }) => {
  return (
    <div>
      <SelectLabel htmlFor={type}>{label}: </SelectLabel>

      <SelectWrapper
        name={type}
        id={type}
        value={selected}
        onChange={(event) => onSelect(type, event.target.value)}
      >
        {options?.map((option, index) => {
          return (
            <Option className="option" key={index} value={option.value}>
              {option.text}
            </Option>
          );
        })}
      </SelectWrapper>
    </div>
  );
};

export default Select;
