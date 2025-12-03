import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import Services from '../Services/Services';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';

const ReviewsPromise = fetch('/public/reviews.json').then(res=> res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Services></Services>
            <Brands></Brands>
            <Reviews ReviewsPromise={ReviewsPromise}></Reviews>
        </div>
    );
};

export default Home;