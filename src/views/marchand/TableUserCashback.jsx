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



const rowsData = [
  {
    userId: '1',
    avatarSrc: '/images/avatars/1.png',
    name: 'Jordan Stevenson',
    email: 'jacinthe_blick@hotmail.com',
    cashierName: 'Caissier 1',
    totalPurchases: 350.50,
    cashbackPaid: 17.50,
    merchantEmail: 'marchanda@example.com',
  },
  {
    userId: '2',
    avatarSrc: '/images/avatars/2.png',
    name: 'Richard Payne',
    email: 'jaylon_bartell3@gmail.com',
    cashierName: 'Caissier 2',
    totalPurchases: 189.99,
    cashbackPaid: 9.50,
    merchantEmail: 'marchandb@example.com',
  },
  {
    userId: '3',
    avatarSrc: '/images/avatars/3.png',
    name: 'Jennifer Summers',
    email: 'tristin_johnson@gmail.com',
    cashierName: 'Caissier 3',
    totalPurchases: 500.00,
    cashbackPaid: 25.00,
    merchantEmail: 'marchanda@example.com',
  },
  {
    userId: '4',
    avatarSrc: '/images/avatars/4.png',
    name: 'Justin Richardson',
    email: 'toney21@yahoo.com',
    cashierName: 'Caissier 4',
    totalPurchases: 145.75,
    cashbackPaid: 7.29,
    merchantEmail: 'marchandb@example.com',
  },
  {
    userId: '5',
    avatarSrc: '/images/avatars/5.png',
    name: 'Nicholas Tanner',
    email: 'hunter_kuhic68@hotmail.com',
    cashierName: 'Caissier 1',
    totalPurchases: 300.00,
    cashbackPaid: 15.00,
    merchantEmail: 'marchanda@example.com',
  },
  {
    userId: '6',
    avatarSrc: '/images/avatars/1.png',
    name: 'Jordan Stevenson',
    email: 'jacinthe_blick@hotmail.com',
    cashierName: 'Caissier 2',
    totalPurchases: 220.25,
    cashbackPaid: 11.01,
    merchantEmail: 'marchanda@example.com',
  },
  {
    userId: '7',
    avatarSrc: '/images/avatars/2.png',
    name: 'Richard Payne',
    email: 'jaylon_bartell3@gmail.com',
    cashierName: 'Caissier 3',
    totalPurchases: 199.99,
    cashbackPaid: 10.00,
    merchantEmail: 'marchandb@example.com',
  },
  {
    userId: '8',
    avatarSrc: '/images/avatars/3.png',
    name: 'Jennifer Summers',
    email: 'tristin_johnson@gmail.com',
    cashierName: 'Caissier 4',
    totalPurchases: 275.50,
    cashbackPaid: 13.78,
    merchantEmail: 'marchanda@example.com',
  },
  {
    userId: '9',
    avatarSrc: '/images/avatars/4.png',
    name: 'Justin Richardson',
    email: 'toney21@yahoo.com',
    cashierName: 'Caissier 1',
    totalPurchases: 250.00,
    cashbackPaid: 12.50,
    merchantEmail: 'marchandb@example.com',
  },
  {
    userId: '10',
    avatarSrc: '/images/avatars/5.png',
    name: 'Nicholas Tanner',
    email: 'hunter_kuhic68@hotmail.com',
    cashierName: 'Caissier 2',
    totalPurchases: 180.75,
    cashbackPaid: 9.04,
    merchantEmail: 'marchanda@example.com',
  },
  {
    userId: '11',
    avatarSrc: '/images/avatars/1.png',
    name: 'Jordan Stevenson',
    email: 'jacinthe_blick@hotmail.com',
    cashierName: 'Caissier 3',
    totalPurchases: 320.00,
    cashbackPaid: 16.00,
    merchantEmail: 'marchanda@example.com',
  },
  {
    userId: '12',
    avatarSrc: '/images/avatars/2.png',
    name: 'Richard Payne',
    email: 'jaylon_bartell3@gmail.com',
    cashierName: 'Caissier 4',
    totalPurchases: 130.50,
    cashbackPaid: 6.53,
    merchantEmail: 'marchandb@example.com',
  },
  {
    userId: '13',
    avatarSrc: '/images/avatars/3.png',
    name: 'Jennifer Summers',
    email: 'tristin_johnson@gmail.com',
    cashierName: 'Caissier 1',
    totalPurchases: 375.25,
    cashbackPaid: 18.76,
    merchantEmail: 'marchanda@example.com',
  },
  {
    userId: '14',
    avatarSrc: '/images/avatars/4.png',
    name: 'Justin Richardson',
    email: 'toney21@yahoo.com',
    cashierName: 'Caissier 2',
    totalPurchases: 195.00,
    cashbackPaid: 9.75,
    merchantEmail: 'marchandb@example.com',
  },
  {
    userId: '15',
    avatarSrc: '/images/avatars/5.png',
    name: 'Nicholas Tanner',
    email: 'hunter_kuhic68@hotmail.com',
    cashierName: 'Caissier 3',
    totalPurchases: 410.00,
    cashbackPaid: 20.50,
    merchantEmail: 'marchanda@example.com',
  },
  {
    userId: '16',
    avatarSrc: '/images/avatars/1.png',
    name: 'Jordan Stevenson',
    email: 'jacinthe_blick@hotmail.com',
    cashierName: 'Caissier 4',
    totalPurchases: 260.75,
    cashbackPaid: 13.04,
    merchantEmail: 'marchanda@example.com',
  },
  {
    userId: '17',
    avatarSrc: '/images/avatars/2.png',
    name: 'Richard Payne',
    email: 'jaylon_bartell3@gmail.com',
    cashierName: 'Caissier 1',
    totalPurchases: 210.25,
    cashbackPaid: 10.51,
    merchantEmail: 'marchandb@example.com',
  },
  {
    userId: '18',
    avatarSrc: '/images/avatars/3.png',
    name: 'Jennifer Summers',
    email: 'tristin_johnson@gmail.com',
    cashierName: 'Caissier 2',
    totalPurchases: 290.00,
    cashbackPaid: 14.50,
    merchantEmail: 'marchanda@example.com',
  },
  {
    userId: '19',
    avatarSrc: '/images/avatars/4.png',
    name: 'Justin Richardson',
    email: 'toney21@yahoo.com',
    cashierName: 'Caissier 3',
    totalPurchases: 330.50,
    cashbackPaid: 16.53,
    merchantEmail: 'marchandb@example.com',
  },
  {
    userId: '20',
    avatarSrc: '/images/avatars/5.png',
    name: 'Nicholas Tanner',
    email: 'hunter_kuhic68@hotmail.com',
    cashierName: 'Caissier 4',
    totalPurchases: 240.99,
    cashbackPaid: 12.05,
    merchantEmail: 'marchanda@example.com',
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
          sx={{ maxWidth: 300 }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>Utilisateur</th>
              <th>Email</th>
              <th>Caissier</th>
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
                  <Typography>{row.cashierName}</Typography>
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