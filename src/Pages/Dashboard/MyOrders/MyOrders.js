import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = ({ date }) => {
    const { user } = useAuth();
    const [orderProducts, setOrderProducts] = useState([]);

    useEffect(() => {
        const url = `https://evening-stream-40669.herokuapp.com/orders?email=${user.email}&&date=${date}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrderProducts(data))
    }, [date]);

    const handleDelete = id => {
        const confirm = window.confirm(`Are you sure, you want to delete this order??`);
        const url = `https://evening-stream-40669.herokuapp.com/orders-collection/${id}`;
        if (confirm) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = orderProducts.filter(product => product._id !== id);
                        setOrderProducts(remaining);

                        alert('Successfully deleted your order.');
                    }
                })
        }
    }

    return (
        <div>
            <Typography sx={{ fontWeight: 500, paddingY: 2, color: '#success.main', fontFamily: 'Georgia', backgroundColor: '#c4eee5', marginBottom: 1 }} variant="h5" component="div">
                My Orders
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="My Orders Table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#dddedc' }}>
                            <TableCell sx={{ fontFamily: 'Georgia' }}>Name</TableCell>
                            <TableCell align="left" sx={{ fontFamily: 'Georgia' }}>Product Name</TableCell>
                            <TableCell align="right" sx={{ fontFamily: 'Georgia' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orderProducts.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx={{ fontFamily: 'Georgia' }}>
                                    {row.userName}
                                </TableCell>
                                <TableCell align="left" sx={{ fontFamily: 'Georgia' }}>{row.productName}</TableCell>
                                <TableCell align="right" sx={{ fontFamily: 'Georgia' }}><Button variant="contained" onClick={() => handleDelete(row._id)}>Delete Order</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;