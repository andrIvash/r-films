// @flow
import React from 'react';
import helpers from '../../helpers';
import type { View } from '../../flow-types.js';

type Props = {
  data: string,
  view: View
}

function showInfo( props: Props ) {
  const { view, data } = props;
  return view === helpers.views.POSTER ?
    `Films by ${data} genre` :
    `${data} movies found`;
}

const ExtraInfo = (props: Props) => (
  <div className='extra-info'>
    <div className='extra-info__content'>
      {showInfo(props)}
    </div>
  </div>
);

export default ExtraInfo;
