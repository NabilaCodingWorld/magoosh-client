import React from 'react';
import About from '../About/About';
import More from '../More/More';
import Resource from '../Resource/Resource';
import Team from '../Team/Team';
import Educator from './Educator/Educator';
import Cover from './Cover/Cover';
import Expert from '../Expert/Expert';
import Hire from '../Hire/Hire';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>

            <Helmet> <title> Magoosh | Graduate School Test </title> </Helmet>
            
            <Cover></Cover>
            <About></About>
            <Expert></Expert>
            <More></More> 
            <Educator></Educator>
            <Resource></Resource>
            <Hire></Hire>
            <Team></Team>
          
        </div>
    );
};

export default Home;