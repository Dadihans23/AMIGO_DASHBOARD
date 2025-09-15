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
    purchaseAmount: 350.50,
    merchantCashback: 7.01, // 2% du montant
    date: '2025-08-15',
    merchantEmail: 'marchanda@example.com',
  },
  {
    userId: '3',
    avatarSrc: '/images/avatars/3.png',
    name: 'Jennifer Summers',
    email: 'tristin_johnson@gmail.com',
    purchaseAmount: 500.00,
    merchantCashback: 10.00, // 2%
    date: '2025-07-20',
    merchantEmail: 'marchanda@example.com',
  },
  {
    userId: '6',
    avatarSrc: '/images/avatars/1.png',
    name: 'Jordan Stevenson',
    email: 'jacinthe_blick@hotmail.com',
    purchaseAmount: 220.25,
    merchantCashback: 4.41, // 2%
    date: '2025-09-05',
    merchantEmail: 'marchanda@example.com',
  },
  {
    userId: '2',
    avatarSrc: '/images/avatars/2.png',
    name: 'Richard Payne',
    email: 'jaylon_bartell3@gmail.com',
    purchaseAmount: 189.99,
    merchantCashback: 3.80, // 2%
    date: '2025-09-02',
    merchantEmail: 'marchandb@example.com',
  },
];

const TableMerchantReceivedCashback = ({ merchantEmail }) => {
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
    router.push(`/cashbackMarchand/${userId}`);
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
              <th>Date</th>
              <th>Montant de l'Achat</th>
              <th>Cashback Reçu</th>
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
                  <Typography>{row.date}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.purchaseAmount.toFixed(2)} cfa</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.merchantCashback.toFixed(2)} cfa</Typography>
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

export default TableMerchantReceivedCashback;