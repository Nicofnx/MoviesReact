import style from "./Footer.module.css"

 

export function Footer(){

   


    return(
        <footer className= {style.footerBox}>
            <div className= {style.footer}>
                <p>Page By FnX - Nicolas Rodriguez</p>
                <a href="https://www.linkedin.com/in/nicolas-rodriguez-5a8957231/" target="_blank">Linkedin</a>
                <a href="https://github.com/Nicofnx/pelisReact" target="_blank">GitHub</a>
                                
            </div>
        </footer>
    )
}