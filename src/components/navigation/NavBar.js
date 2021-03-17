import React from "react";
import "./navbar.scss";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='navbar'>
      <nav
        className='navigation'
        style={{
          flexDirection: "row"
        }}
      >
        <ul>
          <li>
            <Link to='/'>
              <FavoriteRoundedIcon
                style={{
                  color: "red",
                  scale: 2
                }}
              />
            </Link>
          </li>
          <li>
            <Link to='/' font='Arial'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/organisation' font='Arial'>
              Organization
            </Link>
          </li>
          <li>
            <Link to='/volunteer' font='Arial'>
              Volunteer
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
