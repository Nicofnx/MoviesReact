import { MovieCard } from "./MovieCard";
import style from "./MovieCard.module.css";
import React, { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Snipper } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";


export function MoviesGrid( { search } ){
    //pARA RENDERIZAR EL CAMBIO SE USA EL useState
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const [pages, setPages] = useState(1);
    const [hasMore, setHasMOre] = useState(true);
       
//************************FORMA DE PEDIR LA API*******************************//
    // useEffect(()=>{
    //         fetch("https://api.themoviedb.org/3/discover/movie",{
    //         headers: {
    //             Authorization: "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmYxZjcxMWVhYTEwNTlhMzE2MzQ4ODg5MDVhMzg5MCIsInN1YiI6IjYyMTU5MTdjMDQ5OWYyMDA0MmIxZWY1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bd-0YI5o3svibFpal3x72Nahqr9x03B1shkqeSimDWY",
    //             "Content-Type": "application/json;charset=utf-8",
    //          },
             
    //     }).then(result => result.json())
    //       .then(data => {
    //         setMovies(data.results)                
    //     });
    //  },[]);
    useEffect(()=>{
        setIsLoading(true);
        const serchURL = search 
        ? "/search/movie?query=" + search + "&page=" + pages
        : "/discover/movie?page=" + pages;
        get(serchURL).then((data)=>{
            setMovies((prevMovies) => prevMovies.concat(data.results));
            setHasMOre(data.page < data.total_pages);
            setIsLoading(false)            
        });
    },[search, pages]);
     //****************************************************************//
    if (!isLoading && movies.length===0){
        return <Empty/>
    }
     return(
         <InfiniteScroll
         dataLength={movies.length} //This is important field to render the next data
         next={()=>setPages((prevPages)=> prevPages + 1)}
         hasMore={hasMore}
         loader={<Snipper/> }
       >   
             
            <ul className={style.moviesGrid}>
                {movies.map((movie)=> (
                    <MovieCard key={movie.id} movie={movie} />
                    )                    
                )}
            </ul>
        </InfiniteScroll>
         
            
        
    )
    
}