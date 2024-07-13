import { Box, Grid, MenuItem, Select, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import metricsData from '../../api/metrics.json';
import chartsData from '../../api/charts.json';
import { MetricCard } from './MetricCard';
import { BarChart, LineChart, PieChart } from '@mui/x-charts';

export const Overview = () => {
  const [ metrics, setMetrics ] = useState([]);
  const [ charts, setCharts ] = useState([]);

  useEffect(() => {
    // Fetch data from API here instead of using JSON data
    setMetrics(metricsData.metrics);
    setCharts(chartsData.charts);
  }, []);

  return (
    <Box p={4}>
      {/* Date selector */}
      <Select defaultValue='Today' variant='standard' sx={{
        marginBottom: '20px',
      }}>
        <MenuItem value='Today'>Today</MenuItem>
        <MenuItem value='Yesterday'>Yesterday</MenuItem>
      </Select>

      {/* Metrics */}
      <Grid container spacing={4} sx={{ flex: 1, marginBottom: '40px' }}>
        {
          metrics.map((metric, index) => (
            <Grid item xs={3} sm={3} md={3} key={index}>
              <MetricCard key={index} {...metric} />
            </Grid>
          ))
        }
      </Grid>

      {/* Charts */}
      <Grid container spacing={4} sx={{ flex: 1 }}>
        {
          charts.map((chart, index) => (
            <Grid item xs={6} sm={6} md={6} key={index}>
              <Typography sx={{
                fontWeight: 'bold',
                fontSize: '0.8rem'
              }}>
                {chart.title}
              </Typography>
              {
                chart.type === 'line' &&
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                  ]}
                  height={300}
                />
              }
              {
                chart.type === 'bar' &&
                <BarChart
                  xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                  series={[{ data: [4, 3, 5] }]}
                  height={300}
                />
              }
              {
                chart.type === 'pie' &&
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 10, label: 'series A' },
                        { id: 1, value: 15, label: 'series B' },
                        { id: 2, value: 20, label: 'series C' },
                      ],
                    },
                  ]}
                  sx={{
                    marginTop: '50px'
                  }}
                  height={200}
                />
              }
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
};
