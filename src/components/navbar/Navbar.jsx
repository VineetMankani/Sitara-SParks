import React from 'react';
// import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css'

const Navbar = () => {
    // const [activeNav, setActiveNav] = useState('/');
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light p-0">

            <div className="d-flex flex-column w-100">
                <div className="navbar-header w-100 py-2">
                    <span className="navbar-brand">Sitara SParks</span>
                </div>
                <div className="navbar-body w-100">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav justify-content-evenly">

                            <NavLink to="/"                className="nav-link mx-4">Home</NavLink>
                            <NavLink to="/login"           className="nav-link mx-4">Login</NavLink>
                            <NavLink to="/previousarticle" className="nav-link mx-4">Previous Article</NavLink>
                            <NavLink to="/articleoftheday" className="nav-link mx-4">Article of the Day</NavLink>
                            <NavLink to="/dashboard"       className="nav-link mx-4">Dashboard</NavLink>

                            {/* <a href="/"                onClick={()=>setActiveNav("/")} className={activeNav === '/' ? 'active nav-link mx-4' : 'nav-link mx-4'} >Home</a>
                            <a href="/login"           onClick={()=>setActiveNav("/login")} className={activeNav === '/login' ? 'active nav-link mx-4' : 'nav-link mx-4'} >Login</a>
                            <a href="/previousarticle" onClick={()=>setActiveNav("/previousarticle")} className={activeNav === '/previousarticle' ? 'active nav-link mx-4' : 'nav-link mx-4'} >Previous Article</a>
                            <a href="/articleoftheday" onClick={()=>setActiveNav("/articleoftheday")} className={activeNav === '/articleoftheday' ? 'active nav-link mx-4' : 'nav-link mx-4'} >Article of the Day</a>
                            <a href="/dashboard"       onClick={()=>setActiveNav("/dashboard")} className={activeNav === '/dashboard' ? 'active nav-link mx-4' : 'nav-link mx-4'} >Dashboard</a> */}
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;

