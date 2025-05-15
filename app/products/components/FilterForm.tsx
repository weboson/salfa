"use client";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function FilterForm() {
  const [select, setSelect] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
    console.log(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 12 }} size="small">
      <InputLabel id="demo-select-small-label">Фильтрация:</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={select}
        label="Фильтрация"
        onChange={handleChange}
        sx={{
            color: '#6f6e6e',
            width: '300px',
          }}
      >
        <MenuItem value={"favorite"}>Избранные</MenuItem>
      </Select>
    </FormControl>
  );
}
