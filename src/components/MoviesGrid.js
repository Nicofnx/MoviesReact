import movies from "./movies.json";
import { MovieCard } from "./MovieCard";
import style from "./MovieCard.module.css"
import React, { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Snipper } from "./Spinner";
import { useLocation } from "react-router-dom"
import { useQuery } from "../hooks/useQuery";


export function MoviesGrid(){
    //pARA RENDERIZAR EL CAMBIO SE USA EL useState
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const query = useQuery();
    const search = query.get("search")
    
//************************FORMA DE USAR UNA API*******************************//
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
        ? "/search/movie?query=" + search
        : "/discover/movie";
        get(serchURL).then((data)=>{
            setMovies(data.results);
            setIsLoading(false)            
        });
    },[search]);
     //****************************************************************//
     if(isLoading){
        return <Snipper/> 
    }
     return(
         <>
            <h2>Carrusel de pelis</h2>
            <ul className={style.moviesGrid}>
                {movies.map((movie)=> (
                    <MovieCard key={movie.id} movie={movie} />
                    
                    )
                    
                )}
                
                
            </ul>
        </>
    )
    
}