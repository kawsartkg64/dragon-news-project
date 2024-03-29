import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import  { AuthContext } from '../../provider/AuthProvider';

const Register = () => {

    const {createusers} = useContext(AuthContext)

    const handleRegister = e =>{
       e.preventDefault();
       const name = e.target.name.value;
       const photo = e.target.photo.value;
       const email = e.target.email.value;
       const password = e.target.password.value;
       e.target.reset()

       console.log(name, photo, email, password);


    //    createusers
     createusers(email, password)
     .then(result =>{
        console.log(result.user)
     })
     .then(error =>{
        console.error(error)
     })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
            <div className="mb-4">
                <h1 className="text-5xl font-bold">Please Register now!</h1>
              </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Enter Your Photo URL" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Enter Your Email Address" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered" required />
                     
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p className='text-center'>Do not Have An Account ?<Link to='/login' className="font-semibold   text-blue-600"> Login</Link></p>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;