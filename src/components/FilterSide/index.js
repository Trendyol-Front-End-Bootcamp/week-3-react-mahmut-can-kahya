import React from "react";

export const FilterSide = () => {
  return (
    <div>
      <label for="cars">Character Status</label>

      <select name="alive" id="alive">
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};
