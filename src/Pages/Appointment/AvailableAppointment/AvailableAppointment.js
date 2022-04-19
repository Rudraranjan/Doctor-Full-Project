import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Booking from '../Booking/Booking';



const bookings = [
    {
        id: 1,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
    },
    {
        id: 2,
        name: 'Teeth Orthodontics',
        time: '8.00 AM - 9.00 AM',
        space: 10,
    },
    {
        id: 3,
        name: 'Cosmetic Dentistry',
        time: '10.05 AM - 11.30 AM',
        space: 12,
    },
    {
        id: 4,
        name: 'Teeth Cleaning',
        time: '05.00 PM - 08.00 PM',
        space: 5,
    },
    {
        id: 5,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
    },
    {
        id: 1,
        name: 'Teeth Cleaning',
        time: '11.00 AM - 12.00 PM',
        space: 5,
    },
    
]

const AvailableAppointment = ({date}) => {
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb:2, fontWeight : 600 }}>Available Apointmnets on {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking =><Booking
                    key={booking.id}
                    booking={booking}
                    date={date}
                    ></Booking>)
                }               
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;