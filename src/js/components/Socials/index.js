import React from 'react';

const Socials = ({ socials }) => {

  const socialsList = socials =>
    socials.map(item => (
      <li className='socials__item' key={item.name} >
        <p> {item.name} </p>
      </li>
    ));

  return (
    <div className='socials'>
      <h3 className='socials__title'> Socials </h3>
      <ul className='socials__list'>
        {socialsList(socials)}
      </ul>
    </div>
  );
};

export default Socials;