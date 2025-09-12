// Next Imports
import Grid from '@mui/material/Grid'

// Component Imports
import AccountSettings from '@views/account-settings'
import Table from '@views/transactions/Table'

// Vars

const TransactionPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <h4>Consultez ici toutes vos transactions récentes et les ristournes accordées à vos clients.</h4>
      </Grid>

      <Grid item xs={12}>
        <Table />
      </Grid>
    </Grid>
  )
}

export default TransactionPage
