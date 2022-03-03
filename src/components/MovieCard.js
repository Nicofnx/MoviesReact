import { Link } from "react-router-dom";
import style from "./MovieCard.module.css"

export function MovieCard({movie}){
   // console.log(style)

    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return (
        
        <li className={style.movieCard}>
            <Link to={"/movies/" + movie.id}>
                <img className={style.movieImage} src={imgUrl} alt = {movie.title}></img>
                <div>{movie.title}</div>
            </Link>
        </li>
    )
}