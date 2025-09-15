'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

// MUI Imports
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

// Third-party Imports
import classnames from 'classnames';

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar';

// Styles Imports
import tableStyles from '@core/styles/table.module.css';

// Vars - Icônes pour différents types de catégories
const categoryIcons = {
  'Alimentation': { icon: 'ri-restaurant-line', color: 'text-success' },
  'Mode': { icon: 'ri-shirt-line', color: 'text-primary' },
  'Technologie': { icon: 'ri-smartphone-line', color: 'text-info' },
  'Santé': { icon: 'ri-heart-pulse-line', color: 'text-error' },
  'Services': { icon: 'ri-service-line', color: 'text-warning' },
  'Autre': { icon: 'ri-more-line', color: 'text-secondary' }
};

// Données des catégories
const categoriesData = [
  {
    categoryId: '1',
    name: 'Alimentation',
    description: 'Restaurants, épiceries, boulangeries',
    rebateRate: '5%',
    merchantCount: 145,
    status: 'active',
    createdAt: '2024-01-15'
  },
  {
    categoryId: '2',
    name: 'Mode',
    description: 'Vêtements, chaussures, accessoires',
    rebateRate: '8%',
    merchantCount: 89,
    status: 'active',
    createdAt: '2024-01-20'
  },
  {
    categoryId: '3',
    name: 'Technologie',
    description: 'Électronique, informatique, téléphones',
    rebateRate: '3%',
    merchantCount: 67,
    status: 'active',
    createdAt: '2024-02-01'
  },
  {
    categoryId: '4',
    name: 'Santé',
    description: 'Pharmacies, cliniques, laboratoires',
    rebateRate: '6%',
    merchantCount: 234,
    status: 'suspended',
    createdAt: '2024-02-10'
  },
  {
    categoryId: '5',
    name: 'Services',
    description: 'Coiffure, nettoyage, réparations',
    rebateRate: '10%',
    merchantCount: 156,
    status: 'active',
    createdAt: '2024-02-15'
  }
];

const TableMerchantCategories = () => {
  const router = useRouter();
  const [categories, setCategories] = useState(categoriesData);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [newCategory, setNewCategory] = useState({
    name: '',
    description: '',
    rebateRate: '',
  });

  const handleViewCategory = (categoryId) => {
    router.push(`/amigo-dash/categories/${categoryId}`);
  };

  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setNewCategory({
      name: category.name,
      description: category.description,
      rebateRate: category.rebateRate,
    });
    setOpenDialog(true);
  };

  const handleAddCategory = () => {
    setEditingCategory(null);
    setNewCategory({
      name: '',
      description: '',
      rebateRate: '',
    });
    setOpenDialog(true);
  };

  const handleSaveCategory = () => {
    if (editingCategory) {
      // Modifier une catégorie existante
      setCategories(prev => prev.map(cat => 
        cat.categoryId === editingCategory.categoryId 
          ? { ...cat, ...newCategory }
          : cat
      ));
    } else {
      // Ajouter une nouvelle catégorie
      const newCat = {
        categoryId: (categories.length + 1).toString(),
        ...newCategory,
        merchantCount: 0,
        status: 'active',
        createdAt: new Date().toISOString().split('T')[0]
      };
      setCategories(prev => [...prev, newCat]);
    }
    setOpenDialog(false);
  };

  const handleToggleStatus = (categoryId) => {
    setCategories(prev => prev.map(cat => 
      cat.categoryId === categoryId 
        ? { ...cat, status: cat.status === 'active' ? 'suspended' : 'active' }
        : cat
    ));
  };

  const getCategoryIcon = (categoryName) => {
    return categoryIcons[categoryName] || categoryIcons['Autre'];
  };

  return (
    <Card>
      <div className='p-4 flex justify-between items-center'>
        <Typography variant='h6'>Catégories de Marchands</Typography>
        <Button variant='contained' color='primary' onClick={handleAddCategory}>
          Ajouter une Catégorie
        </Button>
      </div>
      
      <div className='overflow-x-auto'>
        <table className={tableStyles.table} aria-label='Categories Table'>
          <thead>
            <tr>
              <th>Catégorie</th>
              <th>Description</th>
              <th>Taux de Ristourne</th>
              <th>Nombre de Marchands</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => {
              const iconData = getCategoryIcon(category.name);
              return (
                <tr key={category.categoryId}>
                  <td className='!plb-1'>
                    <div className='flex items-center gap-3'>
                      <CustomAvatar 
                        skin='light' 
                        color={iconData.color.replace('text-', '')}
                        size={34}
                      >
                        <i className={iconData.icon} />
                      </CustomAvatar>
                      <div className='flex flex-col'>
                        <Typography color='text.primary' className='font-medium'>
                          {category.name}
                        </Typography>
                        <Typography variant='body2'>
                          ID: {category.categoryId}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className='!plb-1'>
                    <Typography>{category.description}</Typography>
                  </td>
                  <td className='!plb-1'>
                    <Chip
                      label={category.rebateRate}
                      color='primary'
                      variant='tonal'
                      size='small'
                    />
                  </td>
                  <td className='!plb-1'>
                    <Typography color='text.primary' className='font-medium'>
                      {category.merchantCount} marchands
                    </Typography>
                  </td>
                  <td className='!pb-1'>
                    <Chip
                      className='capitalize'
                      variant='tonal'
                      color={category.status === 'suspended' ? 'warning' : 'success'}
                      label={category.status === 'suspended' ? 'Suspendu' : 'Actif'}
                      size='small'
                    />
                  </td>
                  <td className='!pb-1'>
                    <div className='flex gap-2'>
                      {/* <Button 
                        variant='outlined' 
                        size='small'
                        onClick={() => handleViewCategory(category.categoryId)}
                      >
                        Voir
                      </Button> */}
                      <Button 
                        variant='outlined' 
                        size='small'
                        color='primary'
                        onClick={() => handleEditCategory(category)}
                      >
                        Modifier
                      </Button>
                      <Button 
                        variant='outlined' 
                        size='small'
                        color={category.status === 'active' ? 'warning' : 'success'}
                        onClick={() => handleToggleStatus(category.categoryId)}
                      >
                        {category.status === 'active' ? 'Suspendre' : 'Activer'}
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Dialog pour ajouter/modifier une catégorie */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingCategory ? 'Modifier la Catégorie' : 'Ajouter une Catégorie'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nom de la catégorie"
            fullWidth
            value={newCategory.name}
            onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            multiline
            rows={3}
            value={newCategory.description}
            onChange={(e) => setNewCategory({...newCategory, description: e.target.value})}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Taux de ristourne (%)"
            fullWidth
            value={newCategory.rebateRate}
            onChange={(e) => setNewCategory({...newCategory, rebateRate: e.target.value})}
            placeholder="Ex: 5%"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Annuler</Button>
          <Button onClick={handleSaveCategory} variant="contained">
            {editingCategory ? 'Modifier' : 'Ajouter'}
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default TableMerchantCategories;