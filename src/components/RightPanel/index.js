import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Avatar, Typography } from '@mui/material';
import notificationsData from '../../api/notifications.json';
import activitiesData from '../../api/activities.json';
import PestControlOutlinedIcon from '@mui/icons-material/PestControlOutlined';
const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const drawerWidth = 240;

export const RightPanel = () => {
  const [ notifications, setNotifications ] = useState([]);
  const [ activities, setActivities ] = useState([]);

  useEffect(() => {
    // Fetch data from API here instead of using JSON data
    setNotifications(notificationsData.notifications);
    setActivities(activitiesData.activities);
  }, []);

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
        anchor="right"
      >
        <Typography sx={{
          fontWeight: 'bold',
          marginTop: '20px',
          marginLeft: '20px'
        }}>
          Notifications
        </Typography>
        <List>
          {notifications.map((notification) => (
            <ListItem key={notification.id} disablePadding sx={{
              marginBottom: '16px'
            }}>
              <ListItemIcon sx={{
                display: 'flex',
                justifyContent: 'center'
              }}>
                <PestControlOutlinedIcon />
              </ListItemIcon>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Typography noWrap sx={{
                  maxWidth: '160px'
                }}>
                  {notification.title}
                </Typography>
                <Typography color='text.secondary' sx={{
                  fontSize: '14px',
                }}>
                  {dayjs(notification.timestamp).from()}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Typography sx={{
          fontWeight: 'bold',
          marginTop: '20px',
          marginLeft: '20px'
        }}>
          Activities
        </Typography>
        <List>
          {activities.map((notification) => (
            <ListItem key={notification.id} disablePadding sx={{
              marginBottom: '16px'
            }}>
              <Avatar sx={{
                width: '24px',
                height: '24px',
                marginLeft: '20px',
                marginRight: '10px',
              }}/>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Typography noWrap sx={{
                  maxWidth: '160px'
                }}>
                  {notification.title}
                </Typography>
                <Typography color='text.secondary' sx={{
                  fontSize: '14px',
                }}>
                  {dayjs(notification.timestamp).from()}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
