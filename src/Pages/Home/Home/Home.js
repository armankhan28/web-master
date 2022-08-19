import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;