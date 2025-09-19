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
import Link from '@components/Link'; // Assurez-vous que le chemin est correct

const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 650
}));

const rowsData = [
  {
    date: '2023-09-20 10:00',
    transactionId: 'T1001',
    amigoId: 'A2001',
    customerName: 'Client 1',
    merchantId: 'M001',
    purchaseAmount: 5000,
    discount: 1000, // 20%
    clientShare: 600, // 12%
    amigoShare: 400 // 8%
  },
  {
    date: '2023-09-21 11:15',
    transactionId: 'T1002',
    amigoId: 'A2002',
    customerName: 'Client 2',
    merchantId: 'M002',
    purchaseAmount: 10000,
    discount: 2000,
    clientShare: 1200,
    amigoShare: 800
  },
  {
    date: '2023-09-22 12:30',
    transactionId: 'T1003',
    amigoId: 'A2003',
    customerName: 'Client 3',
    merchantId: 'M001',
    purchaseAmount: 15000,
    discount: 3000,
    clientShare: 1800,
    amigoShare: 1200
  },
  {
    date: '2023-09-23 14:45',
    transactionId: 'T1004',
    amigoId: 'A2004',
    customerName: 'Client 4',
    merchantId: 'M002',
    purchaseAmount: 20000,
    discount: 4000,
    clientShare: 2400,
    amigoShare: 1600
  },
  {
    date: '2023-09-24 09:00',
    transactionId: 'T1005',
    amigoId: 'A2005',
    customerName: 'Client 5',
    merchantId: 'M001',
    purchaseAmount: 25000,
    discount: 5000,
    clientShare: 3000,
    amigoShare: 2000
  },
  {
    date: '2023-09-25 15:30',
    transactionId: 'T1006',
    amigoId: 'A2006',
    customerName: 'Client 6',
    merchantId: 'M002',
    purchaseAmount: 30000,
    discount: 6000,
    clientShare: 3600,
    amigoShare: 2400
  },
  {
    date: '2023-09-26 08:15',
    transactionId: 'T1007',
    amigoId: 'A2007',
    customerName: 'Client 7',
    merchantId: 'M001',
    purchaseAmount: 35000,
    discount: 7000,
    clientShare: 4200,
    amigoShare: 2800
  },
  {
    date: '2023-09-27 16:00',
    transactionId: 'T1008',
    amigoId: 'A2008',
    customerName: 'Client 8',
    merchantId: 'M002',
    purchaseAmount: 40000,
    discount: 8000,
    clientShare: 4800,
    amigoShare: 3200
  },
  {
    date: '2023-09-28 17:45',
    transactionId: 'T1009',
    amigoId: 'A2009',
    customerName: 'Client 9',
    merchantId: 'M001',
    purchaseAmount: 45000,
    discount: 9000,
    clientShare: 5400,
    amigoShare: 3600
  },
  {
    date: '2023-09-29 10:30',
    transactionId: 'T1010',
    amigoId: 'A2010',
    customerName: 'Client 10',
    merchantId: 'M002',
    purchaseAmount: 50000,
    discount: 10000,
    clientShare: 6000,
    amigoShare: 4000
  },
  {
    date: '2023-09-30 11:00',
    transactionId: 'T1011',
    amigoId: 'A2011',
    customerName: 'Client 11',
    merchantId: 'M001',
    purchaseAmount: 55000,
    discount: 11000,
    clientShare: 6600,
    amigoShare: 4400
  },
  {
    date: '2023-10-01 12:15',
    transactionId: 'T1012',
    amigoId: 'A2012',
    customerName: 'Client 12',
    merchantId: 'M002',
    purchaseAmount: 60000,
    discount: 12000,
    clientShare: 7200,
    amigoShare: 4800
  },
  {
    date: '2023-10-02 13:30',
    transactionId: 'T1013',
    amigoId: 'A2013',
    customerName: 'Client 13',
    merchantId: 'M001',
    purchaseAmount: 65000,
    discount: 13000,
    clientShare: 7800,
    amigoShare: 5200
  },
  {
    date: '2023-10-03 14:45',
    transactionId: 'T1014',
    amigoId: 'A2014',
    customerName: 'Client 14',
    merchantId: 'M002',
    purchaseAmount: 70000,
    discount: 14000,
    clientShare: 8400,
    amigoShare: 5600
  },
  {
    date: '2023-10-04 09:00',
    transactionId: 'T1015',
    amigoId: 'A2015',
    customerName: 'Client 15',
    merchantId: 'M001',
    purchaseAmount: 75000,
    discount: 15000,
    clientShare: 9000,
    amigoShare: 6000
  },
  {
    date: '2023-10-05 10:15',
    transactionId: 'T1016',
    amigoId: 'A2016',
    customerName: 'Client 16',
    merchantId: 'M002',
    purchaseAmount: 80000,
    discount: 16000,
    clientShare: 9600,
    amigoShare: 6400
  },
  {
    date: '2023-10-06 11:30',
    transactionId: 'T1017',
    amigoId: 'A2017',
    customerName: 'Client 17',
    merchantId: 'M001',
    purchaseAmount: 85000,
    discount: 17000,
    clientShare: 10200,
    amigoShare: 6800
  },
  {
    date: '2023-10-07 12:45',
    transactionId: 'T1018',
    amigoId: 'A2018',
    customerName: 'Client 18',
    merchantId: 'M002',
    purchaseAmount: 90000,
    discount: 18000,
    clientShare: 10800,
    amigoShare: 7200
  },
  {
    date: '2023-10-08 14:00',
    transactionId: 'T1019',
    amigoId: 'A2020',
    customerName: 'Client 19',
    merchantId: 'M001',
    purchaseAmount: 95000,
    discount: 19000,
    clientShare: 11400,
    amigoShare: 7600
  },
  {
    date: '2023-10-09 15:15',
    transactionId: 'T1020',
    amigoId: 'A2020',
    customerName: 'Client 20',
    merchantId: 'M002',
    purchaseAmount: 100000,
    discount: 20000,
    clientShare: 12000,
    amigoShare: 8000
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
    if (searchTerm && !row.amigoId.toLowerCase().includes(searchTerm.toLowerCase())) return false;
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
          label='Rechercher par ID Amigo'
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
              <TableCell>ID Amigo Client</TableCell>
              <TableCell>Nom Client</TableCell>
              <TableCell>ID du Marchand</TableCell>
              <TableCell>Montant de l&apos;Achat (XOF)</TableCell>
              <TableCell>Ristourne Accordée (XOF)</TableCell>
              <TableCell>Part du Client (XOF)</TableCell>
              <TableCell>Part d&apos;Amigo (XOF)</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map(row => (
              <TableRow key={row.transactionId}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.transactionId}</TableCell>
                <TableCell>
                  <Chip label={row.amigoId} />
                </TableCell>
                <TableCell>{row.customerName}</TableCell>
                <TableCell>{row.merchantId}</TableCell>
                <TableCell>{row.purchaseAmount.toFixed(2)} XOF</TableCell>
                <TableCell>{row.discount.toFixed(2)} XOF</TableCell>
                <TableCell>{row.clientShare.toFixed(2)} XOF</TableCell>
                <TableCell>{row.amigoShare.toFixed(2)} XOF</TableCell>
                <TableCell>
                  <Link href={`/amigo-dash/transactions/${row.transactionId}`} color='primary'>
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