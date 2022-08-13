import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import './home.css'
const Home = () => {
    return (
        <>
            <Navbar />
            
            <section id="home" className="">
                <div className="container mt-3">
                    <div className="row my-5 align-items-center">
                        <div className="col-6"><img src="https://picsum.photos/300/200" className="" alt="" /></div>
                        <div className="col-6">
                            <h3>Why Reading is Important?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ullam quis ipsa, facilis vero nisi optio eaque, aut ratione repudiandae sapiente, dolorem inventore. Sunt voluptates esse repellendus nobis dolorem id, quis consequuntur repudiandae ut deleniti quidem optio mollitia maxime molestiae, veritatis laboriosam autem omnis explicabo reiciendis assumenda rem fuga, cupiditate sed. Neque, in illum inventore assumenda vitae velit laborum eveniet quidem ipsum ducimus quas molestiae atque sunt totam cupiditate ea! Quas sapiente iste iure numquam dolorum porro fuga. </p>
                        </div>
                    </div>
                    <div className="row mt-5 align-items-center">
                        <div className="col-6">
                            <h3>About Us</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ullam quis ipsa, facilis vero nisi optio eaque, aut ratione repudiandae sapiente, dolorem inventore. Sunt voluptates esse repellendus nobis dolorem id, quis consequuntur repudiandae ut deleniti quidem optio mollitia maxime molestiae, veritatis laboriosam autem omnis explicabo reiciendis assumenda rem fuga, cupiditate sed. Neque, in illum inventore assumenda vitae velit laborum eveniet quidem ipsum ducimus quas molestiae atque sunt totam cupiditate ea! Quas sapiente iste iure numquam dolorum porro fuga. </p>
                        </div>
                        <div className="col-6"><img src="https://picsum.photos/300/200" className="" alt="" /></div>
                    </div>
                </div>
            </section>
        </>        
    )
}

export default Home;