import { Stack } from '@mui/material';
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Input from '@mui/material/Input';;
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import { db } from 'sneaks-api/models/Sneaker';

// Init MongoDB (I feel safe to expose this mongodb url! Will be removed after a week of the hackathon!)
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://pikachuexeallen:6awdbEitbMqIZmog@vanguard-data.w3kgd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  await client.connect();
}
run();

const database = client.db('vanguard-app')
const sneakerData = database.collection('sneaker-data')

 function Inventory() {

  const [sneakerList, setSneakerList] = useState([{key: 1, name: 'Jordan 1 Low Bred Toe', size: 9, used: 'No', buyingPrice: 129, listingPrice: 249}])
  const [sneakerName, setSneakerName] = useState('')
  const [size, setSize] = useState('')
  const [used, setUsed] = useState('No')
  const [usedChecked, setUsedChecked] = useState(false);
  const [buyingPrice, setBuyingPrice] = useState(0)
  const [listingPrice, setListingPrice] = useState(0)
  const [totalProfit, setTotalProfit] = useState(0)

  const [searchText, setSearchText] = useState('');

  async function AddSneaker(name, size, used, buyingPrice, listingPrice,) {
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db('vanguard-app')
    const sneakerData = database.collection('sneaker-data')


    const allSneakers = await sneakerData.find().toArray();

    let highestKey= -1;
    allSneakers.forEach(sneaker => {
      let currentKey = parseInt(sneaker.key)
      if (highestKey < currentKey) {
        highestKey = currentKey
      }
    });

    sneakerData.insertOne({key: highestKey + 1, name: name, size: size, used: used, buyingPrice: buyingPrice, listingPrice: listingPrice});

    const allSneakersToUpdate = await sneakerData.find().toArray();

    setSneakerList(allSneakersToUpdate)

    // Refresh Table
    setBuyingPrice(0)

    // Update Profit
    calculateProfit()
  }

  async function DeleteSneaker(key) {
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db('vanguard-app')
    const sneakerData = database.collection('sneaker-data')

    await sneakerData.deleteOne({key: key})
    const allSneakers = await sneakerData.find().toArray();

    setSneakerList(allSneakers);

    // Refresh Table
    setBuyingPrice(0)

    // Update Profit
    calculateProfit()
  }

  function handleUsedCheckbox(event) {
      setUsedChecked(event.target.checked)

      if (event.target.checked == true) {
        setUsed("Yes");
      }
      else {
        setUsed("No");
      }
  }

  async function calculateProfit() {
    const client = new MongoClient(uri);
      await client.connect();
      const database = client.db('vanguard-app')
      const sneakerData = database.collection('sneaker-data')

      const allSneakers = await sneakerData.find().toArray();

      let profitValueToAdd = 0
      allSneakers.forEach(sneaker => {
      let sneakerRealizedProfit = sneaker.listingPrice - sneaker.buyingPrice;
      profitValueToAdd += sneakerRealizedProfit;
      });

      const newProfit = profitValueToAdd

      setTotalProfit(newProfit);
  }

  async function MoveToSoldSneakers(key) {
    await client.connect();
    const database = client.db('vanguard-app')
    const sneakerData = database.collection('sneaker-data')

    const sneakerToMove = await sneakerData.findOne({key: key})
    await DeleteSneaker(key)

    await client.connect();
    const databaseSold = client.db('vanguard-app')
    const sneakerDataSold = databaseSold.collection('sneaker-sold')

    const allSneakers = await sneakerDataSold.find().toArray();

    let highestKey= -1;
    allSneakers.forEach(sneaker => {
      let currentKey = parseInt(sneaker.key)
      if (highestKey < currentKey) {
        highestKey = currentKey
      }
    });

    sneakerDataSold.insertOne({key: highestKey + 1, name: sneakerToMove.name, size: sneakerToMove.size, used: sneakerToMove.used, buyingPrice: sneakerToMove.buyingPrice, soldPrice: sneakerToMove.listingPrice})

  }

  function updateFilteredSneakerList(searchText) {
      let newRes = [];
      sneakerList.forEach(sneaker => {
        if (sneaker.name.includes(searchText)) {
          newRes.push(sneaker);
        }
      })

      setSneakerList(newRes)
  }


  const getOpObj = option => {
    if (!option._id) option = options.find(op => op._id === option);
    return option;
  };

  return (
    <div className='right-section-pages'>
      <h1>Inventory</h1>
      <p> The inventory section allows you to manage your collection with ease,
      start by adding your first sneaker down below!</p>

      <Stack spacing={4}>
        <span></span>
        <Box sx={{ flexGrow: 1}}>
          <AppBar position="static">
            <Toolbar>
              <Input placeholder="Search..." color='primary' sx={{width: 150, mr: 5}}
              value={searchText}
              onChange={ (e) => {
                  setSearchText(e.target.value)
                }
              }
              onKeyPress={(ev) => {
                console.log(`Pressed keyCode ${ev.key}`);
                if(ev.key == 'Enter') {
                  updateFilteredSneakerList(searchText);
                  ev.preventDefault();
                }
              }}
              ></Input>


              <TextField
              value={sneakerName}
              onChange={(e) => {
                  setSneakerName(e.target.value)
              }}
              label="Sneaker Name" sx={{ width: 225, height: 50, marginTop: 0, mr: 2 }}/>

              <TextField
              value={size}
              onChange={(e) => {
                  setSize(e.target.value)
              }}
              label="Size" sx={{ width: 100, height: 50, marginTop: 0, mr: 3 }}/>

              <FormControlLabel control={<Checkbox checked={usedChecked} onChange={handleUsedCheckbox} color='default' />} label="Used" />

              <TextField
              value={buyingPrice}
              onChange={(e) => {
                  setBuyingPrice(e.target.value)
              }}
              label="Buying Price" sx={{ width: 125, mr: 1}}/>
              <TextField
              value={listingPrice}
              onChange={(e) => {
                  setListingPrice(e.target.value)
              }}
              label="Listing Price" sx={{ width: 125, mr: 2}}/>

              <Button onClick={() => {

                AddSneaker(sneakerName, size, used, buyingPrice, listingPrice)

                }

                } color="inherit">Add</Button>
            </Toolbar>
          </AppBar>
        </Box>

        <span></span>

        <TableContainer component={Paper} sx={{
            height: 400,
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
                <TableCell >Listing Price</TableCell>
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
                  <TableCell >{value.listingPrice}</TableCell>
                  <TableCell style={{padding: 0}}> <Button color="inherit" style={{backgroundColor: '#dddddd'}} sx={{padding: 1}}
                    onClick={() => {MoveToSoldSneakers(value.key)}}
                  > Sold </Button> </TableCell>
                  <TableCell style={{padding: 0}}> <Button color="inherit" style={{backgroundColor: '#dddddd'}} sx={{padding: 1}}

                    onClick={() => {DeleteSneaker(value.key)}}
                  > Delete </Button> </TableCell>
                </TableRow>
              ))}
            </TableBody>
        </Table>
      </TableContainer>

        <Grid className="inventory-stats" id="inventory-grid" container spacing={2}>
            <Grid item xs={3}>
                <h2>Total number of sneakers: {sneakerList.length}</h2>
            </Grid>
            <Grid item xs={5}>

            </Grid>
            <Grid item xs={4}>
                <h2>Total Potential Profit: {totalProfit}</h2>
            </Grid>
        </Grid>
      </Stack>
    </div>
  )
}

export default Inventory;
