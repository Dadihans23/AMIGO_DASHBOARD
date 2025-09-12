// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import GlobalStatistics from '@views/admindashboard/GlobalStatistics'
import WeeklyOverview from '@views/admindashboard/WeeklyOverview'
import TotalEarning from '@views/admindashboard/TotalEarning'
import LineChart from '@views/admindashboard/LineChart'
import DistributedColumnChart from '@views/admindashboard/DistributedColumnChart'
import DepositWithdraw from '@views/admindashboard/DepositWithdraw'
import SalesByCountries from '@views/admindashboard/SalesByCountries'
import CardStatVertical from '@components/card-statistics/Vertical'
import Table from '@views/admindashboard/Table'

const AdminPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <h4>
          Bienvenue sur le tableau de bord administrateur. Voici une vue d’ensemble des activités de la plateforme.
        </h4>
      </Grid>

      <Grid item xs={12} md={12} lg={12}>
        <GlobalStatistics />
      </Grid>
      <Grid item xs={12} lg={12}>
        <DepositWithdraw />
      </Grid>
      <Grid item xs={12}>
        <Table />
      </Grid>
    </Grid>
  )
}

export default AdminPage
