import React, { Component } from 'react';

class MainLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return { children };
  }
}

export default MainLayout;
