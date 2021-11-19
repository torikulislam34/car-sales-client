import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Gallery from '../Gallery/Gallery';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <Gallery></Gallery>
            <Blog></Blog>
        </div>
    );
};

export default Home;