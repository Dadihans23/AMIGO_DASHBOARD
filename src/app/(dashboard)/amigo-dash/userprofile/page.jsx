'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// MUI Imports
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
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
import Pagination from '@mui/material/Pagination';

// Third-party Imports
import classnames from 'classnames';

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar';

// Styles Imports
import tableStyles from '@core/styles/table.module.css';

// Vars
const rowsData = [
  {
    avatarSrc: '/images/avatars/1.png',
    userId: '1',
    name: 'Jordan Stevenson',
    email: 'jacinthe_blick@hotmail.com',
    status: 'pending'
  },
  {
    avatarSrc: '/images/avatars/2.png',
    userId: '2',
    name: 'Richard Payne',
    email: 'jaylon_bartell3@gmail.com',
    status: 'active'
  },
  {
    avatarSrcbirSrc: '/images/avatars/3.png',
    userId: '3',
    name: 'Jennifer Summers',
    email: 'tristin_johnson@gmail.com',
    status: 'active'
  },
  {
    avatarSrc: '/images/avatars/4.png',
    userId: '4',
    name: 'Mr. Justin Richardson',
    email: 'toney21@yahoo.com',
    status: 'pending'
  },
  {
    avatarSrc: '/images/avatars/5.png',
    userId: '5',
    name: 'Nicholas Tanner',
    email: 'hunter_kuhic68@hotmail.com',
    status: 'active'
  },
  {
    avatarSrc: '/images/avatars/4.png',
    userId: '6',
    name: 'Mr. Justin Richardson',
    email: 'toney21@yahoo.com',
    status: 'pending'
  },
  {
    avatarSrc: '/images/avatars/5.png',
    userId: '7',
    name: 'Nicholas Tanner',
    email: 'hunter_kuhic68@hotmail.com',
    status: 'active'
  },
  {
    avatarSrc: '/images/avatars/4.png',
    userId: '8',
    name: 'Mr. Justin Richardson',
    email: 'toney21@yahoo.com',
    status: 'pending'
  },
  {
    avatarSrc: '/images/avatars/5.png',
    userId: '9',
    name: 'Nicholas Tanner',
    email: 'hunter_kuhic68@hotmail.com',
    status: 'active'
  },
  {
    avatarSrc: '/images/avatars/4.png',
    userId: '10',
    name: 'Mr. Justin Richardson',
    email: 'toney21@yahoo.com',
    status: 'pending'
  },
  {
    avatarSrc: '/images/avatars/5.png',
    userId: '11',
    name: 'Nicholas Tanner',
    email: 'hunter_kuhic68@hotmail.com',
    status: 'active'
  },
  {
    avatarSrc: '/images/avatars/4.png',
    userId: '12',
    name: 'Mr. Justin Richardson',
    email: 'toney21@yahoo.com',
    status: 'pending'
  },
  {
    avatarSrc: '/images/avatars/5.png',
    userId: '13',
    name: 'Nicholas Tanner',
    email: 'hunter_kuhic68@hotmail.com',
    status: 'active'
  },
  {
    avatarSrc: '/images/avatars/4.png',
    userId: '14',
    name: 'Mr. Justin Richardson',
    email: 'toney21@yahoo.com',
    status: 'pending'
  },
  {
    avatarSrc: '/images/avatars/5.png',
    userId: '15',
    name: 'Nicholas Tanner',
    email: 'hunter_kuhic68@hotmail.com',
    status: 'active'
  },
];

const UserManagement = () => {
  const totalUsers = rowsData.length; // Total des utilisateurs
  const totalUsersActive = rowsData.filter(user => user.status === 'active').length; // Utilisateurs actifs
  const totalUsersInactive = rowsData.filter(user => user.status === 'pending').length; // Utilisateurs inactifs
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [newUser, setNewUser] = useState({});
  const usersPerPage = 4;

  const filteredUsers = rowsData.filter(user =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const router = useRouter();

  const handleViewProfile = (userId) => {
    router.push(`/amigo-dash/userprofile/${userId}`);
  };

  const handleOpenAddDialog = () => {
    setNewUser({});
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
  };

  const handleAddUser = () => {
    // Ajoute la logique pour sauvegarder l'utilisateur ici
    handleCloseAddDialog();
  };

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Gestion des Utilisateurs
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpenAddDialog} sx={{ marginRight: 2 }}>
          Ajouter un Utilisateur
        </Button>
      </Grid>
      <Grid container spacing={2} sx={{ padding: 5 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>Total des Utilisateurs</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>
                {totalUsers}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>Utilisateurs Actifs</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>
                {totalUsersActive}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>Utilisateurs Inactifs</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>
                {totalUsersInactive}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <div className='p-4'>
            <TextField
              label="Rechercher par email"
              variant="outlined"
              fullWidth
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className='overflow-x-auto'>
            <table className={tableStyles.table}>
              <thead>
                <tr>
                  <th>Utilisateur</th>
                  <th>Email</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((row) => (
                  <tr key={row.userId}>
                    <td className='!plb-1'>
                      <div className='flex items-center gap-3'>
                        <CustomAvatar src={row.avatarSrc} size={34} />
                        <div className='flex flex-col'>
                          <Typography color='text.primary' className='font-medium'>
                            {row.name}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className='!plb-1'>
                      <Typography>{row.email}</Typography>
                    </td>
                    <td className='!pb-1'>
                      <Chip
                        className='capitalize'
                        variant='tonal'
                        color={row.status === 'pending' ? 'warning' : 'success'}
                        label={row.status}
                        size='small'
                      />
                    </td>
                    <td className='!pb-1'>
                      <Button variant='outlined' onClick={() => handleViewProfile(row.userId)}>
                        Voir Plus
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='flex justify-center p-4'>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={(event, value) => setCurrentPage(value)}
              color="primary"
            />
          </div>
        </Card>
      </Grid>
      {/* Dialog pour ajouter un utilisateur */}
      <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
        <DialogTitle>Ajouter un Utilisateur</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nom"
            type="text"
            fullWidth
            variant="outlined"
            value={newUser.name || ''}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={newUser.email || ''}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Mot de passe"
            type="password"
            fullWidth
            variant="outlined"
            value={newUser.password || ''}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Statut</InputLabel>
            <Select
              value={newUser.status || ''}
              onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
            >
              <MenuItem value="active">Actif</MenuItem>
              <MenuItem value="pending">En attente</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Avatar (URL)"
            type="text"
            fullWidth
            variant="outlined"
            value={newUser.avatarSrc || ''}
            onChange={(e) => setNewUser({ ...newUser, avatarSrc: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddDialog} color="primary">Annuler</Button>
          <Button onClick={handleAddUser} color="primary">Ajouter</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default UserManagement;