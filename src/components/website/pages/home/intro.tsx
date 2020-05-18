// Dynamic component that's loaded by `await import("./dynamic")`

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

import React from "react";

// ----------------------------------------------------------------------------

// Say hello from GraphQL, along with a HackerNews feed fetched by GraphQL

const Header: React.FunctionComponent = () => (
  <section id="intro">
    <div class="intro-content">
      <h2>
        Making <span>your ideas</span>
        <br />
        happen!
      </h2>
      <div>
        <a href="#about" class="btn-get-started scrollto">
          Get Started
        </a>
        <a href="#portfolio" class="btn-projects scrollto">
          Our Projects
        </a>
      </div>
    </div>

    {/*TODO handle images*/}
    <div id="intro-carousel" class="owl-carousel">
      {/*<div class="item" style="background-image: url('assets/img/intro-carousel/1.jpg');"></div>*/}
      {/*<div class="item" style="background-image: url('assets/img/intro-carousel/2.jpg');"></div>*/}
      {/*<div class="item" style="background-image: url('assets/img/intro-carousel/3.jpg');"></div>*/}
      {/*<div class="item" style="background-image: url('assets/img/intro-carousel/4.jpg');"></div>*/}
      {/*<div class="item" style="background-image: url('assets/img/intro-carousel/5.jpg');"></div>*/}
    </div>
  </section>
);

export default Header;
