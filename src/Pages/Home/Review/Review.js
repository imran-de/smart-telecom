import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

const Review = () => {
    const { user } = useAuth();

    const [message, setMessage] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.photoURL = user?.photoURL;

        fetch('https://evening-stream-40669.herokuapp.com/reviews', {
            method: "POST",
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => {
                if (result?.insertedId) {
                    alert("Recorded your review succssfully done.")
                    setMessage(`Congratulations! Recorded your review.`)
                } else {
                    alert("Sorry! Your review can't be recorded this time. Try again later latter.");
                    setMessage("Something Wrong! Please try again later!");
                }
                reset();
            })
    };

    return (
        <div><Navigation></Navigation>
            <Typography sx={{ fontWeight: 600, paddingY: 2, color: 'success.main', fontFamily: 'Georgia', backgroundColor: '#9feada' }} variant="h4" component="div">
                Please drop your review
            </Typography>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col sm={12} md={8} className="row-box px-5 pb-4">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="text-center pt-5 pb-3">
                                {
                                    message && <div className="alert alert-success mt-3" role="alert">
                                        {message}
                                    </div>
                                }
                            </div>
                        </div>
                        <Form onSubmit={handleSubmit(onSubmit)}>

                            {/* Name */}
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="name">Full Name</Form.Label>
                                <Form.Control type="text" id="product-name" defaultValue={user?.displayName} {...register("name")} placeholder="Full Name" readOnly required />
                            </Form.Group>

                            {/* Email */}
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="name">Email</Form.Label>
                                <Form.Control type="text" id="email" defaultValue={user?.email} {...register("email")} placeholder="Email" readOnly required />
                            </Form.Group>
                            
                            {/* Rating */}
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="price">Rate (1 to 5)</Form.Label>
                                <Form.Control type="number" min="1" max="5" id="rating" {...register("rating")} placeholder="5" required />
                            </Form.Group>

                            {/* Writing review section */}
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="comment">Write your review</Form.Label>
                                <Form.Control as="textarea" id="comment" {...register("comment")} placeholder="Write your review" required />
                            </Form.Group>
                            <div className="text-center">
                                <Button type="submit" className="bg-blue px-5">Review Submit</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Review;