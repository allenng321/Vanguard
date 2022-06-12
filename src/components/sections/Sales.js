import React, {useState, useEffect} from 'react';
import { Stack } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'

const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://pikachuexeallen:6awdbEitbMqIZmog@vanguard-data.w3kgd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  await client.connect();
}
run();

const database = client.db('vanguard-app')
const sneakerData = database.collection('sneaker-sold')

function Sales() {
  const [sneakerList, setSneakerList] = useState([{key: 1, name: 'Nike Dunk Low Panda', size: '9.5', used: 'No', buyingPrice: 110, soldPrice: 259}, {key: 2, name: 'Jordan 1 High Visionaire', size: '11.5', used: 'No', buyingPrice: 170, soldPrice: 310}])

  useEffect( () => {
    async function InitSoldSneakers() {
      const allSoldSneakers = await sneakerData.find().toArray();

      setSneakerList(allSoldSneakers);
    }
    InitSoldSneakers();
}, []);

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
                <TableCell >Profit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sneakerList.map((value) => (
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
                  <TableCell >{value.soldPrice}</TableCell>
                  <TableCell >{value.soldPrice - value.buyingPrice}</TableCell>
                </TableRow>
              ))}
              {/* <TableRow>
                <TableCell>Whats up</TableCell>
              </TableRow> */}
            </TableBody>
        </Table>
      </TableContainer>
    </Stack>
    </div>
  )
}

export default Sales;
