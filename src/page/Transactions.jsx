import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { useGetTransactionsQuery } from "../redux/api";
import Header from "../componets/Header";
import { Box, useTheme } from "@mui/material";
import DataGridCustomToolbar from '../componets/DataGridCustomToolbar'

const Transactions = () => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [searchInput,setSearchInput] = useState('')
  const { data, isLoading } = useGetTransactionsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userID",
      headerName: "User Id",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        return params.value.length;
      },
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];
  console.log(data, "DATA_TRANS");

  return (
    <Box>
      <Header
        subtitle="list of transactions"
        title="TRANSAXTIONS"
      ></Header>
      <Box
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
        height="80vh"
      >
        <DataGrid 
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={data && data.transaction||[]}
            columns={columns}
            rowCount={data &&data.total||0}
            rowsPerPageOptions = {[20,50,100]}
            pagination
            page={page}
            pageSize={pageSize}
            paginationMode = 'server'
            sortingMode="server"
            onPageChange={(newPage)=>setPage(newPage)}
            onPageSizeChange = {(newPageSize)=>setSort(newPageSize)}
            onSortModelChange={(newPageSort)=>setSort(...newPageSort)}
            components = {{Toolbar:DataGridCustomToolbar}}
            componentsProps = {{toolbar:{searchInput,setSearchInput,setSearch}}}
        />
      </Box>
    </Box>
  );
};
export default Transactions;
