import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../useFirebase/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, handleSignOut } = useFirebase();
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/Products">products</Link>
      <Link to="/Orders">Orders</Link>
      <Link to="/Register">Register</Link>
      <span>{user?.displayName && user.displayName}</span>
      {user?.uid ? (
        <button onClick={handleSignOut}>sign out</button>
      ) : (
        <Link to="login">Login</Link>
      )}
    </div>
  );
};

export default Header;
