
import style from "./App.module.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App(){
    return(
        <Router>
            <header>
                <Link to="/" ><h1 className={style.titleStyle}>Movies</h1></Link> 
                               
            </header>
            <main>                
                 <Routes>
                     <Route path="/movies/:movieId" element={<MovieDetails/>}>Details</Route>
                     <Route path="/" element={<LandingPage/>}></Route>                     
                </Routes>
            </main>
        </Router>
    )
}