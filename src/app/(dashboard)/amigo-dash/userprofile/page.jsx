'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

// MUI Imports
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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
    avatarSrc: '/images/avatars/3.png',
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
  }, {
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
  }, {
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
];

const UserTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
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

  return (
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
              <th>User</th>
              <th>Email</th>
              <th>Status</th>
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
  );
};

export default UserTable;
