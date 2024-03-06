import { Grid } from '@mui/material';
import MainCard from 'components/MainCard';
import StatisticCard from 'components/UI/StatisticCard/StatisticCard';
import React from 'react';
import ApexAreaChart from 'sections/charts/apexchart/ApexAreaChart';
import ApexPieChart from 'sections/charts/apexchart/ApexPieChart';

function Dashboard() {
  return (
    <div className="dashboard_wrapper">
      <Grid container spacing={3} className="mb-5">
        <Grid item xs={12} md={6} lg={3}>
          <StatisticCard />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticCard />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticCard />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticCard />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item lg={8}>
          <ApexAreaChart />
        </Grid>
        <Grid item lg={4}>
          <ApexPieChart />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
