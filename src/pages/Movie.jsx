import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import "./Movie.css"

const moviesUrl=import.meta.env.VITE_API;
const apiKey=import.meta.env.VITE_API_KEY;


import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from "react-icons/bs"

const Movie=()=>{
    const {id}=useParams()
    const [movie,setMovie]=useState(null)

    const getMovie= async(url)=>{
        const res=await fetch(url);
        const data=await res.json()

        setMovie(data)
    }

    useEffect(()=>{
        const movieUrl=`${moviesUrl}${id}?${apiKey}`;
        getMovie(movieUrl)
    },[])
    return(
        <div movie-page>
           {movie &&(
            <>
            <MovieCard movie={movie}/>
            <p className="tagline">{movie.tagline}</p>
            
            </>
           )}
        </div>
    )
}
export default Movie;