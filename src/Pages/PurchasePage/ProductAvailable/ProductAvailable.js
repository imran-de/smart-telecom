import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';


const ProductAvailable = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://evening-stream-40669.herokuapp.com/products-collection')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Container>
            <Typography sx={{ color: 'success.main', my: 3, fontFamily: 'Georgia', fontWeight: 500 }} variant="h4">Purchase your products on, {date.toDateString()}</Typography>
            {
                bookingSuccess && <Alert severity="success">Congratulations! Product Booked Successfully done!</Alert>
            }
            <Grid container spacing={2}>
                {
                    products.map(booking => <Booking
                        key={booking.uniqueId}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default ProductAvailable;