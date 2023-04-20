import * as React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Filter = ({ categories, onClickCategory }) => {
  return (
    <div>
      <FormControl variant="standard" sx={{ width: 300 }}>
        <InputLabel htmlFor="grouped-select">category filter</InputLabel>
        <Select defaultValue="" id="grouped-select">
          {categories &&
            categories.map((category, index) => (
              <MenuItem
                value={category}
                key={`${category}_${index}`}
                onClick={() => onClickCategory(category)}
              >
                {category}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
