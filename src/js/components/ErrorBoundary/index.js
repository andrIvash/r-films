// @flow
import React, { Component } from 'react';

type State = {

};

type Props = {

};

class ErrorBoundary extends Component<State, Props> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div className='main-error'>Error: Something went wrong.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
