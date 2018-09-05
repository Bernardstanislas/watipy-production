import React from 'react';

import StyledHome from './Home.style';
import Category from './Category';
import Logo from './Logo';

const Home = () => (
    <StyledHome>
        <Logo />
        <Category title='BIJOUX & DIY' backgroundColor='#fef9f9' textColor='#ff4e00'/>
        <Category title='ILLU & POSTER' backgroundColor='#f5fefd' textColor='#1cd0c4'/>
        <Category title='PEINTURE & ART' backgroundColor='#ffffff' textColor='#594e4e' />
    </StyledHome>
);

export default Home;
