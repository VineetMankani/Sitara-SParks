import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import './dashboard.css'
const Dashboard = () => {
    return (
        <>
            <Navbar />
            
            <section id="dashboard" className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <div className="card d-flex flex-column align-items-center profile p-5 py-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" fill="currentColor" className="mb-3 bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>
                            <h3 className="username mb-3">VineetMankani</h3>
                            
                            <div className="text-start">
                                <h5 className="rank text-start">Rank: 21</h5>
                                <span className="aboutme text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam ipsum ad quas voluptatem impedit expedita eaque nobis incidunt molestiae voluptate.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                       <div className="leaderboard d-flex align-items-end">
                            <div className="m-0 p-0">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuH5SFZHHNK2Mu0A2Xa70IfQ1uAEUQ3JWieCHfsXO1Ge29maZjf5JoObfG_dkshrZFQBo&usqp=CAU" className="m-0 p-0" alt="" />
                                <h2 className="m-0 p-0">2</h2>
                                <div className="r1 m-0 p-0 bg-primary"></div>
                            </div>
                            <div className="m-0 p-0">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuH5SFZHHNK2Mu0A2Xa70IfQ1uAEUQ3JWieCHfsXO1Ge29maZjf5JoObfG_dkshrZFQBo&usqp=CAU" className="m-0 p-0" alt="" />
                                <h2 className="m-0 p-0">1</h2>
                                <div className="r2 m-0 p-0 bg-dark"></div>
                            </div>
                            <div className="m-0 p-0">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuH5SFZHHNK2Mu0A2Xa70IfQ1uAEUQ3JWieCHfsXO1Ge29maZjf5JoObfG_dkshrZFQBo&usqp=CAU" className="m-0 p-0" alt="" />
                                <h2 className="m-0 p-0">3</h2>
                                <div className="r3 m-0 p-0 bg-secondary"></div>
                            </div>
                       </div>
                    </div>
                </div>
            </section>
        </>        
    )
}

export default Dashboard;