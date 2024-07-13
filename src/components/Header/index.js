import { AppBar, Box, Breadcrumbs, Divider, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';

export const Header = () => {
  const drawerWidth = 240;
  const location = useLocation();
  const breadcrumbs = location?.pathname?.split('/')?.filter((item)=>item);

  return (
    <>
      <AppBar
        position="fixed"
        color="inherit"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,
          boxShadow: 0
        }}
      >
        <Toolbar>
          <Breadcrumbs aria-label="breadcrumb">
            {
              breadcrumbs.map((breadcrumb, index) => (
                <Link
                  key={breadcrumb}
                  to={breadcrumbs.slice(0, index + 1).join('/')}
                  className='header__link'
                >
                  <Typography sx={{
                    textTransform: 'capitalize',
                    color: index === breadcrumbs.length - 1 ? 'black' : 'gray'
                  }}>
                    {breadcrumb}
                  </Typography>
                </Link>
              ))
            }
          </Breadcrumbs>
        </Toolbar>
      </AppBar>
      <Box height={64} sx={{ background: 'transparent' }}/>
      <Divider />
    </>
  );
};
