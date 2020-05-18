// Dynamic component that's loaded by `await import("./dynamic")`

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

import React from "react";

// ----------------------------------------------------------------------------

// Say hello from GraphQL, along with a HackerNews feed fetched by GraphQL

const Clients: React.FunctionComponent = () => (
  <section id="clients" class="wow fadeInUp">
    <div class="container">
      <div class="section-header">
        <h2>Clients</h2>
        <p>
          Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit
          veniam aliqua esse amet veniam enim export quid quid veniam aliqua
          eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit
          export irure minim illum fore
        </p>
      </div>

      <div class="owl-carousel clients-carousel">
        <img src="assets/img/clients/client-1.png" alt="" />
        <img src="assets/img/clients/client-2.png" alt="" />
        <img src="assets/img/clients/client-3.png" alt="" />
        <img src="assets/img/clients/client-4.png" alt="" />
        <img src="assets/img/clients/client-5.png" alt="" />
        <img src="assets/img/clients/client-6.png" alt="" />
        <img src="assets/img/clients/client-7.png" alt="" />
        <img src="assets/img/clients/client-8.png" alt="" />
      </div>
    </div>
  </section>
);

export default Clients;
