import { Typography, useTheme, Box } from "@mui/material";

import React from "react";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        sx={{ mb: "5px" }}
        fontWeight="bold"
        color={theme.palette.secondary[100]}
        variant="h2"
      >
        {title}
      </Typography>
      <Typography
      
        fontWeight="bold"
        color={theme.palette.secondary[300]}
        variant="h5"
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
