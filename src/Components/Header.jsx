import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
    
      <div className="navbar bg-primary text-primary-content">
        <a className="text-xl normal-case btn btn-ghost">Auth Master</a>
        <Link className="text-xl normal-case btn btn-ghost" to="/">Home</Link>
        <Link className="text-xl normal-case btn btn-ghost" to="/login">Login</Link>
        <Link className="text-xl normal-case btn btn-ghost" to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Header;
