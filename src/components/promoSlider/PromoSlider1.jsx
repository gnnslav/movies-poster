import React from "react";
import {SliderContainer, 
        MovieDescription, 
        MovieTitle, 
        MovieOverview, 
        MovieSlidersContainer, 
        MovieSlider, 
        SliderPicture
    } from "./PromoSliderStyle";

// https://webformyself.com/kak-sdelat-prostoj-slajder-na-javascript-bez-jquery/
//`https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg`
const firstPath = 'https://image.tmdb.org/t/p/w500';

class PromoSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
            oneMovie: {}
            // loaded: false
            // prevMovie: '',
            // nextMovie: '',
            // arrLength: 20
        };

      }
  
    //   componentDidMount(){
    //     this.timer = setInterval( this.updateCurrentSlide, 3000);
    //     //this.getPromoSlide();
        
    //     //setInterval( this.getPromoSlide(), 3000);
    //   }

    //   componentWillUnmount(){
    //     clearInterval(this.timer);
    //     // setInterval( this.getPromoSlide(), 3000);
    //   }
      
    //   componentDidUpdate(prevProps, prevState) {
    //     //console.log(prevProps, prevState);
    //     //console.log(this.props, this.state);
    //     if (prevState.oneMovie !== this.state.oneMovie) {
            
    //         this.getPromoSlide();
    //     }
    // }

     
      updateCurrentSlide = () => {
        let current = this.state.currentSlide;
        this.setState({
            currentSlide: current + 1
        });
        // if (current === this.state.arrLength - 1){
        //     this.setState({
        //         currentSlide: 0
        //     });
        // } else{
        //     this.setState({
        //         currentSlide: current + 1
        //     });
        // }     
      }

    //   updateSlide = (arr) => {
    //     this.setState({
    //         oneMovie: arr[this.state.currentSlide],
    //         prevMovie: this.getPrevNextSlide(arr, -1),
    //         nextMovie: this.getPrevNextSlide(arr, 1)
    //     });
    //   }

    // getPrevNextSlide = (arr, next)=>{
    //     const index = this.state.currentSlide + next;
    //     //const index = arr.indexOf(item) + next;

    //     if(index === arr.length - 1){
    //         this.setState({
    //             currentSlide:  1
    //         });
    //     }
    //     if(arr.length < 0){
    //     const path = arr[index].poster_path;
    //     console.log(path);
    //     return path;
    //     }
    // }

    // getMovieItem(arr){
    //     const index = this.state.currentSlide;
    //     const item = arr[index];
    //     return this.setState({
    //         oneMovie:{            
    //             posterPath: item.poster_path,
    //             title: item.title,
    //             overview: item.overview
    //         }
    //     });
    // }
    
    movieItems (arr, next){
        const index = this.state.currentSlide + next;
        if(index === arr.length - 1){
            this.setState({
                currentSlide: 0,
            })
        }

        return arr.map((item)=>{
            return <li key={item.id}>
                        <SliderPicture 
                            src={`${firstPath}${arr[index].poster_path}`}
                            active                           
                        ></SliderPicture>
                    </li>
            });
    }

    render() {
        const {movie} = this.props;
        //console.log(movies);
        // if(!movies){
        //     return;
        // } else{
        //     const slideItem = this.getMovieItem(movies);
        //     console.log(slideItem);
        // }
        //const slideItem = this.getMovieItem(movies);
        // const {posterPath, title, overview} = this.state.oneMovie;
        // console.log(posterPath, title, overview);
        const posterPath = "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg";
        //const content = (this.state.loaded) ? this.movieItems(movies, 1) : null; 

          return (
            <SliderContainer url = {`${firstPath}${posterPath}`}>
                <MovieDescription>
                    <MovieTitle>{}</MovieTitle>
                    <MovieOverview>{}</MovieOverview>
                </MovieDescription>
                <MovieSlidersContainer>
                    <MovieSlider width='20vw' height='325px'>
                        {this.movieItems(movies, 0)}
                    </MovieSlider>
                    <MovieSlider width='40vw' height='400px'>
                        {/* {content} */}
                        {this.movieItems(movies, 1)}
                        getPromoSlide = {()=>{console.log('hello')}}
                    </MovieSlider>
                    <MovieSlider width='20vw' height='325px' >
                        {this.movieItems(movies, 2)}
                    </MovieSlider>
                </MovieSlidersContainer>
            </SliderContainer>
        )
    }

}

export default PromoSlider;


                        // {/* {movies.map((movie)=>{
                        //     return(
                        //         <li key={movie.id}>
                        //             <SliderPicture 
                        //                 src={`${firstPath}${movies[this.state.currentSlide].poster_path}`}               
                        //                 active
                                        
                        //                 onClick = {()=>{
                        //                     this.updateCurrentSlide();
                        //                     this.updateSlide(movies);
                        //                     }
                        //                 }
                        //                 // onClick = {()=>{
                        //                 //     this.setState({
                        //                 //         oneMovie: movies[this.state.currentSlide],
                        //                 //         prevMovie: this.getPrevNextSlide(movies, -1),
                        //                 //         nextMovie: this.getPrevNextSlide(movies, 1)
                        //                 //     });
                        //                 //     this.updateCurrentSlide();
                        //                 // }}
                        //             ></SliderPicture>
                        //         </li>
                        //     );
                        // })}