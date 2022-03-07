import { ImSpinner10 } from 'react-icons/im'
import styles from "./Spinner.module.css"

export function Snipper(){
    return(
        <>
            <div className= {styles.spinner}>
                <ImSpinner10
                className={styles.spinning}> 
                    
                </ImSpinner10>                   
            </div>
            <h2 className={styles.load}>Loading...</h2>
        </>
        
        
    )
}