import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Typography } from '@mui/material';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import SdOutlinedIcon from '@mui/icons-material/SdOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const drawerWidth = 240;

export const Sidebar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Avatar sx={{
            width: '24px',
            height: '24px',
            marginRight: '14px'
          }}/>
          Superstars AI
        </Toolbar>
        <Divider />
        <List sx={{
          paddingLeft: '12px'
        }}>
          <Typography color="gray">
            Pages
          </Typography>
          <ListItem disablePadding>
            <ListItemButton sx={{
              paddingBottom: 0,
              paddingTop: 0,
              borderRadius: '12px'
            }}>
              <RocketLaunchOutlinedIcon sx={{
                marginRight: '10px',
                width: '20px'
              }}/>
              <ListItemText primary={'Overview'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{
              paddingBottom: 0,
              paddingTop: 0,
              borderRadius: '12px'
            }}>
              <PaidOutlinedIcon sx={{
                marginRight: '10px',
                width: '20px'
              }}/>
              <ListItemText primary={'Transactions'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{
              paddingBottom: 0,
              paddingTop: 0,
              borderRadius: '12px'
            }}>
              <ReceiptOutlinedIcon sx={{
                marginRight: '10px',
                width: '20px'
              }}/>
              <ListItemText primary={'Invoices'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{
              paddingBottom: 0,
              paddingTop: 0,
              borderRadius: '12px'
            }}>
              <GroupOutlinedIcon sx={{
                marginRight: '10px',
                width: '20px'
              }}/>
              <ListItemText primary={'Customers'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{
              paddingBottom: 0,
              paddingTop: 0,
              borderRadius: '12px'
            }}>
              <QrCodeScannerOutlinedIcon sx={{
                marginRight: '10px',
                width: '20px'
              }}/>
              <ListItemText primary={'Product Catalog'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{
              paddingBottom: 0,
              paddingTop: 0,
              borderRadius: '12px'
            }}>
              <SdOutlinedIcon sx={{
                marginRight: '10px',
                width: '20px'
              }}/>
              <ListItemText primary={'Reports'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{
              paddingBottom: 0,
              paddingTop: 0,
              borderRadius: '12px'
            }}>
              <ShoppingCartOutlinedIcon sx={{
                marginRight: '10px',
                width: '20px'
              }}/>
              <ListItemText primary={'Checkout'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{
              paddingBottom: 0,
              paddingTop: 0,
              borderRadius: '12px'
            }}>
              <BookOutlinedIcon sx={{
                marginRight: '10px',
                width: '20px'
              }}/>
              <ListItemText primary={'Business Account'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{
              paddingBottom: 0,
              paddingTop: 0,
              borderRadius: '12px'
            }}>
              <SettingsOutlinedIcon sx={{
                marginRight: '10px',
                width: '20px'
              }}/>
              <ListItemText primary={'Developer Tools'} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
