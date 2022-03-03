import Styles from "./Search.module.css"
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { useQuery } from "../hooks/useQuery";

export function Search(){

    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate("/?search=" + searchText)

    }

    const query = useQuery();
    const search = query.get("search");

    useEffect(() => {
        setSearchText(search || "");
    }, [search]);


    return(
        <form className= {Styles.searchContainer} onSubmit={handleSubmit}>
            <div className = {Styles.searchBox}>
                <input 
                className= {Styles.searchInput} 
                type="text" 
                placeholder="Ingrese pelicula..." 
                value={searchText} 
                onChange={(e)=>setSearchText(e.target.value.toLowerCase())}>                    
                </input>
                <button 
                className= {Styles.searchButtom} 
                type="submit"><FaSearch 
                size={20}/>
                </button>
            </div>
        </form>        
    )

    

}