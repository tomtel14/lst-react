import React from 'react';
import Star from './Star';

const Stars = ({ randomTestimonial }) => {
  let starRating = randomTestimonial.rating; // 2

  return (
    <ul className="star-list">
      <Star isSelected={starRating > 0} />
      <Star isSelected={starRating > 1} />
      <Star isSelected={starRating > 2} />
      <Star isSelected={starRating > 3} />
      <Star isSelected={starRating > 4} />
    </ul>
  )
}

export default Stars;
