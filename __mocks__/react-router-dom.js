import React from 'react';

const rrd = jest.genMockFromModule('react-router-dom');

const MockLink = ({ children }: any) => (
  <div mock='Link_component_mock'>{children}</div>
);
// Just render plain div with its children
rrd.Link = MockLink;

module.exports = rrd;
