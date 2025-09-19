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
import TableMerchant from '@views/admindashboard/TableMerchant'; // Assurez-vous que le chemin est correct

const MerchantManagement = () => {
  const totalMerchants = 120; // Remplacez par la valeur dynamique si nécessaire
  const totalMerchantsActifs = 102; // Remplacez par la valeur dynamique si nécessaire
  const totalMerchantsInactifs = 18; // Remplacez par la valeur dynamique si nécessaire
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openAddProfileDialog, setOpenAddProfileDialog] = useState(false);
  const [newMerchant, setNewMerchant] = useState({});
  const [newProfile, setNewProfile] = useState({});

  const handleOpenAddDialog = () => {
    setNewMerchant({});
    setOpenAddDialog(true);
  };

  const handleOpenAddProfileDialog = () => {
    setNewProfile({});
    setOpenAddProfileDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
  };

  const handleCloseAddProfileDialog = () => {
    setOpenAddProfileDialog(false);
  };

  const handleAddMerchant = () => {
    // Ajoute la logique pour sauvegarder le marchand ici
    handleCloseAddDialog();
  };

  const handleAddProfile = () => {
    // Ajoute la logique pour sauvegarder le profil ici
    handleCloseAddProfileDialog();
  };

  return (
    <Grid container spacing={6}>
      {/* Cartes déplacées en haut */}
      <Grid container spacing={2} sx={{ padding: 5 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: '#fff' }}>Total des Marchands</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
                {totalMerchants}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: '#fff' }}>Marchands Actifs</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
                {totalMerchantsActifs}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: '#fff' }}>Marchands Inactifs</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
                {totalMerchantsInactifs}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Gestion des Marchands
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpenAddDialog} sx={{ marginRight: 2 }}>
          Ajouter un Marchand
        </Button>
        {/* <Button variant="contained" color="primary" onClick={handleOpenAddProfileDialog}>
          Ajouter un profil
        </Button> */}
      </Grid>

      <Grid item xs={12}>
        <TableMerchant />
      </Grid>

      {/* Dialog pour ajouter un marchand */}
      <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
        <DialogTitle>Ajouter un Marchand</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nom"
            type="text"
            fullWidth
            variant="outlined"
            value={newMerchant.name || ''}
            onChange={(e) => setNewMerchant({ ...newMerchant, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Numéro d'enregistrement"
            type="text"
            fullWidth
            variant="outlined"
            value={newMerchant.business_registration_number || ''}
            onChange={(e) => setNewMerchant({ ...newMerchant, business_registration_number: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={newMerchant.email || ''}
            onChange={(e) => setNewMerchant({ ...newMerchant, email: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Numéro de téléphone"
            type="text"
            fullWidth
            variant="outlined"
            value={newMerchant.phone_number || ''}
            onChange={(e) => setNewMerchant({ ...newMerchant, phone_number: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Rue"
            type="text"
            fullWidth
            variant="outlined"
            value={newMerchant.street || ''}
            onChange={(e) => setNewMerchant({ ...newMerchant, street: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Code Postal"
            type="text"
            fullWidth
            variant="outlined"
            value={newMerchant.postal_code || ''}
            onChange={(e) => setNewMerchant({ ...newMerchant, postal_code: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Ville"
            type="text"
            fullWidth
            variant="outlined"
            value={newMerchant.city || ''}
            onChange={(e) => setNewMerchant({ ...newMerchant, city: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Pays"
            type="text"
            fullWidth
            variant="outlined"
            value={newMerchant.country || ''}
            onChange={(e) => setNewMerchant({ ...newMerchant, country: e.target.value })}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Catégorie</InputLabel>
            <Select
              value={newMerchant.category || ''}
              onChange={(e) => setNewMerchant({ ...newMerchant, category: e.target.value })}
            >
              <MenuItem value="Catégorie A">Catégorie A</MenuItem>
              <MenuItem value="Catégorie B">Catégorie B</MenuItem>
              <MenuItem value="Catégorie C">Catégorie C</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Logo (URL)"
            type="text"
            fullWidth
            variant="outlined"
            value={newMerchant.logo || ''}
            onChange={(e) => setNewMerchant({ ...newMerchant, logo: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddDialog} color="primary">Annuler</Button>
          <Button onClick={handleAddMerchant} color="primary">Ajouter</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog pour ajouter un profil */}
      <Dialog open={openAddProfileDialog} onClose={handleCloseAddProfileDialog}>
        <DialogTitle>Ajouter un Profil</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nom"
            type="text"
            fullWidth
            variant="outlined"
            value={newProfile.name || ''}
            onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={newProfile.email || ''}
            onChange={(e) => setNewProfile({ ...newProfile, email: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Numéro de téléphone"
            type="text"
            fullWidth
            variant="outlined"
            value={newProfile.phone_number || ''}
            onChange={(e) => setNewProfile({ ...newProfile, phone_number: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Rue"
            type="text"
            fullWidth
            variant="outlined"
            value={newProfile.street || ''}
            onChange={(e) => setNewProfile({ ...newProfile, street: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Code Postal"
            type="text"
            fullWidth
            variant="outlined"
            value={newProfile.postal_code || ''}
            onChange={(e) => setNewProfile({ ...newProfile, postal_code: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Ville"
            type="text"
            fullWidth
            variant="outlined"
            value={newProfile.city || ''}
            onChange={(e) => setNewProfile({ ...newProfile, city: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Pays"
            type="text"
            fullWidth
            variant="outlined"
            value={newProfile.country || ''}
            onChange={(e) => setNewProfile({ ...newProfile, country: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Avatar (URL)"
            type="text"
            fullWidth
            variant="outlined"
            value={newProfile.avatar || ''}
            onChange={(e) => setNewProfile({ ...newProfile, avatar: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddProfileDialog} color="primary">Annuler</Button>
          <Button onClick={handleAddProfile} color="primary">Ajouter</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default MerchantManagement;