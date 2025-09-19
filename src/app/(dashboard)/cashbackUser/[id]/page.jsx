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

const purchaseData = [
  {
    purchaseId: 'P001',
    userId: '1',
    merchantEmail: 'marchanda@example.com',
    cashierName: 'Caissier 1',
    date: '2025-08-15',
    amount: 150.00,
    cashback: 7.50,
    status: 'Confirmé',
  },
  {
    purchaseId: 'P002',
    userId: '1',
    merchantEmail: 'marchanda@example.com',
    cashierName: 'Caissier 2',
    date: '2025-09-01',
    amount: 200.50,
    cashback: 10.03,
    status: 'Confirmé',
  },
  {
    purchaseId: 'P003',
    userId: '3',
    merchantEmail: 'marchanda@example.com',
    cashierName: 'Caissier 3',
    date: '2025-07-20',
    amount: 300.00,
    cashback: 15.00,
    status: 'Confirmé',
  },
  {
    purchaseId: 'P004',
    userId: '3',
    merchantEmail: 'marchanda@example.com',
    cashierName: 'Caissier 4',
    date: '2025-08-10',
    amount: 200.00,
    cashback: 10.00,
    status: 'Annulé',
  },
  {
    purchaseId: 'P005',
    userId: '6',
    merchantEmail: 'marchanda@example.com',
    cashierName: 'Caissier 1',
    date: '2025-09-05',
    amount: 220.25,
    cashback: 11.01,
    status: 'Confirmé',
  },
  {
    purchaseId: 'P006',
    userId: '2',
    merchantEmail: 'marchandb@example.com',
    cashierName: 'Caissier 2',
    date: '2025-09-02',
    amount: 189.99,
    cashback: 9.50,
    status: 'Confirmé',
  },
  {
    purchaseId: 'P007',
    userId: '1',
    merchantEmail: 'marchanda@example.com',
    cashierName: 'Caissier 3',
    date: '2025-07-25',
    amount: 250.75,
    cashback: 12.54,
    status: 'Confirmé',
  },
  {
    purchaseId: 'P008',
    userId: '3',
    merchantEmail: 'marchanda@example.com',
    cashierName: 'Caissier 4',
    date: '2025-08-20',
    amount: 175.50,
    cashback: 8.78,
    status: 'Annulé',
  },
  {
    purchaseId: 'P009',
    userId: '6',
    merchantEmail: 'marchanda@example.com',
    cashierName: 'Caissier 1',
    date: '2025-09-10',
    amount: 310.00,
    cashback: 15.50,
    status: 'Confirmé',
  },
  {
    purchaseId: 'P010',
    userId: '2',
    merchantEmail: 'marchandb@example.com',
    cashierName: 'Caissier 2',
    date: '2025-09-15',
    amount: 130.25,
    cashback: 6.51,
    status: 'Confirmé',
  },
  {
    purchaseId: 'P011',
    userId: '1',
    merchantEmail: 'marchanda@example.com',
    cashierName: 'Caissier 3',
    date: '2025-07-30',
    amount: 180.00,
    cashback: 9.00,
    status: 'Confirmé',
  },
  {
    purchaseId: 'P012',
    userId: '3',
    merchantEmail: 'marchanda@example.com',
    cashierName: 'Caissier 4',
    date: '2025-08-25',
    amount: 275.25,
    cashback: 13.76,
    status: 'Confirmé',
  },
  {
    purchaseId: 'P013',
    userId: '6',
    merchantEmail: 'marchanda@example.com',
    cashierName: 'Caissier 1',
    date: '2025-09-12',
    amount: 190.50,
    cashback: 9.53,
    status: 'Annulé',
  },
  {
    purchaseId: 'P014',
    userId: '2',
    merchantEmail: 'marchandb@example.com',
    cashierName: 'Caissier 2',
    date: '2025-09-18',
    amount: 210.00,
    cashback: 10.50,
    status: 'Confirmé',
  },
  {
    purchaseId: 'P015',
    userId: '1',
    merchantEmail: 'marchanda@example.com',
    cashierName: 'Caissier 3',
    date: '2025-08-05',
    amount: 320.75,
    cashback: 16.04,
    status: 'Confirmé',
  },
  {
    purchaseId: 'P016',
    userId: '3',
    merchantEmail: 'marchanda@example.com',
    cashierName: 'Caissier 4',
    date: '2025-08-30',
    amount: 260.00,
    cashback: 13.00,
    status: 'Confirmé',
  },
  {
    purchaseId: 'P017',
    userId: '6',
    merchantEmail: 'marchanda@example.com',
    cashierName: 'Caissier 1',
    date: '2025-09-15',
    amount: 230.25,
    cashback: 11.51,
    status: 'Confirmé',
  },
  {
    purchaseId: 'P018',
    userId: '2',
    merchantEmail: 'marchandb@example.com',
    cashierName: 'Caissier 2',
    date: '2025-09-20',
    amount: 170.99,
    cashback: 8.55,
    status: 'Annulé',
  },
  {
    purchaseId: 'P019',
    userId: '1',
    merchantEmail: 'marchanda@example.com',
    cashierName: 'Caissier 3',
    date: '2025-07-15',
    amount: 280.50,
    cashback: 14.03,
    status: 'Confirmé',
  },
  {
    purchaseId: 'P020',
    userId: '3',
    merchantEmail: 'marchanda@example.com',
    cashierName: 'Caissier 4',
    date: '2025-08-15',
    amount: 240.00,
    cashback: 12.00,
    status: 'Confirmé',
  },
];

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
  const merchantEmail = 'marchanda@example.com';
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
              <TableCell>Caissier</TableCell>
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
                <TableCell>{purchase.cashierName}</TableCell>
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