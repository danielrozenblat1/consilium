import React, { useState, useEffect, useRef } from 'react';
import styles from './SecondScreen.module.css';

// Earth Fusion imports
import earthfusion1 from "../images/Earth Fusion 1.png";
import earthfusion2 from "../images/Earth Fusion 2.png";
import earthfusion3 from "../images/Earth Fusion 3.png";
import earthfusion4 from "../images/Earth Fusion 4.png";
import earthfusion5 from "../images/Earth Fusion 5.png";
import earthfusion6 from "../images/Earth Fusion 6.png";
import earthfusion7 from "../images/Earth Fusion 7.png";
import earthfusion8 from "../images/Earth Fusion 8.png";
import earthfusion9 from "../images/Earth Fusion 9.png";
import earthfusion10 from "../images/Earth Fusion 10.png";

// 16th floor sea view imports
import sea1 from "../images/16th floor sea view 1.png";
import sea2 from "../images/16th floor sea view 2.png";
import sea3 from "../images/16th floor sea view 3.png";
import sea4 from "../images/16th floor sea view 4.png";
import sea5 from "../images/16th floor sea view 5.png";
import sea6 from "../images/16th floor sea view 6.png";
import sea7 from "../images/16th floor sea view 7.png";
import sea8 from "../images/16th floor sea view 8.png";
import sea9 from "../images/16th floor sea view 9.png";
import sea10 from "../images/16th floor sea view 10.png";
import sea11 from "../images/16th floor sea view 11.png";
import sea12 from "../images/16th floor sea view 12.png";
import sea13 from "../images/16th floor sea view 13.png";
import sea14 from "../images/16th floor sea view 14.png";
import sea15 from "../images/16th floor sea view 15.png";
import sea16 from "../images/16th floor sea view 16.png";

// The penthouse imports
import penthouse1 from "../images/The penthouse 1.png";
import penthouse2 from "../images/The penthouse 2.png";
import penthouse3 from "../images/The penthouse 3.png";
import penthouse4 from "../images/The penthouse 4.png";
import penthouse5 from "../images/The penthouse 5.png";
import penthouse6 from "../images/The penthouse 6.png";
import penthouse7 from "../images/The penthouse 7.png";
import penthouse8 from "../images/The penthouse 8.png";
import penthouse9 from "../images/The penthouse 9.png";
import penthouse10 from "../images/The penthouse 10.png";
import penthouse11 from "../images/The penthouse 11.png";
import penthouse12 from "../images/The penthouse 12.png";
import penthouse13 from "../images/The penthouse 13.png";
import penthouse14 from "../images/The penthouse 14.png";
import penthouse15 from "../images/The penthouse 15.png";
import penthouse16 from "../images/The penthouse 16.png";
import penthouse17 from "../images/The penthouse 17.png";
import penthouse18 from "../images/The penthouse 18.png";
import penthouse19 from "../images/The penthouse 19.png";
import penthouse20 from "../images/The penthouse 20.png";
import penthouse21 from "../images/The penthouse 21.png";
import penthouse22 from "../images/The penthouse 22.png";
import penthouse23 from "../images/The penthouse 23.png";
import penthouse24 from "../images/The penthouse 24.png";
import penthouse25 from "../images/The penthouse 25.png";

// Soft Geometry imports
import softgeometry1 from "../images/Soft Geometry 1.png";
import softgeometry2 from "../images/Soft Geometry 2.png";
import softgeometry3 from "../images/Soft Geometry 3.png";
import softgeometry4 from "../images/Soft Geometry 4.png";
import softgeometry5 from "../images/Soft Geometry 5.png";

// Earthy Embrace imports
import earth1 from "../images/Earthy Embrace 1.png";
import earth2 from "../images/Earthy Embrace 2.png";
import earth3 from "../images/Earthy Embrace 3.png";
import earth4 from "../images/Earthy Embrace 4.png";
import earth5 from "../images/Earthy Embrace 5.png";
import earth6 from "../images/Earthy Embrace 6.png";

// Earth Haven imports
import heaven1 from "../images/Earth Haven 1.png";
import heaven2 from "../images/Earth Haven 2.png";
import heaven3 from "../images/Earth Haven 3.png";
import heaven4 from "../images/Earth Haven 4.png";
import Button from '../components/button/Button';

const ArchitecturePortfolio = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleThumbnails, setVisibleThumbnails] = useState(new Set());
  const containerRef = useRef(null);
  const projectRefs = useRef([]);
  const thumbnailRefs = useRef([]);
  const observerRef = useRef(null);

  const projects = [
    {
      id: 1,
      category: 'אדריכלות',
      title: 'Earth Fusion',
      description: 'פרויקט חדשני המשלב אדריכלות ברת קיימא עם טכנולוגיות מתקדמות, יוצר מבנה אקולוגי המתמזג עם הסביבה הטבעית.',
      image: earthfusion2,
      thumbnail: earthfusion1,
      gallery: [
        earthfusion1,
        earthfusion2,
        earthfusion3,
        earthfusion4,
        earthfusion5,
        earthfusion6,
        earthfusion7,
        earthfusion8,
        earthfusion9,
        earthfusion10
      ],
      details: {
        area: '500 מ״ר',
        location: 'גלעד',
        year: '2024'
      }
    },
    {
      id: 2,
      category: 'עיצוב פנים',
      title: '16th floor sea view',
      description: 'שילוב מושלם של אלגנטיות עירונית ונוחות ביתית, עם דגש על ניצול מרבי של החלל והכנסת אור טבעי ונוף ים עוצר נשימה.',
      image: sea1,
      thumbnail: sea2,
      gallery: [
        sea1,
        sea2,
        sea3,
        sea4,
        sea5,
        sea6,
        sea7,
        sea8,
        sea9,
        sea10,
        sea11,
        sea12,
        sea13,
        sea14,
        sea15,
        sea16
      ],
      details: {
        area: '120 מ״ר',
        location: 'תל אביב',
        year: '2024'
      }
    },
    {
      id: 3,
      category: 'עיצוב פנים',
      title: 'The penthouse',
      description: 'פנטהאוז יוקרתי עם נוף פנורמי וחלל מעוצב ברמה הגבוהה ביותר, המשלב יוקרה עם פרקטיות בכל פרט ועיצוב מתקדם ברמה בינלאומית.',
      image: penthouse8,
      thumbnail: penthouse5,
      gallery: [
        penthouse1,
        penthouse2,
        penthouse3,
        penthouse4,
        penthouse5,
        penthouse6,
        penthouse7,
        penthouse8,
        penthouse9,
        penthouse10,
        penthouse11,
        penthouse12,
        penthouse13,
        penthouse14,
        penthouse15,
        penthouse16,
        penthouse17,
        penthouse18,
        penthouse19,
        penthouse20,
        penthouse21,
        penthouse22,
        penthouse23,
        penthouse24,
        penthouse25
      ],
      details: {
        area: '400 מ״ר',
        location: 'נתניה',
        year: '2024'
      }
    },
    {
      id: 4,
      category: 'אדריכלות',
      title: 'Soft Geometry',
      description: 'עיצוב חם ומזמין המבוסס על פונקציונליות, עם שימוש בעץ טבעי וצבעים רכים היוצרים אווירה רגועה.',
      image: softgeometry3,
      thumbnail: softgeometry2,
      gallery: [
        softgeometry1,
        softgeometry2,
        softgeometry3,
        softgeometry4,
        softgeometry5
      ],
      details: {
        area: '200 מ״ר',
        location: 'רמת השרון',
        year: '2023'
      }
    },
    {
      id: 5,
      category: 'עיצוב פנים',
      title: 'Earthy Embrace',
      description: 'עיצוב אדמתי וחם המשלב חומרים טבעיים ויוצר אווירה רגועה ומזמינה עם דגש על קיימות וחיבור לטבע.',
      image: earth3,
      thumbnail: earth1,
      gallery: [earth1, earth2, earth3, earth4, earth5, earth6],
      details: {
        area: '180 מ״ר',
        location: 'הרצליה',
        year: '2023'
      }
    },
    {
      id: 6,
      category: 'אדריכלות',
      title: 'Earth Haven',
      description: 'מקלט טבעי המשלב אדריכלות ירוקה עם נוחות מודרנית, יוצר בית שמתאחד עם הסביבה הטבעית ומקדם אורח חיים בר קיימא.',
      image: heaven2,
      thumbnail: heaven1,
      gallery: [heaven1, heaven2, heaven3, heaven4],
      details: {
        area: '320 מ״ר',
        location: 'כפר סבא',
        year: '2023'
      }
    }
  ];

  // ScrollReveal setup for thumbnails
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -20% 0px',
      threshold: [0, 0.1, 0.5, 1]
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const thumbnailIndex = parseInt(entry.target.dataset.index);
        
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          // Add staggered delay based on index
          setTimeout(() => {
            setVisibleThumbnails(prev => new Set([...prev, thumbnailIndex]));
          }, thumbnailIndex * 150); // 150ms delay between each thumbnail
        }
      });
    }, observerOptions);

    // Observe all thumbnail elements
    thumbnailRefs.current.forEach((ref) => {
      if (ref) {
        observerRef.current.observe(ref);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Enhanced navigation function with smooth transitions
  const navigateToImage = (newIndex) => {
    if (isTransitioning || newIndex === currentImageIndex) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  const nextImage = () => {
    const newIndex = currentImageIndex === selectedProject.gallery.length - 1 ? 0 : currentImageIndex + 1;
    navigateToImage(newIndex);
  };

  const prevImage = () => {
    const newIndex = currentImageIndex === 0 ? selectedProject.gallery.length - 1 : currentImageIndex - 1;
    navigateToImage(newIndex);
  };

  const goToImage = (index) => {
    navigateToImage(index);
  };

  // Function to scroll to specific project
  const scrollToProject = (projectId) => {
    // Find the project index (subtract 1 because hero section is index 0)
    const projectIndex = projects.findIndex(p => p.id === projectId);
    if (projectIndex !== -1 && projectRefs.current[projectIndex]) {
      projectRefs.current[projectIndex].scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Update scroll progress
      const progress = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
      
      // Enhanced smooth parallax effect
      projectRefs.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionHeight = rect.height;
          
          section.classList.remove(styles.inView, styles.aboveView, styles.belowView);
          
          if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
            section.classList.add(styles.inView);
          } else if (sectionTop >= windowHeight) {
            section.classList.add(styles.belowView);
          } else {
            section.classList.add(styles.aboveView);
          }
          
          const img = section.querySelector(`.${styles.projectImage}`);
          if (img) {
            const parallaxSpeed = 0.15;
            const yPos = -(sectionTop * parallaxSpeed);
            img.style.transform = `translate3d(-50%, calc(-50% + ${yPos}px), 0) scale(1.1)`;
          }
          
          const content = section.querySelector(`.${styles.projectContent}`);
          if (content) {
            if (sectionTop < windowHeight * 0.7 && sectionTop > -sectionHeight * 0.3) {
              content.classList.add(styles.animate);
              
              if (currentSection !== index + 1) {
                setCurrentSection(index + 1);
              }
            }
          }
        }
      });
      
      if (scrollY < windowHeight/2) {
        setCurrentSection(0);
      }
    };

    const handleScrollPassive = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', handleScrollPassive, { passive: true });
    window.addEventListener('resize', handleScrollPassive, { passive: true });
    
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScrollPassive);
      window.removeEventListener('resize', handleScrollPassive);
    };
  }, [currentSection]);

  // Keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      
      switch(e.key) {
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'Escape':
          closeGallery();
          break;
        default:
          break;
      }
    };

    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedProject, currentImageIndex, isTransitioning]);

  const scrollToSection = (index) => {
    if (index === 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = projectRefs.current[index - 1];
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const openGallery = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsTransitioning(false);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setIsTransitioning(false);
    document.body.style.overflow = 'auto';
  };

  const handleButtonClick = () => {
    // כאן תוכל להוסיף את הפונקציונליות הרצויה לכפתור
    console.log('Button clicked for project:', selectedProject?.title);
  };

  return (
    <div className={`${styles.container} ${isLoaded ? styles.loaded : ''}`} ref={containerRef}>
      {/* Scroll Progress */}
      <div className={styles.scrollProgress}>
        <div 
          className={styles.scrollProgressBar} 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation Dots */}
      <div className={styles.navDots}>
        {['בית', 'Earth Fusion', '16th floor sea view', 'The penthouse', 'Soft Geometry', 'Earthy Embrace', 'Earth Haven'].map((title, index) => (
          <div
            key={index}
            className={`${styles.navDot} ${currentSection === index ? styles.active : ''}`}
            onClick={() => scrollToSection(index)}
            data-title={title}
          />
        ))}
      </div>

      {/* Hero Section with Netflix-style thumbnails */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle} id="פרוייקטים">הפרוייקטים שלי</h1>
          <p className={styles.heroSubtitle}>לחצו על כל תמונה כדי להגיע לפרוייקט</p>
          
          {/* Netflix-style thumbnails grid with ScrollReveal */}
          <div className={styles.netflixGrid}>
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                ref={el => thumbnailRefs.current[index] = el}
                data-index={index}
                className={`${styles.netflixThumbnail} ${
                  visibleThumbnails.has(index) ? styles.thumbnailVisible : styles.thumbnailHidden
                }`}
                onClick={() => scrollToProject(project.id)}
                style={{
                  '--delay': `${index * 0.1}s`,
                  '--random-rotation': `${(Math.random() - 0.5) * 6}deg`,
                  '--random-scale': `${0.95 + Math.random() * 0.1}`
                }}
              >
                <div className={styles.thumbnailImageWrapper}>
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.thumbnailShine}></div>
                </div>
                <div className={styles.thumbnailOverlay}>
                  <h3 className={styles.thumbnailTitle}>{project.title}</h3>
                  <span className={styles.thumbnailCategory}>{project.category}</span>
                </div>
                <div className={styles.thumbnailGlow}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <div className={styles.projectGallery}>
        {projects.map((project, index) => (
          <section 
            key={project.id} 
            className={styles.projectSection}
            ref={el => projectRefs.current[index] = el}
            id={`project-${project.id}`}
          >
            <div className={styles.projectImageContainer}>
              <img 
                src={project.image} 
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.projectOverlay} />
            </div>
            
            <div className={styles.projectContent}>
              <div className={styles.projectCategory}>{project.category}</div>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
              
              <div className={styles.projectDetails}>
                <div className={styles.projectDetail}>
                  <span className={styles.projectDetailLabel}>שטח</span>
                  <span className={styles.projectDetailValue}>{project.details.area}</span>
                </div>
                <div className={styles.projectDetail}>
                  <span className={styles.projectDetailLabel}>מיקום</span>
                  <span className={styles.projectDetailValue}>{project.details.location}</span>
                </div>
                <div className={styles.projectDetail}>
                  <span className={styles.projectDetailLabel}>שנה</span>
                  <span className={styles.projectDetailValue}>{project.details.year}</span>
                </div>
              </div>
              
              <button 
                className={styles.galleryButton}
                onClick={() => openGallery(project)}
              >
                צפה בגלריה המלאה
              </button>
            </div>
          </section>
        ))}
      </div>

      {/* Enhanced Gallery Modal */}
      {selectedProject && (
        <div className={`${styles.galleryModal} ${selectedProject ? styles.active : ''}`}>
          <div className={styles.galleryContainer}>
            <button className={styles.galleryClose} onClick={closeGallery}>
              ×
            </button>
            
            <button className={`${styles.galleryNav} ${styles.prev}`} onClick={prevImage}>
            </button>
            
            <img 
              src={selectedProject.gallery[currentImageIndex]} 
              alt={`${selectedProject.title} - תמונה ${currentImageIndex + 1}`}
              className={`${styles.galleryImage} ${isTransitioning ? styles.transitioning : ''}`}
              onLoad={() => {
                if (isTransitioning) {
                  setTimeout(() => setIsTransitioning(false), 100);
                }
              }}
            />
            
            <button className={`${styles.galleryNav} ${styles.next}`} onClick={nextImage}>
            </button>
            
            <div className={styles.galleryInfo}>
              <div className={styles.galleryCounter}>
                {currentImageIndex + 1} / {selectedProject.gallery.length}
              </div>
          
            </div>
            
            <div className={styles.galleryThumbnails}>
              {selectedProject.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`תמונה זעירה ${index + 1}`}
                  className={`${styles.galleryThumbnail} ${index === currentImageIndex ? styles.active : ''}`}
                  onClick={() => goToImage(index)}
                />
              ))}
            </div>

            {/* Button Component Added Below Thumbnails */}
            <div className={styles.galleryButtonContainer}>
              <Button text="ליצירת קשר לחצו כאן">
              
              </Button>
            </div>
           
          </div>
 
        </div>
        
      )}
          
    </div>
  );
};

export default ArchitecturePortfolio;