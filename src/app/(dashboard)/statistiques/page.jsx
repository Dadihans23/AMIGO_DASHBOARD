// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import RebateStatsComponent from '@views/stats/RebateStats'
import LineChart from '@views/stats/LineChart'

const DashboardAnalytics = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12} lg={12}>
        <LineChart />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <RebateStatsComponent />
      </Grid>
    </Grid>
  )
}

export default DashboardAnalytics
