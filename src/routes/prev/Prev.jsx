import React from 'react';

import Navbar from '../../components/navbar/Navbar';
// import Calendar from '../../components/calendar/Calendar.jsx';

import './prev.css'
import Calendar from 'react-calendar';
// import Carousel from '../../components/carousel/Carousel'
import 'react-calendar/dist/Calendar.css';
import './cal.css';

const Prev = () => {
    return (
        <>
            <Navbar />
            
            <section id="Prev" className="">
                {/* <Carousel/> */}
                <div className="row justify-content-center d-flex mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-caret-left-fill d-inline" viewBox="0 0 16 16">
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                    </svg>
                    <div className="rounded-pill outer d-flex align-items-center flex-column mx-4">
                        <div className="rounded-pill inner mt-4"></div>
                        <p className="mt-2 mx-5 px-4">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div className="rounded-pill outer d-flex align-items-center flex-column mx-4">
                        <div className="rounded-pill inner mt-4"></div>
                        <p className="mt-2 mx-5 px-4">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div className="rounded-pill outer d-flex align-items-center flex-column mx-4">
                        <div className="rounded-pill inner mt-4"></div>
                        <p className="mt-2 mx-5 px-4">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-caret-right-fill d-inline" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                </div>
                <div className='calendar'>
                    <Calendar/>
                </div>
            </section>
        </>        
    )
}

export default Prev;