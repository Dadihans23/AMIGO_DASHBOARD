'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// MUI Imports
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

// Third-party Imports
import classnames from 'classnames';

// Styles Imports
import tableStyles from '@core/styles/table.module.css';

// Vars
const rowsData = [
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

const TableNotifications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const notificationsPerPage = 4;

  const filteredNotifications = rowsData.filter(notification =>
    notification.recipientEmail.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastNotification = currentPage * notificationsPerPage;
  const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;
  const currentNotifications = filteredNotifications.slice(indexOfFirstNotification, indexOfLastNotification);

  const totalPages = Math.ceil(filteredNotifications.length / notificationsPerPage);

  const router = useRouter();

  const handleViewDetails = (notificationId) => {
    router.push(`/amigo-dash/notification/${notificationId}`);
  };

  return (
    <Card>
      <div className='p-4'>
        <TextField
          label="Rechercher par email du destinataire"
          variant="outlined"
          fullWidth
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>ID Notification</th>
              <th>Destinataire</th>
              <th>Message</th>
              <th>Type</th>
              <th>Statut</th>
              <th>Date d'Envoi</th>
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
                  <Typography>{row.recipientEmail}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.message}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.type}</Typography>
                </td>
                
                <td className='!plb-1'>
                  <Typography>{row.sendDate}</Typography>
                </td>
                <td className='!pb-1'>
                  <Button variant='outlined' onClick={() => handleViewDetails(row.notificationId)}>
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
    </Card>
  );
};

export default TableNotifications;