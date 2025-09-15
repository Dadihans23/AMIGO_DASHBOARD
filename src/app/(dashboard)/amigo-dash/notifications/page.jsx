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
import Chip from '@mui/material/Chip';
import Pagination from '@mui/material/Pagination';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

// Third-party Imports
import classnames from 'classnames';

// Styles Imports
import tableStyles from '@core/styles/table.module.css';

// Vars
const notificationsData = [
  {
    notificationId: '1',
    title: 'Nouvel Achat',
    message: 'Un nouvel achat a été effectué par Jordan Stevenson.',
    date: '2025-09-01',
    status: 'Envoyée',
    recipient: 'jacinthe_blick@hotmail.com',
  },
  {
    notificationId: '2',
    title: 'Cashback Reversé',
    message: 'Le cashback de 9.50 cfa a été reversé à Richard Payne.',
    date: '2025-09-02',
    status: 'Non lue',
    recipient: 'jaylon_bartell3@gmail.com',
  },
  {
    notificationId: '3',
    title: 'Achat Annulé',
    message: 'L’achat de Jennifer Summers a été annulé.',
    date: '2025-09-03',
    status: 'Envoyée',
    recipient: 'tristin_johnson@gmail.com',
  },
  {
    notificationId: '4',
    title: 'Nouveau Marchand',
    message: 'Un nouveau marchand a été ajouté à la plateforme.',
    date: '2025-09-04',
    status: 'Non lue',
    recipient: 'admin@amigo.com',
  },
  {
    notificationId: '5',
    title: 'Mise à jour Profil',
    message: 'Nicholas Tanner a mis à jour son profil.',
    date: '2025-09-05',
    status: 'Envoyée',
    recipient: 'hunter_kuhic68@hotmail.com',
  },
  {
    notificationId: '6',
    title: 'Achat Confirmé',
    message: 'Un achat de Jordan Stevenson a été confirmé.',
    date: '2025-09-06',
    status: 'Non lue',
    recipient: 'jacinthe_blick@hotmail.com',
  },
  {
    notificationId: '7',
    title: 'Nouveau Cashback',
    message: 'Un cashback de 15.00 cfa a été ajouté pour Richard Payne.',
    date: '2025-09-07',
    status: 'Envoyée',
    recipient: 'jaylon_bartell3@gmail.com',
  },
  {
    notificationId: '8',
    title: 'Erreur Paiement',
    message: 'Une erreur de paiement a été détectée pour Jennifer Summers.',
    date: '2025-09-08',
    status: 'Non lue',
    recipient: 'tristin_johnson@gmail.com',
  },
];

// Liste des utilisateurs pour le menu déroulant
const userData = [
  { email: 'jacinthe_blick@hotmail.com', name: 'Jordan Stevenson' },
  { email: 'jaylon_bartell3@gmail.com', name: 'Richard Payne' },
  { email: 'tristin_johnson@gmail.com', name: 'Jennifer Summers' },
  { email: 'toney21@yahoo.com', name: 'Justin Richardson' },
  { email: 'hunter_kuhic68@hotmail.com', name: 'Nicholas Tanner' },
];

const TableNotifications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const notificationsPerPage = 4;

  const filteredNotifications = notificationsData.filter(notification =>
    notification.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastNotification = currentPage * notificationsPerPage;
  const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;
  const currentNotifications = filteredNotifications.slice(indexOfFirstNotification, indexOfLastNotification);

  const totalPages = Math.ceil(filteredNotifications.length / notificationsPerPage);

  const handleViewDetails = (notification) => {
    setSelectedNotification(notification);
    setOpenDetailsDialog(true);
  };

  const handleCloseDetailsDialog = () => {
    setOpenDetailsDialog(false);
    setSelectedNotification(null);
  };

  return (
    <Card>
      <div className='p-4'>
        <TextField
          label="Rechercher par titre"
          variant="outlined"
          fullWidth
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Titre</th>
              <th>Message</th>
              <th>Date</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentNotifications.map((row) => (
              <tr key={row.notificationId}>
                <td className='!plb-1'>
                  <Typography>{row.notificationId}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.title}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>
                    {row.message.length > 50 ? `${row.message.substring(0, 50)}...` : row.message}
                  </Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.date}</Typography>
                </td>
                <td className='!pb-1'>
                  <Chip
                    className='capitalize'
                    variant='tonal'
                    color={row.status === 'Envoyée' ? 'success' : 'warning'}
                    label={row.status}
                    size='small'
                  />
                </td>
                <td className='!pb-1'>
                  <Button variant='outlined' onClick={() => handleViewDetails(row)}>
                    Voir Détails
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

      {/* Dialogue pour afficher les détails de la notification */}
      {selectedNotification && (
        <Dialog open={openDetailsDialog} onClose={handleCloseDetailsDialog}>
          <DialogTitle>Détails de la Notification</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="ID"
              type="text"
              fullWidth
              variant="outlined"
              value={selectedNotification.notificationId}
              InputProps={{ readOnly: true }}
            />
            <TextField
              margin="dense"
              label="Titre"
              type="text"
              fullWidth
              variant="outlined"
              value={selectedNotification.title}
              InputProps={{ readOnly: true }}
            />
            <TextField
              margin="dense"
              label="Message"
              type="text"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              value={selectedNotification.message}
              InputProps={{ readOnly: true }}
            />
            <TextField
              margin="dense"
              label="Date"
              type="text"
              fullWidth
              variant="outlined"
              value={selectedNotification.date}
              InputProps={{ readOnly: true }}
            />
            <TextField
              margin="dense"
              label="Destinataire"
              type="text"
              fullWidth
              variant="outlined"
              value={selectedNotification.recipient}
              InputProps={{ readOnly: true }}
            />
            <TextField
              margin="dense"
              label="Statut"
              type="text"
              fullWidth
              variant="outlined"
              value={selectedNotification.status}
              InputProps={{ readOnly: true }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDetailsDialog} color="primary">
              Fermer
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Card>
  );
};

const NotificationsManagement = () => {
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [newNotification, setNewNotification] = useState({
    title: '',
    message: '',
    recipient: '',
    status: 'Non lue',
  });

  const totalNotifications = notificationsData.length;
  const totalSentNotifications = notificationsData.filter(n => n.status === 'Envoyée').length;
  const totalUnreadNotifications = notificationsData.filter(n => n.status === 'Non lue').length;

  const handleOpenAddDialog = () => {
    setNewNotification({ title: '', message: '', recipient: '', status: 'Non lue' });
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
  };

  const handleAddNotification = () => {
    // Logique pour ajouter la notification (à remplacer par un appel API)
    console.log('Nouvelle notification:', newNotification);
    handleCloseAddDialog();
  };

  return (
    <Grid container spacing={6}>
<Grid container spacing={2} sx={{ padding: 5 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>Nombre Total de Notifications</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>
                {totalNotifications}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>Notifications Envoyées</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>
                {totalSentNotifications}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>Notifications Non Lues</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold'  ,  color: '#fff' }}>
                {totalUnreadNotifications}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>        
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Gestion des Notifications
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpenAddDialog} sx={{ marginRight: 2 }}>
          Ajouter une Notification
        </Button>
      </Grid>
      

      <Grid item xs={12}>
        <TableNotifications />
      </Grid>

      {/* Dialogue pour ajouter une notification */}
      <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
        <DialogTitle>Ajouter une Notification</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Titre"
            type="text"
            fullWidth
            variant="outlined"
            value={newNotification.title}
            onChange={(e) => setNewNotification({ ...newNotification, title: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Message"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={newNotification.message}
            onChange={(e) => setNewNotification({ ...newNotification, message: e.target.value })}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Destinataire</InputLabel>
            <Select
              value={newNotification.recipient}
              onChange={(e) => setNewNotification({ ...newNotification, recipient: e.target.value })}
            >
              <MenuItem value="all">Tous les utilisateurs</MenuItem>
              {userData.map((user) => (
                <MenuItem key={user.email} value={user.email}>
                  {user.name} ({user.email})
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel>Statut</InputLabel>
            <Select
              value={newNotification.status}
              onChange={(e) => setNewNotification({ ...newNotification, status: e.target.value })}
            >
              <MenuItem value="Envoyée">Envoyée</MenuItem>
              <MenuItem value="Non lue">Non lue</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Date"
            type="date"
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={newNotification.date || ''}
            onChange={(e) => setNewNotification({ ...newNotification, date: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddDialog} color="primary">
            Annuler
          </Button>
          <Button onClick={handleAddNotification} color="primary">
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default NotificationsManagement;