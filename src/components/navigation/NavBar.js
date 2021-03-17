import React from "react";
import "./navbar.scss";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav
        className="navigation"
        style={{
          flexDirection: "row",
        }}
      >
        <ul>
          <li>
            <a href="/volunpioneer/#">
              <FavoriteRoundedIcon
                style={{
                  color: "red",
                  scale: 2,
                }}
              />
            </a>
          </li>
          <li>
            <a href="/volunpioneer/#" font="Arial">
              Home
            </a>
          </li>
          <li>
            <a href="/volunpioneer/#/organisation" font="Arial">
              Organization
            </a>
          </li>
          <li>
            <a href="/volunpioneer/#/volunteer" font="Arial">
              Volunteer
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
