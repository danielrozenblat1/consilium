import React, { useState, useEffect } from 'react';
import styles from './FirstScreen.module.css';
import image1 from "../images/תמונת פתיחה 1.png";
import image2 from "../images/תמונת פתיחה 2.png";
import image3 from "../images/תמונת פתיחה 3.png";
import image4 from "../images/תמונת פתיחה 4.png";
import image5 from "../images/תמונת פתיחה 5.png";

const ArchitectLanding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    reason: '',
    expansion: ''
  });

  const images = [image1, image2, image3, image4, image5];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      if (!showContactForm) {
        handleNextSlide();
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, showContactForm]);

  const handleNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const scrollToSecondScreen = () => {
    const secondScreenElement = document.getElementById('מסך שני');
    if (secondScreenElement) {
      secondScreenElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsElement = document.getElementById('פרוייקטים');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = () => {
    console.log('Contact form submitted:', formData);
    // Here you would typically send the data to your backend
    setShowContactForm(false);
    // Reset form
    setFormData({
      fullName: '',
      phone: '',
      reason: '',
      expansion: ''
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className={`${styles.container} ${isLoaded ? styles.loaded : ''}`}>
        {/* Background Carousel */}
        <div className={styles.carouselContainer}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentSlide ? styles.active : ''} ${isTransitioning ? styles.transitioning : ''}`}
            >
              <div
                className={styles.slideImage}
                style={{ backgroundImage: `url("${image}")` }}
              ></div>
              <div className={styles.overlay}></div>
            </div>
          ))}
        </div>

        {/* Vignette Effect */}
        <div className={styles.vignette}></div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.brandContainer}>
            <h1 className={styles.brand}>Consillium</h1>
        
          </div>
          <p className={styles.subtitle}>החלום שלכם הוא המומחיות שלנו</p>
          <p className={styles.description}>ליווי מא' עד ת' אל הבית שחלמתם עליו, בלי כאבים בראש ובכיס</p>
          
          {/* Scroll Indicator */}
          <div className={styles.scrollIndicator} onClick={scrollToSecondScreen}>
            <div className={styles.scrollIcon}>
              <div className={styles.scrollArrow}></div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className={styles.progressContainer}>
          {images.map((_, index) => (
            <div
              key={index}
              className={`${styles.progressBar} ${index === currentSlide ? styles.activeProgress : ''}`}
              onClick={() => goToSlide(index)}
            >
              <div className={styles.progressFill}></div>
            </div>
          ))}
        </div>

        {/* Contact Button - Left Side */}
        <button className={styles.phoneButton} onClick={() => setShowContactForm(true)}>
          <span>צרו קשר</span>
        </button>

        {/* Projects Button - Right Side */}
        <button className={styles.projectsButton} onClick={scrollToProjects}>
          <span>פרוייקטים</span>
        </button>

        {/* Ambient Particles */}
        <div className={styles.particles}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={styles.particle}></div>
          ))}
        </div>
      </div>

      {/* Contact Form Overlay */}
      <div className={`${styles.contactOverlay} ${showContactForm ? styles.active : ''}`}>
        <div className={styles.contactForm}>
          <button className={styles.closeButton} onClick={() => setShowContactForm(false)}>
            ×
          </button>

          
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>שם מלא</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={styles.formInput}
              placeholder="השם שלכם"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>מספר טלפון</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={styles.formInput}
              placeholder="050-1234567"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>סיבת פנייה</label>
            <select
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              className={styles.formSelect}
            >
              <option value="">בחרו סיבת פנייה</option>
              <option value="שיפוץ">שיפוץ</option>
              <option value="קניתי דירה מקבלן">קניתי דירה מקבלן</option>
              <option value="אחר">אחר</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>הרחבה (אופציונלי)</label>
            <textarea
              name="expansion"
              value={formData.expansion}
              onChange={handleInputChange}
              className={styles.formTextarea}
              placeholder="ספרו לנו יותר על הפרויקט שלכם..."
            />
          </div>

          <div className={styles.formButtons}>
            <button 
              className={styles.submitButton} 
              onClick={handleContactSubmit}
            >
              רועי, בוא נדבר
            </button>
            <button 
              className={styles.cancelButton} 
              onClick={() => setShowContactForm(false)}
            >
              ביטול
            </button>
          </div>
        </div>
      </div>


    </>
  );
};

export default ArchitectLanding;