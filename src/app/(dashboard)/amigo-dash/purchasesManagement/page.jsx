'use client';

// MUI Imports
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import TablePurchases from '@views/admindashboard/TablePurchases'; // Assurez-vous que le chemin est correct

const PurchasesManagement = () => {
  const totalPurchases = 400; // Remplacez par la valeur dynamique si nécessaire
  const totalPurchasesAmount = 12500; // Remplacez par la valeur dynamique si nécessaire
  const totalCashbackPaid = 750; // Remplacez par la valeur dynamique si nécessaire
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [newPurchase, setNewPurchase] = useState({});

  const handleOpenAddDialog = () => {
    setNewPurchase({});
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
  };

  const handleAddPurchase = () => {
    // Ajoute la logique pour sauvegarder l'achat ici
    handleCloseAddDialog();
  };

  return (
    <Grid container spacing={6}>
      <Grid container spacing={2} sx={{ padding: 5 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>Total des Achats</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>
                {totalPurchases}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>Montant Total des Achats</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>
                {totalPurchasesAmount} cfa
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>Cashback Versé</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>
                {totalCashbackPaid} cfa
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>      
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Gestion des Achats Totaux
        </Typography>
        {/* <Button variant="contained" color="primary" onClick={handleOpenAddDialog} sx={{ marginRight: 2 }}>
          Ajouter un Achat
        </Button> */}
      </Grid>


      <Grid item xs={12}>
        <TablePurchases />
      </Grid>

      {/* Dialog pour ajouter un achat */}
      <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
        <DialogTitle>Ajouter un Achat</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="ID de l'Achat"
            type="text"
            fullWidth
            variant="outlined"
            value={newPurchase.purchase_id || ''}
            onChange={(e) => setNewPurchase({ ...newPurchase, purchase_id: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Montant"
            type="number"
            fullWidth
            variant="outlined"
            value={newPurchase.amount || ''}
            onChange={(e) => setNewPurchase({ ...newPurchase, amount: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Date de l'Achat"
            type="date"
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={newPurchase.purchase_date || ''}
            onChange={(e) => setNewPurchase({ ...newPurchase, purchase_date: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Nom du Client"
            type="text"
            fullWidth
            variant="outlined"
            value={newPurchase.customer_name || ''}
            onChange={(e) => setNewPurchase({ ...newPurchase, customer_name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Email du Client"
            type="email"
            fullWidth
            variant="outlined"
            value={newPurchase.customer_email || ''}
            onChange={(e) => setNewPurchase({ ...newPurchase, customer_email: e.target.value })}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Statut</InputLabel>
            <Select
              value={newPurchase.status || ''}
              onChange={(e) => setNewPurchase({ ...newPurchase, status: e.target.value })}
            >
              <MenuItem value="Complété">Complété</MenuItem>
              <MenuItem value="En attente">En attente</MenuItem>
              <MenuItem value="Annulé">Annulé</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Produit"
            type="text"
            fullWidth
            variant="outlined"
            value={newPurchase.product || ''}
            onChange={(e) => setNewPurchase({ ...newPurchase, product: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Quantité"
            type="number"
            fullWidth
            variant="outlined"
            value={newPurchase.quantity || ''}
            onChange={(e) => setNewPurchase({ ...newPurchase, quantity: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Cashback Versé"
            type="number"
            fullWidth
            variant="outlined"
            value={newPurchase.cashback || ''}
            onChange={(e) => setNewPurchase({ ...newPurchase, cashback: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddDialog} color="primary">Annuler</Button>
          <Button onClick={handleAddPurchase} color="primary">Ajouter</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default PurchasesManagement;