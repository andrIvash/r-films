// @flow
import React from 'react';
import helpers from '../../helpers';
import type { View } from '../../flow-types.js';

type Props = {
  data: string,
  view: View
}

const ExtraInfo = (props: Props) => {
  const { view, data } = props;
  return (
    <div className='extra-info'>
      <div className='extra-info__content'>
        { view === helpers.views.POSTER ?
          `Films by ${data} genre` : `${data} movies found` }
      </div>
    </div>
  );
};

export default ExtraInfo;
