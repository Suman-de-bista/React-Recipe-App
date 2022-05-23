import React from 'react';
import Home from './Home';
import Searched from './searched';
import { Route, Routes, useLocation } from 'react-router-dom';
import Cuisine from './cuisine';
import Recipes from './Recipes';
import { AnimatePresence } from 'framer-motion';

const Pages = () => {
    const location = useLocation();
    return (
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home/>} />
                    <Route path='/cuisine/:type' element={<Cuisine/>} />
                    <Route path='/searched/:search' element={<Searched/>} />
                    <Route path='/recipes/:name' element={<Recipes/>} />
                </Routes>
            </AnimatePresence>
    );
}

export default Pages;
