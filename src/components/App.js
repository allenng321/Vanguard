import React from 'react'
import Grid from '@mui/material/Grid';
import LeftBar from './LeftBar.js'
import Divider from '@mui/material/Divider';
import '../assets/css/App.css'

export default function App() {
  return (
      <div>

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <LeftBar/>
        </Grid>
        <Grid item xs={1}>
          <Divider id="left-bar-divider" absolute={true} orientation='vertical' flexItem={true} light={true} />
        </Grid>
        <Grid item xs={8}>


        </Grid>
      </Grid>
    </div>
  )
}
