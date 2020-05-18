// Dynamic component that's loaded by `await import("./dynamic")`

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

import React from "react";

// ----------------------------------------------------------------------------

// Say hello from GraphQL, along with a HackerNews feed fetched by GraphQL

const Header: React.FunctionComponent = () => (
  <>
    <footer id="footer">
      <div class="container">
        <div class="copyright">
          &copy; Copyright <strong>Reveal</strong>. All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
    <a href="#" class="back-to-top">
      <i class="fa fa-chevron-up" />
    </a>
  </>
);

export default Header;
