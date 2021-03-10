import React from 'react';

const Quote = ({ randomTestimonial }) => {
  return (
    <blockquote>
      <p className="quote">
        '{randomTestimonial.fullText}'
      </p>
      <footer>
        <cite>
          <a href="https://www.londonstone.co.uk" className="name">{randomTestimonial.fullName} | www.londonstone.co.uk</a>
        </cite>
      </footer>
    </blockquote>
  )
}

export default Quote;
