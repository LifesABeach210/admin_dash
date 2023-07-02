import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { Sidebar } from "../global/Sidebar";
import { Box, useMediaQuery } from "@mui/material";
export const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <Box
      display={!isNonMobile ? "flex" : "block"}
      height="100%"
      width="100%"
    >
      <Box display="flex">
        <Sidebar
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
          drawerWidth="250px"
          isNonMobile={isNonMobile}
        ></Sidebar>

        <Navbar
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
      </Box>{" "}
      <Outlet />
    </Box>
  );
};
