import React from 'react';
import InfoBox from './InfoBox.js'
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';



function LeftBar() {
  return (
    <div className='left-bar'>
      <Stack spacing={4}>
        <InfoBox/>
        <Divider id="info-box-divider" flexItem={true} light={true} style={{marginRight:"-1px"}} />
        <span></span>
        <Stack spacing={4}>
          <Button href="/inventory" variant="contained" >Inventory</Button>
          <Button href="/sales" variant="contained" >Sales</Button>
          <Button href="/news" variant="contained" >News</Button>
        </Stack>
      </Stack>
    </div>
  )
}

export default LeftBar;
