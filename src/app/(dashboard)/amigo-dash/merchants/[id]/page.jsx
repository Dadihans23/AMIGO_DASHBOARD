'use client';

import { useEffect, useState } from 'react';
import {
  Typography,
  Card,
  Chip,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  CardContent,
  styled
} from '@mui/material';
import Link from '@components/Link'; // Assurez-vous que le chemin est correct

const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 650
}));

const userData = [
  {
    userId: 1,
    avatarSrc: '/images/avatars/1.png',
    name: 'Jordan Stevenson',
    email: 'jacinthe_blick@hotmail.com',
    status: 'active',
    walletBalance: 10000, // Solde du marchand
    createdAt: '2023-01-01',
    credits: 300,
    debits: 100,
    salesCount: 15, // Nombre de ventes pertinentes
    totalSalesAmount: 150000, // Montant total des ventes (XOF)
    uniqueCustomers: 8, // Nombre de clients uniques
    cashbackReceived: 10000, // Cashback total reçu (20% des ventes, ex. 150000 * 0.2 / 3 pour ajustement)
    cashbackDue: 2000, // Cashback restant dû (après paiements partiels)
  },
  {
    userId: 2,
    avatarSrc: '/images/avatars/2.png',
    name: 'Richard Payne',
    email: 'jaylon_bartell3@gmail.com',
    status: 'active',
    walletBalance: 5000,
    createdAt: '2023-02-15',
    credits: 200,
    debits: 50,
    salesCount: 5,
    totalSalesAmount: 50000,
    uniqueCustomers: 3,
    cashbackReceived: 5000, // 20% des ventes
    cashbackDue: 1000, // Restant dû après paiements
  },
];

const transactionData = [
  {
    date: '2023-09-20 10:00',
    transactionId: 'T1001',
    amigoId: 'A2001',
    customerName: 'Jordan Stevenson',
    purchaseAmount: 350.50,
    discount: 70.10, // 20% de 350.50
    merchantEmail: 'jacinthe_blick@hotmail.com',
    cashierId: 'CA001',
  },
  {
    date: '2023-09-21 11:15',
    transactionId: 'T1002',
    amigoId: 'A2002',
    customerName: 'Jennifer Summers',
    purchaseAmount: 220.25,
    discount: 44.05, // 20% de 220.25
    merchantEmail: 'jacinthe_blick@hotmail.com',
    cashierId: 'CA002',
  },
  {
    date: '2023-09-22 12:30',
    transactionId: 'T1003',
    amigoId: 'A2003',
    customerName: 'Jordan Stevenson',
    purchaseAmount: 500.00,
    discount: 100.00, // 20% de 500.00
    merchantEmail: 'jacinthe_blick@hotmail.com',
    cashierId: 'CA003',
  },
  {
    date: '2023-09-23 14:45',
    transactionId: 'T1004',
    amigoId: 'A2004',
    customerName: 'Richard Payne',
    purchaseAmount: 189.99,
    discount: 38.00, // 20% de 189.99
    merchantEmail: 'jaylon_bartell3@gmail.com',
    cashierId: 'CA004',
  },
  {
    date: '2023-09-24 09:00',
    transactionId: 'T1005',
    amigoId: 'A2005',
    customerName: 'Client 5',
    purchaseAmount: 10000,
    discount: 2000, // 20%
    merchantEmail: 'jacinthe_blick@hotmail.com',
    cashierId: 'CA005',
  },
  {
    date: '2023-09-25 15:30',
    transactionId: 'T1006',
    amigoId: 'A2006',
    customerName: 'Client 6',
    purchaseAmount: 15000,
    discount: 3000, // 20%
    merchantEmail: 'jacinthe_blick@hotmail.com',
    cashierId: 'CA006',
  },
  {
    date: '2023-09-26 08:15',
    transactionId: 'T1007',
    amigoId: 'A2007',
    customerName: 'Client 7',
    purchaseAmount: 20000,
    discount: 4000, // 20%
    merchantEmail: 'jacinthe_blick@hotmail.com',
    cashierId: 'CA007',
  },
  {
    date: '2023-09-27 16:00',
    transactionId: 'T1008',
    amigoId: 'A2008',
    customerName: 'Client 8',
    purchaseAmount: 25000,
    discount: 5000, // 20%
    merchantEmail: 'jacinthe_blick@hotmail.com',
    cashierId: 'CA008',
  },
  {
    date: '2023-09-28 17:45',
    transactionId: 'T1009',
    amigoId: 'A2009',
    customerName: 'Client 9',
    purchaseAmount: 30000,
    discount: 6000, // 20%
    merchantEmail: 'jacinthe_blick@hotmail.com',
    cashierId: 'CA009',
  },
  {
    date: '2023-09-29 10:30',
    transactionId: 'T1010',
    amigoId: 'A2010',
    customerName: 'Client 10',
    purchaseAmount: 35000,
    discount: 7000, // 20%
    merchantEmail: 'jacinthe_blick@hotmail.com',
    cashierId: 'CA010',
  },
  {
    date: '2023-09-30 11:00',
    transactionId: 'T1011',
    amigoId: 'A2011',
    customerName: 'Client 11',
    purchaseAmount: 40000,
    discount: 8000, // 20%
    merchantEmail: 'jacinthe_blick@hotmail.com',
    cashierId: 'CA011',
  },
  {
    date: '2023-10-01 12:15',
    transactionId: 'T1012',
    amigoId: 'A2012',
    customerName: 'Client 12',
    purchaseAmount: 45000,
    discount: 9000, // 20%
    merchantEmail: 'jacinthe_blick@hotmail.com',
    cashierId: 'CA012',
  },
  {
    date: '2023-10-02 13:30',
    transactionId: 'T1013',
    amigoId: 'A2013',
    customerName: 'Client 13',
    purchaseAmount: 50000,
    discount: 10000, // 20%
    merchantEmail: 'jacinthe_blick@hotmail.com',
    cashierId: 'CA013',
  },
  {
    date: '2023-10-03 14:45',
    transactionId: 'T1014',
    amigoId: 'A2014',
    customerName: 'Client 14',
    purchaseAmount: 55000,
    discount: 11000, // 20%
    merchantEmail: 'jacinthe_blick@hotmail.com',
    cashierId: 'CA014',
  },
  {
    date: '2023-10-04 09:00',
    transactionId: 'T1015',
    amigoId: 'A2015',
    customerName: 'Client 15',
    purchaseAmount: 60000,
    discount: 12000, // 20%
    merchantEmail: 'jacinthe_blick@hotmail.com',
    cashierId: 'CA015',
  },
  {
    date: '2023-10-05 10:15',
    transactionId: 'T1016',
    amigoId: 'A2016',
    customerName: 'Client 16',
    purchaseAmount: 65000,
    discount: 13000, // 20%
    merchantEmail: 'jaylon_bartell3@gmail.com',
    cashierId: 'CA016',
  },
];

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [openSuspendDialog, setOpenSuspendDialog] = useState(false);
  const [openRechargeDialog, setOpenRechargeDialog] = useState(false);
  const [openWithdrawDialog, setOpenWithdrawDialog] = useState(false);
  const [openToggleStatusDialog, setOpenToggleStatusDialog] = useState(false);
  const [amount, setAmount] = useState(0);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const rowsPerPage = 6;

  useEffect(() => {
    const fetchUser = async () => {
      const url = window.location.href;
      const id = url.split('/').pop();

      if (id) {
        const fetchedUser = userData.find((u) => u.userId.toString() === id);
        setUser(fetchedUser || null);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    setPage(1); // Reset pagination when search term or date filters change
  }, [searchTerm, startDate, endDate]);

  const handleSuspend = () => {
    console.log(`Utilisateur ${user.userId} suspendu`);
    setOpenSuspendDialog(false);
  };

  const handleRecharge = () => {
    console.log(`Rechargement de ${amount} XOF pour ${user.name}`);
    setOpenRechargeDialog(false);
  };

  const handleWithdraw = () => {
    console.log(`Retrait de ${amount} XOF pour ${user.name}`);
    setOpenWithdrawDialog(false);
  };

  const handleToggleStatus = () => {
    const newStatus = user.status === 'active' ? 'inactive' : 'active';
    setUser({ ...user, status: newStatus });
    console.log(`Utilisateur ${user.userId} ${newStatus === 'active' ? 'activé' : 'désactivé'}`);
    setOpenToggleStatusDialog(false);
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleSearch = () => {
    setSearchTerm('');
    setPage(1);
  };

  if (!user) return <Typography>Loading utilisateur...</Typography>;

  // Filtrer les transactions par date (convertir la date en objet Date pour comparaison)
  const filteredRows = transactionData.filter((row) => {
    if (row.merchantEmail !== user.email) return false;
    if (searchTerm && !row.amigoId.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    if (startDate) {
      const rowDate = new Date(row.date);
      const start = new Date(startDate);
      if (rowDate < start) return false;
    }
    if (endDate) {
      const rowDate = new Date(row.date);
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999); // Inclure toute la journée de fin
      if (rowDate > end) return false;
    }
    return true;
  });

  const displayedRows = filteredRows.slice(
    (page - 1) * rowsPerPage,
    (page - 1) * rowsPerPage + rowsPerPage
  );

  return (
    <Grid container spacing={6}>
      {/* Cartes pour les informations */}
      <Grid container spacing={2} sx={{ padding: 5 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: '#fff' }}>Nombre de ventes</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
                {user.salesCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: '#fff' }}>Montant total des ventes</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
                {user.totalSalesAmount.toFixed(2)} XOF
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: '#fff' }}>Nombre de clients</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
                {user.uniqueCustomers}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: '#fff' }}>Cashback reçu</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
                {user.cashbackReceived.toFixed(2)} XOF
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: '#fff' }}>Cashback dû</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
                {user.cashbackDue.toFixed(2)} XOF
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: '#fff' }}>Solde</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
                {user.walletBalance.toFixed(2)} XOF
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Section des détails existants */}
      <Grid item xs={12}>
        <Card sx={{ p: 4 }}>
          <div className="flex items-center gap-4">
            <img src={user.avatarSrc} alt={user.name} className="rounded-full w-24 h-24" />
            <div>
              <Typography variant="h5" color="primary">{user.name}</Typography>
              <Typography variant="body1" color="text.secondary">{user.email}</Typography>
              <Chip
                className="capitalize"
                variant="tonal"
                color={user.status === 'inactive' ? 'secondary' : 'success'}
                label={user.status}
                size="small"
              />
              <Typography variant="body2" color="text.secondary">Date d&apos;inscription: {user.createdAt}</Typography>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <Button variant="outlined" sx={{ mt: 2 }} onClick={() => setOpenRechargeDialog(true)}>Recharger</Button>
            <Button variant="outlined" sx={{ mt: 2 }} onClick={() => setOpenWithdrawDialog(true)}>Retirer</Button>
            <Button variant="outlined" color="error" sx={{ mt: 2 }} onClick={() => setOpenSuspendDialog(true)}>Suspendre</Button>
            <Button 
              variant="outlined" 
              color={user.status === 'active' ? 'warning' : 'success'} 
              sx={{ mt: 2 }} 
              onClick={() => setOpenToggleStatusDialog(true)}
            >
              {user.status === 'active' ? 'Désactiver' : 'Activer'}
            </Button>
          </div>

          {/* Table des crédits/débits */}
          <TableContainer component={Paper} sx={{ mt: 4 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Total Crédit</TableCell>
                  <TableCell>Total Débit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{user.credits} XOF</TableCell>
                  <TableCell>{user.debits} XOF</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* Table des transactions */}
          <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
            Liste des Transactions
          </Typography>
          <Card sx={{ mt: 2 }}>
            <div className='p-4 flex gap-4'>
              <TextField
                label='Rechercher par ID Amigo'
                variant='outlined'
                sx={{ maxWidth: 300 }}
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <TextField
                label="Date de début"
                type="date"
                variant="outlined"
                sx={{ maxWidth: 200 }}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="Date de fin"
                type="date"
                variant="outlined"
                sx={{ maxWidth: 200 }}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
              <Button variant='contained' onClick={handleSearch}>
                Rechercher
              </Button>
            </div>
            <TableContainer component={Paper}>
              <StyledTable aria-label='transactions table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>ID de Transaction</TableCell>
                    <TableCell>ID Amigo Client</TableCell>
                    <TableCell>Nom Client</TableCell>
                    <TableCell>Montant de l&apos;Achat (XOF)</TableCell>
                    <TableCell>Ristourne Accordée (XOF)</TableCell>
                    <TableCell>ID du Caissier</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {displayedRows.map(row => (
                    <TableRow key={row.transactionId}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.transactionId}</TableCell>
                      <TableCell>
                        <Chip label={row.amigoId} />
                      </TableCell>
                      <TableCell>{row.customerName}</TableCell>
                      <TableCell>{row.purchaseAmount.toFixed(2)} XOF</TableCell>
                      <TableCell>{row.discount.toFixed(2)} XOF</TableCell>
                      <TableCell>{row.cashierId}</TableCell>
                      <TableCell>
                        <Link href={`/amigo-dash/transactions/${row.transactionId}`} color='primary'>
                          En savoir plus
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </StyledTable>
            </TableContainer>
            <div className='flex justify-between items-center mt-4'>
              <Button
                variant='outlined'
                onClick={() => setPage(prev => prev - 1)}
                disabled={page === 1}
              >
                Précédent
              </Button>
              <Typography>{`Page ${page} sur ${Math.ceil(filteredRows.length / rowsPerPage)}`}</Typography>
              <Button
                variant='outlined'
                onClick={() => setPage(prev => prev + 1)}
                disabled={page === Math.ceil(filteredRows.length / rowsPerPage)}
              >
                Suivant
              </Button>
            </div>
          </Card>
        </Card>
      </Grid>

      {/* Modal de confirmation de suspension */}
      <Dialog open={openSuspendDialog} onClose={() => setOpenSuspendDialog(false)}>
        <DialogTitle>Confirmer la suspension</DialogTitle>
        <DialogContent>
          <Typography>Êtes-vous sûr de vouloir suspendre cet utilisateur ?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenSuspendDialog(false)}>Annuler</Button>
          <Button onClick={handleSuspend} color="error">Suspendre</Button>
        </DialogActions>
      </Dialog>

      {/* Modal de recharge */}
      <Dialog open={openRechargeDialog} onClose={() => setOpenRechargeDialog(false)}>
        <DialogTitle>Recharger Wallet</DialogTitle>
        <DialogContent>
          <Typography>Montant à recharger pour {user.name} :</Typography>
          <TextField
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
            variant="outlined"
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenRechargeDialog(false)}>Annuler</Button>
          <Button onClick={handleRecharge} color="primary">Recharger</Button>
        </DialogActions>
      </Dialog>

      {/* Modal de retrait */}
      <Dialog open={openWithdrawDialog} onClose={() => setOpenWithdrawDialog(false)}>
        <DialogTitle>Retirer Wallet</DialogTitle>
        <DialogContent>
          <Typography>Montant à retirer pour {user.name} :</Typography>
          <TextField
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
            variant="outlined"
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenWithdrawDialog(false)}>Annuler</Button>
          <Button onClick={handleWithdraw} color="primary">Retirer</Button>
        </DialogActions>
      </Dialog>

      {/* Modal de confirmation pour activer/désactiver */}
      <Dialog open={openToggleStatusDialog} onClose={() => setOpenToggleStatusDialog(false)}>
        <DialogTitle>{user.status === 'active' ? 'Confirmer la désactivation' : 'Confirmer l’activation'}</DialogTitle>
        <DialogContent>
          <Typography>
            Êtes-vous sûr de vouloir {user.status === 'active' ? 'désactiver' : 'activer'} cet utilisateur ?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenToggleStatusDialog(false)}>Annuler</Button>
          <Button 
            onClick={handleToggleStatus} 
            color={user.status === 'active' ? 'warning' : 'success'}
          >
            {user.status === 'active' ? 'Désactiver' : 'Activer'}
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default UserProfile;