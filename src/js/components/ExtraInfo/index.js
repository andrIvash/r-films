// @flow
import React from 'react';
import styled from 'styled-components';
import helpers from '../../helpers';
import type { View } from '../../flow-types.js';

type Props = {
  data: string,
  view: View
}

const ExtraContent = styled.div`
  font-family: ${props => props.theme.signFont};
  font-size: 0.81rem;
  font-weight: 700;
  color: ${props => props.theme.colorBackground};
`;
ExtraContent.displayName = 'ExtraContent';

const ExtraInfo = (props: Props) => {
  const { view, data } = props;
  return (
    <div>
      <ExtraContent>
        { view === helpers.views.POSTER ?
          `Films by ${data} genre` : `${data} movies found` }
      </ExtraContent>
    </div>
  );
};

export default ExtraInfo;
