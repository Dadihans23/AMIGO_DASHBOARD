'use client'

import React, { useState } from 'react'

import { Grid, Card, CardContent, Typography, TextField, Button } from '@mui/material'

const StatisticsComponent = () => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const [stats, setStats] = useState({
    transactions: 0,
    totalSales: 0,
    totalRebates: 0
  })

  const [isLoading, setIsLoading] = useState(false)

  const fetchStats = async () => {
    setIsLoading(true)
    console.log(`Fetching stats for date range: ${startDate} to ${endDate}`)

    // Simuler un appel API avec un délai
    try {
      // Ici, vous feriez normalement un appel API réel
      const response = await new Promise(resolve => {
        setTimeout(() => {
          resolve({
            transactions: Math.floor(Math.random() * 1000),
            totalSales: Math.floor(Math.random() * 1000000),
            totalRebates: Math.floor(Math.random() * 100000)
          })
        }, 1000) // Simule un délai d'1 seconde
      })

      console.log('API response:', response)
      setStats(response)
    } catch (error) {
      console.error('Error fetching stats:', error)
      
      // Gérer l'erreur ici (par exemple, afficher un message à l'utilisateur)

    } finally {
      setIsLoading(false)
    }
  }

  const formatCurrency = amount => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF' }).format(amount)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant='h6' gutterBottom>
              Sélectionnez une plage de dates
            </Typography>
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
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card style={{ backgroundColor: '#e3f2fd', border: '1px solid #2196f3' }}>
          <CardContent>
            <Typography color='text.primary' className='font-medium text-center'>
              Nombre de Transactions
            </Typography>
            <Typography variant='h4' style={{ color: '#2196f3' }}>
              {stats.transactions}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card style={{ backgroundColor: '#dfffd9', border: '1px solid #4caf50' }}>
          <CardContent>
            <Typography color='text.primary' className='font-medium text-center'>
              Ventes Totales
            </Typography>
            <Typography variant='h4' style={{ color: '#4caf50' }}>
              {formatCurrency(stats.totalSales)}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card style={{ backgroundColor: '#ffdddd', border: '1px solid #f44336' }}>
          <CardContent>
            <Typography color='text.secondary' className='font-medium text-center'>
              Ristournes Distribuées
            </Typography>
            <Typography variant='h4' style={{ color: '#f44336' }}>
              {formatCurrency(stats.totalRebates)}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default StatisticsComponent
