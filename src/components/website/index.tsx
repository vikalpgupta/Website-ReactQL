// ReactQL example page - delete this folder for your own project!

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

import React from "react";

// ----------------------------------------------------------------------------

interface IIndexState {
  home: React.SFC | null;
}

// Say hello from GraphQL, along with a HackerNews feed fetched by GraphQL
class Index extends React.PureComponent<{}, IIndexState> {
  public state = {
    home: null
  };

  public componentDidMount = async () => {
    // Fetch the component dynamically
    const home = await import("./pages/home/home");

    // ... and keep ahold of it locally
    this.setState({
      home: home.default
    });
  };

  public render() {
    const DynamicComponent = this.state.home || (() => <h2>Loading...</h2>);

    return (
      <>
        <DynamicComponent />
      </>
    );
  }
}

export default Index;
