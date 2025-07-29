import Timeline from "../components/steps/Steps"
import styles from "./SixthScreen.module.css"
import DarkVeil from "./DarkVeil"
import { ChevronDown } from "lucide-react"

const SixthScreen = () => {
    // בדיקה אם המסך קטן
    const isMobile = window.innerWidth <= 768;
    
    return (
        <>
        
            <div className={styles.background}>
               <DarkVeil 
                        hueShift={0.5}           
                        noiseIntensity={isMobile ? 0.015 : 0.02} // יותר רעש = יותר גלים
                        scanlineIntensity={isMobile ? 0.01 : 0.015} // קווי סריקה עדינים יותר
                        speed={isMobile ? 0.4 : 0.6}    // מהירות מעט יותר גבוהה ליותר תנועה
                        scanlineFrequency={isMobile ? 0.004 : 0.005} // יותר קווי סריקה ליותר פרטים
                        warpAmount={isMobile ? 0.04 : 0.06}    // מעט יותר עיוות ליותר גלים
                        primaryColor="#909090" // אפור בהיר יותר לגלים - ניכר יותר לעין
                        secondaryColor="#707070" // אפור בהיר יותר לגלים
                        backgroundColor="#000000" // רקע שחור
                    />
        
             

                {/* התוכן מעל הרקע */}
                <div className={styles.content}>
                    <div className={styles.title}>אם הגעתם עד לכאן</div>

                    <div className={styles.description}>
                        סימן שאתם רציניים לגבי השינוי החדש שלכם, <br/> 
                        בדיוק בשביל זה יצרנו תהליך מסודר, רגוע ויעיל – כזה שיוביל אתכם בבטחה אל הבית המושלם.
                    </div>

                    <div className={styles.arrowContainer}>
                        <ChevronDown className={styles.bounceArrow} size={48} color="white" strokeWidth="1"/>
                    </div>

                    <Timeline/>
                </div>
            </div>
        </>
    )
}

export default SixthScreen