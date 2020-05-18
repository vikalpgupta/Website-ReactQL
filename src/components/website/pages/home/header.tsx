// Dynamic component that's loaded by `await import("./dynamic")`

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

import React from "react";

// ----------------------------------------------------------------------------

// Say hello from GraphQL, along with a HackerNews feed fetched by GraphQL

const Header: React.FunctionComponent = () => (
  <header id="header">
    <div class="container">
      <div id="logo" class="pull-left">
        <h1>
          <a href="#topbar" class="scrollto">
            Reve<span>al</span>
          </a>
        </h1>
      </div>
      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <li class="menu-active">
            <a href="#topbar">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li class="menu-has-children">
            <a href="">Drop Down</a>
            <ul>
              <li>
                <a href="#">Drop Down 1</a>
              </li>
              <li>
                <a href="#">Drop Down 3</a>
              </li>
              <li>
                <a href="#">Drop Down 4</a>
              </li>
              <li>
                <a href="#">Drop Down 5</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
