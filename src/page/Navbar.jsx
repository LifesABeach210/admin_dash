import React from "react";
import { Outlet } from "react-router-dom";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  SettingsOutlined,
  ArrowDropDownOutlined,
  Search,
} from "@mui/icons-material";
import FlexBetween from "../componets/FlexBetween";
import { setMode } from "../redux";
import { useDispatch } from "react-redux";
import {
  Icon,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
} from "@mui/material";
import { AppBar } from "@mui/material";
const Navbar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <FlexBetween>
          <IconButton
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
          <FlexBetween
            borderRadius="9px"
            gap="3rem"
            p="p.1rem 1.5rem"
            backgroundColor={theme.palette.background.alt}
          >
            <InputBase placeholder="Search...">
              <IconButton>
                <Search sx={{ ml: "8rem" }} />
              </IconButton>
            </InputBase>
          </FlexBetween>
        </FlexBetween>

        <FlexBetween gap=".5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
