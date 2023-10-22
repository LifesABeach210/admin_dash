import React from "react";
import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import FlexBetween from "./FlexBetween";
const DataGridCustomToolbar = ({setSearch,setSearchInput,searchInput}) => {
  return (
    <GridToolbarContainer>
      <FlexBetween width="100%">
        <FlexBetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </FlexBetween>
        <TextField
          onChange={(e) => setSearchInput(e.target.value)}
          label="search..."
          value={searchInput}
          variant = 'standard'
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick = {() => {
                   setSearch(searchInput)
                   setSearchInput('')
                  }}
                ></IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;
