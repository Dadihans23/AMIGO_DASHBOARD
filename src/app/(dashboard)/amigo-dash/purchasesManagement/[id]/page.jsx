'use client';

import { useEffect, useState } from 'react';
import { Typography, Card, Button, Grid, Paper, CircularProgress, Chip } from '@mui/material';

// Contenu fictif de rowsData
const rowsData = [
  {
    purchaseId: '1',
    customerName: 'Jordan Stevenson',
    customerEmail: 'jacinthe_blick@hotmail.com',
    merchantId: 'M001',
    merchantName: 'Marchand 1',
    amount: 150.50,
    cashback: 7.50,
    purchaseDate: '2025-09-01',
    status: 'Complété'
  },
  {
    purchaseId: '2',
    customerName: 'Richard Payne',
    customerEmail: 'jaylon_bartell3@gmail.com',
    merchantId: 'M002',
    merchantName: 'Marchand 2',
    amount: 89.99,
    cashback: 4.50,
    purchaseDate: '2025-09-02',
    status: 'En attente'
  },
  {
    purchaseId: '3',
    customerName: 'Jennifer Summers',
    customerEmail: 'tristin_johnson@gmail.com',
    merchantId: 'M003',
    merchantName: 'Marchand 3',
    amount: 200.00,
    cashback: 10.00,
    purchaseDate: '2025-09-03',
    status: 'Complété'
  },
  {
    purchaseId: '4',
    customerName: 'Justin Richardson',
    customerEmail: 'toney21@yahoo.com',
    merchantId: 'M004',
    merchantName: 'Marchand 4',
    amount: 45.75,
    cashback: 2.25,
    purchaseDate: '2025-09-04',
    status: 'Annulé'
  },
  {
    purchaseId: '5',
    customerName: 'Nicholas Tanner',
    customerEmail: 'hunter_kuhic68@hotmail.com',
    merchantId: 'M001',
    merchantName: 'Marchand 1',
    amount: 300.00,
    cashback: 15.00,
    purchaseDate: '2025-09-05',
    status: 'Complété'
  },
  {
    purchaseId: '6',
    customerName: 'Jordan Stevenson',
    customerEmail: 'jacinthe_blick@hotmail.com',
    merchantId: 'M002',
    merchantName: 'Marchand 2',
    amount: 120.25,
    cashback: 6.00,
    purchaseDate: '2025-09-06',
    status: 'En attente'
  },
  {
    purchaseId: '7',
    customerName: 'Richard Payne',
    customerEmail: 'jaylon_bartell3@gmail.com',
    merchantId: 'M003',
    merchantName: 'Marchand 3',
    amount: 99.99,
    cashback: 5.00,
    purchaseDate: '2025-09-07',
    status: 'Complété'
  },
  {
    purchaseId: '8',
    customerName: 'Jennifer Summers',
    customerEmail: 'tristin_johnson@gmail.com',
    merchantId: 'M004',
    merchantName: 'Marchand 4',
    amount: 175.50,
    cashback: 8.75,
    purchaseDate: '2025-09-08',
    status: 'Annulé'
  },
  {
    purchaseId: '9',
    customerName: 'Justin Richardson',
    customerEmail: 'toney21@yahoo.com',
    merchantId: 'M001',
    merchantName: 'Marchand 1',
    amount: 250.00,
    cashback: 12.50,
    purchaseDate: '2025-09-09',
    status: 'Complété'
  },
  {
    purchaseId: '10',
    customerName: 'Nicholas Tanner',
    customerEmail: 'hunter_kuhic68@hotmail.com',
    merchantId: 'M002',
    merchantName: 'Marchand 2',
    amount: 180.75,
    cashback: 9.04,
    purchaseDate: '2025-09-10',
    status: 'En attente'
  },
  {
    purchaseId: '11',
    customerName: 'Jordan Stevenson',
    customerEmail: 'jacinthe_blick@hotmail.com',
    merchantId: 'M003',
    merchantName: 'Marchand 3',
    amount: 220.00,
    cashback: 11.00,
    purchaseDate: '2025-09-11',
    status: 'Complété'
  },
  {
    purchaseId: '12',
    customerName: 'Richard Payne',
    customerEmail: 'jaylon_bartell3@gmail.com',
    merchantId: 'M004',
    merchantName: 'Marchand 4',
    amount: 130.50,
    cashback: 6.53,
    purchaseDate: '2025-09-12',
    status: 'Annulé'
  },
  {
    purchaseId: '13',
    customerName: 'Jennifer Summers',
    customerEmail: 'tristin_johnson@gmail.com',
    merchantId: 'M001',
    merchantName: 'Marchand 1',
    amount: 275.25,
    cashback: 13.76,
    purchaseDate: '2025-09-13',
    status: 'Complété'
  },
  {
    purchaseId: '14',
    customerName: 'Justin Richardson',
    customerEmail: 'toney21@yahoo.com',
    merchantId: 'M002',
    merchantName: 'Marchand 2',
    amount: 95.00,
    cashback: 4.75,
    purchaseDate: '2025-09-14',
    status: 'En attente'
  },
  {
    purchaseId: '15',
    customerName: 'Nicholas Tanner',
    customerEmail: 'hunter_kuhic68@hotmail.com',
    merchantId: 'M003',
    merchantName: 'Marchand 3',
    amount: 310.00,
    cashback: 15.50,
    purchaseDate: '2025-09-15',
    status: 'Complété'
  },
  {
    purchaseId: '16',
    customerName: 'Jordan Stevenson',
    customerEmail: 'jacinthe_blick@hotmail.com',
    merchantId: 'M004',
    merchantName: 'Marchand 4',
    amount: 160.75,
    cashback: 8.04,
    purchaseDate: '2025-09-16',
    status: 'Annulé'
  },
  {
    purchaseId: '17',
    customerName: 'Richard Payne',
    customerEmail: 'jaylon_bartell3@gmail.com',
    merchantId: 'M001',
    merchantName: 'Marchand 1',
    amount: 110.25,
    cashback: 5.51,
    purchaseDate: '2025-09-17',
    status: 'Complété'
  },
  {
    purchaseId: '18',
    customerName: 'Jennifer Summers',
    customerEmail: 'tristin_johnson@gmail.com',
    merchantId: 'M002',
    merchantName: 'Marchand 2',
    amount: 190.00,
    cashback: 9.50,
    purchaseDate: '2025-09-18',
    status: 'En attente'
  },
  {
    purchaseId: '19',
    customerName: 'Justin Richardson',
    customerEmail: 'toney21@yahoo.com',
    merchantId: 'M003',
    merchantName: 'Marchand 3',
    amount: 230.50,
    cashback: 11.53,
    purchaseDate: '2025-09-19',
    status: 'Complété'
  },
  {
    purchaseId: '20',
    customerName: 'Nicholas Tanner',
    customerEmail: 'hunter_kuhic68@hotmail.com',
    merchantId: 'M004',
    merchantName: 'Marchand 4',
    amount: 140.99,
    cashback: 7.05,
    purchaseDate: '2025-09-20',
    status: 'Annulé'
  }
];

const formatCurrency = (amount) => `${amount.toFixed(2)} cfa`;

const PurchaseDetail = () => {
  const [purchase, setPurchase] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPurchase = () => {
      const url = window.location.href;
      const id = url.split('/').pop();

      if (id) {
        const foundPurchase = rowsData.find(row => row.purchaseId === id);
        setPurchase(foundPurchase || null);
      }

      setLoading(false);
    };

    fetchPurchase();
  }, []);

  if (loading) return <CircularProgress />;

  if (!purchase) return <Typography>Achat non trouvé.</Typography>;

  return (
    <Card sx={{ p: 4, maxWidth: 600, margin: 'auto', mt: 4, boxShadow: 3 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 3 }}>
        Détails de l'Achat
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, bgcolor: '#f9f9f9' }}>
            <Grid container spacing={2}>
              {[
                { label: 'ID Achat', value: purchase.purchaseId },
                { label: 'Nom du Client', value: purchase.customerName },
                { label: 'Email du Client', value: purchase.customerEmail },
                { label: 'ID Marchand', value: purchase.merchantId },
                { label: 'Nom Marchand', value: purchase.merchantName },
                { label: 'Montant', value: formatCurrency(purchase.amount) },
                { label: 'Cashback', value: formatCurrency(purchase.cashback) },
                { label: 'Date d\'Achat', value: purchase.purchaseDate },
                {
                  label: 'Statut',
                  value: (
                    <Chip
                      className='capitalize'
                      variant='tonal'
                      color={
                        purchase.status === 'Complété' ? 'success' :
                        purchase.status === 'En attente' ? 'warning' : 'error'
                      }
                      label={purchase.status}
                      size='small'
                    />
                  )
                }
              ].map(({ label, value }, index) => (
                <Grid container key={index} sx={{ justifyContent: 'space-between', padding: '8px 0' }}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#1976d2', width: '50%' }}>{label} :</Typography>
                  <Typography variant="body1" sx={{ width: '50%', textAlign: 'right', color: '#555' }}>
                    {value}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.history.back()}
        sx={{ mt: 3, width: '100%' }}
      >
        Retour à la liste
      </Button>
    </Card>
  );
};

export default PurchaseDetail;