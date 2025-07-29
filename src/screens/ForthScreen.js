import styles from "./ForthScreen.module.css"
import house from "../icons/wired-outline-63-home-loop-3d-roll.json"
import kablan from "../icons/wired-outline-731-real-estate-building-project-hover-pinch (1).json"
import dizzy from "../icons/wired-outline-1252-dizz-hover-pinch (1).json"
import IconTextComponent from "../components/can/Can"
const ForthScreen=()=>{

    return <>
    <div className={styles.title} id="מסך שני">אם הגעתם לכאן</div>
       <div className={styles.description}>סימן שכבר קניתם דירה מקבלן או שאתם עומדים לשפץ את הדירה שלכם</div>
           <div className={styles.title}>אז קודם כל מזל טוב!</div>
           <div className={styles.description}> זו אחת ההחלטות הכי מרגשות שאפשר לקבל.
          התחלה חדשה, חלל חדש, הזדמנות לעצב את הסביבה שתלווה אתכם כל יום מחדש.
   </div>
       <div className={styles.description}>
          המון מחשבות מרגשות בדרך והמון תכנונים שאתם רק מחכים להוציא לפועל
   </div>
      <div className={styles.title}>אבל אז.. מתחילים להבין כמה החלטות לא פשוטות מחכות בדרך</div>
   <div className={styles.row}>
<IconTextComponent
  icon={kablan}
  text="הקבלן רוצה להתקדם מהר ומבקש תשובות אבל אתם עדין לא סגורים על כל הפרטים"
/>

<IconTextComponent
  icon={house}
  text="ראיתם המון דוגמאות וסגנונות ואתם לא באמת יודעים מה יתאים לדירה שלכם ואיך להוציא אותם לפועל"
/>

<IconTextComponent
  icon={dizzy}
  text="אתם קופצים בין חנויות, מדברים עם ספקים, שומעים דעות שונות ובכל פעם הכל נהיה רק יותר ויותר מבלבל"
/>
   <div className={styles.title}>ובנקודה הזו</div>
     <div className={styles.description}>רוב הזוגות מבינים שהם לא רוצים ולא יכולים לעשות את השינוי הזה לבד כי כל טעות בתהליך עולה.. (וביוקר)</div>
      <div className={styles.title}>ובדיוק כאן אני נכנס לתמונה</div>
   </div>
    </>
}
export default ForthScreen