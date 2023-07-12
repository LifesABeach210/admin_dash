import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { Sidebar } from "../global/Sidebar";
import { Box, useMediaQuery } from "@mui/material";
import { useGetUserQuery } from "../redux/api";
export const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);
  console.log(data, "DATA");
  return (
    <Box
      display={!isNonMobile ? "flex" : "block"}
      height="100%"
      width="100%"
    >
      <Box flexGrow={3}>
        <Sidebar
    
          user={data || {}}
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
          drawerWidth="250px"
          isNonMobile={isNonMobile}
        ></Sidebar>

        <Navbar
       
          user={data || {}}
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
      </Box>
      <Outlet />
    </Box>
  );
};
