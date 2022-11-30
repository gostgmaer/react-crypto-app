import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FaBitcoin } from "react-icons/fa";
import { NavURL } from "../../Assets/StaticData/Data";
const Header = () => {
  return (
    <div className="container-fluid bg-light">
      <header className="d-flex container flex-wrap align-items-center  justify-content-center justify-content-md-between py-3">
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <FaBitcoin />
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          {NavURL.map((item) => {
            return (
              <NavLink
                key={item.id}
                className="nav-link px-2 link-dark"
                to={item.url}
              >
                {item.text}
              </NavLink>
            );
          })}
        </ul>

        <div className="col-md-3 text-end">
          <Link
            to={"login"}
            type="button"
            className="btn btn-outline-primary me-2"
          >
            Login
          </Link>
          <Link to={`sing-up`} type="button" className="btn btn-primary">
            Sign-up
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
