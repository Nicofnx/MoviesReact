import React, { useEffect, useState } from "react";

export function Filters(){

    const [genres, setGenres] = useState([]);

        useEffect(()=>{
            fetch("https://api.themoviedb.org/3/genre/movie/list",{
            headers: {
                Authorization: "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmYxZjcxMWVhYTEwNTlhMzE2MzQ4ODg5MDVhMzg5MCIsInN1YiI6IjYyMTU5MTdjMDQ5OWYyMDA0MmIxZWY1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bd-0YI5o3svibFpal3x72Nahqr9x03B1shkqeSimDWY",
                "Content-Type": "application/json;charset=utf-8",
             },
             
        }).then(result => result.json())
          .then(data => {
            setGenres(data.genres)                
        });
     },[]);


    return(
        <ul >
                {genres.map((genre)=> (
                    <li key={genre.id} genre={genre}>
                        <div ><p>{genre.name}</p></div>
                    </li>
                    )                    
                )}
            </ul>
    )
}