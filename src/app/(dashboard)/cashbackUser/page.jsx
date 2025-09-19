'use client';

// MUI Imports
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import TableMerchantCashback from '@views/marchand/TableUserCashback'; // Chemin corrigé

const MerchantCashback = () => {
  // Supposons que l'email du marchand connecté est 'marchanda@example.com'
  const merchantEmail = 'marchanda@example.com';

  // Données simulées pour le marchand
  const merchantCashbackData = [
    {
      userId: '1',
      avatarSrc: '/images/avatars/1.png',
      name: 'Jordan Stevenson',
      email: 'jacinthe_blick@hotmail.com',
      totalPurchases: 350.50,
      cashbackPaid: 17.50,
      merchantEmail: 'marchanda@example.com',
    },
    {
      userId: '3',
      avatarSrc: '/images/avatars/3.png',
      name: 'Jennifer Summers',
      email: 'tristin_johnson@gmail.com',
      totalPurchases: 500.00,
      cashbackPaid: 25.00,
      merchantEmail: 'marchanda@example.com',
    },
    {
      userId: '6',
      avatarSrc: '/images/avatars/1.png',
      name: 'Jordan Stevenson',
      email: 'jacinthe_blick@hotmail.com',
      totalPurchases: 220.25,
      cashbackPaid: 11.00,
      merchantEmail: 'marchanda@example.com',
    },
    {
      userId: '2',
      avatarSrc: '/images/avatars/2.png',
      name: 'Richard Payne',
      email: 'jaylon_bartell3@gmail.com',
      totalPurchases: 189.99,
      cashbackPaid: 9.50,
      merchantEmail: 'marchandb@example.com',
    },
  ];

  const merchantData = merchantCashbackData.filter(row => row.merchantEmail === merchantEmail);
  const totalUsers = [...new Set(merchantData.map(row => row.userId))].length;
  const totalPurchasesAmount = merchantData.reduce((sum, row) => sum + row.totalPurchases, 0);
  const totalCashbackPaid = merchantData.reduce((sum, row) => sum + row.cashbackPaid, 0);

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Cashback Reversé
        </Typography>
      </Grid>
      <Grid container spacing={2} sx={{ padding: 5 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: '#fff' }}>Nombre Total de clients</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
                {totalUsers}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: '#fff' }}>Montant Total des Ventes</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
                {totalPurchasesAmount.toFixed(2)} cfa
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: '#fff' }}>Cashback Total Clients</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
                {totalCashbackPaid.toFixed(2)} cfa
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <TableMerchantCashback merchantEmail={merchantEmail} />
      </Grid>
    </Grid>
  );
};

export default MerchantCashback;