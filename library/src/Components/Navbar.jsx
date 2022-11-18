import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar=()=>{
    return (
        <div className="navdiv">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/dashboard">Dashboard</Link>
            <Link className="link" to="/books">My Books</Link>
            <Link className="link" to="/bookmarks">Bookmarks</Link>
        </div>
    )
}
export default Navbar;