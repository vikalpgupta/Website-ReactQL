// Dynamic component that's loaded by `await import("./dynamic")`

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

import React from "react";

// ----------------------------------------------------------------------------

// Say hello from GraphQL, along with a HackerNews feed fetched by GraphQL

const About: React.FunctionComponent = () => (
  <section id="about" class="wow fadeInUp">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 about-img">
          <img src="assets/img/about-img.jpg" alt="" />
        </div>

        <div class="col-lg-6 content">
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
          <h3>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </h3>

          <ul>
            <li>
              <i class="ion-android-checkmark-circle" /> Ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </li>
            <li>
              <i class="ion-android-checkmark-circle" /> Duis aute irure dolor
              in reprehenderit in voluptate velit.
            </li>
            <li>
              <i class="ion-android-checkmark-circle" /> Ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate trideta storacalaperda mastiro dolore
              eu fugiat nulla pariatur.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
