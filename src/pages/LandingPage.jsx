import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";
import Style from "./LandingPage.module.css"


export function LandingPage (){

    const query = useQuery();
    const search = query.get("search");
    const debounceSearch = useDebounce(search, 500)
    return(
        <div className={Style.landingBox}>
            <Search search={search}></Search>
            
            <MoviesGrid key={debounceSearch} search={debounceSearch}></MoviesGrid>
            


        </div>
        
    )
}