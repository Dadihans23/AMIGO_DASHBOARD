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
import TableCategories from '@views/admindashboard/TableCategorie'; // Assurez-vous que le chemin est correct

const CategoriesManagement = () => {
  const totalCategories = 50; // Remplacez par la valeur dynamique si nécessaire
  const totalCategoriesActive = 45; // Remplacez par la valeur dynamique si nécessaire
  const totalCategoriesInactive = 5; // Remplacez par la valeur dynamique si nécessaire
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [newCategory, setNewCategory] = useState({});

  const handleOpenAddDialog = () => {
    setNewCategory({});
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
  };

  const handleAddCategory = () => {
    // Ajoute la logique pour sauvegarder la catégorie ici
    handleCloseAddDialog();
  };

  return (
    <Grid container spacing={6}>
<Grid container spacing={2} sx={{ padding: 5 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>Total des Catégories</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>
                {totalCategories}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>Catégories Actives</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>
                {totalCategoriesActive}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>Catégories Inactives</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>
                {totalCategoriesInactive}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>      
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Gestion des Catégories
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpenAddDialog} sx={{ marginRight: 2 }}>
          Ajouter une Catégorie
        </Button>
      </Grid>
      

      <Grid item xs={12}>
        <TableCategories />
      </Grid>

      {/* Dialog pour ajouter une catégorie */}
      <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
        <DialogTitle>Ajouter une Catégorie</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nom de la Catégorie"
            type="text"
            fullWidth
            variant="outlined"
            value={newCategory.name || ''}
            onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={newCategory.description || ''}
            onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Statut</InputLabel>
            <Select
              value={newCategory.status || ''}
              onChange={(e) => setNewCategory({ ...newCategory, status: e.target.value })}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Image (URL)"
            type="text"
            fullWidth
            variant="outlined"
            value={newCategory.image || ''}
            onChange={(e) => setNewCategory({ ...newCategory, image: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Code de Catégorie"
            type="text"
            fullWidth
            variant="outlined"
            value={newCategory.code || ''}
            onChange={(e) => setNewCategory({ ...newCategory, code: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddDialog} color="primary">Annuler</Button>
          <Button onClick={handleAddCategory} color="primary">Ajouter</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default CategoriesManagement;