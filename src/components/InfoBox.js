import React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar'

import pfp from '../assets/pfp.jpg'

function InfoBox() {
  return (
    <div className='info-box'>
      <Grid container spacing={2}>
        <Grid item xs={9}>
            <h2> Hello User! </h2>
            <p style={{paddingBottom: 10}}> Welcome to Vanguard! </p>
            <p> Subscription Plan:</p>
            <p style={{paddingTop: 5, color: '#B8C7F4', fontSize: '17px'}}>Basic</p>
        </Grid>

        <Grid item xs={3}>

          <Avatar id="avatar" src={pfp} alt="pfp" sx={{ width: 64, height: 64 }}/>

        </Grid>
      </Grid>

    </div>
  )
}

export default InfoBox;
