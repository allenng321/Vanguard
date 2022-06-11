import React from 'react'
import Grid from '@mui/material/Grid';
import LeftBar from './LeftBar.js'
import Divider from '@mui/material/Divider';
import RightSection from './RightSection.js'
import '../assets/css/App.css'

export default function App() {
  return (
      <div>

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <LeftBar/>
        </Grid>
        <Grid item xs={1}>
          <Divider id="left-bar-divider" absolute={true} orientation='vertical' flexItem={true} light={true} />
        </Grid>
        <Grid item xs={9}>
          <RightSection/>
        </Grid>
      </Grid>
    </div>
  )
}
