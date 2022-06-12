import React from 'react';
import Grid from '@mui/material/Grid'
import { Stack } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


import coolgrey from '../../assets/coolgrey.png'
import foamrunner from '../../assets/foamrunner.png'
import stories from '../../assets/stories.png'
import newbalance from '../../assets/newbalance.png'
import zion from '../../assets/zion.png'
import jordan from '../../assets/jordan.png'

function News() {
  return (
    <div className='right-section-pages'>
    <Stack spacing={4}>
      <h1>News</h1>
      <p style={{margin: 0}}> Check out the latest news related to sneakers!</p>

      <span></span>
      <Box style={{maxHeight: '73vh', overflow: 'auto'}}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'transparent' }}>
              <ListItem alignItems="flex-start" sx={{minHeight: 300, mb: 4}}>
              <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={coolgrey}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    New Release: Air Jordan 11 "Cool Grey"
                  </Typography>
                  <Typography variant="body2" style={{color: 'black'}}>
                      Look for the Air Jordan 11 “Cool Grey” to release on December 11th at select retailers and StockX. The retail price tag is set at $225 USD.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button target="_blank" href="https://sneakerbardetroit.com/air-jordan-11-cool-grey-ct8012-005-release-date" size="small">Learn More</Button>
                </CardActions>
              </Card>
              </ListItem>
              <ListItem alignItems="flex-start" sx={{minHeight: 300, mb: 4}}>
                <Card sx={{ maxWidth: 400 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={stories}
                    alt="stories"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Stories Of The Week: June 4th to June 10th"
                    </Typography>
                    <Typography variant="body2" style={{color: 'black'}}>
                    A first look at the Air Jordan 37 surfaced over the past week, showcasing what’s next from Michael Jordan’s eponymous imprint.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button target="_blank" href="https://sneakernews.com/2022/06/10/sneakernews-release-dates-updates-june-4th-2022/" size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </ListItem>
              <ListItem alignItems="flex-start" sx={{minHeight: 300}}>
                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={foamrunner}
                      alt="foamrunner"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Where To Buy: Yeezy Foam Runner “Desert Sand”
                      </Typography>
                      <Typography variant="body2" style={{color: 'black'}}>
                        The adidas Yeezy Foam Runner has been ridiculed before it even launched at retail. Yet. The slip-on shoe by the former “Kanye West” continues being one of the most-coveted on the market.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button target="_blank" href="https://sneakernews.com/2022/06/07/yeezy-foam-runner-desert-sand-gv6843-store-list/" size="small">Learn More</Button>
                    </CardActions>
                  </Card>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6}>
            <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'transparent' }}>
              <ListItem alignItems="flex-start" sx={{minHeight: 300, mb: 4}}>
              <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={newbalance}
                  alt="newbalance"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Ronnie Fieg x New Balance Anniversary Collection
                  </Typography>
                  <Typography variant="body2" style={{color: 'black'}}>
                  Ronnie Fieg is making his 40th birthday one to remember by releasing a load of New Balance collaborations beginning...
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button target="_blank" href="https://sneakernews.com/2022/06/10/kith-ronnie-fieg-new-balance-birthday-pack/" size="small">Learn More</Button>
                </CardActions>
              </Card>
              </ListItem>
              <ListItem alignItems="flex-start" sx={{minHeight: 300, mb: 4}}>
                <Card sx={{ maxWidth: 400 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={zion}
                    alt="zion"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      New Release: Jordan Zion 2 “Prism”
                    </Typography>
                    <Typography variant="body2" style={{color: 'black'}}>
                    ion Williamson was out of commission throughout much of the 2021-22 NBA season, with fans and teammates eagerly awaiting his full recovery
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button target="_blank" href="https://sneakernews.com/2022/06/09/jordan-zion-2-half-blue-pink-prime-deep-royal-blue/" size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </ListItem>
              <ListItem alignItems="flex-start" sx={{minHeight: 300}}>
                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={jordan}
                      alt="jordan"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        New Release: Jasmine Jordan’s Air Jordan 1 Pinnacle PE
                      </Typography>
                      <Typography variant="body2" style={{color: 'black'}}>
                      As MJ’s daughter, it’s likely Jasmine Jordan has a sizable collection of PEs. One such pair was even seen on her feet about seven years ago — and as a release is, at this point, highly improbable, the only...
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button target="_blank" href="https://sneakernews.com/2022/06/10/jasmine-jordan-air-jordan-1-pinnacle-pe-photos/" size="small">Learn More</Button>
                    </CardActions>
                  </Card>
              </ListItem>
            </List>
          </Grid>
        </Grid>

      </Box>
    </Stack>
    </div>
  )
}

export default News;
