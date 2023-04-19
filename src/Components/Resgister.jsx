import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Resgister = () => {

    const {user , createUser} = useContext(AuthContext)

    // console.log(createUser);

    const handleRegister = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name);

        createUser(email,  password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset( )
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div>
              <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold"> please Register!</h1>
   
    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' required placeholder="email" className="input input-bordered" />
        </div>
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
            <Link to='/login' href="#" className="label-text-alt link link-hover">already have an account</Link>
          </label>
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Resgister;