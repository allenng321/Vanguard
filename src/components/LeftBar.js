import React from 'react';
import InfoBox from './InfoBox.js'
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Link, Route, Switch } from "wouter";

import Inventory from './sections/Inventory.js';
import Expense from './sections/Expense.js';
import News from './sections/News.js';
import Sales from './sections/Sales.js'

function LeftBar() {
  return (
    <div className='left-bar'>
    <Switch>
      <Route path="/inventory" component={Inventory} />
      <Route path="/expense" component={Expense} />
      <Route path="/news" component={News} />
      <Route path="/sales" component={Sales} />
    </Switch>


      <Stack spacing={4}>
        <InfoBox/>
        <Divider id="info-box-divider" flexItem={true} light={true} style={{marginRight:"-1px"}} />
        <span></span>
        <Stack spacing={4}>
          <Button href="/inventory" variant="contained" >Inventory</Button>
          <Button href="expense" variant="contained" >Sales</Button>
          <Button href="news" variant="contained" >Expense</Button>
          <Button href="sales" variant="contained" >News</Button>
        </Stack>
      </Stack>
    </div>
  )
}

export default LeftBar;
