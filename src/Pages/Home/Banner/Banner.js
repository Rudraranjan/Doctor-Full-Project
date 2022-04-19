import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,
    

}
const verticalCenter ={
    display: 'flex',
    alignItems: 'center',
    height: 450
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid style={{...verticalCenter,textAlign: 'left'}} item xs={12} md={6}>
           <Box>
           <Typography variant='h3' sx={{mt: 2,fontWeight: 'bold'}}>
               Book Your Doctor Slot
           </Typography>
           <Typography variant='h6' sx={{mt: 2, fontWeight: 300}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cupiditate aut distinctio unde autem aspernatur enim ipsum, laborum iure! Nisi?
           </Typography>
           <Button variant="contained" sx={{my: 2}} style={{backgroundColor:'#71F2DF'}}>Get Appointment</Button>
           </Box>
          </Grid>
          <Grid item xs={12} md={6} style={verticalCenter}>
            <img style={{width: '600px'}} src={chair} alt="" />
          </Grid>
         
        </Grid>
      </Container>
    );
};

export default Banner;
 