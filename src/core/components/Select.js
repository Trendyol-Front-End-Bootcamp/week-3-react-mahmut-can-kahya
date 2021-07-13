import React from "react";

const Select = ({ type, options, selected, onSelect, label }) => {
  return (
    <>
      <label htmlFor={type}>{label}</label>

      <select
        name={type}
        id={type}
        value={selected}
        onChange={(event) => onSelect(type, event.target.value)}
      >
        {options?.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
