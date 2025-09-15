'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Chip,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

// Données initiales des marchands
const initialRowsData = [
  {
    userId: '1',
    name: 'Marchand A',
    business_registration_number: '123456',
    email: 'marchanda@example.com',
    phone_number: '1234567890',
    street: 'Rue A',
    postal_code: '1000',
    city: 'Ville A',
    country: 'Pays A',
    category: 'Catégorie A',
    logo: '/images/logos/logo1.png',
    status: 'active',
  },
  {
    userId: '2',
    name: 'Marchand B',
    business_registration_number: '654321',
    email: 'marchandb@example.com',
    phone_number: '0987654321',
    street: 'Rue B',
    postal_code: '2000',
    city: 'Ville B',
    country: 'Pays B',
    category: 'Catégorie B',
    logo: '/images/logos/logo2.png',
    status: 'suspended',
  },
];

const categories = ['Catégorie A', 'Catégorie B', 'Catégorie C'];

const TableMerchant = () => {
  const router = useRouter();
  const [rowsData, setRowsData] = useState(initialRowsData);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [currentMerchant, setCurrentMerchant] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [statusFilter, setStatusFilter] = useState('');

  const handleOpenEditDialog = (merchant) => {
    setCurrentMerchant(merchant);
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleSave = () => {
    // Validation des champs
    if (!currentMerchant.name || !currentMerchant.email || !currentMerchant.phone_number || !currentMerchant.category) {
      setSnackbarMessage('Tous les champs obligatoires doivent être remplis.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(currentMerchant.email)) {
      setSnackbarMessage('L\'email fourni n\'est pas valide.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(currentMerchant.phone_number)) {
      setSnackbarMessage('Le numéro de téléphone ne doit contenir que des chiffres.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    setRowsData(rowsData.map((row) => (row.userId === currentMerchant.userId ? currentMerchant : row)));
    handleCloseEditDialog();
    setSnackbarMessage('Marchand modifié avec succès.');
    setSnackbarSeverity('success');
    setOpenSnackbar(true);
  };

  const handleDelete = (userId) => {
    setRowsData(rowsData.filter(row => row.userId !== userId));
    setOpenDeleteDialog(false);
    setSnackbarMessage('Marchand supprimé avec succès.');
    setSnackbarSeverity('success');
    setOpenSnackbar(true);
  };

  const handleViewProfile = (userId) => {
    router.push(`/amigo-dash/userprofile/${userId}`);
  };

  const filteredRowsData = rowsData.filter(row =>
    (statusFilter === '' || row.status === statusFilter)
  );

  return (
    <Card>
      <div className='p-4 flex gap-4'>
        <FormControl fullWidth sx={{ maxWidth: 200 }}>
          <InputLabel>Statut</InputLabel>
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            label="Statut"
          >
            <MenuItem value="">Tous</MenuItem>
            <MenuItem value="active">Actif</MenuItem>
            <MenuItem value="suspended">Suspendu</MenuItem>
          </Select>
        </FormControl>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label='Merchant Table'>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Téléphone</TableCell>
              <TableCell>Statut</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRowsData.map((row) => (
              <TableRow key={row.userId}>
                <TableCell>{row.userId}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone_number}</TableCell>
                <TableCell>
                  <Chip
                    className='capitalize'
                    variant='outlined'
                    color={row.status === 'active' ? 'success' : 'warning'}
                    label={row.status}
                    size='small'
                  />
                </TableCell>
                <TableCell>
                  <Button variant='outlined' onClick={() => handleOpenEditDialog(row)}>Modifier</Button>
                  <Button variant='outlined' onClick={() => handleViewProfile(row.userId)}>Voir Profil</Button>
                  <Button variant='outlined' color='secondary' onClick={() => {
                    setCurrentMerchant(row);
                    setOpenDeleteDialog(true);
                  }}>Supprimer</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog pour modifier un marchand */}
      <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
        <DialogTitle>Modifier un Marchand</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nom"
            type="text"
            fullWidth
            variant="outlined"
            value={currentMerchant.name || ''}
            onChange={(e) => setCurrentMerchant({ ...currentMerchant, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Numéro d'enregistrement"
            type="text"
            fullWidth
            variant="outlined"
            value={currentMerchant.business_registration_number || ''}
            onChange={(e) => setCurrentMerchant({ ...currentMerchant, business_registration_number: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={currentMerchant.email || ''}
            onChange={(e) => setCurrentMerchant({ ...currentMerchant, email: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Numéro de téléphone"
            type="text"
            fullWidth
            variant="outlined"
            value={currentMerchant.phone_number || ''}
            onChange={(e) => setCurrentMerchant({ ...currentMerchant, phone_number: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Rue"
            type="text"
            fullWidth
            variant="outlined"
            value={currentMerchant.street || ''}
            onChange={(e) => setCurrentMerchant({ ...currentMerchant, street: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Code Postal"
            type="text"
            fullWidth
            variant="outlined"
            value={currentMerchant.postal_code || ''}
            onChange={(e) => setCurrentMerchant({ ...currentMerchant, postal_code: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Ville"
            type="text"
            fullWidth
            variant="outlined"
            value={currentMerchant.city || ''}
            onChange={(e) => setCurrentMerchant({ ...currentMerchant, city: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Pays"
            type="text"
            fullWidth
            variant="outlined"
            value={currentMerchant.country || ''}
            onChange={(e) => setCurrentMerchant({ ...currentMerchant, country: e.target.value })}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Catégorie</InputLabel>
            <Select
              value={currentMerchant.category || ''}
              onChange={(e) => setCurrentMerchant({ ...currentMerchant, category: e.target.value })}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>{category}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Logo (URL)"
            type="text"
            fullWidth
            variant="outlined"
            value={currentMerchant.logo || ''}
            onChange={(e) => setCurrentMerchant({ ...currentMerchant, logo: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog} color="primary">Annuler</Button>
          <Button onClick={handleSave} color="primary">Modifier</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog de confirmation de suppression */}
      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Confirmer la Suppression</DialogTitle>
        <DialogContent>
          <Typography>Êtes-vous sûr de vouloir supprimer ce marchand ?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">Annuler</Button>
          <Button onClick={() => handleDelete(currentMerchant.userId)} color="secondary">Supprimer</Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar pour les notifications */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default TableMerchant;