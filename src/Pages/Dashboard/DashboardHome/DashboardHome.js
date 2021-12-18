import * as React from 'react';
import { Grid } from '@mui/material';
import Calendar from '../../Shared/Calendar/Calendar';
import MyOrders from '../MyOrders/MyOrders';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
                <Calendar
                    date={date}
                    setDate={setDate}
                />
            </Grid>
            <Grid item xs={12} sm={7}>
                <MyOrders
                    date={date}
                />
            </Grid>
        </Grid>
    );
};

export default DashboardHome;