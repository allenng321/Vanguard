import { Stack } from '@mui/material';
import React from 'react';
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

function Inventory() {
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
              <Input placeholder="Search..." color='primary' sx={{width: 150, mr: 5}}></Input>
              <Autocomplete
                id="sneaker-filter"
                sx={{ width: 175, height: 50, marginTop: 0, mr: 5 }}
                options={top100Films}
                getOptionLabel={(option) => option.title}
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

                <Autocomplete
                id="sneaker-searcher"
                sx={{ width: 225, height: 50, marginTop: 0, mr: 2 }}
                options={top100Films2}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField {...params} label="Add sneaker..." />
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

              <Autocomplete
                id="sneaker-size"
                sx={{ width: 100, height: 50, marginTop: 0, mr: 3 }}
                options={top100Films2}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField {...params} label="Size" />
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

              <FormControlLabel control={<Checkbox defaultChecked color='default' />} label="Used" />

              <TextField label="Buying Price" sx={{ width: 125, mr: 1}}/>
              <TextField label="Listing Price" sx={{ width: 125, mr: 2}}/>

              <Button color="inherit">Add</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </Stack>
    </div>
  )
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }]

  const top100Films2 = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 }]

export default Inventory;
