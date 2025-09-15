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

// Données simulées pour les achats individuels
const purchaseData = [
  {
    purchaseId: 'P001',
    userId: '1',
    merchantEmail: 'marchanda@example.com',
    date: '2025-08-15',
    amount: 150.00,
    cashback: 7.50,
    status: 'Confirmé',
  },
  {
    purchaseId: 'P002',
    userId: '1',
    merchantEmail: 'marchanda@example.com',
    date: '2025-09-01',
    amount: 200.50,
    cashback: 10.00,
    status: 'Confirmé',
  },
  {
    purchaseId: 'P003',
    userId: '3',
    merchantEmail: 'marchanda@example.com',
    date: '2025-07-20',
    amount: 300.00,
    cashback: 15.00,
    status: 'Confirmé',
  },
  {
    purchaseId: 'P004',
    userId: '3',
    merchantEmail: 'marchanda@example.com',
    date: '2025-08-10',
    amount: 200.00,
    cashback: 10.00,
    status: 'Annulé',
  },
  {
    purchaseId: 'P005',
    userId: '6',
    merchantEmail: 'marchanda@example.com',
    date: '2025-09-05',
    amount: 220.25,
    cashback: 11.00,
    status: 'Confirmé',
  },
  {
    purchaseId: 'P006',
    userId: '2',
    merchantEmail: 'marchandb@example.com',
    date: '2025-09-02',
    amount: 189.99,
    cashback: 9.50,
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

const MerchantCashbackDetails = () => {
  const [user, setUser] = useState(null);
  const [purchases, setPurchases] = useState([]);
  const merchantEmail = 'marchanda@example.com'; // Email du marchand connecté
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const url = window.location.href;
      const userId = url.split('/').pop();

      if (userId) {
        const fetchedUser = userData.find(u => u.userId === userId);
        const userPurchases = purchaseData.filter(
          p => p.userId === userId && p.merchantEmail === merchantEmail
        );
        setUser(fetchedUser || null);
        setPurchases(userPurchases);
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
        Achats effectués via ce marchand
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID Achat</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Montant</TableCell>
              <TableCell>Cashback</TableCell>
              <TableCell>Statut</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {purchases.map((purchase) => (
              <TableRow key={purchase.purchaseId}>
                <TableCell>{purchase.purchaseId}</TableCell>
                <TableCell>{purchase.date}</TableCell>
                <TableCell>{purchase.amount.toFixed(2)} cfa</TableCell>
                <TableCell>{purchase.cashback.toFixed(2)} cfa</TableCell>
                <TableCell>
                  <Chip
                    className="capitalize"
                    variant="tonal"
                    color={purchase.status === 'Confirmé' ? 'success' : 'error'}
                    label={purchase.status}
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

export default MerchantCashbackDetails;