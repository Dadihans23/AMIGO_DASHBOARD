'use client'

import React, { useState } from 'react'

import { Grid, TextField, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'

import LinearProgress from '@mui/material/LinearProgress'
import Avatar from '@mui/material/Avatar'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'

import OptionMenu from '@core/components/option-menu'

const RebateStatsComponent = () => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const [stats, setStats] = useState({
    transactions: 0,
    totalSales: 0,
    totalRebates: 0,
    rebateDetails: []
  })
  
  const [isLoading, setIsLoading] = useState(false)

  const fetchStats = async () => {
    setIsLoading(true)
    console.log(`Fetching stats for date range: ${startDate} to ${endDate}`)

    try {
      // Simuler un appel API avec un délai
      const response = await new Promise(resolve => {
        setTimeout(() => {
          resolve({
            transactions: Math.floor(Math.random() * 1000),
            totalSales: Math.floor(Math.random() * 1000000),
            totalRebates: Math.floor(Math.random() * 100000),
            rebateDetails: [
              {
                title: 'Client A',
                amount: Math.floor(Math.random() * 10000),
                subtitle: '10% des ventes',
                progress: 75,
                color: 'primary'
              },
              {
                title: 'Client B',
                amount: Math.floor(Math.random() * 8000),
                subtitle: '8% des ventes',
                progress: 50,
                color: 'info'
              },
              {
                title: 'Client C',
                amount: Math.floor(Math.random() * 5000),
                subtitle: '5% des ventes',
                progress: 20,
                color: 'secondary'
              }
            ]
          })
        }, 1000)
      })

      console.log('API response:', response)
      setStats(response)
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const formatCurrency = amount => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF' }).format(amount)
  }

  return (
    <Card>
      <CardHeader
        title='Statistiques des Ristournes'
        action={
          <OptionMenu
            iconClassName='text-textPrimary'
            options={['Derniers 7 jours', 'Dernier mois', 'Dernière année']}
          />
        }
      />
      <CardContent className='flex flex-col gap-6'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <TextField
              label='Date de début'
              type='date'
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              label='Date de fin'
              type='date'
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              variant='contained'
              color='primary'
              fullWidth
              onClick={fetchStats}
              disabled={!startDate || !endDate || isLoading}
            >
              {isLoading ? 'Chargement...' : 'Appliquer'}
            </Button>
          </Grid>
        </Grid>

        <div>
          <div className='flex items-center'>
            <Typography variant='h3'>{formatCurrency(stats.totalRebates)}</Typography>
            <i className='ri-arrow-up-s-line align-bottom text-success'></i>
            <Typography component='span' color='success.main'>
              10%
            </Typography>
          </div>
          <Typography>Total des ristournes distribuées</Typography>
        </div>

        <div className='flex flex-col gap-6'>
          {stats.rebateDetails.map((item, index) => (
            <div key={index} className='flex items-center gap-3'>
              <Avatar variant='rounded' className='bg-actionHover'>
                {item.title[0]}
              </Avatar>
              <div className='flex justify-between items-center is-full flex-wrap gap-x-4 gap-y-2'>
                <div className='flex flex-col gap-0.5'>
                  <Typography color='text.primary' className='font-medium'>
                    {item.title}
                  </Typography>
                  <Typography>{item.subtitle}</Typography>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                  <Typography color='text.primary' className='font-medium'>
                    {formatCurrency(item.amount)}
                  </Typography>
                  <LinearProgress
                    variant='determinate'
                    value={item.progress}
                    className='is-20 bs-1'
                    color={item.color}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default RebateStatsComponent
