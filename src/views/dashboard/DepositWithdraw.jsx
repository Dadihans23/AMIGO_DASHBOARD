// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import Grid from '@mui/material/Grid'

import Link from '@components/Link'

// Transaction Data
const transactions = [
  {
    id: 'T1001',
    amount: '+92 fcfa',
    title: 'Retour sur ristournes',
    date: '2024-09-01',
    type: 'credit'
  },
  {
    id: 'T1003',
    amount: '+92 fcfa',
    title: 'Achat',
    date: '2024-09-02',
    type: 'credit'
  },
  {
    id: 'T1002',
    amount: '-145 fcfa',
    title: 'Vente pour services',
    date: '2024-09-03',
    type: 'debit'
  },
  {
    id: 'T1001',
    amount: '-1870 fcfa',
    title: 'Frais de sécurité',
    date: '2024-09-04',
    type: 'debit'
  }
]

const TransactionItem = ({ item }) => (
  <div className='flex items-center justify-between gap-4'>
    {item.type === 'credit' ? (
      <i className='ri-arrow-up-line' style={{ color: 'green' }} />
    ) : (
      <i className='ri-arrow-down-line' style={{ color: 'red' }} />
    )}
    <div className='flex flex-col justify-between flex-grow gap-0.5'>
      <Typography> Date : {new Date(item.date).toLocaleDateString()}</Typography> {/* Affichage de la date */}
      <Typography color='text.primary' className='font-medium'>
        {item.title}
      </Typography>
      <Typography className='font-medium' color={item.type === 'credit' ? 'success.main' : 'error.main'}>
        {item.amount}
      </Typography>
    </div>
    <Button
      variant='outlined'
      color='primary'
      component={Link}
      href={`/transactions/${item.id}`} // Redirection vers la page de détails
      aria-label={`En savoir plus sur la transaction ${item.id}`}
    >
      En savoir plus
    </Button>
  </div>
)

const DepositWithdraw = () => {
  return (
    <Card>
      <Grid container>
        <Grid item xs={12}>
          <CardHeader
            title='Transactions Wallet '
            action={
              <Typography component={Link} className='font-medium' color='primary' href='/transactions'>
                Voir toutes
              </Typography>
            }
          />
          <CardContent className='flex flex-col gap-5'>
            {transactions.map(item => (
              <TransactionItem key={item.id} item={item} />
            ))}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default DepositWithdraw
