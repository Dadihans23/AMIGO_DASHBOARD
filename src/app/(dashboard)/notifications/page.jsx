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
    recipient: 'marchanda@example.com',
  },
  {
    notificationId: '2',
    title: 'Cashback Reversé',
    message: 'Le cashback de 9.50 cfa a été reversé à Richard Payne.',
    date: '2025-09-02',
    status: 'Non lue',
    recipient: 'marchandb@example.com',
  },
  {
    notificationId: '3',
    title: 'Achat Annulé',
    message: 'L’achat de Jennifer Summers a été annulé.',
    date: '2025-09-03',
    status: 'Envoyée',
    recipient: 'marchanda@example.com',
  },
  {
    notificationId: '4',
    title: 'Nouveau Marchand',
    message: 'Votre compte marchand a été approuvé.',
    date: '2025-09-04',
    status: 'Non lue',
    recipient: 'marchanda@example.com',
  },
  {
    notificationId: '5',
    title: 'Mise à jour Profil',
    message: 'Votre profil a été mis à jour avec succès.',
    date: '2025-09-05',
    status: 'Envoyée',
    recipient: 'marchandb@example.com',
  },
  {
    notificationId: '6',
    title: 'Achat Confirmé',
    message: 'Un achat de Jordan Stevenson a été confirmé.',
    date: '2025-09-06',
    status: 'Non lue',
    recipient: 'marchanda@example.com',
  },
  {
    notificationId: '7',
    title: 'Nouveau Cashback',
    message: 'Un cashback de 15.00 cfa a été ajouté pour Richard Payne.',
    date: '2025-09-07',
    status: 'Envoyée',
    recipient: 'marchandb@example.com',
  },
  {
    notificationId: '8',
    title: 'Erreur Paiement',
    message: 'Une erreur de paiement a été détectée pour Jennifer Summers.',
    date: '2025-09-08',
    status: 'Non lue',
    recipient: 'marchanda@example.com',
  },
];

const TableNotifications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const notificationsPerPage = 4;

  // Supposons que l'email du marchand connecté est 'marchanda@example.com'
  const merchantEmail = 'marchanda@example.com';

  const filteredNotifications = notificationsData.filter(
    notification =>
      notification.recipient === merchantEmail &&
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

  const handleToggleReadStatus = (notification) => {
    // Logique pour marquer comme lue/non lue (à remplacer par un appel API)
    const newStatus = notification.status === 'Envoyée' ? 'Non lue' : 'Envoyée';
    console.log(`Notification ${notification.notificationId} marquée comme ${newStatus}`);
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
                  <Button variant='outlined' onClick={() => handleViewDetails(row)} sx={{ marginRight: 1 }}>
                    Voir Détails
                  </Button>
                  <Button
                    variant='outlined'
                    color={row.status === 'Envoyée' ? 'warning' : 'success'}
                    onClick={() => handleToggleReadStatus(row)}
                  >
                    {row.status === 'Envoyée' ? 'Marquer Non Lue' : 'Marquer Lue'}
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

const Notifications = () => {
  // Supposons que l'email du marchand connecté est 'marchanda@example.com'
  const merchantEmail = 'marchanda@example.com';

  const merchantNotifications = notificationsData.filter(n => n.recipient === merchantEmail);
  const totalNotifications = merchantNotifications.length;
  const totalSentNotifications = merchantNotifications.filter(n => n.status === 'Envoyée').length;
  const totalUnreadNotifications = merchantNotifications.filter(n => n.status === 'Non lue').length;

  return (
    <Grid container spacing={6}>
      <Grid container spacing={2} sx={{ padding: 5 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                Nombre Total de Notifications
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
                {totalNotifications}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                Notifications Envoyées
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
                {totalSentNotifications}
              </Typography>
            </CardContent>
          </Card>
        </Grid> */}

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                Notifications Non Lues
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
                {totalUnreadNotifications}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Notifications
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <TableNotifications />
      </Grid>
    </Grid>
  );
};

export default Notifications;