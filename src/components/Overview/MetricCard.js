import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

export const MetricCard = (props) => {
  const { id, name, value, change } = props;
  return (
    <Card sx={{
      boxShadow: 'none',
      background: id % 2 ? '#fbfbec' : '#d1e2f2',
      borderRadius: '12px'
    }}>
      <CardContent>
        <Typography sx={{
          fontWeight: 'bold',
          fontSize: '0.8rem',
          marginTop: 1.5,
          marginBottom: 1
        }}>
          {name}
        </Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Typography variant='span' sx={{
            fontWeight: 'bold',
            fontSize: '1.5rem'
          }}>
            {value}
          </Typography>
          <Box sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <Typography color="text.secondary" variant='span' sx={{
              fontSize: '0.8rem',
            }}>
              {change}
            </Typography>
            {change?.[0] === '-' ? <TrendingDownIcon fontSize='1rem' /> : <TrendingUpIcon fontSize='1rem'/>}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};