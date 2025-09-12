'use client';
import React, { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

import Chip from '@mui/material/Chip';

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
    totalAmount: 'XOF 5,000',
    amount: -500, // Montant de la ristourne
    emetteurReceveur: 'Client A', // Émetteur ou destinataire
    description: 'Ristourne accordée pour vente' // Description ajoutée
  },
  {
    date: '2023-09-21 11:15',
    transactionId: 'T1002',
    merchantId: 'M2002',
    merchantName: 'Marchand 2',
    totalAmount: 'XOF 10,000',
    amount: 1000, // Montant de la ristourne
    emetteurReceveur: 'Client B', // Émetteur ou destinataire
    description: 'Ristourne reçue pour achat produit x' // Description ajoutée
  },
];

const TableComponent = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  const filteredRows = rowsData.filter(row => row.merchantId.toLowerCase().includes(searchTerm.toLowerCase()));

  const displayedRows = filteredRows.slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage);

  return (
    <Card>
      <div className='p-4'>
        <TextField
          label='Rechercher par ID Marchand'
          variant='outlined'
          fullWidth
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className='mb-4'
        />
        <Button variant='contained' onClick={() => setSearchTerm('')}>
          Rechercher
        </Button>
      </div>
      <TableContainer component={Paper}>
        <StyledTable aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>ID de Transaction</TableCell>
              <TableCell>ID Marchand</TableCell>
              <TableCell>Nom Marchand</TableCell>
              <TableCell>Montant Opération (XOF)</TableCell>
              <TableCell>Ristourne (XOF)</TableCell>
              <TableCell>Émetteur/Destinataire</TableCell>
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
                <TableCell>{row.totalAmount}</TableCell>
                <TableCell style={{ color: row.amount < 0 ? 'red' : 'green' }}>
                  {row.amount < 0 ? `-XOF ${Math.abs(row.amount)}` : `+XOF ${Math.abs(row.amount)}`}
                </TableCell>
                <TableCell>{row.emetteurReceveur}</TableCell>
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
        <Button variant='outlined' onClick={() => setPage(prev => prev - 1)} disabled={page === 1}>
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
