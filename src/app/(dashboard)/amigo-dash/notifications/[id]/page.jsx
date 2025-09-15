'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// MUI Imports
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';

// Vars
const notificationData = [
  {
    notificationId: '1',
    recipientEmail: 'jacinthe_blick@hotmail.com',
    message: 'Votre cashback de 7.50 cfa a été crédité !',
    type: 'Email',
    status: 'Envoyée',
    sendDate: '2025-09-01',
  },
  {
    notificationId: '2',
    recipientEmail: 'jaylon_bartell3@gmail.com',
    message: 'Nouvelle offre exclusive disponible !',
    type: 'Push',
    status: 'En attente',
    sendDate: '2025-09-02',
  },
  {
    notificationId: '3',
    recipientEmail: 'tristin_johnson@gmail.com',
    message: 'Votre achat a été confirmé.',
    type: 'Email',
    status: 'Envoyée',
    sendDate: '2025-09-03',
  },
  {
    notificationId: '4',
    recipientEmail: 'toney21@yahoo.com',
    message: 'Problème lors de l’envoi du cashback, veuillez vérifier.',
    type: 'SMS',
    status: 'Échec',
    sendDate: '2025-09-04',
  },
  {
    notificationId: '5',
    recipientEmail: 'hunter_kuhic68@hotmail.com',
    message: 'Votre cashback de 30.00 cfa est en attente.',
    type: 'Email',
    status: 'En attente',
    sendDate: '2025-09-05',
  },
  {
    notificationId: '6',
    recipientEmail: 'jacinthe_blick@hotmail.com',
    message: 'Nouveau marchand ajouté à la plateforme !',
    type: 'Push',
    status: 'Envoyée',
    sendDate: '2025-09-06',
  },
  {
    notificationId: '7',
    recipientEmail: 'jaylon_bartell3@gmail.com',
    message: 'Votre achat a été annulé.',
    type: 'Email',
    status: 'Envoyée',
    sendDate: '2025-09-07',
  },
  {
    notificationId: '8',
    recipientEmail: 'tristin_johnson@gmail.com',
    message: 'Rappel : complétez votre profil pour plus d’offres.',
    type: 'SMS',
    status: 'En attente',
    sendDate: '2025-09-08',
  },
];

const NotificationDetails = () => {
  const params = useParams();
  const notificationId = params.notificationId;
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Simuler la récupération des données (à remplacer par une API)
    const foundNotification = notificationData.find(n => n.notificationId === notificationId);
    setNotification(foundNotification || {});
  }, [notificationId]);

  if (!notification) {
    return (
      <Typography variant="h6" align="center">
        Notification non trouvée
      </Typography>
    );
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Détails de la Notification - ID {notification.notificationId}
        </Typography>
      </Grid>

      {/* Informations de la notification */}
      <Grid container spacing={2} sx={{ padding: 5 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5">Destinataire</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                {notification.recipientEmail}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5">Type</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                {notification.type}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5">Statut</Typography>
              <Chip
                className="capitalize"
                variant="tonal"
                color={
                  notification.status === 'Envoyée' ? 'success' :
                  notification.status === 'En attente' ? 'warning' : 'error'
                }
                label={notification.status}
                size="medium"
                sx={{ marginTop: 1 }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5">Message</Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                {notification.message}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5">Date d'Envoi</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                {notification.sendDate}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5">ID Notification</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                {notification.notificationId}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NotificationDetails;