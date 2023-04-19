import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Header = () => {

  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.log(error))
  }
  return (
    <div>
    
      <div className="navbar bg-primary text-primary-content">
        <a className="text-xl normal-case btn btn-ghost">Auth Master</a>
        <Link className="text-xl normal-case btn btn-ghost" to="/">Home</Link>
        <Link className="text-xl normal-case btn btn-ghost" to="/login">Login</Link>
        <Link className="text-xl normal-case btn btn-ghost" to="/register">Register</Link>
        <Link className="text-xl normal-case btn btn-ghost" to="/orders">orders</Link>
        {
          user ? <>
          <span>{user.email}</span>
          <button onClick={handleLogOut} className="btn btn-xs ms-5">Sign out</button>
          </> :<Link to= "/login">Log in</Link>

        }
      </div>
    </div>
  );
};

export default Header;
