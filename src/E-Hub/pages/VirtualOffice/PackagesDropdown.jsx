import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";

const PackagesDropdown = ({ onHandleChange, amount }) => {
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, width: 150 }}>
        <InputLabel
          sx={{ fontWeight: "bold" }}
          id="demo-simple-select-standard-label"
        >
          Choose Plan
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard-label"
          label="Choose Plan"
          name="planAmount"
          onChange={onHandleChange}
          value={amount}
        >
          <MenuItem value={99000}>Bronze</MenuItem>
          <MenuItem value={198000}>Gold</MenuItem>
          <MenuItem value={495000}>GoldPlus</MenuItem>
          <MenuItem value={1188000}>Silver</MenuItem>
          <MenuItem value={1650000}>Platinum</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default PackagesDropdown;
