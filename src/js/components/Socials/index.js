import React from 'react';

export const Socials = ({socials}) => {
  return (
    <div className="socials">
      <h3 className="socials__title"> Socials </h3>
      <ul className="socials__list">
        {socials.map((item, index) => {
          return (
            <li className="socials__item" key = {item.name} >
              <p> {item.name} </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}