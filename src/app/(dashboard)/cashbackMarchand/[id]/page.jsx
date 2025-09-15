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

// Données simulées pour les cashbacks reçus
const cashbackData = [
  {
    purchaseId: 'P001',
    userId: '1',
    merchantEmail: 'marchanda@example.com',
    date: '2025-08-15',
    amount: 150.00,
    merchantCashback: 3.00, // 2%
    status: 'Confirmé',
  },
  {
    purchaseId: 'P002',
    userId: '1',
    merchantEmail: 'marchanda@example.com',
    date: '2025-09-01',
    amount: 200.50,
    merchantCashback: 4.01, // 2%
    status: 'Confirmé',
  },
  {
    purchaseId: 'P003',
    userId: '3',
    merchantEmail: 'marchanda@example.com',
    date: '2025-07-20',
    amount: 300.00,
    merchantCashback: 6.00, // 2%
    status: 'Confirmé',
  },
  {
    purchaseId: 'P004',
    userId: '3',
    merchantEmail: 'marchanda@example.com',
    date: '2025-08-10',
    amount: 200.00,
    merchantCashback: 4.00, // 2%
    status: 'Annulé',
  },
  {
    purchaseId: 'P005',
    userId: '6',
    merchantEmail: 'marchanda@example.com',
    date: '2025-09-05',
    amount: 220.25,
    merchantCashback: 4.41, // 2%
    status: 'Confirmé',
  },
  {
    purchaseId: 'P006',
    userId: '2',
    merchantEmail: 'marchandb@example.com',
    date: '2025-09-02',
    amount: 189.99,
    merchantCashback: 3.80, // 2%
    status: 'Confirmé',
  },
];

// Données des utilisateurs pour l'affichage
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

const MerchantReceivedCashbackDetails = () => {
  const [user, setUser] = useState(null);
  const [cashbacks, setCashbacks] = useState([]);
  const merchantEmail = 'marchanda@example.com'; // Email du marchand connecté
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const url = window.location.href;
      const userId = url.split('/').pop();

      if (userId) {
        const fetchedUser = userData.find(u => u.userId === userId);
        const userCashbacks = cashbackData.filter(
          p => p.userId === userId && p.merchantEmail === merchantEmail
        );
        setUser(fetchedUser || null);
        setCashbacks(userCashbacks);
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
        Cashbacks reçus pour les achats de cet utilisateur
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID Achat</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Montant de l'Achat</TableCell>
              <TableCell>Cashback Reçu</TableCell>
              <TableCell>Statut</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cashbacks.map((cashback) => (
              <TableRow key={cashback.purchaseId}>
                <TableCell>{cashback.purchaseId}</TableCell>
                <TableCell>{cashback.date}</TableCell>
                <TableCell>{cashback.amount.toFixed(2)} cfa</TableCell>
                <TableCell>{cashback.merchantCashback.toFixed(2)} cfa</TableCell>
                <TableCell>
                  <Chip
                    className="capitalize"
                    variant="tonal"
                    color={cashback.status === 'Confirmé' ? 'success' : 'error'}
                    label={cashback.status}
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

export default MerchantReceivedCashbackDetails;