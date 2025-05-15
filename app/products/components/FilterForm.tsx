"use client";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// redux ToolKit
import { useAppSelector, useAppDispatch } from "../../../lib/hooks";
import {
  addSelect,
//   removeSelect,
} from "../../../lib/features/filter/filterSlice";

export default function FilterForm() {
  // получить состояние данных
  const filterSelect = useAppSelector((state) => state.filterReducer);
  // изменить состояние данных
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(addSelect(event.target.value));
    console.log(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 12 }} size="small">
      <InputLabel id="demo-select-small-label">Фильтрация:</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={filterSelect.filterToFavorites}
        label="Фильтрация"
        onChange={handleChange}
        sx={{
          color: "#6f6e6e",
          width: "300px",
        }}
      >
        <MenuItem value={"favorite"}>Избранные</MenuItem>
        <MenuItem value={"all"}>Весь список</MenuItem>
        <MenuItem value={"headphones"}>Наушники</MenuItem>
        <MenuItem value={"gamepad"}>Геймпады</MenuItem>
      </Select>
    </FormControl>
  );
}
