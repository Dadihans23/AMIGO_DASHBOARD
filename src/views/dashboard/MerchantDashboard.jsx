'use client';

import React, { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  CircularProgress
} from '@mui/material';
import Link from '@components/Link';
import { styled } from '@mui/material/styles';

const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 650,
}));

const rowsData = [
  {
    date: '2023-09-20 10:00',
    transactionId: 'T1001',
    amigoId: 'A2001',
    customerName: 'Client 1',
    merchantId: 'M001',
    merchantName: 'Marchand 1',
    purchaseAmount: 5000,
    discount: 500,
  },
  {
    date: '2023-09-21 11:15',
    transactionId: 'T1002',
    amigoId: 'A2002',
    customerName: 'Client 2',
    merchantId: 'M002',
    merchantName: 'Marchand 2',
    purchaseAmount: 10000,
    discount: 1000,
  },
  {
    date: '2023-09-22 12:30',
    transactionId: 'T1003',
    amigoId: 'A2003',
    customerName: 'Client 3',
    merchantId: 'M003',
    merchantName: 'Marchand 3',
    purchaseAmount: 15000,
    discount: 1500,
  },
  {
    date: '2023-09-23 14:45',
    transactionId: 'T1004',
    amigoId: 'A2004',
    customerName: 'Client 4',
    merchantId: 'M004',
    merchantName: 'Marchand 4',
    purchaseAmount: 20000,
    discount: 2000,
  },
  {
    date: '2023-09-24 09:00',
    transactionId: 'T1005',
    amigoId: 'A2005',
    customerName: 'Client 5',
    merchantId: 'M001',
    merchantName: 'Marchand 1',
    purchaseAmount: 25000,
    discount: 2500,
  },
  {
    date: '2023-09-25 15:30',
    transactionId: 'T1006',
    amigoId: 'A2006',
    customerName: 'Client 6',
    merchantId: 'M002',
    merchantName: 'Marchand 2',
    purchaseAmount: 30000,
    discount: 3000,
  },
  {
    date: '2023-09-26 08:15',
    transactionId: 'T1007',
    amigoId: 'A2007',
    customerName: 'Client 7',
    merchantId: 'M003',
    merchantName: 'Marchand 3',
    purchaseAmount: 35000,
    discount: 3500,
  },
  {
    date: '2023-09-27 16:00',
    transactionId: 'T1008',
    amigoId: 'A2008',
    customerName: 'Client 8',
    merchantId: 'M004',
    merchantName: 'Marchand 4',
    purchaseAmount: 40000,
    discount: 4000,
  },
  {
    date: '2023-09-28 17:45',
    transactionId: 'T1009',
    amigoId: 'A2009',
    customerName: 'Client 9',
    merchantId: 'M001',
    merchantName: 'Marchand 1',
    purchaseAmount: 45000,
    discount: 4500,
  },
  {
    date: '2023-09-29 10:30',
    transactionId: 'T1010',
    amigoId: 'A2010',
    customerName: 'Client 10',
    merchantId: 'M002',
    merchantName: 'Marchand 2',
    purchaseAmount: 50000,
    discount: 5000,
  },
  {
    date: '2023-09-30 11:00',
    transactionId: 'T1011',
    amigoId: 'A2011',
    customerName: 'Client 11',
    merchantId: 'M003',
    merchantName: 'Marchand 3',
    purchaseAmount: 55000,
    discount: 5500,
  },
  {
    date: '2023-10-01 12:15',
    transactionId: 'T1012',
    amigoId: 'A2012',
    customerName: 'Client 12',
    merchantId: 'M004',
    merchantName: 'Marchand 4',
    purchaseAmount: 60000,
    discount: 6000,
  },
  {
    date: '2023-10-02 13:30',
    transactionId: 'T1013',
    amigoId: 'A2013',
    customerName: 'Client 13',
    merchantId: 'M001',
    merchantName: 'Marchand 1',
    purchaseAmount: 65000,
    discount: 6500,
  },
  {
    date: '2023-10-03 14:45',
    transactionId: 'T1014',
    amigoId: 'A2014',
    customerName: 'Client 14',
    merchantId: 'M002',
    merchantName: 'Marchand 2',
    purchaseAmount: 70000,
    discount: 7000,
  },
  {
    date: '2023-10-04 09:00',
    transactionId: 'T1015',
    amigoId: 'A2015',
    customerName: 'Client 15',
    merchantId: 'M003',
    merchantName: 'Marchand 3',
    purchaseAmount: 75000,
    discount: 7500,
  },
  {
    date: '2023-10-05 10:15',
    transactionId: 'T1016',
    amigoId: 'A2016',
    customerName: 'Client 16',
    merchantId: 'M004',
    merchantName: 'Marchand 4',
    purchaseAmount: 80000,
    discount: 8000,
  },
  {
    date: '2023-10-06 11:30',
    transactionId: 'T1017',
    amigoId: 'A2017',
    customerName: 'Client 17',
    merchantId: 'M001',
    merchantName: 'Marchand 1',
    purchaseAmount: 85000,
    discount: 8500,
  },
  {
    date: '2023-10-07 12:45',
    transactionId: 'T1018',
    amigoId: 'A2018',
    customerName: 'Client 18',
    merchantId: 'M002',
    merchantName: 'Marchand 2',
    purchaseAmount: 90000,
    discount: 9000,
  },
  {
    date: '2023-10-08 14:00',
    transactionId: 'T1019',
    amigoId: 'A2019',
    customerName: 'Client 19',
    merchantId: 'M003',
    merchantName: 'Marchand 3',
    purchaseAmount: 95000,
    discount: 9500,
  },
  {
    date: '2023-10-09 15:15',
    transactionId: 'T1020',
    amigoId: 'A2020',
    customerName: 'Client 20',
    merchantId: 'M004',
    merchantName: 'Marchand 4',
    purchaseAmount: 100000,
    discount: 10000,
  },
];

const MerchantDashboard = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(6);
  const [stats, setStats] = useState({
    transactions: 0,
    totalSales: 0,
    totalRebates: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const merchantId = 'M001'; // Marchand connecté (exemple)

  useEffect(() => {
    setPage(1); // Réinitialiser la pagination lors du changement des filtres
    fetchStats();
  }, [searchTerm, startDate, endDate]);

  const fetchStats = () => {
    setIsLoading(true);
    try {
      const filteredRows = rowsData.filter(row => {
        if (row.merchantId !== merchantId) return false;
        if (searchTerm && !row.amigoId.toLowerCase().includes(searchTerm.toLowerCase())) return false;
        if (startDate) {
          const rowDate = new Date(row.date);
          const start = new Date(startDate);
          if (rowDate < start) return false;
        }
        if (endDate) {
          const rowDate = new Date(row.date);
          const end = new Date(endDate);
          end.setHours(23, 59, 59, 999);
          if (rowDate > end) return false;
        }
        return true;
      });

      const stats = filteredRows.reduce(
        (acc, row) => ({
          transactions: acc.transactions + 1,
          totalSales: acc.totalSales + row.purchaseAmount,
          totalRebates: acc.totalRebates + row.discount,
        }),
        { transactions: 0, totalSales: 0, totalRebates: 0 }
      );

      setStats(stats);
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatCurrency = amount => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF' }).format(amount);
  };

  const filteredRows = rowsData.filter(row => {
    if (row.merchantId !== merchantId) return false;
    if (searchTerm && !row.amigoId.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    if (startDate) {
      const rowDate = new Date(row.date);
      const start = new Date(startDate);
      if (rowDate < start) return false;
    }
    if (endDate) {
      const rowDate = new Date(row.date);
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      if (rowDate > end) return false;
    }
    return true;
  });

  const displayedRows = filteredRows.slice(
    (page - 1) * rowsPerPage,
    (page - 1) * rowsPerPage + rowsPerPage
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant='h6' gutterBottom>
              Sélectionnez une plage de dates
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={5}>
                <TextField
                  label='Date de début'
                  type='date'
                  value={startDate}
                  onChange={e => setStartDate(e.target.value)}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  label='Date de fin'
                  type='date'
                  value={endDate}
                  onChange={e => setEndDate(e.target.value)}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  label='Rechercher par ID Amigo'
                  variant='outlined'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {isLoading ? (
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <CircularProgress />
        </Grid>
      ) : (
        <>
          <Grid item xs={12} sm={4}>
            <Card style={{ backgroundColor: '#e3f2fd', border: '1px solid #2196f3' }}>
              <CardContent>
                <Typography color='text.primary' className='font-medium text-center'>
                  Nombre de Transactions
                </Typography>
                <Typography variant='h4' style={{ color: '#2196f3' }}>
                  {stats.transactions}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card style={{ backgroundColor: '#dfffd9', border: '1px solid #4caf50' }}>
              <CardContent>
                <Typography color='text.primary' className='font-medium text-center'>
                  Ventes Totales
                </Typography>
                <Typography variant='h4' style={{ color: '#4caf50' }}>
                  {formatCurrency(stats.totalSales)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card style={{ backgroundColor: '#ffdddd', border: '1px solid #f44336' }}>
              <CardContent>
                <Typography color='text.secondary' className='font-medium text-center'>
                  Ristournes Distribuées
                </Typography>
                <Typography variant='h4' style={{ color: '#f44336' }}>
                  {formatCurrency(stats.totalRebates)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <TableContainer component={Paper}>
                <StyledTable aria-label='transactions table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>ID de Transaction</TableCell>
                      <TableCell>ID Amigo Client</TableCell>
                      <TableCell>Nom Client</TableCell>
                      <TableCell>ID Marchand</TableCell>
                      <TableCell>Nom Marchand</TableCell>
                      <TableCell>Montant de l&apos;Achat (XOF)</TableCell>
                      <TableCell>Ristourne Accordée (XOF)</TableCell>
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
                        <TableCell>{row.merchantName}</TableCell>
                        <TableCell>{formatCurrency(row.purchaseAmount)}</TableCell>
                        <TableCell>{formatCurrency(row.discount)}</TableCell>
                        <TableCell>
                          <Link href={`/transactions/${row.transactionId}`} color='primary'>
                            En savoir plus
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </StyledTable>
              </TableContainer>
              <div className='flex justify-between items-center mt-4 p-4'>
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
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default MerchantDashboard;