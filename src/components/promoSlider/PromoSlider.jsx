import React from "react";
import API_IMG from "./../../config/api";
import {SliderContainer,
        MainImage, 
        SlidersWrap,
        MovieDescription, 
        MovieTitle, 
        MovieOverview, 
        MovieSlidersContainer, 
        MovieSlider
    } from "./PromoSliderStyle";

const PromoSlider = props =>{
    const {onemovie, prevmovie, nextmovie} = props;
    return (
        <SliderContainer>
            <MainImage url = {`${API_IMG}${onemovie.poster_path}`}></MainImage>
            <SlidersWrap>
                <MovieDescription>
                    <MovieTitle>{onemovie.title}</MovieTitle>
                    <MovieOverview>{onemovie.overview}</MovieOverview>
                </MovieDescription>
                <MovieSlidersContainer>
                    <MovieSlider width='27%' height='70%' url = {`${API_IMG}${prevmovie.poster_path}`}></MovieSlider>
                    <MovieSlider width='40%' height='100%' url = {`${API_IMG}${onemovie.poster_path}`}></MovieSlider>
                    <MovieSlider width='27%' height='70%' url = {`${API_IMG}${nextmovie.poster_path}`}></MovieSlider>
                </MovieSlidersContainer>
            </SlidersWrap>
        </SliderContainer>
    )

}

export default PromoSlider;