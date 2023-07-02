import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "../componets/FlexBetween";

const NavItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    text: "Transations",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geo",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];

export const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const nav = useNavigate();
  const theme = useTheme();
  const [active, setActive] = useState("");
  useEffect(() => {
    setActive(pathname.substring(1));
    console.log(active, "PATHNAME_ACTIVE");
  }, [pathname]);
  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
          anchor="left"
          variant="persistent"
          onClose={() => setIsSidebarOpen(!isSidebarOpen)}
          open={() => setIsSidebarOpen(!isSidebarOpen)} // Not suppose to be opening sidebar/closing
        >
          <Box width="100%" m=".5rem 1rem 0rem 2rem">
            <FlexBetween color={theme.palette.secondary.main}>
              <Box gap="0.5rem" alignItems="center" display="flex">
                <Typography fontWeight="bold" variant="h4">
                  VisonOfEcom
                </Typography>
              </Box>

              <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <ChevronLeft sx={{ mr: "2rem" }} />
              </IconButton>
            </FlexBetween>
          </Box>

          <List>
            {NavItems.map(({ text, icon }) => {
              const lcText = text.toLowerCase();

              if (!icon) {
                return (
                  <Typography sx={{ m: "3rem 2rem 1rem 3rem" }} key={text}>
                    {text}
                  </Typography>
                );
              }

              return (
                <ListItem disablePadding key={text}>
                  <ListItemButton
                    sx={{
                      ml: "2rem",
                      color:
                        active === lcText
                          ? theme.palette.primary[600]
                          : theme.palette.secondary[200],
                      backgroundColor:
                        active === lcText
                          ? theme.palette.secondary[200]
                          : "transparent",
                    }}
                    onClick={() => {
                      nav(`/${lcText}`);
                      setActive(lcText);
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        ml: "2rem",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[200],
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={text}></ListItemText>

                    <ChevronRightOutlined sx={{ ml: "auto" }} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      )}
    </Box>
  );
};
