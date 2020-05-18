// Dynamic component that's loaded by `await import("./dynamic")`

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

import React from "react";

// ----------------------------------------------------------------------------

// Say hello from GraphQL, along with a HackerNews feed fetched by GraphQL

import TopBar from "./topbar";
import Header from "./header";
import Intro from "./intro";
import Main from "./main/main";
import Footer from "./footer";

const Home: React.FunctionComponent = () => (
  <>
    <TopBar />
    <Header />
    <Intro />
    <Main />
    <Footer />
  </>
);

export default Home;
