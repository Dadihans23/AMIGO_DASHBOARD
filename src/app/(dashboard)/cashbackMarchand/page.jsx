'use client';

// MUI Imports
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import TableMerchantReceivedCashback from '@views/marchand/TableMerchantReceivedCashback';

const MerchantReceivedCashback = () => {
  // Supposons que l'email du marchand connecté est 'marchanda@example.com'
  const merchantEmail = 'marchanda@example.com';

  // Données simulées pour les cashbacks reçus par le marchand
  const merchantReceivedCashbackData = [
    {
      userId: '1',
      avatarSrc: '/images/avatars/1.png',
      name: 'Jordan Stevenson',
      email: 'jacinthe_blick@hotmail.com',
      purchaseAmount: 350.50,
      merchantCashback: 70.10, // 20% du montant de l'achat
      date: '2025-08-15',
      merchantEmail: 'marchanda@example.com',
    },
    {
      userId: '3',
      avatarSrc: '/images/avatars/3.png',
      name: 'Jennifer Summers',
      email: 'tristin_johnson@gmail.com',
      purchaseAmount: 500.00,
      merchantCashback: 100.00, // 20%
      date: '2025-07-20',
      merchantEmail: 'marchanda@example.com',
    },
    {
      userId: '6',
      avatarSrc: '/images/avatars/1.png',
      name: 'Jordan Stevenson',
      email: 'jacinthe_blick@hotmail.com',
      purchaseAmount: 220.25,
      merchantCashback: 44.05, // 20%
      date: '2025-09-05',
      merchantEmail: 'marchanda@example.com',
    },
    {
      userId: '2',
      avatarSrc: '/images/avatars/2.png',
      name: 'Richard Payne',
      email: 'jaylon_bartell3@gmail.com',
      purchaseAmount: 189.99,
      merchantCashback: 38.00, // 20%
      date: '2025-09-02',
      merchantEmail: 'marchandb@example.com',
    },
  ];

  const merchantData = merchantReceivedCashbackData.filter(row => row.merchantEmail === merchantEmail);
  const totalUsers = [...new Set(merchantData.map(row => row.userId))].length;
  const totalPurchasesAmount = merchantData.reduce((sum, row) => sum + row.purchaseAmount, 0);
  const totalCashbackReceived = merchantData.reduce((sum, row) => sum + row.merchantCashback, 0);
  const totalCashbackPaid = 8000; // Cashback déjà reversé à la plateforme (ex. sur 10000 total, 8000 payé)
  const cashbackDue = totalCashbackReceived - totalCashbackPaid; // Cashback dû à la plateforme

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Relation Marchand - Amigo
        </Typography>
      </Grid>
      <Grid container spacing={2} sx={{ padding: 5 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: '#fff' }}>Solde du Marchand</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
                15000 cfa
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: '#fff' }}>Cashback dû à la plateforme</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
                {cashbackDue.toFixed(2)} cfa
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: '#fff' }}>Cashback reversé à la plateforme</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
                {totalCashbackPaid.toFixed(2)} cfa
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <TableMerchantReceivedCashback merchantEmail={merchantEmail} />
      </Grid>
    </Grid>
  );
};

export default MerchantReceivedCashback;