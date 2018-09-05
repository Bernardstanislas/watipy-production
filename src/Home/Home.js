import React from 'react';

import StyledHome from './Home.style';
import Category from './Category';
import Logo from './Logo';

const colors = [
    { backgroundColor: '#fef9f9', textColor: '#ff4e00' },
    { backgroundColor: '#f5fefd', textColor: '#1cd0c4' },
    { backgroundColor: '#ffffff', textColor: '#594e4e' }
];

const Home = ({ collections = [] }) => (
    <StyledHome>
        <Logo />
        {collections.map((collection, index) => (
            <Category
                title={collection.title.toUpperCase()}
                backgroundColor={colors[index].backgroundColor}
                textColor={colors[index].textColor}
            />
        ))}
    </StyledHome>
);

export default Home;
