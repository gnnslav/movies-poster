import React from "react";
import API_IMG from "./../../config/api";
import {SliderContainer, 
        MovieDescription, 
        MovieTitle, 
        MovieOverview, 
        MovieSlidersContainer, 
        MovieSlider
    } from "./PromoSliderStyle";


const PromoSlider = props =>{/
    const {onemovie, prevmovie, nextmovie} = props;
    //console.log(onemovie);
    return (
        <SliderContainer url = {`${API_IMG}${onemovie.poster_path}`}>
            <MovieDescription>
                <MovieTitle>{onemovie.title}</MovieTitle>
                <MovieOverview>{onemovie.overview}</MovieOverview>
            </MovieDescription>
            <MovieSlidersContainer>
                <MovieSlider width='20vw' height='225px' url = {`${API_IMG}${prevmovie.poster_path}`}></MovieSlider>
                <MovieSlider width='40vw' height='300px' url = {`${API_IMG}${onemovie.poster_path}`}></MovieSlider>
                <MovieSlider width='20vw' height='225px' url = {`${API_IMG}${nextmovie.poster_path}`}></MovieSlider>
            </MovieSlidersContainer>
        </SliderContainer>
    )

}

export default PromoSlider;