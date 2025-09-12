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
  TextField
} from '@mui/material';

const userData = [
  {
    userId: 1,
    avatarSrc: '/images/avatars/1.png',
    name: 'Jordan Stevenson',
    email: 'Jacinthe_Blick@hotmail.com',
    status: 'active',
    walletBalance: 100,
    createdAt: '2023-01-01',
    credits: 300,
    debits: 100,
  },
  {
    userId: 2,
    avatarSrc: '/images/avatars/2.png',
    name: 'Richard Payne',
    email: 'Jaylon_Bartell3@gmail.com',
    status: 'active',
    walletBalance: 50,
    createdAt: '2023-02-15',
    credits: 200,
    debits: 50,
  },
];

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [openSuspendDialog, setOpenSuspendDialog] = useState(false);
  const [openRechargeDialog, setOpenRechargeDialog] = useState(false);
  const [openWithdrawDialog, setOpenWithdrawDialog] = useState(false);
  const [amount, setAmount] = useState(0);

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

  const handleSuspend = () => {
    console.log(`Utilisateur ${user.userId} suspendu`);
    setOpenSuspendDialog(false);
  };

  const handleRecharge = () => {
    console.log(`Rechargement de ${amount} € pour ${user.name}`);
    setOpenRechargeDialog(false);
  };

  const handleWithdraw = () => {
    console.log(`Retrait de ${amount} € pour ${user.name}`);
    setOpenWithdrawDialog(false);
  };

  if (!user) return <Typography>Loading utilisateur...</Typography>;

  return (
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
          <Typography variant="body2" color="text.secondary">Solde Wallet: {user.walletBalance} €</Typography>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <Button variant="outlined" sx={{ mt: 2 }} onClick={() => setOpenRechargeDialog(true)}>Recharger</Button>
        <Button variant="outlined" sx={{ mt: 2 }} onClick={() => setOpenWithdrawDialog(true)}>Retirer</Button>
        <Button variant="outlined" color="error" sx={{ mt: 2 }} onClick={() => setOpenSuspendDialog(true)}>Suspendre</Button>
      </div>

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
              <TableCell>{user.credits} €</TableCell>
              <TableCell>{user.debits} €</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

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
    </Card>
  );
};

export default UserProfile;
