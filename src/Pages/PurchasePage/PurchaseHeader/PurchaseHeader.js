import { Container, Grid } from '@mui/material';
import React from 'react';
import Calendar from '../../Shared/Calendar/Calendar';

const PurchaseHeader = ({ date, setDate }) => {

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Calendar date={date} setDate={setDate}></Calendar>
                </Grid>
            </Grid>
        </Container>
    );
};

export default PurchaseHeader;