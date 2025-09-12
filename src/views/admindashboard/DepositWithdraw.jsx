// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Component Imports
import Link from '@components/Link'

// Vars
const depositData = [
  {
    oldBalance: '100 000 XOF',
    newBalance: '150 000 XOF',
    amount: '+50 000 XOF',
    subtitle: 'Ristourne sur achat',
    title: 'Gumroad Account',
    logo: '/images/cards/gumroad.png'
  },
  {
    oldBalance: '500 000 XOF',
    newBalance: '730 000 XOF',
    amount: '+230 000 XOF',
    title: 'Mastercard',
    subtitle: 'Cashback sur transaction',
    logo: '/images/logos/mastercard.png'
  },
  {
    oldBalance: '75 000 XOF',
    newBalance: '99 000 XOF',
    amount: '+24 000 XOF',
    title: 'Stripe Account',
    subtitle: 'Remise sur paiement',
    logo: '/images/logos/stripe.png'
  },
  {
    oldBalance: '800 000 XOF',
    newBalance: '970 000 XOF',
    amount: '+170 000 XOF',
    title: 'American Bank',
    subtitle: 'Bonus sur dépôt',
    logo: '/images/logos/american-bank.png'
  },
  {
    oldBalance: '90 000 XOF',
    newBalance: '101 000 XOF',
    amount: '+11 000 XOF',
    title: 'Bank Account',
    subtitle: 'Intérêts sur solde',
    logo: '/images/logos/citi-bank.png'
  }
]

const withdrawData = [
  {
    oldBalance: '100 000 XOF',
    newBalance: '64 000 XOF',
    amount: '-36 000 XOF',
    title: 'Google Adsense',
    subtitle: 'Utilisation du solde ristourne',
    logo: '/images/logos/google.png'
  },
  {
    oldBalance: '700 000 XOF',
    newBalance: '235 000 XOF',
    amount: '-465 000 XOF',
    title: 'Github Enterprise',
    subtitle: 'Achat avec ristourne',
    logo: '/images/logos/github.png'
  },
  {
    oldBalance: '200 000 XOF',
    newBalance: '88 000 XOF',
    amount: '-112 000 XOF',
    title: 'Upgrade Slack Plan',
    subtitle: 'Paiement partiel avec ristourne',
    logo: '/images/logos/slack.png'
  },
  {
    oldBalance: '300 000 XOF',
    newBalance: '165 000 XOF',
    amount: '-135 000 XOF',
    title: 'Digital Ocean',
    subtitle: 'Abonnement payé avec ristourne',
    logo: '/images/logos/digital-ocean.png'
  },
  {
    oldBalance: '150 000 XOF',
    newBalance: '98 000 XOF',
    amount: '-52 000 XOF',
    title: 'AWS Account',
    subtitle: 'Utilisation partielle du solde ristourne',
    logo: '/images/logos/aws.png'
  }
]

const DepositWithdraw = () => {
  return (
    <Card>
      <Grid container>
        <Grid item xs={12} md={6} className='border-be md:border-be-0 md:border-ie'>
          <CardHeader
            title='Credit Wallet'
            action={
              <Typography component={Link} className='font-medium' color='primary'>
                Voir Tous
              </Typography>
            }
          />
          <CardContent className='flex flex-col gap-5'>
            {depositData.map((item, index) => (
              <div key={index} className='flex items-center gap-4'>
                <img src={item.logo} alt={item.title} width={30} />
                <div className='flex justify-between items-center is-full flex-wrap gap-x-4 gap-y-2'>
                  <div className='flex flex-col gap-0.5'>
                    <Typography color='text.primary' className='font-medium'>
                      {item.title}
                    </Typography>
                    <Typography>{item.subtitle}</Typography>
                    <Typography variant='body2'>Solde précédent : {item.oldBalance}</Typography>
                    <Typography variant='body2'>Nouveau solde : {item.newBalance}</Typography>
                  </div>
                  <Typography color='success.main' className='font-medium'>
                    {item.amount}
                  </Typography>
                </div>
              </div>
            ))}
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardHeader
            title='Debit Wallet'
            action={
              <Typography component={Link} className='font-medium' color='primary'>
                Voir Tous
              </Typography>
            }
          />
          <CardContent className='flex flex-col gap-5'>
            {withdrawData.map((item, index) => (
              <div key={index} className='flex items-center gap-4'>
                <img src={item.logo} alt={item.title} width={30} />
                <div className='flex justify-between items-center is-full flex-wrap gap-x-4 gap-y-2'>
                  <div className='flex flex-col gap-0.5'>
                    <Typography color='text.primary' className='font-medium'>
                      {item.title}
                    </Typography>
                    <Typography>{item.subtitle}</Typography>
                    <Typography variant='body2'>Solde précédent : {item.oldBalance}</Typography>
                    <Typography variant='body2'>Nouveau solde : {item.newBalance}</Typography>
                  </div>
                  <Typography color='error.main' className='font-medium'>
                    {item.amount}
                  </Typography>
                </div>
              </div>
            ))}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default DepositWithdraw
