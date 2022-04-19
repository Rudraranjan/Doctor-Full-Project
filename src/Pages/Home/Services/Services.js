import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';

const services = [
    {
        name: 'Fluoride treatment',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem officia laboriosam libero, pariatur assumenda inventore ipsum soluta eaque eligendi, quod veritatis? Dolore, ex quisquam?',
        img: fluoride
        
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem officia laboriosam libero, pariatur assumenda inventore ipsum soluta eaque eligendi, quod veritatis? Dolore, ex quisquam?',
        img: cavity  
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem officia laboriosam libero, pariatur assumenda inventore ipsum soluta eaque eligendi, quod veritatis? Dolore, ex quisquam?',
        img: whitening  
    }

]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography sx={{ fontWeight: 500, color: 'success.main', m: 2 }} variant="h6" component="div">
          Our Services
        </Typography>
        <Typography sx={{ fontWeight: 'bold', color: 'success.main', m: 2 }} variant="h4" component="div">
          Service We Provide
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
              services.map(service => <Service
               key={service.name}
               service={service}
              ></Service>)
          }
        </Grid>
        </Container>
      </Box>
    );
};

export default Services;