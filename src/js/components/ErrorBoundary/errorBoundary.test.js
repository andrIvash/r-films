import React from 'react';
import ErrorBoundary from './index';

const props = {};

describe('ErrorBoundary', () => {
  it('should be defined', () => {
    expect(ErrorBoundary).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = shallow(
      <ErrorBoundary {...props} /> );
    expect(wrapper).toMatchSnapshot();
  });
});
