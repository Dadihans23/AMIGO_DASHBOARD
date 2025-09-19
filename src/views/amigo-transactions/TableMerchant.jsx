'use client';

import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Card,
  Chip
} from '@mui/material';
import Link from '@components/Link';

const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 650
}));

const rowsData = [
  {
    date: '2023-09-20 10:00',
    transactionId: 'T1001',
    merchantId: 'M2001',
    merchantName: 'Marchand 1',
    totalAmount: 5000,
    amount: -500,
    emetteurReceveur: 'Client A',
    description: 'Ristourne accordée pour vente'
  },
  {
    date: '2023-09-21 11:15',
    transactionId: 'T1002',
    merchantId: 'M2002',
    merchantName: 'Marchand 2',
    totalAmount: 10000,
    amount: 1000,
    emetteurReceveur: 'Client B',
    description: 'Ristourne reçue pour achat produit x'
  },
  {
    date: '2023-09-22 12:30',
    transactionId: 'T1003',
    merchantId: 'M2003',
    merchantName: 'Marchand 3',
    totalAmount: 15000,
    amount: -1500,
    emetteurReceveur: 'Client C',
    description: 'Ristourne accordée pour vente'
  },
  {
    date: '2023-09-23 14:45',
    transactionId: 'T1004',
    merchantId: 'M2004',
    merchantName: 'Marchand 4',
    totalAmount: 20000,
    amount: 2000,
    emetteurReceveur: 'Client D',
    description: 'Ristourne reçue pour achat produit y'
  },
  {
    date: '2023-09-24 09:00',
    transactionId: 'T1005',
    merchantId: 'M2001',
    merchantName: 'Marchand 1',
    totalAmount: 25000,
    amount: -2500,
    emetteurReceveur: 'Client E',
    description: 'Ristourne accordée pour vente'
  },
  {
    date: '2023-09-25 15:30',
    transactionId: 'T1006',
    merchantId: 'M2002',
    merchantName: 'Marchand 2',
    totalAmount: 30000,
    amount: 3000,
    emetteurReceveur: 'Client F',
    description: 'Ristourne reçue pour achat produit z'
  },
  {
    date: '2023-09-26 08:15',
    transactionId: 'T1007',
    merchantId: 'M2003',
    merchantName: 'Marchand 3',
    totalAmount: 35000,
    amount: -3500,
    emetteurReceveur: 'Client G',
    description: 'Ristourne accordée pour vente'
  },
  {
    date: '2023-09-27 16:00',
    transactionId: 'T1008',
    merchantId: 'M2004',
    merchantName: 'Marchand 4',
    totalAmount: 40000,
    amount: 4000,
    emetteurReceveur: 'Client H',
    description: 'Ristourne reçue pour achat produit x'
  },
  {
    date: '2023-09-28 17:45',
    transactionId: 'T1009',
    merchantId: 'M2001',
    merchantName: 'Marchand 1',
    totalAmount: 45000,
    amount: -4500,
    emetteurReceveur: 'Client I',
    description: 'Ristourne accordée pour vente'
  },
  {
    date: '2023-09-29 10:30',
    transactionId: 'T1010',
    merchantId: 'M2002',
    merchantName: 'Marchand 2',
    totalAmount: 50000,
    amount: 5000,
    emetteurReceveur: 'Client J',
    description: 'Ristourne reçue pour achat produit y'
  },
  {
    date: '2023-09-30 11:00',
    transactionId: 'T1011',
    merchantId: 'M2003',
    merchantName: 'Marchand 3',
    totalAmount: 55000,
    amount: -5500,
    emetteurReceveur: 'Client K',
    description: 'Ristourne accordée pour vente'
  },
  {
    date: '2023-10-01 12:15',
    transactionId: 'T1012',
    merchantId: 'M2004',
    merchantName: 'Marchand 4',
    totalAmount: 60000,
    amount: 6000,
    emetteurReceveur: 'Client L',
    description: 'Ristourne reçue pour achat produit z'
  },
  {
    date: '2023-10-02 13:30',
    transactionId: 'T1013',
    merchantId: 'M2001',
    merchantName: 'Marchand 1',
    totalAmount: 65000,
    amount: -6500,
    emetteurReceveur: 'Client M',
    description: 'Ristourne accordée pour vente'
  },
  {
    date: '2023-10-03 14:45',
    transactionId: 'T1014',
    merchantId: 'M2002',
    merchantName: 'Marchand 2',
    totalAmount: 70000,
    amount: 7000,
    emetteurReceveur: 'Client N',
    description: 'Ristourne reçue pour achat produit x'
  },
  {
    date: '2023-10-04 09:00',
    transactionId: 'T1015',
    merchantId: 'M2003',
    merchantName: 'Marchand 3',
    totalAmount: 75000,
    amount: -7500,
    emetteurReceveur: 'Client O',
    description: 'Ristourne accordée pour vente'
  },
  {
    date: '2023-10-05 10:15',
    transactionId: 'T1016',
    merchantId: 'M2004',
    merchantName: 'Marchand 4',
    totalAmount: 80000,
    amount: 8000,
    emetteurReceveur: 'Client P',
    description: 'Ristourne reçue pour achat produit y'
  },
  {
    date: '2023-10-06 11:30',
    transactionId: 'T1017',
    merchantId: 'M2001',
    merchantName: 'Marchand 1',
    totalAmount: 85000,
    amount: -8500,
    emetteurReceveur: 'Client Q',
    description: 'Ristourne accordée pour vente'
  },
  {
    date: '2023-10-07 12:45',
    transactionId: 'T1018',
    merchantId: 'M2002',
    merchantName: 'Marchand 2',
    totalAmount: 90000,
    amount: 9000,
    emetteurReceveur: 'Client R',
    description: 'Ristourne reçue pour achat produit z'
  },
  {
    date: '2023-10-08 14:00',
    transactionId: 'T1019',
    merchantId: 'M2003',
    merchantName: 'Marchand 3',
    totalAmount: 95000,
    amount: -9500,
    emetteurReceveur: 'Client S',
    description: 'Ristourne accordée pour vente'
  },
  {
    date: '2023-10-09 15:15',
    transactionId: 'T1020',
    merchantId: 'M2004',
    merchantName: 'Marchand 4',
    totalAmount: 100000,
    amount: 10000,
    emetteurReceveur: 'Client T',
    description: 'Ristourne reçue pour achat produit x'
  }
];

const TableComponent = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    setPage(1); // Reset pagination when search term or date filters change
  }, [searchTerm, startDate, endDate]);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleSearch = () => {
    setSearchTerm('');
    setPage(1);
  };

  const filteredRows = rowsData.filter(row => {
    if (searchTerm && !row.merchantId.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    if (startDate) {
      const rowDate = new Date(row.date);
      const start = new Date(startDate);
      if (rowDate < start) return false;
    }
    if (endDate) {
      const rowDate = new Date(row.date);
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999); // Inclure toute la journée de fin
      if (rowDate > end) return false;
    }
    return true;
  });

  const displayedRows = filteredRows.slice(
    (page - 1) * rowsPerPage,
    (page - 1) * rowsPerPage + rowsPerPage
  );

  return (
    <Card>
      <div className='p-4 flex gap-4'>
        <TextField
          label='Rechercher par ID Marchand'
          variant='outlined'
          sx={{ maxWidth: 300 }}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
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
        <Button variant='contained' onClick={handleSearch}>
          Rechercher
        </Button>
      </div>
      <TableContainer component={Paper}>
        <StyledTable aria-label='transactions table'>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>ID de Transaction</TableCell>
              <TableCell>ID Marchand</TableCell>
              <TableCell>Nom Marchand</TableCell>
              <TableCell>Montant Opération (XOF)</TableCell>
              <TableCell>Ristourne (XOF)</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map(row => (
              <TableRow key={row.transactionId}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.transactionId}</TableCell>
                <TableCell>
                  <Chip label={row.merchantId} />
                </TableCell>
                <TableCell>{row.merchantName}</TableCell>
                <TableCell>{row.totalAmount.toFixed(2)} XOF</TableCell>
                <TableCell style={{ color: row.amount < 0 ? 'red' : 'green' }}>
                  {row.amount < 0 ? `-XOF ${Math.abs(row.amount).toFixed(2)}` : `+XOF ${Math.abs(row.amount).toFixed(2)}`}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>
                  <Link href={`/amigo-dash/ristournes/${row.transactionId}`} color='primary'>
                    En savoir plus
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
      <div className='flex justify-between items-center mt-4'>
        <Button
          variant='outlined'
          onClick={() => setPage(prev => prev - 1)}
          disabled={page === 1}
        >
          Précédent
        </Button>
        <Typography>{`Page ${page} sur ${Math.ceil(filteredRows.length / rowsPerPage)}`}</Typography>
        <Button
          variant='outlined'
          onClick={() => setPage(prev => prev + 1)}
          disabled={page === Math.ceil(filteredRows.length / rowsPerPage)}
        >
          Suivant
        </Button>
      </div>
    </Card>
  );
};

export default TableComponent;