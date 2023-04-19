import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Login = () => {

  const {signIn} = useContext(AuthContext)

    const handleLogin = (event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser)
          form.reset()

        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold"> please Login!</h1>
   
    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' required placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' required placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <Link to='/register' className= "mb-4 ml-8 label-text-alt link link-hover"> 
    new to auth master?please register
      </Link>
    </div>
  </div>
</div>
    );
};

export default Login;