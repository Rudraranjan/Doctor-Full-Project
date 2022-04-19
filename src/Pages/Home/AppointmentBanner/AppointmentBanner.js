import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBg = {
     background: `url(${bg})`,
     backgroundColor: 'rgba(45,58,74,0.7)',
     backgroundBlendMode: 'darken, luminosity',
     marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img 
          style={{width: 400, marginTop: '-110px'}}
          src={doctor} alt=''/>
        </Grid>
        <Grid item xs={12} md={6} sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            textAlign: 'left',
            alignItems: 'center'
        }}>
          <Box>
          <Typography variant='h6' sx={{my: 3}} style={{color:'#71F2DF ', fontWeight: 600}}>
                Appointment
          </Typography>
          <Typography variant='h4' sx={{my: 3}} style={{color:'white', fontWeight: 600}}>
                Make an Appointment Today
          </Typography>
          <Typography variant='h6' sx={{my: 3}} style={{color:'white'}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem explicabo voluptas pariatur blanditiis obcaecati non eaque laboriosam, fugiat voluptatibus.
          </Typography>
          <Button variant="contained" sx={{mb: 2}} style={{backgroundColor: '#71F2DF'}}>Learn More</Button>
          </Box>
        </Grid>        
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;