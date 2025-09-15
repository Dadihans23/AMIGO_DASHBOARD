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
    purchaseId: '1',
    customerName: 'Jordan Stevenson',
    customerEmail: 'jacinthe_blick@hotmail.com',
    amount: 150.50,
    cashback: 7.50,
    purchaseDate: '2025-09-01',
    status: 'Complété'
  },
  {
    purchaseId: '2',
    customerName: 'Richard Payne',
    customerEmail: 'jaylon_bartell3@gmail.com',
    amount: 89.99,
    cashback: 4.50,
    purchaseDate: '2025-09-02',
    status: 'En attente'
  },
  {
    purchaseId: '3',
    customerName: 'Jennifer Summers',
    customerEmail: 'tristin_johnson@gmail.com',
    amount: 200.00,
    cashback: 10.00,
    purchaseDate: '2025-09-03',
    status: 'Complété'
  },
  {
    purchaseId: '4',
    customerName: 'Justin Richardson',
    customerEmail: 'toney21@yahoo.com',
    amount: 45.75,
    cashback: 2.25,
    purchaseDate: '2025-09-04',
    status: 'Annulé'
  },
  {
    purchaseId: '5',
    customerName: 'Nicholas Tanner',
    customerEmail: 'hunter_kuhic68@hotmail.com',
    amount: 300.00,
    cashback: 15.00,
    purchaseDate: '2025-09-05',
    status: 'Complété'
  },
  {
    purchaseId: '6',
    customerName: 'Jordan Stevenson',
    customerEmail: 'jacinthe_blick@hotmail.com',
    amount: 120.25,
    cashback: 6.00,
    purchaseDate: '2025-09-06',
    status: 'En attente'
  },
  {
    purchaseId: '7',
    customerName: 'Richard Payne',
    customerEmail: 'jaylon_bartell3@gmail.com',
    amount: 99.99,
    cashback: 5.00,
    purchaseDate: '2025-09-07',
    status: 'Complété'
  },
  {
    purchaseId: '8',
    customerName: 'Jennifer Summers',
    customerEmail: 'tristin_johnson@gmail.com',
    amount: 175.50,
    cashback: 8.75,
    purchaseDate: '2025-09-08',
    status: 'Annulé'
  },
];

const TablePurchases = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const purchasesPerPage = 4;

  const filteredPurchases = rowsData.filter(purchase =>
    purchase.customerEmail.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPurchase = currentPage * purchasesPerPage;
  const indexOfFirstPurchase = indexOfLastPurchase - purchasesPerPage;
  const currentPurchases = filteredPurchases.slice(indexOfFirstPurchase, indexOfLastPurchase);

  const totalPages = Math.ceil(filteredPurchases.length / purchasesPerPage);

  const router = useRouter();

  const handleViewDetails = (purchaseId) => {
    router.push(`/amigo-dash/purchase/${purchaseId}`);
  };

  return (
    <Card>
      <div className='p-4'>
        <TextField
          label="Rechercher par email du client"
          variant="outlined"
          fullWidth
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>ID Achat</th>
              <th>Client</th>
              <th>Email</th>
              <th>Montant</th>
              <th>Cashback</th>
              <th>Date</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentPurchases.map((row) => (
              <tr key={row.purchaseId}>
                <td className='!plb-1'>
                  <Typography>{row.purchaseId}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography color='text.primary' className='font-medium'>
                    {row.customerName}
                  </Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.customerEmail}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.amount.toFixed(2)} cfa</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.cashback.toFixed(2)} cfa</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.purchaseDate}</Typography>
                </td>
                <td className='!pb-1'>
                  <Chip
                    className='capitalize'
                    variant='tonal'
                    color={
                      row.status === 'Complété' ? 'success' :
                      row.status === 'En attente' ? 'warning' : 'error'
                    }
                    label={row.status}
                    size='small'
                  />
                </td>
                <td className='!pb-1'>
                  <Button variant='outlined' onClick={() => handleViewDetails(row.purchaseId)}>
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

export default TablePurchases;