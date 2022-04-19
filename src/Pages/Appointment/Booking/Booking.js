import { Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({booking, date}) => {
    const {time, name, space} = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
        <Grid item xs={12} sm={6} md={4} >
               <Paper elevation={3} sx={{py : 5}}>
               <Typography sx={{ color: 'info.main', fontWeight : 600 }} variant="h4" gutterBottom component="div">
                   {name}
                </Typography>
               <Typography sx={{ color: 'secondary.main' }} variant="h6" gutterBottom component="div">
                   {time}
                </Typography>
                <Typography sx={{ color: 'text.disabled' }} variant="caption" display="block" gutterBottom>
                    {space} space left
                </Typography>
                <Button onClick={handleBookingOpen} variant="contained">Book Appointment</Button>
                </Paper>   
        </Grid>
        <BookingModal
             date={date}
             booking={booking}
             openBooking={openBooking}
             handleBookingClose={handleBookingClose}
        ></BookingModal> 
        </>
    );
};

export default Booking;