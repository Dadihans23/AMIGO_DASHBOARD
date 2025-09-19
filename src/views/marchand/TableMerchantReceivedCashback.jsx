'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// MUI Imports
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import CustomAvatar from '@core/components/mui/Avatar';

// Third-party Imports
import classnames from 'classnames';

// Styles Imports
import tableStyles from '@core/styles/table.module.css';

const rowsData = [
  {
    id: '1',
    date: '2025-08-15',
    amount: 350.50,
    cashback: 70.10,
    status: 'En attente',
    transactionId: 'TX001',
  },
  {
    id: '2',
    date: '2025-07-20',
    amount: 500.00,
    cashback: 100.00,
    status: 'Reversé',
    transactionId: 'TX002',
  },
  {
    id: '3',
    date: '2025-09-05',
    amount: 220.25,
    cashback: 44.05,
    status: 'En attente',
    transactionId: 'TX003',
  },
  {
    id: '4',
    date: '2025-09-02',
    amount: 189.99,
    cashback: 38.00,
    status: 'Reversé',
    transactionId: 'TX004',
  },
  {
    id: '5',
    date: '2025-08-10',
    amount: 400.00,
    cashback: 80.00,
    status: 'En attente',
    transactionId: 'TX005',
  },
  {
    id: '6',
    date: '2025-07-25',
    amount: 300.00,
    cashback: 60.00,
    status: 'Reversé',
    transactionId: 'TX006',
  },
  {
    id: '7',
    date: '2025-09-10',
    amount: 450.00,
    cashback: 90.00,
    status: 'En attente',
    transactionId: 'TX007',
  },
  {
    id: '8',
    date: '2025-08-05',
    amount: 250.00,
    cashback: 50.00,
    status: 'Reversé',
    transactionId: 'TX008',
  },
];

const TableMerchantReceivedCashback = ({ merchantEmail }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setCurrentPage(1); // Reset pagination when search term or date filters change
  }, [searchTerm, startDate, endDate]);

  const filteredItems = rowsData.filter(item => {
    if (searchTerm && !item.transactionId.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    if (startDate) {
      const itemDate = new Date(item.date);
      const start = new Date(startDate);
      if (itemDate < start) return false;
    }
    if (endDate) {
      const itemDate = new Date(item.date);
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      if (itemDate > end) return false;
    }
    return true;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const router = useRouter();

  const handleViewDetails = (id) => {
    router.push(`/cashbackMarchand/${id}`);
  };

  return (
    <Card>
      <div className='p-4 flex gap-4'>
        <TextField
          label="Rechercher par ID de Transaction"
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
      </div>
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Montant Achat</th>
              <th>Cashback dû</th>
              <th>Statut</th>
              <th>ID Transaction</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row) => (
              <tr key={row.id}>
                <td className='!plb-1'>
                  <Typography>{row.id}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.date}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.amount.toFixed(2)} cfa</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.cashback.toFixed(2)} cfa</Typography>
                </td>
                <td className='!plb-1'>
                  <Chip
                    className='capitalize'
                    variant='tonal'
                    color={
                      row.status === 'Reversé' ? 'success' :
                      row.status === 'En attente' ? 'warning' : 'error'
                    }
                    label={row.status}
                    size='small'
                  />
                </td>
                <td className='!plb-1'>
                  <Typography>{row.transactionId}</Typography>
                </td>
                <td className='!pb-1'>
                  <Button variant='outlined' onClick={() => handleViewDetails(row.id)}>
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