import { useEffect, useState, useRef } from 'react';
import { Check } from 'lucide-react';
import styles from './Steps.module.css';
import Orb from '../../screens/SilverOrb';
import Button from '../button/Button';

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [visibleSteps, setVisibleSteps] = useState(new Set([1]));
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

 const steps = [
  {
    number: 1,
    title: "מגלים מי אתם - ומה באמת חשוב לכם",
    content: "עוד לפני שמדברים על עיצוב - אנחנו מבינים אתכם. את סדר היום שלכם, מה נעים לכם, מה חשוב לכם באמת, ואיך אתם אוהבים לחיות. זה הבסיס לבית שמתוכנן בדיוק בשבילכם - פרקטי, נעים, ומרגיש נכון מהשנייה שנכנסים."
  },
  {
    number: 2,
    title: "מתכננים הכול על הנייר - כדי שלא תהיו מופתעים אחר כך",
    content: "תכנון מדויק מונע טעויות יקרות. אתם מקבלים סקיצות ברורות וחלוקות חכמות שמתחשבות במבנה, בזרימה ובשימושים היומיומיים. הכל מונח על השולחן - לפני שמתחילים, כדי שתדעו בדיוק לאן הולכים."
  },
  {
    number: 3,
    title: "רואים את החלום - עוד לפני שהוא קורה",
    content: "לא צריך לדמיין. כבר עכשיו תראו את הבית שלכם - בדיוק כמו שהוא עומד להיראות. הדמיות ברמה גבוהה שכוללות כל פרט, כל גוון, כל חומר. אתם מרגישים בטוחים בבחירות - כי רואים הכל מראש, בלי הפתעות ובלי סימני שאלה."
  },
  {
    number: 4,
    title: "בוחרים חומרים - בראש שקט וביד בטוחה",
    content: "כשהתמונה ברורה - הבחירות הופכות פשוטות. אתם יודעים מה מחמיא למה, מה משתלב, ומה ייראה נכון באמת. אני מצרף אתכם לספקים קבועים שלי - שמציעים איכות, מחיר הוגן ושירות אישי. התוצאה: חיסכון בכסף ובאנרגיות."
  },
  {
    number: 5,
    title: "העבודה יוצאת לדרך - ואתם לא לבד",
    content: "מרגע שמתחילים, יש מי שמחזיק את כל החוטים. אני בקשר רציף עם הקבלן, הספקים, וכל מי שמעורב - ודואג שהכול יקרה בדיוק לפי התכנית. אתם פנויים להתמקד בהתרגשות - ולא בהתנהלות."
  },
  {
    number: 6,
    title: "מוסיפים את הטאץ' - שהופך בית לבית",
    content: "שלב ההלבשה הוא הרגע שבו הכול מתחבר. תאורה, טקסטיל, פריטים מדויקים - כל פרט מוסיף שכבה של אופי וחום. אתם מקבלים בית שנראה ומרגיש כמו מקום שבאמת שייך לכם."
  },
  {
    number: 7,
    title: "גם אחרי שהמפתח בידיים - אני כאן",
    content: "הקשר לא מסתיים ברגע שנכנסתם. אני ממשיך ללוות גם אחרי - אם צריך משהו קטן, שינוי, חיבור נוסף. המטרה היא שתרגישו בטוחים גם בהמשך - עם שקט נפשי מלא."
  }
];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const visible = new Set();

      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      let progress = 0;
      if (timelineTop <= windowHeight) {
        const scrolled = windowHeight - timelineTop;
        progress = Math.min(Math.max(scrolled / (timelineHeight + windowHeight/2), 0), 1);
      }
      
      setScrollProgress(progress);

      const elements = document.querySelectorAll(`.${styles.timelineItem}`);
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementProgress = (viewportHeight - rect.top) / viewportHeight;
        
        if (elementProgress > 0.2 && elementProgress < 1) {
          visible.add(index + 1);
        }
      });

      setVisibleSteps(visible);
      if (visible.size > 0) {
        setActiveStep(Math.max(...visible));
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container} id="תהליך העבודה איתי">

      <div className={styles.content}>
        <h2 className={styles.title}>
          תהליך העבודה שלנו
        </h2>
        
        <div className={styles.timeline} ref={timelineRef}>
          <div className={styles.timelineLine}>
            <div 
              className={styles.timelineProgress} 
              style={{ 
                height: `${scrollProgress * 100}%`
              }}
            />
          </div>
          
          {steps.map((step) => (
            <div 
              key={step.number}
              className={`${styles.timelineItem} ${
                visibleSteps.has(step.number) ? styles.active : styles.inactive
              } ${step.number % 2 === 0 ? styles.left : styles.right}`}
            >
              <div 
                className={`${styles.timelineNumber} ${
                  visibleSteps.has(step.number) ? styles.numberActive : styles.numberInactive
                }`}
              >
                {visibleSteps.has(step.number) && activeStep > step.number ? (
                  <Check className={styles.checkIcon} />
                ) : (
                  <span className={styles.numberText}>{step.number}</span>
                )}
                <div className={styles.numberGlow} />
              </div>

              <div className={styles.timelineContent}>
                <div className={`${styles.glassEffect} ${
                  visibleSteps.has(step.number) ? styles.cardActive : ''
                }`}>
                  <h3 className={styles.timelineTitle}>
                    {step.title}
                  </h3>
                  <p className={styles.timelineText}>
                    {step.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <Button text="רועי, בוא נדבר"/>
        </div>
          
      </div>
    
    </div>
  );
};

export default Timeline;