import { Stack } from '@mui/material';
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Input from '@mui/material/Input';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
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

import { useForm, Controller } from "react-hook-form";


const dataToAdd = [
  {key: 1, name: 'Air Jordan 2', size: 5, used: 'Yes', buyingPrice: 100, listingPrice: 12},
];

function Inventory() {
  const [sneakerList, setSneakerList] = useState(
    [{key: 1, name: 'Air Jordan 2', size: 5, used: 'Yes', buyingPrice: 100, listingPrice: 12},
  ]
    )
  const [sneakerName, setSneakerName] = useState('')
  const [size, setSize] = useState('')
  const [used, setUsed] = useState('No')
  const [usedChecked, setUsedChecked] = useState(false);
  const [buyingPrice, setBuyingPrice] = useState(0)
  const [listingPrice, setListingPrice] = useState(0)

  function AddSneaker(name, size, used, buyingPrice, listingPrice,) {
    dataToAdd.push({key: dataToAdd[dataToAdd.length - 1].key + 1, name: name, size: size, used: used, buyingPrice: buyingPrice, listingPrice: listingPrice })
    setSneakerList(dataToAdd)

    // Refresh Table
    setBuyingPrice(0)

    console.log("Name " + name)

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

  const { register, handleSubmit, control } = useForm();


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
              onChange={ (e) => {
                  setSearchText(e.target.value)
                }
              }
              onKeyPress={(ev) => {
                console.log(`Pressed keyCode ${ev.key}`);
                if(ev.key == 'Enter') {
                  updateSneakerList(rows, searchText);
                  ev.preventDefault();
                }
              }}
              ></Input>
              <Autocomplete
                id="sneaker-filter"
                sx={{ width: 175, height: 50, marginTop: 0, mr: 5 }}
                options={["Jordan 1"]}
                renderInput={(params) => (
                  <TextField {...params} label="Filter type..." />
                )}
                renderOption={(props, option, { inputValue }) => {
                  const matches = match(option.title, inputValue);
                  const parts = parse(option.title, matches);

                  return (
                    <li {...props}>
                      <div>
                        {parts.map((part, index) => (
                          <span
                            key={index}
                            style={{
                              fontWeight: part.highlight ? 700 : 400,
                            }}
                          >
                            {part.text}
                          </span>
                        ))}
                      </div>
                    </li>
                  );
                }}
              />

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

              <Button onClick={() => {AddSneaker(sneakerName, size, used, buyingPrice, listingPrice)}} color="inherit">Add</Button>
            </Toolbar>
          </AppBar>
        </Box>

        <span></span>
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
                </TableRow>
              ))}
            </TableBody>
        </Table>
      </TableContainer>

      </Stack>
    </div>
  )
}

export default Inventory;
