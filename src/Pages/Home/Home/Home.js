import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import DiscountCorner from '../DiscountCorner/DiscountCorner';
import Products from '../Products/Products';
import Reviews from '../Review/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <DiscountCorner></DiscountCorner>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;