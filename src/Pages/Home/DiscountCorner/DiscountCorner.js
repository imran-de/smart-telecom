import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import DiscountProduct from '../DiscountProduct/DiscountProduct';

const DiscountCorner = () => {
    const [discountProducts, setDiscountProducts] = useState([]);

    useEffect(() => {
        fetch('https://evening-stream-40669.herokuapp.com/discounts-collection')
            .then(res => res.json())
            .then(data => setDiscountProducts(data))
    }, []);

    return (
        <div>
            <Typography sx={{ fontWeight: 600, paddingY: 4, color: 'success.main', fontFamily: 'Georgia', backgroundColor: '#9feada' }} variant="h4" component="div">
                Discount Corner
            </Typography>
            <Typography variant="h6" sx={{ paddingX: '15%', fontFamily: 'Georgia', backgroundColor: '#cdf5de', paddingY: '50px' }} component="p">
                In every weak, 3 lucky person get incredible discount in Smart Telecom. To catch this discount buy the product from Smart Telecom and match the discount coupon in discount corner products.
            </Typography>
            <Box sx={{ flexGrow: 1, backgroundColor: '#ebebeb', paddingBottom: '50px' }}>
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            discountProducts.map(product => <DiscountProduct
                                key={product.uniqueId}
                                product={product}
                            ></DiscountProduct>)
                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default DiscountCorner;