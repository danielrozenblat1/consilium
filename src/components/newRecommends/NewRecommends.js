import React from 'react';
import styles from './NewRecommends.module.css';

const Testimonials = ({ testimonialImages }) => {
  return (
    <div className={styles.testimonialContainer}>
      <div className={styles.testimonialScroll}>
        {testimonialImages.map((image, index) => (
          <div key={index} className={styles.testimonialItem}>
            <img 
              src={image.src} 
              alt={`Testimonial ${index + 1}`} 
              className={styles.testimonialImage} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;