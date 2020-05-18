// Dynamic component that's loaded by `await import("./dynamic")`

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

import React from "react";

// ----------------------------------------------------------------------------

// Say hello from GraphQL, along with a HackerNews feed fetched by GraphQL

const Contact: React.FunctionComponent = () => (
  <section id="contact" class="wow fadeInUp">
    <div class="container">
      <div class="section-header">
        <h2>Contact Us</h2>
        <p>
          Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit
          veniam aliqua esse amet veniam enim export quid quid veniam aliqua
          eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit
          export irure minim illum fore
        </p>
      </div>

      <div class="row contact-info">
        <div class="col-md-4">
          <div class="contact-address">
            <i class="ion-ios-location-outline" />
            <h3>Address</h3>
            <address>A108 Adam Street, NY 535022, USA</address>
          </div>
        </div>

        <div class="col-md-4">
          <div class="contact-phone">
            <i class="ion-ios-telephone-outline" />
            <h3>Phone Number</h3>
            <p>
              <a href="tel:+155895548855">+1 5589 55488 55</a>
            </p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="contact-email">
            <i class="ion-ios-email-outline" />
            <h3>Email</h3>
            <p>
              <a href="mailto:info@example.com">info@example.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mb-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13999.985773189937!2d77.297946!3d28.689753!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9851a0b52fbe65a6!2sShree%20Sai%20Flex%20%26%20Digital%20Print%20Out!5e0!3m2!1sen!2sin!4v1589273167250!5m2!1sen!2sin"
        width="100%"
        height="380"
        frameborder="0"
        allowfullscreen
      />
    </div>

    <div class="container">
      <div class="form">
        <form
          action="forms/contact.php"
          method="post"
          role="form"
          class="php-email-form"
        >
          <div class="form-row">
            <div class="form-group col-md-6">
              <input
                type="text"
                name="name"
                class="form-control"
                id="name"
                placeholder="Your Name"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div class="validate" />
            </div>
            <div class="form-group col-md-6">
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                data-rule="email"
                data-msg="Please enter a valid email"
              />
              <div class="validate" />
            </div>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              data-rule="minlen:4"
              data-msg="Please enter at least 8 chars of subject"
            />
            <div class="validate" />
          </div>
          <div class="form-group">
            <textarea
              class="form-control"
              name="message"
              rows="5"
              data-rule="required"
              data-msg="Please write something for us"
              placeholder="Message"
            />
            <div class="validate" />
          </div>

          <div class="mb-3">
            <div class="loading">Loading</div>
            <div class="error-message" />
            <div class="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>

          <div class="text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
