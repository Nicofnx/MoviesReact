
import styles from "./Spinner.module.css";
import { ImSpinner3 } from "react-icons/im";

export function Snipper(){
    return(
        <>
            <div className= {styles.spinner}>
                <ImSpinner3 className={styles.spinning}/>             
           </div>
            <h2 className={styles.load}>Loading...</h2>
        </>
        
        
    )
}