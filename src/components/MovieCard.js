import { Link } from "react-router-dom";
import style from "./MovieCard.module.css"
import { getMovieImg } from "../utils/getMovieImg";

export function MovieCard({movie}){
   // console.log(style)

    const imgUrl = getMovieImg(movie.poster_path, 300)

    return (
        
        <li className={style.movieCard}>
            <Link to={"/movies/" + movie.id}>
                <img className={style.movieImage} src={imgUrl} alt = {movie.title}></img>
                <div className={style.tittleBox}><p className={style.tittleCard}>{movie.title}</p></div>
            </Link>
        </li>
    )
}