// MUI Imports
'use client'; // Indique que ce fichier est un composant client

import { useRouter } from 'next/navigation'; // Import du router


import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';

import Button from '@mui/material/Button'; // Import du bouton


// Third-party Imports
import classnames from 'classnames';

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar';

// Styles Imports
import tableStyles from '@core/styles/table.module.css';

// Vars
const rolesData = {
  Admin: { icon: 'ri-vip-crown-line', color: 'text-primary' },
  Marchand: { icon: 'ri-store-line', color: 'text-warning' },
  Caissiers: { icon: 'ri-wallet-2-line', color: 'text-info' },
  Clients: { icon: 'ri-user-3-line', color: 'text-success' },
};

const rowsData = [
  {
    userId: '1',
    avatarSrc: '/images/avatars/1.png',
    name: 'Jordan Stevenson',
    username: '@amiccoo',
    email: 'Jacinthe_Blick@hotmail.com',
    role: 'Admin',
    status: 'suspended',
  },
  {
    userId: '2',
    avatarSrc: '/images/avatars/2.png',
    name: 'Richard Payne',
    username: '@brossiter15',
    email: 'Jaylon_Bartell3@gmail.com',
    role: 'Marchand',
    status: 'active',
  },
  {
    userId: '3',
    avatarSrc: '/images/avatars/3.png',
    name: 'Jennifer Summers',
    username: '@jsbemblinf',
    email: 'Tristin_Johnson@gmail.com',
    role: 'Caissiers',
    status: 'active',
  },
  {
    userId: '4',
    avatarSrc: '/images/avatars/4.png',
    name: 'Mr. Justin Richardson',
    username: '@justin45',
    email: 'Toney21@yahoo.com',
    role: 'Clients',
    status: 'suspended',
  },

  // ... Ajoutez d'autres données ici si nécessaire ...

];

const Table = () => {
  const router = useRouter(); // Utilisation du router

  const handleViewProfile = (userId) => {
    // Redirigez vers la page de profil avec l'ID de l'utilisateur
    router.push(`/amigo-dash/userprofile/${userId}`); // Redirection vers la page de profil
  };

  return (
    <Card>
      <div className='overflow-x-auto'>
        <table className={tableStyles.table} aria-label='User Table'>
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th> {/* Nouvelle colonne pour l'action */}
            </tr>
          </thead>
          <tbody>
            {rowsData.map((row) => (
              <tr key={row.userId}>
                <td className='!plb-1'>
                  <div className='flex items-center gap-3'>
                    <CustomAvatar src={row.avatarSrc} size={34} />
                    <div className='flex flex-col'>
                      <Typography color='text.primary' className='font-medium'>
                        {row.name}
                      </Typography>
                      <Typography variant='body2'>{row.username}</Typography>
                    </div>
                  </div>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.email}</Typography>
                </td>
                <td className='!plb-1'>
                  <div className='flex gap-2'>
                    <i className={classnames(rolesData[row.role].icon, rolesData[row.role].color, 'text-[22px]')} />
                    <Typography color='text.primary'>{row.role}</Typography>
                  </div>
                </td>
                <td className='!pb-1'>
                  <Chip
                    className='capitalize'
                    variant='tonal'
                    color={row.status === 'suspended' ? 'warning' : row.status === 'inactive' ? 'secondary' : 'success'}
                    label={row.status}
                    size='small'
                  />
                </td>
                <td className='!pb-1'>
                  <Button variant='outlined' onClick={() => handleViewProfile(row.userId)}>
                    Voir plus
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default Table;
