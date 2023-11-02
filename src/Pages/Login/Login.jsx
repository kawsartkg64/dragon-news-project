import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/NavBar/Navbar";
import React, { useContext } from 'react';
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {
    const {signInuser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page', location)


    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password')
        e.target.reset()
        console.log(email, password)

        // signInuser
        signInuser(email, password)
        .then(result =>{
            console.log(result.user)

            navigate(location?.state? location.state: '/')

        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="mb-4">
                        <h1 className="text-5xl font-bold">Please Login now!</h1>
                      </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Do not Have An Account ?<Link to='/register' className="font-semibold  text-blue-600"> Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;