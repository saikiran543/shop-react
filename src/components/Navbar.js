import React from "react";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="nav_wraper">
        <div className="nav_left">
          <span className="language">EN</span>
          <div className="nav_search">
            <input type="text" className="input" placeholder="search"></input>
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="nav_center">
          <h1 className="logo"><Link to="/"className="rigester">S@i.</Link></h1>
        </div>
        <div className="nav_right">
          <div className="nav_menuitem"><Link to="/register" className="rigester">RIGESTER</Link></div>
          <div className="nav_menuitem"><Link to="/login" className="rigester">SIGN IN</Link></div>
          <div className="nav_menuitem">
            <Badge badgeContent={4} color="primary">
              <Link to="/cart" className="rigester"><ShoppingCartOutlined /></Link>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
