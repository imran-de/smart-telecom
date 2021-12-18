import React from 'react';
import { Typography } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';

const PayMethod = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Typography sx={{ fontWeight: 600, marginTop: 8, paddingY: 2, color: 'success.main', fontFamily: 'Georgia', backgroundColor: '#9feada' }} variant="h4" component="div">
                Payment System Coming Soon!
            </Typography>
        </div>
    );
};

export default PayMethod;