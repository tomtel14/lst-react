import React from 'react';
import Stars from './Stars';
import Quote from './Quote';

const Review = ({ randomTestimonial }) => {
  return (
    <div className="test-cont">
      <Stars randomTestimonial={randomTestimonial} />
      <Quote randomTestimonial={randomTestimonial} />
    </div>
  )
}

export default Review;
