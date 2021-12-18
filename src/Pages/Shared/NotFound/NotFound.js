import React from 'react';
import Typography from '@mui/material/Typography';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const NotFound = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Typography sx={{ fontWeight: 600, paddingY: 2, color: 'success.main', fontFamily: 'Georgia', backgroundColor: '#9feada' }} variant="h4" component="div">
                Something Wrong!! Page not found
            </Typography>
            <img src="https://i.ibb.co/w0LBKBF/404Page.png" alt="" />
            <Footer></Footer>
        </div>
    );
};

export default NotFound;