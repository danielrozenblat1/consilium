import styles from "./ThirdScreen.module.css";
import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";
import ScrollReveal from "scrollreveal";
import BlurText from './BlurText';
import Button from "../components/button/Button";

// יש להוסיף את קבצי ה-JSON של האייקונים שלך כאן
import moneyIcon from "../icons/wired-lineal-414-money-bag-dollar-hover-shake (4).json"; // החלף עם הנתיב הנכון
import managementIcon from "../icons//wired-lineal-457-shield-security-hover-pinch.json"; // החלף עם הנתיב הנכון
import visualizationIcon from "../icons/wired-lineal-63-home-hover-3d-roll.json"; // החלף עם הנתיב הנכון
import budgetIcon from "../icons/wired-lineal-298-coins-hover-jump (1).json"; // החלף עם הנתיב הנכון
import supportIcon from "../icons/wired-lineal-645-people-handshake-transaction-hover-pinch (1).json"; // החלף עם הנתיב הנכון
import FifthScreen from "./FifthScreen";


const ThirdScreen = () => {
  const playerRef1 = useRef();
  const playerRef2 = useRef();
  const playerRef3 = useRef();
  const playerRef4 = useRef();
  const playerRef5 = useRef();

  useEffect(() => {
    const revealOptions = {
      duration: 1000,
      distance: "30px",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      scale: 1,
    };
    
    ScrollReveal().reveal(`.${styles.title}`, { ...revealOptions, origin: "top", delay: 200 });
    ScrollReveal().reveal(`.${styles.subtitle}`, { ...revealOptions, origin: "top", delay: 400 });
    ScrollReveal().reveal(`.${styles.section}`, { ...revealOptions, origin: "right", delay: 200 });
    ScrollReveal().reveal(`.${styles.stepHeader}`, { ...revealOptions, origin: "top", delay: 200 });

    // הפעלת האנימציות של ה-Players
    playerRef1.current?.playFromBeginning();
    playerRef2.current?.playFromBeginning();
    playerRef3.current?.playFromBeginning();
    playerRef4.current?.playFromBeginning();
    playerRef5.current?.playFromBeginning();
  }, []);

  return (
    <>

     <BlurText
        text="כמה מילים מאלה שסיימו את התהליך"
        delay={150}
        animateBy="words"
        direction="top"
        className={styles.header}
      />

        <FifthScreen/>
      <BlurText
        text="״אז רועי, למה בכלל לקחת אדריכל ומעצב פנים?״"
        delay={150}
        animateBy="words"
        direction="top"
        className={styles.header}
      />

      <div className={styles.bigWrapper}>

        <div className={styles.step}>
          <div className={styles.icons}>
            <Player
              ref={playerRef1}
              size="100%"
              onComplete={() => setTimeout(() => playerRef1.current?.playFromBeginning(), 2500)}
              icon={moneyIcon}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.stepHeader}>חסכון בטעויות יקרות </div>
            <div className={styles.section}>
              שקע שלא במקום? נישה שבולטת מהקיר? מזגן שאי אפשר לפתוח לידו את הארון? טעויות קטנות כאלה נשמעות שוליות - אבל כל אחת עולה אלפי שקלים, זמן (וגם עצבים) <br />
              כשיש אדריכל ומעצב פנים שמבין את התמונה הגדולה, כל פרט יושב בדיוק איפה שהוא צריך. אתם לא מתקנים בדיעבד - אתם בונים נכון מההתחלה.
            </div>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.text}>
            <div className={styles.stepHeader}>לא תרגישו לבד לרגע</div>
            <div className={styles.section}>
              במקום להתרוצץ בין ספקים, לבדוק מחירים, לתאם פגישות ולהרגיש לבד מול הקבלנים והספקים - אתם מקבלים מישהו שמנהל את הכול. <br />
              יש לי צוות קבוע, מקצועי ומנוסה. אני בודק, בוחר, מתאם ודואג לכל פרט. אתם לא צריכים לדאוג לשום דבר - אני כאן לשמור שהכול יקרה כמו שצריך.
            </div>
          </div>
          <div className={styles.icons}>
            <Player
              ref={playerRef2}
              delay={500}
              size="100%"
              onComplete={() => setTimeout(() => playerRef2.current?.playFromBeginning(), 2500)}
              icon={managementIcon}
            />
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.icons}>
            <Player
              ref={playerRef3}
              size="100%"
              onComplete={() => setTimeout(() => playerRef3.current?.playFromBeginning(), 2500)}
              icon={visualizationIcon}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.stepHeader}>אפס הפתעות - אתם רואים הכול מראש</div>
            <div className={styles.section}>
              הרבה אנשים יוצאים לדרך בלי לדעת באמת איך ייראה הבית. רק אחרי שכבר שילמו וביצעו - הם מגלים שזה לא בדיוק מה שדמיינו. <br />
              אצלי זה לא קורה. אני בונה עבורכם הדמיה מדויקת (ברמה שלא תבדילו בין ההדמייה למציאות), שתראו בדיוק איך כל חלל ייראה. לפני שמזמינים. לפני שבונים. בלי הפתעות, בלי מקום לספק.
            </div>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.text}>
            <div className={styles.stepHeader}>שולטים בתקציב</div>
            <div className={styles.section}>
              שיפוץ או עיצוב בית יכולים בקלות לגלוש מהר מתקציב. מה שנראה כמו תוספת קטנה בהתחלה - הופך לאלפי ועשרות שקלים בלי לשים לב. <br />
              אני בונה אתכם תוכנית ברורה מראש - כמה כל דבר עולה, על מה אפשר לוותר, ואיפה לא להתפשר. יש לנו טבלה מסודרת ואתם יודעים בדיוק לאן הולך כל שקל, בלי הפתעות.
            </div>
          </div>
          <div className={styles.icons}>
            <Player
              ref={playerRef4}
              delay={500}
              size="100%"
              onComplete={() => setTimeout(() => playerRef4.current?.playFromBeginning(), 2500)}
              icon={budgetIcon}
            />
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.icons}>
            <Player
              ref={playerRef5}
              size="100%"
              onComplete={() => setTimeout(() => playerRef5.current?.playFromBeginning(), 2500)}
              icon={supportIcon}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.stepHeader}>יש לכם גב</div>
            <div className={styles.section}>
              כל שאלה, כל התלבטות, כל אתגר - אתם לא לבד. אני איתכם לאורך כל הדרך, מהשלב שבו הכול עוד על הנייר - ועד הרגע שאתם מקבלים מפתח לבית גמור. <br />
              גם אחרי המסירה - אני נשאר זמין לכם. כי כשיש לכם מישהו שדואג לכם, הכול מרגיש קל יותר.
            </div>
          </div>
        </div>

      </div>

      <div className={styles.description}>
        בסוף, זו לא רק דירה - זו סביבה שתחיו בה כל יום. מגיע לכם שהיא תיראה בדיוק כמו שחלמתם, בלי להתפשר, בלי בלגן, ובלי לשלם ביוקר על טעויות.
      </div>

      <Button text="רועי, בוא נדבר" />
    </>
  );
};

export default ThirdScreen;