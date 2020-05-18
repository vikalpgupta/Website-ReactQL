/* NPM */

import React from "react";

// ----------------------------------------------------------------------------

// Say hello from GraphQL, along with a HackerNews feed fetched by GraphQL
const TopBar: React.FunctionComponent = () => (
  <section id="topbar" class="d-none d-lg-block">
    <div class="container clearfix">
      <div class="contact-info float-left">
        <i class="fa fa-envelope-o" />{" "}
        <a href="mailto:contact@example.com">contact@example.com</a>
        <i class="fa fa-phone" /> +1 5589 55488 55
      </div>
      <div class="social-links float-right">
        <a href="#" class="twitter">
          <i class="fa fa-twitter" />
        </a>
        <a href="#" class="facebook">
          <i class="fa fa-facebook" />
        </a>
        <a href="#" class="instagram">
          <i class="fa fa-instagram" />
        </a>
        <a href="#" class="google-plus">
          <i class="fa fa-google-plus" />
        </a>
        <a href="#" class="linkedin">
          <i class="fa fa-linkedin" />
        </a>
      </div>
    </div>
  </section>
);

export default TopBar;
