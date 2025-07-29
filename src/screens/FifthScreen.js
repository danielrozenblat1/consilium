import React, { useState, useEffect, useRef } from 'react';

import styles from "./FifthScreen.module.css";
import recommend1 from "../images/רועי שמואל המלצות 1.png";
import recommend2 from "../images/רועי שמואל המלצות 2.png";
import recommend3 from "../images/רועי שמואל המלצות 3.png";
import recommend4 from "../images/רועי שמואל המלצות 4.png";
import recommend5 from "../images/רועי שמואל המלצות 5.png";
import recommend6 from "../images/רועי שמואל המלצות 6.png";
import recommend7 from "../images/רועי שמואל המלצות 7.png";
import recommend8 from "../images/רועי שמואל המלצות 8.png";
import recommend9 from "../images/רועי שמואל המלצות 9.png";
import recommend10 from "../images/רועי שמואל המלצות 10.png";
import recommend11 from "../images/רועי שמואל המלצות 11.png";
import recommend12 from "../images/רועי שמואל המלצות 12.png";
import recommend13 from "../images/רועי שמואל המלצות 13.png";
import recommend14 from "../images/רועי שמואל המלצות 14.png";
import recommend15 from "../images/רועי שמואל המלצות 15.png";
import recommend16 from "../images/רועי שמואל המלצות 16.png";
import recommend17 from "../images/רועי שמואל המלצות 17.png";

import Testimonials from '../components/newRecommends/NewRecommends';
import Button from '../components/button/Button';

const FifthScreen = () => {

  const testimonialImages = [
    { src: recommend1 },
    { src: recommend2 },
    { src: recommend3 },
    { src: recommend4 },
    { src: recommend5 },
    { src: recommend6 },
    { src: recommend7 },
    { src: recommend8 },
    { src: recommend9 },
    { src: recommend10 },
    { src: recommend11 },
    { src: recommend12 },
     { src: recommend13 },
     { src: recommend14 },
     { src: recommend15 },
     { src: recommend16 },
    { src: recommend17 },
  ];

  return (
    <>
        <div className={styles.recommendsContainer}>
        {/* אלמנט דקורטיבי */}
        <div className={styles.decorativeElement}></div>
        
  
        
        <div className={styles.leftSection}>
          <Testimonials testimonialImages={testimonialImages} />
        </div>
              <Button text="רועי, בוא נדבר!"/>
      </div>

    </>
  );
};

export default FifthScreen;