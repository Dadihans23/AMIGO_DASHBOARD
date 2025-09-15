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
import TableSales from '@views/admindashboard/TableMerchant'; // Assurez-vous que le chemin est correct

import Table from '@views/amigo-transactions/TableMerchant'


const SalesManagement = () => {
  const totalSales = 350; // Remplacez par la valeur dynamique si nécessaire
  const totalSalesCompleted = 320; // Remplacez par la valeur dynamique si nécessaire
  const totalSalesPending = 30; // Remplacez par la valeur dynamique si nécessaire
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [newSale, setNewSale] = useState({});

  const handleOpenAddDialog = () => {
    setNewSale({});
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
  };

  const handleAddSale = () => {
    // Ajoute la logique pour sauvegarder la vente ici
    handleCloseAddDialog();
  };

  return (
    <Grid container spacing={6}>

      <Grid container spacing={2} sx={{ padding: 5 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>Total des Ventes</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>
                {totalSales}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}> Montant des ventes </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold' ,  color: '#fff'  }}>
                {totalSalesCompleted}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>CashBack versé</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold'  , color: '#fff'  }}>
                {totalSalesPending}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Gestion des Ventes Totales
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpenAddDialog} sx={{ marginRight: 2 }}>
          Ajouter une Vente
        </Button>
      </Grid>
      
      <Grid item xs={12}>
        {/* <TableSales /> */}
        <Table />
        
      </Grid>

      {/* Dialog pour ajouter une vente */}
      <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
        <DialogTitle>Ajouter une Vente</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="ID de la Vente"
            type="text"
            fullWidth
            variant="outlined"
            value={newSale.sale_id || ''}
            onChange={(e) => setNewSale({ ...newSale, sale_id: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Montant"
            type="number"
            fullWidth
            variant="outlined"
            value={newSale.amount || ''}
            onChange={(e) => setNewSale({ ...newSale, amount: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Date de la Vente"
            type="date"
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={newSale.sale_date || ''}
            onChange={(e) => setNewSale({ ...newSale, sale_date: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Nom du Client"
            type="text"
            fullWidth
            variant="outlined"
            value={newSale.customer_name || ''}
            onChange={(e) => setNewSale({ ...newSale, customer_name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Email du Client"
            type="email"
            fullWidth
            variant="outlined"
            value={newSale.customer_email || ''}
            onChange={(e) => setNewSale({ ...newSale, customer_email: e.target.value })}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Statut</InputLabel>
            <Select
              value={newSale.status || ''}
              onChange={(e) => setNewSale({ ...newSale, status: e.target.value })}
            >
              <MenuItem value="Complétée">Complétée</MenuItem>
              <MenuItem value="En attente">En attente</MenuItem>
              <MenuItem value="Annulée">Annulée</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Produit"
            type="text"
            fullWidth
            variant="outlined"
            value={newSale.product || ''}
            onChange={(e) => setNewSale({ ...newSale, product: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Quantité"
            type="number"
            fullWidth
            variant="outlined"
            value={newSale.quantity || ''}
            onChange={(e) => setNewSale({ ...newSale, quantity: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddDialog} color="primary">Annuler</Button>
          <Button onClick={handleAddSale} color="primary">Ajouter</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default SalesManagement;