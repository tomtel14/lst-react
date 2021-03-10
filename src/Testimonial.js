import React from 'react';
import Image from './Image';
import Review from './Review';
import testimonialData from './data';

const Testimonial = () => {

  const getRandomTestimonialNum = () => {
    let arrayLength = testimonialData.length;
    let randomNum = Math.floor(Math.random() * arrayLength);
    return randomNum;
  }

  const randomTestimonial = testimonialData[getRandomTestimonialNum()];

  return (
    <div className="testimonial">
      <Image randomTestimonial={randomTestimonial} />
      <Review randomTestimonial={randomTestimonial} />
    </div>
  )
}

export default Testimonial;
