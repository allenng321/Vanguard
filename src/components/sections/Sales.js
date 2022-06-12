import React from 'react';
import { Stack } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'

function Sales() {
  return (
    <div className='right-section-pages'>
    <Stack spacing={4}>
      <h1>Sales</h1>
      <p style={{margin: 0}}> Track your sales and monitor your profits, the table below is your sold sneakers</p>

      <span></span>

      <TableContainer component={Paper} sx={{
            height: 550,
            "&::-webkit-scrollbar": {
            width: 8
            },
            "&::-webkit-scrollbar-track": {
            backgroundColor: '#dddddd'
            },
            "&::-webkit-scrollbar-thumb": {
            backgroundColor: '#1976d2',
            borderRadius: 2}}}>
          <Table sx={{ minWidth: 650, maxHeight: 400}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{pr: 38}}>Sneaker Name</TableCell>
                <TableCell sx={{pr: 3}} >Size</TableCell>
                <TableCell sx={{pr: 3}}>Used</TableCell>
                <TableCell >Buying Price</TableCell>
                <TableCell >Sold Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {sneakerList.map((value) => (
                <TableRow
                  key={value.key}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {value.name}
                  </TableCell>
                  <TableCell >{value.size}</TableCell>
                  <TableCell >{value.used}</TableCell>
                  <TableCell >{value.buyingPrice}</TableCell>
                  <TableCell >{value.listingPrice}</TableCell>
                </TableRow>
              ))} */}
              <TableRow>
                <TableCell>Whats up</TableCell>
              </TableRow>
            </TableBody>
        </Table>
      </TableContainer>
    </Stack>
    </div>
  )
}

export default Sales;
