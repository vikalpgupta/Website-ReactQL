// Dynamic component that's loaded by `await import("./dynamic")`

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

import React from "react";

// ----------------------------------------------------------------------------

// Say hello from GraphQL, along with a HackerNews feed fetched by GraphQL

const Portfolio: React.FunctionComponent = () => (
  <section id="portfolio" class="wow fadeInUp">
    <div class="container">
      <div class="section-header">
        <h2>Our Portfolio</h2>
        <p>
          Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit
          veniam aliqua esse amet veniam enim export quid quid veniam aliqua
          eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit
          export irure minim illum fore
        </p>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row no-gutters">
        <div class="col-lg-3 col-md-4">
          <div class="portfolio-item wow fadeInUp">
            <a
              href="assets/img/portfolio/1.jpg"
              class="venobox"
              data-gall="portfolioGallery"
            >
              <img src="assets/img/portfolio/1.jpg" alt="" />
              <div class="portfolio-overlay">
                <div class="portfolio-info">
                  <h2 class="wow fadeInUp">Portfolio Item 1</h2>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-4">
          <div class="portfolio-item wow fadeInUp">
            <a
              href="assets/img/portfolio/2.jpg"
              class="venobox"
              data-gall="portfolioGallery"
            >
              <img src="assets/img/portfolio/2.jpg" alt="" />
              <div class="portfolio-overlay">
                <div class="portfolio-info">
                  <h2 class="wow fadeInUp">Portfolio Item 2</h2>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-4">
          <div class="portfolio-item wow fadeInUp">
            <a
              href="assets/img/portfolio/3.jpg"
              class="venobox"
              data-gall="portfolioGallery"
            >
              <img src="assets/img/portfolio/3.jpg" alt="" />
              <div class="portfolio-overlay">
                <div class="portfolio-info">
                  <h2 class="wow fadeInUp">Portfolio Item 3</h2>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-4">
          <div class="portfolio-item wow fadeInUp">
            <a
              href="assets/img/portfolio/4.jpg"
              class="venobox"
              data-gall="portfolioGallery"
            >
              <img src="assets/img/portfolio/4.jpg" alt="" />
              <div class="portfolio-overlay">
                <div class="portfolio-info">
                  <h2 class="wow fadeInUp">Portfolio Item 4</h2>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-4">
          <div class="portfolio-item wow fadeInUp">
            <a
              href="assets/img/portfolio/5.jpg"
              class="venobox"
              data-gall="portfolioGallery"
            >
              <img src="assets/img/portfolio/5.jpg" alt="" />
              <div class="portfolio-overlay">
                <div class="portfolio-info">
                  <h2 class="wow fadeInUp">Portfolio Item 5</h2>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-4">
          <div class="portfolio-item wow fadeInUp">
            <a
              href="assets/img/portfolio/6.jpg"
              class="venobox"
              data-gall="portfolioGallery"
            >
              <img src="assets/img/portfolio/6.jpg" alt="" />
              <div class="portfolio-overlay">
                <div class="portfolio-info">
                  <h2 class="wow fadeInUp">Portfolio Item 6</h2>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-4">
          <div class="portfolio-item wow fadeInUp">
            <a
              href="assets/img/portfolio/7.jpg"
              class="venobox"
              data-gall="portfolioGallery"
            >
              <img src="assets/img/portfolio/7.jpg" alt="" />
              <div class="portfolio-overlay">
                <div class="portfolio-info">
                  <h2 class="wow fadeInUp">Portfolio Item 7</h2>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-4">
          <div class="portfolio-item wow fadeInUp">
            <a
              href="assets/img/portfolio/8.jpg"
              class="venobox"
              data-gall="portfolioGallery"
            >
              <img src="assets/img/portfolio/8.jpg" alt="" />
              <div class="portfolio-overlay">
                <div class="portfolio-info">
                  <h2 class="wow fadeInUp">Portfolio Item 8</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
