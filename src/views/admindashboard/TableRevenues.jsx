'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// MUI Imports
import Card from '@mui/material/Card';
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
    saleId: '1',
    date: '2025-09-01',
    cashbackReceived: 200.00,
    cashbackPaid: 120.00,
    profit: 80.00,
  },
  {
    saleId: '2',
    date: '2025-09-02',
    cashbackReceived: 150.50,
    cashbackPaid: 90.30,
    profit: 60.20,
  },
  {
    saleId: '3',
    date: '2025-09-03',
    cashbackReceived: 300.00,
    cashbackPaid: 180.00,
    profit: 120.00,
  },
  {
    saleId: '4',
    date: '2025-09-04',
    cashbackReceived: 100.00,
    cashbackPaid: 60.00,
    profit: 40.00,
  },
  {
    saleId: '5',
    date: '2025-09-05',
    cashbackReceived: 250.75,
    cashbackPaid: 150.45,
    profit: 100.30,
  },
  {
    saleId: '6',
    date: '2025-09-06',
    cashbackReceived: 180.00,
    cashbackPaid: 108.00,
    profit: 72.00,
  },
  {
    saleId: '7',
    date: '2025-09-07',
    cashbackReceived: 220.00,
    cashbackPaid: 132.00,
    profit: 88.00,
  },
  {
    saleId: '8',
    date: '2025-09-08',
    cashbackReceived: 175.50,
    cashbackPaid: 105.30,
    profit: 70.20,
  },
];

const TableRevenues = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const revenuesPerPage = 4;

  const filteredRevenues = rowsData.filter(revenue =>
    revenue.saleId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastRevenue = currentPage * revenuesPerPage;
  const indexOfFirstRevenue = indexOfLastRevenue - revenuesPerPage;
  const currentRevenues = filteredRevenues.slice(indexOfFirstRevenue, indexOfLastRevenue);

  const totalPages = Math.ceil(filteredRevenues.length / revenuesPerPage);

  const router = useRouter();

  const handleViewDetails = (saleId) => {
    router.push(`/amigo-dash/revenue/${saleId}`);
  };

  return (
    <Card>
      <div className='p-4'>
        <TextField
          label="Rechercher par ID de vente"
          variant="outlined"
          fullWidth
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>ID Vente</th>
              <th>Date</th>
              <th>Cashback Reçu</th>
              <th>Cashback Reversé</th>
              <th>Bénéfice</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRevenues.map((row) => (
              <tr key={row.saleId}>
                <td className='!plb-1'>
                  <Typography>{row.saleId}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.date}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.cashbackReceived.toFixed(2)} cfa</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.cashbackPaid.toFixed(2)} cfa</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.profit.toFixed(2)} cfa</Typography>
                </td>
                <td className='!pb-1'>
                  <Button variant='outlined' onClick={() => handleViewDetails(row.saleId)}>
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

export default TableRevenues;