const API = "https://api.themoviedb.org/3";
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmYxZjcxMWVhYTEwNTlhMzE2MzQ4ODg5MDVhMzg5MCIsInN1YiI6IjYyMTU5MTdjMDQ5OWYyMDA0MmIxZWY1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bd-0YI5o3svibFpal3x72Nahqr9x03B1shkqeSimDWY";

export function get(path){
    return fetch(API + path,{
        headers: {
            Authorization: "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmYxZjcxMWVhYTEwNTlhMzE2MzQ4ODg5MDVhMzg5MCIsInN1YiI6IjYyMTU5MTdjMDQ5OWYyMDA0MmIxZWY1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bd-0YI5o3svibFpal3x72Nahqr9x03B1shkqeSimDWY",
            "Content-Type": "application/json;charset=utf-8",
         },
         
    }).then(result => result.json() );
    
    
    
}