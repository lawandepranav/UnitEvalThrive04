import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./navbar.css";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [burger, setBurger] = React.useState(true);
  const open = Boolean(anchorEl);
  
  const handleClose = () => {
    setAnchorEl(null);
    setBurger(true);
  };

  return (
    <div className="navbarDiv">
      <Link className="home_link" to="/">
        Home
      </Link>
      <div className="linkDiv ">
        <Link className="links" to="/dashboard">
          Dashboard
        </Link>
        <Link className="links" to="/books">
          My Books
        </Link>
        <Link className="links" to="bookmarks">
          Bookmarks
        </Link>
      </div>

      <div className="dropMenu">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={(event) => {
            setAnchorEl(event.currentTarget);
            setBurger(!burger);
          }}
        >
          {burger ? (
            <img
              className="menuIcon"
              src="https://i.ibb.co/Y2H7jpg/icons8-menu-rounded-50.png"
              height={"30px"}
            />
          ) : (
            <img
              className="menuIcon"
              src="https://i.ibb.co/T8X6nd0/icons8-cancel-64.png"
              height={"30px"}
            />
          )}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Link className="dropmenu" to="/dashboard">
            <MenuItem onClick={handleClose}>Dashboard</MenuItem>
          </Link>
          <Link className="dropmenu" to="/books">
            <MenuItem onClick={handleClose}>My Books</MenuItem>
          </Link>
          <Link className="dropmenu" to="/bookmarks">
            <MenuItem onClick={handleClose}>Bookmakrs</MenuItem>
          </Link>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
