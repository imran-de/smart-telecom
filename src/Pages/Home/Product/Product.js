import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, price, description, img } = product;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, height: '545px', borderRadius: 3, boxShadow: 0, backgroundColor: '#c8f9d9' }}>
                <CardMedia
                    component="img"
                    style={{ width: '290px', height: '220px', objectFit: 'fill', paddingTop: '20px', paddingBottom: '10px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{ fontWeight: 600, fontFamily: 'Georgia' }} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ fontWeight: 400, fontFamily: 'Georgia' }} variant="h6" component="div">
                        <span>Official Price: </span> <span sx={{ color: 'blue' }}>{price}</span>
                    </Typography>
                    <Typography sx={{ marginTop: '15px', fontFamily: 'Georgia' }} variant="body1" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <Link to="/purchase" style={{ textDecoration: 'none', color: 'white' }}><Button variant="contained">Purchase Now</Button></Link>
            </Card>
        </Grid>
    );
};

export default Product;