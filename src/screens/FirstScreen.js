import React, { useState, useEffect } from 'react';
import styles from './FirstScreen.module.css';
import image1 from "../images/תמונת פתיחה 1.png";
import image2 from "../images/תמונת פתיחה 2.png";
import image3 from "../images/תמונת פתיחה 3.png";
import image4 from "../images/תמונת פתיחה 4.png";
import image5 from "../images/תמונת פתיחה 5.png";
import Loader from '../components/loader/Loader';

const ArchitectLanding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  
  // ✅ state חדש לבדיקת טעינת התמונות
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    reason: '',
    expansion: ''
  });
  
  const [errors, setErrors] = useState({
    fullName: '',
    phone: '',
    reason: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";
  const reciver = "royshm22@gmail.com";

  const images = [image1, image2, image3, image4, image5];

  // ✅ פונקציה לטעינת התמונות
  useEffect(() => {
    const preloadImages = () => {
      let loadedCount = 0;
      
      images.forEach((imageSrc) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          setLoadedImagesCount(loadedCount);
          
          // כאשר כל התמונות נטענו
          if (loadedCount === images.length) {
            setImagesLoaded(true);
            // עיכוב קטן לאפקט חלק
            setTimeout(() => {
              setIsLoaded(true);
            }, 300);
          }
        };
        
        img.onerror = () => {
          loadedCount++;
          setLoadedImagesCount(loadedCount);
          console.error(`Failed to load image: ${imageSrc}`);
          
          // גם אם יש שגיאה, ממשיכים (למקרה שיש תמונה שלא נטענת)
          if (loadedCount === images.length) {
            setImagesLoaded(true);
            setTimeout(() => {
              setIsLoaded(true);
            }, 300);
          }
        };
        
        img.src = imageSrc;
      });
    };

    preloadImages();
  }, []);

  // ✅ האפקט הקיים - יתחיל לרוץ רק אחרי שהתמונות נטענו
  useEffect(() => {
    if (!imagesLoaded) return; // לא מתחיל עד שהתמונות נטענו
    
    const interval = setInterval(() => {
      if (!showContactForm) {
        handleNextSlide();
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, showContactForm, imagesLoaded]);

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

  const validateForm = () => {
    let valid = true;
    const newErrors = { fullName: '', phone: '', reason: '' };

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'נא להזין שם מלא';
      alert('נא להזין שם מלא');
      valid = false;
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'שם חייב להכיל לפחות 2 תווים';
      alert('שם חייב להכיל לפחות 2 תווים');
      valid = false;
    }

    const phoneRegex = /^0(5\d|[23489])\d{7}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'נא להזין מספר טלפון';
      alert('נא להזין מספר טלפון');
      valid = false;
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'נא להזין מספר טלפון תקין';
      alert('נא להזין מספר טלפון תקין');
      valid = false;
    }

    if (!formData.reason.trim()) {
      newErrors.reason = 'נא לבחור סיבת פנייה';
      alert('נא לבחור סיבת פנייה');
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleContactSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const serverData = {
      name: formData.fullName,
      phone: formData.phone,
      email: "",
      reason: formData.expansion ? `${formData.reason} - ${formData.expansion}` : formData.reason,
      reciver: reciver
    };

    try {
      const serverResponse = await fetch(serverUrl, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(serverData)
      });

      if (serverResponse.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        
        setTimeout(() => {
          setFormData({
            fullName: '',
            phone: '',
            reason: '',
            expansion: ''
          });
          setErrors({
            fullName: '',
            phone: '',
            reason: ''
          });
          setSubmitted(false);
          setShowContactForm(false);
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert("התרחשה שגיאה, אנא נסו שוב מאוחר יותר");
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // ✅ אם התמונות עדיין לא נטענו - מציג את הלודר
  if (!imagesLoaded) {
    return <Loader />;
  }

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
              className={`${styles.formInput} ${errors.fullName ? styles.inputError : ''}`}
              placeholder="השם שלכם"
              disabled={isSubmitting || submitted}
            />
            {errors.fullName && <p className={styles.errorText}>{errors.fullName}</p>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>מספר טלפון</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`${styles.formInput} ${errors.phone ? styles.inputError : ''}`}
              placeholder="050-1234567"
              disabled={isSubmitting || submitted}
            />
            {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>סיבת פנייה</label>
            <select
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              className={`${styles.formSelect} ${errors.reason ? styles.inputError : ''}`}
              disabled={isSubmitting || submitted}
            >
              <option value="">בחרו סיבת פנייה</option>
              <option value="שיפוץ">שיפוץ</option>
              <option value="קניתי דירה מקבלן">קניתי דירה מקבלן</option>
              <option value="אחר">אחר</option>
            </select>
            {errors.reason && <p className={styles.errorText}>{errors.reason}</p>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>הרחבה (אופציונלי)</label>
            <textarea
              name="expansion"
              value={formData.expansion}
              onChange={handleInputChange}
              className={styles.formTextarea}
              placeholder="ספרו לנו יותר על הפרויקט שלכם..."
              disabled={isSubmitting || submitted}
            />
          </div>

          <div className={styles.formButtons}>
            <button 
              className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''} ${submitted ? styles.submitted : ''}`}
              onClick={handleContactSubmit}
              disabled={isSubmitting || submitted}
            >
              {isSubmitting ? 'שולח...' : submitted ? 'נשלח בהצלחה!' : 'רועי, בוא נדבר'}
            </button>
            <button 
              className={styles.cancelButton} 
              onClick={() => setShowContactForm(false)}
              disabled={isSubmitting || submitted}
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