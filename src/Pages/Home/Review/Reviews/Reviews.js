import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import Star from '../../../Shared/Star/Star';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    //Load reviews
    useEffect(() => {
        fetch('https://evening-stream-40669.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, []);

    return (
        <>
            <Typography sx={{ fontWeight: 600, paddingY: 3, color: 'success.main', fontFamily: 'Georgia', backgroundColor: '#9feada' }} variant="h4" component="div">
                Customers Satisfaction
            </Typography>
            <Container className="my-5">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                    
                    {/* map in array */}
                    {reviews?.map(review => <div
                        key={review?._id}
                        className="col"
                    >
                        <Card className="h-100 product-box">
                            <div className="d-flex justify-content-center align-items-center pt-3">
                                <Card.Img src={review?.photoURL} style={{ borderRadius: '50%', width: "65px", height: "65px" }} />
                            </div>
                            <Card.Body className="text-center">
                                <Card.Title>{review?.name}</Card.Title>
                                <p className="text-uppercase fw-bold">{review?.profession}</p>
                                <Star star={review?.rating}></Star>
                                <Card.Text>
                                    {review?.comment}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    )}

                </div>

            </Container>
        </>
    );
};

export default Reviews;