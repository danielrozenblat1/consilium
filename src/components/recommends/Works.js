import React from 'react';
import styles from './Recommends.module.css';
import Button from '../button/Button';

// Import your images
import result5 from "../../images/סוזנה פנחסי המלצה 5.png";
import result6 from "../../images/סוזנה פנחסי המלצה 6.png";
import result7 from "../../images/סוזנה פנחסי המלצה 7.png";
import result8 from "../../images/סוזנה פנחסי המלצה 8.png";
import result9 from "../../images/סוזנה פנחסי המלצה 9.png";
import result10 from "../../images/סוזנה פנחסי המלצה 10.png";
import result11 from "../../images/סוזנה פנחסי המלצה 11.png";
import result12 from "../../images/סוזנה פנחסי המלצה 12.png";

const Works = () => {
  const images = [
    result5, result6, result7, result8, 
    result9, result10, result11, result12
  ];

  return (
    <>
      <div className={styles.explain}>
        ב-8 השנים האחרונות הוצאתי אלפי בנות מרוצות! קיבצתי עבורך רק חלק מהעבודות כדי שתראי לאיזו רמה את יכולה להגיע
      </div>

   
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button text="סוזנה, בואי נדבר!" />
    </>
  );
};

export default Works;