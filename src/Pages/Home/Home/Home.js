import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import Services from '../Services/Services';
import PopularProduct from './PopularProduct/PopularProduct';
import Team from './Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ServiceInfo></ServiceInfo>
            <PopularProduct></PopularProduct>
            <Team></Team>
        </div>
    );
};

export default Home;