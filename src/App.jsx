import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Login from './routes/login/Login';
import Prev from './routes/prev/Prev';
import AOTD from './routes/aotd/AOTD';
import Dashboard from './routes/dashboard/Dashboard';

const App = () => {
    return(
        <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/login' element = {<Login/>} />
            <Route path='/previousarticle' element = {<Prev/>} />
            <Route path='/articleoftheday' element = {<AOTD/>} />
            <Route path='/dashboard' element = {<Dashboard/>} />
        </Routes>
    )
}

export default App;