import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products","Customers"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "/client/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query({
      query: () => "/client/customers",
      providesTags: ["Customers"],
    }),
    getTransactions:build.query({
      query:({page,pageSize,search,sort}) => ({
        url:'client/transactions',
        params:{search,sort,page,pageSize},
      }),
      providesTags:["Transactions"]
    })
  }),
});

export const { useGetUserQuery, useGetProductsQuery,useGetCustomersQuery,useGetTransactionsQuery } = api;
