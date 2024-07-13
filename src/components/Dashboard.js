import { Box } from '@mui/material';
import React from 'react';

export const Dashboard = ({ children }) => {
  const drawerWidth = 240;
  return (
    <Box
      component="main"
      sx={{ width: `calc(100% - ${2 * drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      {children}
    </Box>
  );
};
