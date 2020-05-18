// Dynamic component that's loaded by `await import("./dynamic")`

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

import React from "react";

// ----------------------------------------------------------------------------

// Say hello from GraphQL, along with a HackerNews feed fetched by GraphQL

const Team: React.FunctionComponent = () => (
  <section id="team" class="wow fadeInUp">
    <div class="container">
      <div class="section-header">
        <h2>Our Team</h2>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="member">
            <div class="pic">
              <img src="assets/img/team-1.jpg" alt="" />
            </div>
            <div class="details">
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
              <div class="social">
                <a href="">
                  <i class="fa fa-twitter" />
                </a>
                <a href="">
                  <i class="fa fa-facebook" />
                </a>
                <a href="">
                  <i class="fa fa-google-plus" />
                </a>
                <a href="">
                  <i class="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="member">
            <div class="pic">
              <img src="assets/img/team-2.jpg" alt="" />
            </div>
            <div class="details">
              <h4>Sarah Jhinson</h4>
              <span>Product Manager</span>
              <div class="social">
                <a href="">
                  <i class="fa fa-twitter" />
                </a>
                <a href="">
                  <i class="fa fa-facebook" />
                </a>
                <a href="">
                  <i class="fa fa-google-plus" />
                </a>
                <a href="">
                  <i class="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="member">
            <div class="pic">
              <img src="assets/img/team-3.jpg" alt="" />
            </div>
            <div class="details">
              <h4>William Anderson</h4>
              <span>CTO</span>
              <div class="social">
                <a href="">
                  <i class="fa fa-twitter" />
                </a>
                <a href="">
                  <i class="fa fa-facebook" />
                </a>
                <a href="">
                  <i class="fa fa-google-plus" />
                </a>
                <a href="">
                  <i class="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="member">
            <div class="pic">
              <img src="assets/img/team-4.jpg" alt="" />
            </div>
            <div class="details">
              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
              <div class="social">
                <a href="">
                  <i class="fa fa-twitter" />
                </a>
                <a href="">
                  <i class="fa fa-facebook" />
                </a>
                <a href="">
                  <i class="fa fa-google-plus" />
                </a>
                <a href="">
                  <i class="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Team;
