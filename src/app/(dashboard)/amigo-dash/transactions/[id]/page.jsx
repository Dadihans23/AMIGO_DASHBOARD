'use client';

import { useEffect, useState } from 'react';
import { Typography, Card, Button, Grid, Paper, CircularProgress } from '@mui/material';

// Contenu fictif de rowsData
const rowsData = [
  {
    transactionId: 'T1001',
    date: '2023-09-01',
    amigoId: 'A001',
    customerName: 'Jean Dupont',
    merchantName: 'Boutique de Vêtements',
    merchantId: 'M001',
    operationDescription: 'Ristourne Achat de vêtements',
    amount: 92,
    balanceBefore: 100,
    balanceAfter: 192,
    cashierName: 'Alice Martin',
    clientShare: 55.20, // 12% de 460 (montant implicite)
    amigoShare: 36.80 // 8% de 460
  },
  {
    transactionId: 'T1002',
    date: '2023-09-05',
    amigoId: 'A002',
    customerName: 'Marie Curie',
    merchantName: 'Librairie',
    merchantId: 'M002',
    operationDescription: 'Utilisation ristourne pour Achat de livres',
    amount: -145,
    balanceBefore: 445,
    balanceAfter: 300,
    cashierName: 'Bob Durand',
    clientShare: 0, // Pas de cashback pour une dépense
    amigoShare: 0
  },
];

const formatCurrency = (amount) => `${amount.toFixed(2)} FCFA`;

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
                { label: 'ID Amigo', value: transaction.amigoId },
                { label: 'Nom Client', value: transaction.customerName },
                { label: 'Nom Marchand', value: transaction.merchantName },
                { label: 'ID du Marchand', value: transaction.merchantId },
                { label: 'Nom Caissier', value: transaction.cashierName },
                { label: 'Description d\'Opération', value: transaction.operationDescription },
                { label: 'Montant de l\'Opération', value: formatCurrency(transaction.amount), isAmount: true },
                { label: 'Part du Client', value: formatCurrency(transaction.clientShare) },
                { label: 'Part d\'Amigo', value: formatCurrency(transaction.amigoShare) },
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