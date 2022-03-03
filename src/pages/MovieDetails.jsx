
import styles from "./MovieDetails.module.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Snipper } from "../components/Spinner";

export function MovieDetails(){
    
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(()=>{
        setIsLoading(true);
        get("/movie/" + movieId).then((data)=>{
            setMovie(data);
            setIsLoading(false);
        });
    },[movieId]);

    if(isLoading){
        return <Snipper/> 
    }

    
    const imgUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    
    return(
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImg}`} src={imgUrl} alt = {movie.title}></img>
            <div className={`${styles.col} ${styles.movieDetails}`} >
                <h3 className={styles.title}><strong>Title: </strong> {movie.title}</h3>
                <p>
                    <strong>Genres: </strong>{movie.genres.map(genre=>genre.name).join(", ")}
                </p>
                <p><strong>Description: </strong> {movie.overview}</p>
            </div>
            
        </div>
    )
}