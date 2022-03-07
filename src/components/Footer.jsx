import style from "./Footer.module.css"
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
 

export function Footer(){

   


    return(
        <footer className= {style.footerBox}>
            <div className= {style.footer}>
                <p>Page By FnX - Nicolas Rodriguez</p>
                <a href="https://www.linkedin.com/in/nicolas-rodriguez-5a8957231/" target="_blank"><BsLinkedin/></a>
                <a href="https://github.com/Nicofnx/pelisReact" target="_blank"><FaGithubSquare/></a>
                                
            </div>
        </footer>
    )
}