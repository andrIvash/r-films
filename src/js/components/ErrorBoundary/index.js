// @flow
import React, { Component } from 'react';

type State = {
  hasError: boolean,
  children?: React.Element,
};
type Props = {
  hasError: boolean,
  children?: React.Element,
};

class ErrorBoundary extends Component<State, Props> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: string) {
    console.error(error);
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
