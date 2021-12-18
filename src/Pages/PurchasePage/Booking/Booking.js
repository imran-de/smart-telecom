import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    const { name, price, stock } = booking;
    return (
        <>
            <Grid item xs={12} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontFamily: 'Georgia' }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div" sx={{ fontFamily: 'Georgia', fontWeight: 500 }}>
                        Only {price}
                    </Typography>
                    <Typography sx={{ fontFamily: 'Georgia' }} variant="caption" display="block" gutterBottom>
                        Only {stock} products available
                    </Typography>
                    <Button variant="contained" sx={{ fontFamily: 'Georgia' }} onClick={handleBookingOpen}>Book Product</Button>
                </Paper>
            </Grid >
            <BookingModal
                date={date}
                booking={booking}
                handleBookingClose={handleBookingClose}
                openBooking={openBooking}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;