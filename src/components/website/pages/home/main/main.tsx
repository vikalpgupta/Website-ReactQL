// Dynamic component that's loaded by `await import("./dynamic")`

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

import React from "react";

// ----------------------------------------------------------------------------

// Say hello from GraphQL, along with a HackerNews feed fetched by GraphQL
import About from "./about";
import Services from "./services";
import Clients from "./clients";
import Portfolio from "./portfolio";
import Testimonials from "./testimonials";
import CallToAction from "./callToAction";
import Team from "./team";
import Contact from "./contact";

const Main: React.FunctionComponent = () => (
  <main id="main">
    <About />
    <Services />
    <Clients />
    <Portfolio />
    <Testimonials />
    <CallToAction />
    <Team />
    <Contact />
  </main>
);

export default Main;
