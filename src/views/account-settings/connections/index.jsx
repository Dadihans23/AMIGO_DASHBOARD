'use client';
import React, { useState } from 'react';

// Next Imports
import Link from 'next/link';

// MUI Imports
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';

// Liste initiale des caissiers
const initialCashiers = [
  { id: 1, firstName: 'Alice', lastName: 'Dupont', email: 'alice.dupont@example.com' },
  { id: 2, firstName: 'Bob', lastName: 'Martin', email: 'bob.martin@example.com' }
];

const CashierManagement = () => {
  const [cashiers, setCashiers] = useState(initialCashiers);
  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [newCashier, setNewCashier] = useState({ id: null, firstName: '', lastName: '', email: '' });
  const [editingIndex, setEditingIndex] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

  };

  const handleCreateCashier = () => {
    if (newCashier.firstName && newCashier.lastName && newCashier.email) {
      if (!validateEmail(newCashier.email)) {
        alert('Veuillez entrer un email valide.');

        return;
      }

      const nextId = cashiers.length ? Math.max(cashiers.map(c => c.id)) + 1 : 1;
      const createdCashier = { ...newCashier, id: nextId };

      console.log('Création du caissier:', createdCashier); // Affiche les infos dans la console

      setCashiers([...cashiers, createdCashier]);

      setSnackbarMessage(`Caissier ${createdCashier.firstName} ${createdCashier.lastName} créé avec succès.`);
      setSnackbarOpen(true);
      resetCreateForm();
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  const handleEditCashier = () => {
    if (newCashier.firstName && newCashier.lastName && newCashier.email) {
      if (!validateEmail(newCashier.email)) {
        alert('Veuillez entrer un email valide.');

        return;
      }

      console.log('Modification du caissier:', newCashier); // Affiche les infos dans la console

      const updatedCashiers = cashiers.map((cashier, index) => (index === editingIndex ? { ...newCashier } : cashier));

      setCashiers(updatedCashiers);
      setSnackbarMessage(`Caissier ${newCashier.firstName} ${newCashier.lastName} mis à jour avec succès.`);
      setSnackbarOpen(true);
      resetEditForm();
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  const handleDeleteCashier = (id) => {
    const cashierToDelete = cashiers.find(cashier => cashier.id === id);

    console.log('Suppression du caissier:', cashierToDelete); // Affiche les infos dans la console
    setDeletingId(id);
    setDeleteOpen(true);
  };

  const confirmDeleteCashier = () => {
    setCashiers(cashiers.filter(cashier => cashier.id !== deletingId));
    setSnackbarMessage('Caissier supprimé avec succès.');
    setSnackbarOpen(true);
    setDeleteOpen(false);
    setDeletingId(null);
  };

  const resetCreateForm = () => {
    setNewCashier({ id: null, firstName: '', lastName: '', email: '' });
    setCreateOpen(false);
  };

  const resetEditForm = () => {
    setNewCashier({ id: null, firstName: '', lastName: '', email: '' });
    setEditingIndex(null);
    setEditOpen(false);
  };

  const handleEditClick = index => {
    const cashierToEdit = cashiers[index];

    console.log('Édition du caissier:', cashierToEdit); // Affiche les infos dans la console

    setEditingIndex(index);
    setNewCashier(cashierToEdit);
    setEditOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CardHeader title='Gestion des Caissiers' subheader='Créez et gérez vos caissiers ici' />
          <CardContent>
            <Button variant='contained' color='primary' onClick={() => setCreateOpen(true)}>
              Créer un Caissier
            </Button>

            {/* Formulaire de création de caissier */}
            <Dialog open={createOpen} onClose={resetCreateForm}>
              <DialogTitle>Créer un Caissier</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin='dense'
                  label='Prénom'
                  fullWidth
                  value={newCashier.firstName}
                  onChange={e => setNewCashier({ ...newCashier, firstName: e.target.value })}
                />
                <TextField
                  margin='dense'
                  label='Nom'
                  fullWidth
                  value={newCashier.lastName}
                  onChange={e => setNewCashier({ ...newCashier, lastName: e.target.value })}
                />
                <TextField
                  margin='dense'
                  label='Email'
                  type='email'
                  fullWidth
                  value={newCashier.email}
                  onChange={e => setNewCashier({ ...newCashier, email: e.target.value })}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={resetCreateForm} color='secondary'>
                  Annuler
                </Button>
                <Button onClick={handleCreateCashier} color='primary'>
                  Créer
                </Button>
              </DialogActions>
            </Dialog>

            {/* Formulaire de modification de caissier */}
            <Dialog open={editOpen} onClose={resetEditForm}>
              <DialogTitle>Modifier le Caissier</DialogTitle>
              <DialogContent>
                <TextField disabled margin='dense' label='ID' fullWidth value={newCashier.id || ''} />
                <TextField
                  autoFocus
                  margin='dense'
                  label='Prénom'
                  fullWidth
                  value={newCashier.firstName}
                  onChange={e => setNewCashier({ ...newCashier, firstName: e.target.value })}
                />
                <TextField
                  margin='dense'
                  label='Nom'
                  fullWidth
                  value={newCashier.lastName}
                  onChange={e => setNewCashier({ ...newCashier, lastName: e.target.value })}
                />
                <TextField
                  margin='dense'
                  label='Email'
                  type='email'
                  fullWidth
                  value={newCashier.email}
                  onChange={e => setNewCashier({ ...newCashier, email: e.target.value })}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={resetEditForm} color='secondary'>
                  Annuler
                </Button>
                <Button onClick={handleEditCashier} color='primary'>
                  Mettre à jour
                </Button>
              </DialogActions>
            </Dialog>
          </CardContent>
        </Grid>
        <Grid item xs={12}>
          <CardHeader title='Liste des Caissiers' />
          <CardContent className='flex flex-col gap-4'>
            {cashiers.map((cashier, index) => (
              <div key={cashier.id} className='flex items-center justify-between gap-4'>
                <div className='flex-grow'>
                  <Typography className='font-medium' color='text.primary'>
                    {`${cashier.firstName} ${cashier.lastName}`}
                  </Typography>
                  <Typography variant='body2'>{cashier.email}</Typography>
                </div>
                <div>
                  <Button variant='outlined' onClick={() => handleEditClick(index)} sx={{ mr: 2 }}>
                    Modifier
                  </Button>
                  <Button variant='outlined' color='secondary' onClick={() => handleDeleteCashier(cashier.id)}>
                    Supprimer
                  </Button>
                </div>

              </div>
            ))}
          </CardContent>
        </Grid>
      </Grid>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose} message={snackbarMessage} />

      {/* Dialog de confirmation de suppression */}
      <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)}>
        <DialogTitle>Confirmation de Suppression</DialogTitle>
        <DialogContent>
          <Typography>Êtes-vous sûr de vouloir supprimer ce caissier ?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)} color='secondary'>
            Annuler
          </Button>
          <Button onClick={confirmDeleteCashier} color='primary'>
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default CashierManagement;
