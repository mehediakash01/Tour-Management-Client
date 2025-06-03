import React from 'react';
import AuthInfo from '../../Hooks/AuthInfo';

const Home = () => {
   const  {name}= AuthInfo()
    return (
        <div>
            <h1>this is {name}</h1>
        </div>
    );
};

export default Home;