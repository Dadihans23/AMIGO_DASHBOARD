'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, Chip, Button, TextField, Pagination, Typography } from '@mui/material';
import classnames from 'classnames';
import tableStyles from '@core/styles/table.module.css';

const rowsData = [
  {
    purchaseId: '1',
    customerName: 'Jordan Stevenson',
    customerEmail: 'jacinthe_blick@hotmail.com',
    merchantId: 'M001',
    amount: 150.50,
    cashback: 7.50,
    purchaseDate: '2025-09-01',
    status: 'Complété'
  },
  {
    purchaseId: '2',
    customerName: 'Richard Payne',
    customerEmail: 'jaylon_bartell3@gmail.com',
    merchantId: 'M002',
    amount: 89.99,
    cashback: 4.50,
    purchaseDate: '2025-09-02',
    status: 'En attente'
  },
  {
    purchaseId: '3',
    customerName: 'Jennifer Summers',
    customerEmail: 'tristin_johnson@gmail.com',
    merchantId: 'M003',
    amount: 200.00,
    cashback: 10.00,
    purchaseDate: '2025-09-03',
    status: 'Complété'
  },
  {
    purchaseId: '4',
    customerName: 'Justin Richardson',
    customerEmail: 'toney21@yahoo.com',
    merchantId: 'M004',
    amount: 45.75,
    cashback: 2.25,
    purchaseDate: '2025-09-04',
    status: 'Annulé'
  },
  {
    purchaseId: '5',
    customerName: 'Nicholas Tanner',
    customerEmail: 'hunter_kuhic68@hotmail.com',
    merchantId: 'M001',
    amount: 300.00,
    cashback: 15.00,
    purchaseDate: '2025-09-05',
    status: 'Complété'
  },
  {
    purchaseId: '6',
    customerName: 'Jordan Stevenson',
    customerEmail: 'jacinthe_blick@hotmail.com',
    merchantId: 'M002',
    amount: 120.25,
    cashback: 6.00,
    purchaseDate: '2025-09-06',
    status: 'En attente'
  },
  {
    purchaseId: '7',
    customerName: 'Richard Payne',
    customerEmail: 'jaylon_bartell3@gmail.com',
    merchantId: 'M003',
    amount: 99.99,
    cashback: 5.00,
    purchaseDate: '2025-09-07',
    status: 'Complété'
  },
  {
    purchaseId: '8',
    customerName: 'Jennifer Summers',
    customerEmail: 'tristin_johnson@gmail.com',
    merchantId: 'M004',
    amount: 175.50,
    cashback: 8.75,
    purchaseDate: '2025-09-08',
    status: 'Annulé'
  },
  {
    purchaseId: '9',
    customerName: 'Justin Richardson',
    customerEmail: 'toney21@yahoo.com',
    merchantId: 'M001',
    amount: 250.00,
    cashback: 12.50,
    purchaseDate: '2025-09-09',
    status: 'Complété'
  },
  {
    purchaseId: '10',
    customerName: 'Nicholas Tanner',
    customerEmail: 'hunter_kuhic68@hotmail.com',
    merchantId: 'M002',
    amount: 180.75,
    cashback: 9.04,
    purchaseDate: '2025-09-10',
    status: 'En attente'
  },
  {
    purchaseId: '11',
    customerName: 'Jordan Stevenson',
    customerEmail: 'jacinthe_blick@hotmail.com',
    merchantId: 'M003',
    amount: 220.00,
    cashback: 11.00,
    purchaseDate: '2025-09-11',
    status: 'Complété'
  },
  {
    purchaseId: '12',
    customerName: 'Richard Payne',
    customerEmail: 'jaylon_bartell3@gmail.com',
    merchantId: 'M004',
    amount: 130.50,
    cashback: 6.53,
    purchaseDate: '2025-09-12',
    status: 'Annulé'
  },
  {
    purchaseId: '13',
    customerName: 'Jennifer Summers',
    customerEmail: 'tristin_johnson@gmail.com',
    merchantId: 'M001',
    amount: 275.25,
    cashback: 13.76,
    purchaseDate: '2025-09-13',
    status: 'Complété'
  },
  {
    purchaseId: '14',
    customerName: 'Justin Richardson',
    customerEmail: 'toney21@yahoo.com',
    merchantId: 'M002',
    amount: 95.00,
    cashback: 4.75,
    purchaseDate: '2025-09-14',
    status: 'En attente'
  },
  {
    purchaseId: '15',
    customerName: 'Nicholas Tanner',
    customerEmail: 'hunter_kuhic68@hotmail.com',
    merchantId: 'M003',
    amount: 310.00,
    cashback: 15.50,
    purchaseDate: '2025-09-15',
    status: 'Complété'
  },
  {
    purchaseId: '16',
    customerName: 'Jordan Stevenson',
    customerEmail: 'jacinthe_blick@hotmail.com',
    merchantId: 'M004',
    amount: 160.75,
    cashback: 8.04,
    purchaseDate: '2025-09-16',
    status: 'Annulé'
  },
  {
    purchaseId: '17',
    customerName: 'Richard Payne',
    customerEmail: 'jaylon_bartell3@gmail.com',
    merchantId: 'M001',
    amount: 110.25,
    cashback: 5.51,
    purchaseDate: '2025-09-17',
    status: 'Complété'
  },
  {
    purchaseId: '18',
    customerName: 'Jennifer Summers',
    customerEmail: 'tristin_johnson@gmail.com',
    merchantId: 'M002',
    amount: 190.00,
    cashback: 9.50,
    purchaseDate: '2025-09-18',
    status: 'En attente'
  },
  {
    purchaseId: '19',
    customerName: 'Justin Richardson',
    customerEmail: 'toney21@yahoo.com',
    merchantId: 'M003',
    amount: 230.50,
    cashback: 11.53,
    purchaseDate: '2025-09-19',
    status: 'Complété'
  },
  {
    purchaseId: '20',
    customerName: 'Nicholas Tanner',
    customerEmail: 'hunter_kuhic68@hotmail.com',
    merchantId: 'M004',
    amount: 140.99,
    cashback: 7.05,
    purchaseDate: '2025-09-20',
    status: 'Annulé'
  }
];

const TablePurchases = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const purchasesPerPage = 4;

  const router = useRouter();

  useEffect(() => {
    setCurrentPage(1); // Reset pagination when search term or date filters change
  }, [searchTerm, startDate, endDate]);

  const filteredPurchases = rowsData.filter(purchase => {
    if (!purchase.customerEmail.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    if (startDate) {
      const purchaseDate = new Date(purchase.purchaseDate);
      const start = new Date(startDate);
      if (purchaseDate < start) return false;
    }
    if (endDate) {
      const purchaseDate = new Date(purchase.purchaseDate);
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999); // Include the entire end date
      if (purchaseDate > end) return false;
    }
    return true;
  });

  const indexOfLastPurchase = currentPage * purchasesPerPage;
  const indexOfFirstPurchase = indexOfLastPurchase - purchasesPerPage;
  const currentPurchases = filteredPurchases.slice(indexOfFirstPurchase, indexOfLastPurchase);

  const totalPages = Math.ceil(filteredPurchases.length / purchasesPerPage);

  const handleViewDetails = (purchaseId) => {
    router.push(`/amigo-dash/purchasesManagement/${purchaseId}`);
  };

  return (
    <Card>
      <div className='p-4 flex gap-4'>
        <TextField
          label="Rechercher par email du client"
          variant="outlined"
          sx={{ maxWidth: 300 }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <TextField
          label="Date de début"
          type="date"
          variant="outlined"
          sx={{ maxWidth: 200 }}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Date de fin"
          type="date"
          variant="outlined"
          sx={{ maxWidth: 200 }}
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <Button variant="contained" onClick={() => setSearchTerm('')}>
          Rechercher
        </Button>
      </div>
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>ID Achat</th>
              <th>Client</th>
              <th>Email</th>
              <th>ID Marchand</th>
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
                  <Chip label={row.merchantId} />
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