'use client'
import React, { useState, useEffect } from 'react' ;

//
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'

import Link from '@components/Link' // Assurez-vous d'importer votre composant Link

const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 650
}))

const rowsData = [
  {
    date: '2023-09-20 10:00',
    transactionId: 'T1001',
    amigoId: 'A2001',
    customerName: 'Client 1',
    purchaseAmount: 'XOF 5,000',
    discount: 'XOF 500'
  },
  {
    date: '2023-09-21 11:15',
    transactionId: 'T1002',
    amigoId: 'A2002',
    customerName: 'Client 2',
    purchaseAmount: 'XOF 10,000',
    discount: 'XOF 1,000'
  },
  {
    date: '2023-09-22 12:30',
    transactionId: 'T1003',
    amigoId: 'A2003',
    customerName: 'Client 3',
    purchaseAmount: 'XOF 15,000',
    discount: 'XOF 1,500'
  },
  {
    date: '2023-09-23 14:45',
    transactionId: 'T1004',
    amigoId: 'A2004',
    customerName: 'Client 4',
    purchaseAmount: 'XOF 20,000',
    discount: 'XOF 2,000'
  },
  {
    date: '2023-09-24 09:00',
    transactionId: 'T1005',
    amigoId: 'A2005',
    customerName: 'Client 5',
    purchaseAmount: 'XOF 25,000',
    discount: 'XOF 2,500'
  },
  {
    date: '2023-09-25 15:30',
    transactionId: 'T1006',
    amigoId: 'A2006',
    customerName: 'Client 6',
    purchaseAmount: 'XOF 30,000',
    discount: 'XOF 3,000'
  },
  {
    date: '2023-09-26 08:15',
    transactionId: 'T1007',
    amigoId: 'A2007',
    customerName: 'Client 7',
    purchaseAmount: 'XOF 35,000',
    discount: 'XOF 3,500'
  },
  {
    date: '2023-09-27 16:00',
    transactionId: 'T1008',
    amigoId: 'A2008',
    customerName: 'Client 8',
    purchaseAmount: 'XOF 40,000',
    discount: 'XOF 4,000'
  },
  {
    date: '2023-09-28 17:45',
    transactionId: 'T1009',
    amigoId: 'A2009',
    customerName: 'Client 9',
    purchaseAmount: 'XOF 45,000',
    discount: 'XOF 4,500'
  },
  {
    date: '2023-09-29 10:30',
    transactionId: 'T1010',
    amigoId: 'A2010',
    customerName: 'Client 10',
    purchaseAmount: 'XOF 50,000',
    discount: 'XOF 5,000'
  },
  {
    date: '2023-09-30 11:00',
    transactionId: 'T1011',
    amigoId: 'A2011',
    customerName: 'Client 11',
    purchaseAmount: 'XOF 55,000',
    discount: 'XOF 5,500'
  },
  {
    date: '2023-10-01 12:15',
    transactionId: 'T1012',
    amigoId: 'A2012',
    customerName: 'Client 12',
    purchaseAmount: 'XOF 60,000',
    discount: 'XOF 6,000'
  },
  {
    date: '2023-10-02 13:30',
    transactionId: 'T1013',
    amigoId: 'A2013',
    customerName: 'Client 13',
    purchaseAmount: 'XOF 65,000',
    discount: 'XOF 6,500'
  },
  {
    date: '2023-10-03 14:45',
    transactionId: 'T1014',
    amigoId: 'A2014',
    customerName: 'Client 14',
    purchaseAmount: 'XOF 70,000',
    discount: 'XOF 7,000'
  },
  {
    date: '2023-10-04 09:00',
    transactionId: 'T1015',
    amigoId: 'A2015',
    customerName: 'Client 15',
    purchaseAmount: 'XOF 75,000',
    discount: 'XOF 7,500'
  },
  {
    date: '2023-10-05 10:15',
    transactionId: 'T1016',
    amigoId: 'A2016',
    customerName: 'Client 16',
    purchaseAmount: 'XOF 80,000',
    discount: 'XOF 8,000'
  },
  {
    date: '2023-10-06 11:30',
    transactionId: 'T1017',
    amigoId: 'A2017',
    customerName: 'Client 17',
    purchaseAmount: 'XOF 85,000',
    discount: 'XOF 8,500'
  },
  {
    date: '2023-10-07 12:45',
    transactionId: 'T1018',
    amigoId: 'A2018',
    customerName: 'Client 18',
    purchaseAmount: 'XOF 90,000',
    discount: 'XOF 9,000'
  },
  {
    date: '2023-10-08 14:00',
    transactionId: 'T1019',
    amigoId: 'A2020',
    customerName: 'Client 19',
    purchaseAmount: 'XOF 95,000',
    discount: 'XOF 9,500'
  },
  {
    date: '2023-10-09 15:15',
    transactionId: 'T1020',
    amigoId: 'A2020',
    customerName: 'Client 20',
    purchaseAmount: 'XOF 100,000',
    discount: 'XOF 10,000'
  }
]

const TableComponent = () => {
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(6)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // Reset pagination when search term changes
    setPage(1)
  }, [searchTerm])

  const handleChangePage = (event, value) => {
    setPage(value)
  }

  const handleSearch = () => {
    setSearchTerm('')
    setPage(1)
  }

  const filteredRows = rowsData.filter(row => row.amigoId.toLowerCase().includes(searchTerm.toLowerCase()))

  const displayedRows = filteredRows.slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage)

  return (
    <Card>
      <div className='p-4'>
        <TextField
          label='Rechercher par ID Amigo'
          variant='outlined'
          fullWidth
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className='mb-4'
        />
        <Button variant='contained' onClick={handleSearch}>
          Rechercher
        </Button>
      </div>
      <TableContainer component={Paper}>
        <StyledTable aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>ID de Transaction</TableCell>
              <TableCell>ID Amigo Client</TableCell>
              <TableCell>Nom Client</TableCell>
              <TableCell>Montant de l&apos;Achat (XOF)</TableCell>
              <TableCell>Ristourne Accord&apos;e (XOF)</TableCell>

              <TableCell>Action</TableCell> {/* Nouvelle colonne pour l'action */}
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
                <TableCell>{row.purchaseAmount}</TableCell>
                <TableCell>{row.discount}</TableCell>
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
  )
}

export default TableComponent
