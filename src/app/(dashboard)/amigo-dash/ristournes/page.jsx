// Next Imports
import Grid from '@mui/material/Grid'

// Component Imports
import Table from '@views/amigo-transactions/TableMerchant'

// Vars

const TransactionPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <h4>Consultez ici  les ristournes accordées par Marchands.</h4>
      </Grid>

      <Grid item xs={12}>
        <Table />
      </Grid>
    </Grid>
  )
}

export default TransactionPage
