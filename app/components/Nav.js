import React from "react";
import { ThemeConsumer } from "../contexts/theme";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "rgb(187, 46, 31)"
};

export default function Nav({ toggleTheme }) {
  return (
    <ThemeConsumer>
      {theme => (
        <nav className="row space-between">
          <ul className="row nav">
            <li>
              <NavLink
                exact
                activeStyle={activeStyle}
                to="/"
                className="nav-link"
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={activeStyle}
                to="/battle"
                className="nav-link"
              >
                Battle
              </NavLink>
            </li>
          </ul>
          <button
            style={{ fontSize: 30 }}
            className="btn-clear"
            onClick={toggleTheme}
          >
            {theme === "light" ? "🔦" : "💡"}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}
