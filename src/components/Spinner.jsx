
import styles from "./Spinner.module.css"

export function Snipper(){
    return(
        <>
            <div className= {styles.spinner}>
                <b
                className={styles.spinning}> 
                    S
                </b>                   
            </div>
            <h2 className={styles.load}>Loading...</h2>
        </>
        
        
    )
}