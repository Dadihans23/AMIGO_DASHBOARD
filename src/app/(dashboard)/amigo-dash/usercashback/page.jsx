'use client';

// MUI Imports
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import TableUserCashback from '@views/admindashboard/TableUserCashback'; // Assurez-vous que le chemin est correct

const UserCashbackManagement = () => {
  const totalUsers = 15; // Remplacez par la valeur dynamique si nécessaire
  const totalPurchasesAmount = 2500.00; // Remplacez par la valeur dynamique si nécessaire
  const totalCashbackPaid = 125.00; // Remplacez par la valeur dynamique si nécessaire

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Gestion du Cashback Utilisateur
        </Typography>
      </Grid>
      <Grid container spacing={2} sx={{ padding: 5 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5">Nombre Total d'Utilisateurs</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {totalUsers}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5">Montant Total des Achats</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {totalPurchasesAmount.toFixed(2)} cfa
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5">Cashback Utilisateur</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {totalCashbackPaid.toFixed(2)} cfa
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <TableUserCashback />
      </Grid>
    </Grid>
  );
};

export default UserCashbackManagement;