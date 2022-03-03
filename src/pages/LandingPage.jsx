import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import Style from "./LandingPage.module.css"

export function LandingPage (){
    return(
        <div className={Style.landingBox}>
            <Search></Search>
            <MoviesGrid></MoviesGrid>
            


        </div>
        
    )
}