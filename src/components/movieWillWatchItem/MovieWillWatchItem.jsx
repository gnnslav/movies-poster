import React from "react";

import star from '../../assets/star.png';

import { MovieItem, DeleteBtn } from "./MovieWillWatchItemStyle";
import { IconPanel, IconStar } from '../icons/IconsStyle';
import API_IMG from "./../../config/api";


const MovieWillWatchItem = props =>{
    const {movie, removeMoviesToWillWatch} = props;
    console.log(movie);
    return(
        <MovieItem url={`${API_IMG}${movie.poster_path}`}>
                {/* <MovieImg src={`https://image.tmdb.org/t/p/w500${movie.poster_path ||
                movie.backdrop_path}`} alt={movie.title}/> */}
                
            <IconPanel>
                <IconStar src={star}></IconStar>
                <p>{movie.vote_average}</p>
                <DeleteBtn 
                    type="button"
                    onClick={()=>{
                        removeMoviesToWillWatch(movie);
                    }}>
                </DeleteBtn>
            </IconPanel>
        </MovieItem>
    );
};
export default MovieWillWatchItem;
