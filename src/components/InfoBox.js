import React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar'

function InfoBox() {
  return (
    <div className='info-box'>
      <Grid container spacing={2}>
        <Grid item xs={9}>
            <h2> Hello User! </h2>
            <p> Welcome to Vanguard! </p>
            <p> Current number of sneakers: 22</p>
        </Grid>

        <Grid item xs={3}>

          <Avatar id="avatar" alt="pfp" sx={{ width: 64, height: 64 }}/>

        </Grid>
      </Grid>

    </div>
  )
}

export default InfoBox;
