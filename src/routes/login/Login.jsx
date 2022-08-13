import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import './login.css'
const Login = () => {
    return (
        <>
            <Navbar />
            
            <section id="login" className="">
                <div className="container">
                    <div className="row mt-4 justify-content-center">
                        <h1 className="text-center mt-4">LOGIN</h1>
                        <div className="col-md-5 col-10">
                            <form action="/login" method="POST" className="my-4">
                                <div className="card p-4">
                                    <div className="card-body mb-4 p-0 text-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2 bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>
                                        <label for="username" className="form-label">Username: </label>
                                        <input type="text" className="form-control text-start" id="username" name="username"  placeholder="Username" required />
                                        <div className="invalid-feedback">Enter your username!</div>
                                    </div>
                                    <div className="card-body mb-3 p-0 text-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2 bi bi-check2-circle" viewBox="0 0 16 16"><path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/><path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/></svg>
                                        <label for="password" className="form-label">Password: </label>
                                        <input type="password" className="form-control text-start" id="password" name="password"  placeholder="Password" required />
                                        <div className="invalid-feedback">Enter your password!</div>
                                    </div>
                                    <div className="d-grid mt-3">
                                        <button className="btn btn-success">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </section>
        </>        
    )
}

export default Login;