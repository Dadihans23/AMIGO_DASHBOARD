'use client';

import { useEffect, useState } from 'react';

import { Typography, Card, Button, Grid, Paper, CircularProgress } from '@mui/material';

// Contenu fictif de rowsData avec le champ emetteurReceveur
const rowsData = [
  {
    transactionId: 'T1001',
    date: '2023-09-20',
    merchantId: 'M2001',
    merchantName: 'Marchand 1',
    emetteurReceveur: 'Client A', // Émetteur ou destinataire
    operationDescription: 'Ristourne accordée pour vente de produits',
    amount: -500,
    balanceBefore:5500,
    balanceAfter: 5000,
  },
  {
    transactionId: 'T1002',
    date: '2023-09-21',
    merchantId: 'M2002',
    merchantName: 'Marchand 2',
    emetteurReceveur: 'Client B', // Émetteur ou destinataire
    operationDescription: 'Ristourne reçue pour retour produit',
    amount: +1000,
    balanceBefore: 2000,
    balanceAfter: 3000,
  },
];

const formatCurrency = (amount) => `${amount} FCFA`;

const TransactionDetail = () => {
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransaction = () => {
      const url = window.location.href;
      const id = url.split('/').pop();

      if (id) {
        const foundTransaction = rowsData.find(row => row.transactionId === id);

        setTransaction(foundTransaction || null);
      }

      setLoading(false);
    };

    fetchTransaction();
  }, []);

  if (loading) return <CircularProgress />;

  if (!transaction) return <Typography>Transaction non trouvée.</Typography>;

  return (
    <Card sx={{ p: 4, maxWidth: 600, margin: 'auto', mt: 4, boxShadow: 3 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 3 }}>
        Détails de la Transaction
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, bgcolor: '#f9f9f9' }}>
            <Grid container spacing={2}>
              {[
                { label: 'Date', value: transaction.date },
                { label: 'ID de Transaction', value: transaction.transactionId },
                { label: 'ID Marchand', value: transaction.merchantId },
                { label: 'Nom Marchand', value: transaction.merchantName },
                { label: 'Émetteur/Destinataire', value: transaction.emetteurReceveur },
                { label: 'Description d\'Opération', value: transaction.operationDescription },
                { label: 'Montant de l\'Opération', value: formatCurrency(transaction.amount), isAmount: true },
                { label: 'Solde Avant', value: formatCurrency(transaction.balanceBefore) },
                { label: 'Solde Après', value: formatCurrency(transaction.balanceAfter) },
              ].map(({ label, value, isAmount }, index) => (
                <Grid container key={index} sx={{ justifyContent: 'space-between', padding: '8px 0' }}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#1976d2', width: '50%' }}>{label} :</Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      width: '50%',
                      textAlign: 'right',
                      color: isAmount ? (transaction.amount < 0 ? '#d32f2f' : '#388e3c') : '#555'
                    }}
                  >
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

export default TransactionDetail;
