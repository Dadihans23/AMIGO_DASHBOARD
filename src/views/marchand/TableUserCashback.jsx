'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// MUI Imports
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import CustomAvatar from '@core/components/mui/Avatar';

// Third-party Imports
import classnames from 'classnames';

// Styles Imports
import tableStyles from '@core/styles/table.module.css';

// Vars
const rowsData = [
  {
    userId: '1',
    avatarSrc: '/images/avatars/1.png',
    name: 'Jordan Stevenson',
    email: 'jacinthe_blick@hotmail.com',
    totalPurchases: 350.50,
    cashbackPaid: 17.50,
    merchantEmail: 'marchanda@example.com',
  },
  {
    userId: '3',
    avatarSrc: '/images/avatars/3.png',
    name: 'Jennifer Summers',
    email: 'tristin_johnson@gmail.com',
    totalPurchases: 500.00,
    cashbackPaid: 25.00,
    merchantEmail: 'marchanda@example.com',
  },
  {
    userId: '6',
    avatarSrc: '/images/avatars/1.png',
    name: 'Jordan Stevenson',
    email: 'jacinthe_blick@hotmail.com',
    totalPurchases: 220.25,
    cashbackPaid: 11.00,
    merchantEmail: 'marchanda@example.com',
  },
  {
    userId: '2',
    avatarSrc: '/images/avatars/2.png',
    name: 'Richard Payne',
    email: 'jaylon_bartell3@gmail.com',
    totalPurchases: 189.99,
    cashbackPaid: 9.50,
    merchantEmail: 'marchandb@example.com',
  },
];

const TableMerchantCashback = ({ merchantEmail }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4;

  const filteredUsers = rowsData.filter(
    user =>
      user.merchantEmail === merchantEmail &&
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const router = useRouter();

  const handleViewDetails = (userId) => {
    router.push(`/cashbackUser/${userId}`);
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
              <th>Utilisateur</th>
              <th>Email</th>
              <th>Montant des Achats</th>
              <th>Cashback Reversé</th>
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
                <td className='!plb-1'>
                  <Typography>{row.totalPurchases.toFixed(2)} cfa</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.cashbackPaid.toFixed(2)} cfa</Typography>
                </td>
                <td className='!pb-1'>
                  <Button variant='outlined' onClick={() => handleViewDetails(row.userId)}>
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

export default TableMerchantCashback;