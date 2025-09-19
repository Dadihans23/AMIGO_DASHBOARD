'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Components Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

// Data
// Data
// Data
const globalStatsData = [
  {
    title: 'Total des utilisateurs',
    count: '245k',
    icon: 'ri-user-2-line',
    description: ''
  },
  {
    title: 'Total des clients',
    count: '180k',
    icon: 'ri-group-line',
    description: ''
  },
  {
    title: 'Total des marchands',
    count: '65k',
    icon: 'ri-store-line',
    description: ''
  },
  {
    title: 'Nouveaux utilisateurs inscrits (30 derniers jours)',
    count: '12.5k',
    icon: 'ri-add-box-line',
    description: ''
  },
  {
    title: 'Total des achats',
    count: '88k FCFA',
    icon: 'ri-money-dollar-circle-line',
    description: ''
  },
  {
    title: 'Total des cashbacks sur la plateforme',
    count: '45k FCFA',
    icon: 'ri-discount-2-line',
    description: ''
  },
  {
    title: 'Total des cashbacks attendues',
    count: '20k FCFA',
    icon: 'ri-calendar-event-line',
    description: ''
  },
  {
    title: 'Total des cashbacks reçues',
    count: '15k FCFA',
    icon: 'ri-receipt-line',
    description: ''
  },
  
]

const GlobalStatistics = () => {
  return (
    <Card className='bs-full'>
      <CardHeader
        title='Statistiques Globales'
        action={<OptionMenu iconClassName='text-textPrimary' options={['Refresh', 'Share', 'Update']} />}
      />
      <CardContent className='!pbs-5'>
        <Grid container spacing={2}>
          {globalStatsData.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <div className='flex flex-col items-center gap-3 p-4 bg-gray-100 rounded-lg shadow-md min-h-[200px]'>
                <CustomAvatar variant='rounded' color='primary' className='shadow-xs'>
                  <i className={stat.icon}></i>
                </CustomAvatar>
                <div className='flex-grow flex flex-col justify-center'>
                  <Typography variant='subtitle1' className='font-semibold mb-1'>
                    {stat.title}
                  </Typography>
                  <Typography variant='h6' className='font-bold'>
                    {stat.count}
                  </Typography>
                  {stat.description && (
                    <Typography variant='body2' className='mt-1 text-sm text-muted-foreground'>
                      {stat.description}
                    </Typography>
                  )}
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default GlobalStatistics
