import React from 'react';
import star from './star.svg';

const Star = (props) => {

  return (
    <li>
      <img className={props.isSelected ? 'black' : 'grey'} src={star} alt="" />
    </li>
  )
}

export default Star;
