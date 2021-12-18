import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://evening-stream-40669.herokuapp.com/products-collection')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#ebebeb', paddingBottom: '50px' }}>
            <Container>
                <Typography sx={{ fontWeight: 600, mx: 2, mb: 5, pt: 8, color: 'success.main', fontFamily: 'Georgia' }} variant="h4" component="div">
                    BEST CHOICE, Top Rated Phones 2022
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product.uniqueId}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;