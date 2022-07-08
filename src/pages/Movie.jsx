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
    
    const formatCurrency=(number)=>{
        return number.toLocaleString("en-US",{
            style:"currency",
            currency:"USD"
        });
    }

    useEffect(()=>{
        const movieUrl=`${moviesUrl}${id}?${apiKey}`;
        getMovie(movieUrl)
    },[])
    return(
        <div className=" movie-page">
           {movie &&(
            <>
            <MovieCard movie={movie}/>
            <p className="tagline">{movie.tagline}</p>
            <div className="info">
                <h3>
                    <BsWallet2/> Orçamento:
                </h3>
                <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className="info">
                <h3>
                    <BsWallet2/> Receita:
                </h3>
                <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className="info">
                <h3>
                    <BsWallet2/> Duração:
                </h3>
                <p>{movie.runtime} minutos</p>
            </div>
            <div className="info description">
                <h3>
                    <BsFillFileEarmarkTextFill/> Descrição
                </h3>
                <p>{movie.overview}</p>
            </div>
            </>
           )}
        </div>
    )
}
export default Movie;