import { Button, TextField, Alert, Container } from '@mui/material';
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = event => {
        setEmail(event.target.value);
        event.preventDefault();
    }

    const handleAdminSubmit = event => {
        const user = { email }
        fetch('https://evening-stream-40669.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    console.log(data);
                }
            })
        event.preventDefault();
    }
    return (
        <div>
            <Container>
                <Typography sx={{ fontWeight: 600, paddingY: 2, color: 'success.main', fontFamily: 'Georgia', backgroundColor: '#9feada' }} variant="h4" component="div">
                    Make Admin
                </Typography>
            </Container>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '30%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <br />
                <Button type="submit" variant="contained" sx={{ marginTop: 5 }}>Submit</Button>
            </form>
            {
                success && <Alert severity="success">Made Admin Successfully done!</Alert>
            }
        </div>
    );
};

export default MakeAdmin;