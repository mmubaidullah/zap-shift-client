import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import Services from '../Services/Services';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';
import FeaturesSection from '../FeatureCard/FeaturesSection';
import FAQ from '../FAQ/FAQ';
import PriorityBanner from '../PriorityBanner/PriorityBanner';

const ReviewsPromise = fetch('/public/reviews.json').then(res=> res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Services></Services>
            <Brands></Brands>
            <FeaturesSection></FeaturesSection>
            <PriorityBanner></PriorityBanner>
            <Reviews ReviewsPromise={ReviewsPromise}></Reviews>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;