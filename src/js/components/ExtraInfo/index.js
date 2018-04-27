// @flow
import React from 'react';
import { views } from '../../helpers';

type Props = {
  onSelect: (ev: SynteticInputIvent) => void,
  data: string,
  view: string
}

function showInfo( props: Props ) {
  const { view, data } = props;
  return view === views.POSTER ?
    <div className='extra-info__content'>Films by {data} genre</div> :
    <div className='extra-info__content'>{data} movies found</div>;
}

const ExtraInfo = (props: Props) => (
  <div className='extra-info'>
    {showInfo(props)}
  </div>
);

export default ExtraInfo;
