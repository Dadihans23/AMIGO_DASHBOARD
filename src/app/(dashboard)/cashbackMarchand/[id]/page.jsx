'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// MUI Imports
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import CustomAvatar from '@core/components/mui/Avatar';

const userData = [
  {
    userId: '1',
    avatarSrc: '/images/avatars/1.png',
    name: 'Jordan Stevenson',
    email: 'jacinthe_blick@hotmail.com',
  },
  {
    userId: '3',
    avatarSrc: '/images/avatars/3.png',
    name: 'Jennifer Summers',
    email: 'tristin_johnson@gmail.com',
  },
  {
    userId: '6',
    avatarSrc: '/images/avatars/1.png',
    name: 'Jordan Stevenson',
    email: 'jacinthe_blick@hotmail.com',
  },
  {
    userId: '2',
    avatarSrc: '/images/avatars/2.png',
    name: 'Richard Payne',
    email: 'jaylon_bartell3@gmail.com',
  },
];

const rowsData = [
  {
    id: '1',
    userId: '1',
    cashierName: 'Caissier 1',
    date: '2025-08-15',
    amount: 350.50,
    cashback: 70.10,
    status: 'En attente',
    transactionId: 'TX001',
    merchantEmail: 'marchanda@example.com',
  },
  {
    id: '2',
    userId: '3',
    cashierName: 'Caissier 2',
    date: '2025-07-20',
    amount: 500.00,
    cashback: 100.00,
    status: 'Reversé',
    transactionId: 'TX002',
    merchantEmail: 'marchanda@example.com',
  },
  {
    id: '3',
    userId: '6',
    cashierName: 'Caissier 3',
    date: '2025-09-05',
    amount: 220.25,
    cashback: 44.05,
    status: 'En attente',
    transactionId: 'TX003',
    merchantEmail: 'marchanda@example.com',
  },
  {
    id: '4',
    userId: '2',
    cashierName: 'Caissier 4',
    date: '2025-09-02',
    amount: 189.99,
    cashback: 38.00,
    status: 'Reversé',
    transactionId: 'TX004',
    merchantEmail: 'marchandb@example.com',
  },
  {
    id: '5',
    userId: '1',
    cashierName: 'Caissier 1',
    date: '2025-08-10',
    amount: 400.00,
    cashback: 80.00,
    status: 'En attente',
    transactionId: 'TX005',
    merchantEmail: 'marchanda@example.com',
  },
  {
    id: '6',
    userId: '3',
    cashierName: 'Caissier 2',
    date: '2025-07-25',
    amount: 300.00,
    cashback: 60.00,
    status: 'Reversé',
    transactionId: 'TX006',
    merchantEmail: 'marchanda@example.com',
  },
  {
    id: '7',
    userId: '6',
    cashierName: 'Caissier 3',
    date: '2025-09-10',
    amount: 450.00,
    cashback: 90.00,
    status: 'En attente',
    transactionId: 'TX007',
    merchantEmail: 'marchanda@example.com',
  },
  {
    id: '8',
    userId: '1',
    cashierName: 'Caissier 4',
    date: '2025-08-05',
    amount: 250.00,
    cashback: 50.00,
    status: 'Reversé',
    transactionId: 'TX008',
    merchantEmail: 'marchanda@example.com',
  },
];

const MerchantReceivedCashbackDetail = () => {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const merchantEmail = 'marchanda@example.com';
  const router = useRouter();

  useEffect(() => {
    const fetchData = () => {
      const url = window.location.href;
      const userId = url.split('/').pop();

      if (userId) {
        const fetchedUser = userData.find(u => u.userId === userId);
        const userTransactions = rowsData.filter(
          t => t.userId === userId && t.merchantEmail === merchantEmail
        );
        setUser(fetchedUser || null);
        setTransactions(userTransactions);
      }
    };

    fetchData();
  }, []);

  if (!user) return <Typography>Chargement des détails...</Typography>;

  return (
    <Card sx={{ p: 4 }}>
      <div className="flex items-center gap-4">
        <CustomAvatar src={user.avatarSrc} size={64} />
        <div>
          <Typography variant="h5" color="primary">{user.name}</Typography>
          <Typography variant="body1" color="text.secondary">{user.email}</Typography>
        </div>
      </div>

      <Typography variant="h6" sx={{ mt: 4 }}>
        Transactions effectuées via ce marchand
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID Transaction</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Caissier</TableCell>
              <TableCell>Montant</TableCell>
              <TableCell>Cashback</TableCell>
              <TableCell>Statut</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.transactionId}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.cashierName}</TableCell>
                <TableCell>{transaction.amount.toFixed(2)} cfa</TableCell>
                <TableCell>{transaction.cashback.toFixed(2)} cfa</TableCell>
                <TableCell>
                  <Chip
                    className="capitalize"
                    variant="tonal"
                    color={transaction.status === 'Reversé' ? 'success' : 'error'}
                    label={transaction.status}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default MerchantReceivedCashbackDetail;