const API = "https://api.themoviedb.org/3";
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmYxZjcxMWVhYTEwNTlhMzE2MzQ4ODg5MDVhMzg5MCIsInN1YiI6IjYyMTU5MTdjMDQ5OWYyMDA0MmIxZWY1OCIsInNjb3BlcyI6WyJhcGlfcmVhgit";

export function get(path){
    return fetch(API + path,{
        headers: {
            Authorization: "bearer" + API_TOKEN,
            "Content-Type": "application/json;charset=utf-8",
         },
         
    }).then(result => result.json() );
    
    
    
}