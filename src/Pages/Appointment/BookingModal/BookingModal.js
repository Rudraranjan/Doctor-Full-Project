import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};  


const BookingModal = ({openBooking, handleBookingClose, booking, date}) => {
        const {name, time} = booking;


        const handelBookingSubmit = e =>{
          alert('Submited Succesfully');

          //collect data
          //send to the server

          handleBookingClose();
          e.preventDefault();

        }


    
    
    return (
        
      <Modal
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handelBookingSubmit}>
          <TextField
                disabled
                sx={{width:'90%', m: 1}}                
                id="outlined-size-small"
                defaultValue={time}
                size="small"
         />
          <TextField
                
                sx={{width:'90%', m: 1}}                
                id="outlined-size-small"
                defaultValue='Your Name'
                size="small"
         />
          <TextField
                
                sx={{width:'90%', m: 1}}                
                id="outlined-size-small"
                defaultValue="Your Email"
                size="small"
         />
          <TextField
                
                sx={{width:'90%', m: 1}}                
                id="outlined-size-small"
                defaultValue="Phone No"
                size="small"
         />
          <TextField
                disabled
                sx={{width:'90%', m: 1}}                
                id="outlined-size-small"
                defaultValue={date}
                size="small"
         />
         <Button type='submit' variant="contained">Submit</Button>
          </form>
        </Box>
      </Modal>
    );
};

export default BookingModal;