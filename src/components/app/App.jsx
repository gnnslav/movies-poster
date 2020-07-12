import React from "react";

import getService from './../../services/apiService';

import Spinner from "../spinner/Spinner";

import {GlobalStyle} from "./globalStyle";
import {Container, ContentBox, Col, MoviesBox, MoviesWillWatchContainer, SortPanel, Slider}  from './AppStyle';

//import HeaderNav from "../header/HeaderNav";
import MovieItem from "../movieItem/MovieItem";
import MovieTabs from "../movieTabs/MovieTabs";
import MoviePages from "../moviePages/MoviePages";
import MovieWillWatchItem from "../movieWillWatchItem/MovieWillWatchItem";
import PromoSlider from "../promoSlider/PromoSlider";
// import MovieItemPage from "../movieItemPage/MovieItemPage";


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            moviesWillWatch: [],
            sort_by: "popularity.desc",
            page: 1,
            currentSlide: 0,
            oneMovie: {},
            loading: true
        };

       
        this.removeMovie = this.removeMovie.bind(this);
        this.addMovieToWillWatch = this.addMovieToWillWatch.bind(this);
        this.removeMoviesToWillWatch = this.removeMoviesToWillWatch.bind(this);
    }

    getService = new getService();

    getMovies = () => {
        const response = Promise.resolve(this.getService.getMovieItems(this.state.sort_by, this.state.page));
        console.log(response);

        response.then(data => {
            console.log(data.results);
            this.setState({
                movies: data.results,
                total_pages: data.total_pages,
                loading: false
            });
        });
    }

    // getMovies = () => {this.getService.getMovieItems(this.state.sort_by, this.state.page)
    //     .then(data => {
    //         console.log(data.results);
    //         this.setState({
    //             movies: data.results,
    //             total_pages: data.total_pages
    //         });
    //     });
    // }
    
    componentDidMount() {
        this.getMovies();
        this.timer =  setInterval( this.updateCurrentSlide, 10000);
    }

    componentDidUpdate(prevProps, prevState) {
        //console.log(prevProps, prevState);
        //console.log(this.props, this.state);
        if (prevState.sort_by !== this.state.sort_by || prevState.page !== this.state.page) {
            this.getMovies();
        }
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
    //https://api.themoviedb.org/3/search/movie?api_key=3f4ca4f3a9750da53450646ced312397&language=en-US&page=1&include_adult=false
    // getMovies() {
    //     fetch(
    //             `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${
    //     this.state.sort_by
    //   }&page=${this.state.page}`
    //         )
    //         .then(response => {
    //             console.log(response);
    //             return response.json();
    //         })
    //         .then(data => {
    //             console.log(data);
    //             this.setState({
    //                 movies: data.results,
    //                 total_pages: data.total_pages
    //             });
    //         });
    // }

    updateSortBy = value => {
        this.setState({
            sort_by: value
        });

    };

    updatePage = index => {
        this.setState({
            page: index
        });
    };

    updateCurrentSlide = () =>{
        let current = this.state.currentSlide;
        //const moviesLength = this.state.movies.length - 1;
        // console.log(current);
        // console.log(moviesLength);

        // if((current) === moviesLength){
        //     this.setState({
        //         currentSlide: 0
        //     });
        // } else {
        //     this.setState({
        //         currentSlide: current + 1
        //     });
        // }
        this.setState({
            currentSlide: current + 1
        });
    }

    getMovieForSlider = (next) => {
        const current = this.state.currentSlide + next;
        const oneMovie = this.state.movies[current];
        const moviesLength = this.state.movies.length - 1;
        if(current === moviesLength){
            this.setState({
                currentSlide: 0,
            })
        }
        return oneMovie;
    }

    addMovieToWillWatch = movie => {
        const updateMovies = [...this.state.moviesWillWatch];
        updateMovies.push(movie);
        this.setState({
            moviesWillWatch: updateMovies
        });
    };

    removeMoviesToWillWatch(movie) {
        const updateMoviesWillWatch = this.state.moviesWillWatch.filter(
            item => item.id !== movie.id
        );

        this.setState({
            moviesWillWatch: updateMoviesWillWatch
        });
    }

    removeMovie(movie) {
        const updateMovies = this.state.movies.filter(item => item.id !== movie.id);
        
        this.setState({
            movies: updateMovies
        });
    }
    
    render() {
        if(this.state.loading){
            return <Spinner />
        }
        return (
        <div>
            <GlobalStyle/>
                <Container> 
                    {/* <HeaderNav 
                        movieWillWatch={this.state.moviesWillWatch.length}
                    /> */}
                </Container>
                <Container>
                    <PromoSlider                           
                        onemovie = {this.getMovieForSlider(1)}
                        prevmovie = {this.getMovieForSlider(0)}
                        nextmovie = {this.getMovieForSlider(2)}
                    /> 
                </Container>       
                <ContentBox>
                    <Col width='20vw'>
                        <MovieTabs  
                            sort_by = {this.state.sort_by}
                            updateSortBy = {this.updateSortBy}
                        /> 
                    </Col>
                    <Col width='80vw'>
                        <MoviePages 
                            page = {this.state.page}
                            totalPages = {this.state.total_pages}
                            updatePage = {this.updatePage}
                        />
                        <MoviesBox >
                        {this.state.movies.map(movie => {
                            return ( 
                                <div key = {movie.id}>
                                    <MovieItem  
                                        movie = {movie}
                                        removeMovie = {this.removeMovie}
                                        addMovieToWillWatch = {
                                                        this.addMovieToWillWatch
                                                        }
                                        removeMoviesToWillWatch = {
                                                        this.removeMoviesToWillWatch
                                                        }
                                    />
                                </div>
                            );
                        })}
                        </MoviesBox>
                    </Col>
                </ContentBox>
                <Container>
                    <MoviesWillWatchContainer>
                        <SortPanel>
                            <p>will watch: {this.state.moviesWillWatch.length}</p>
                        </SortPanel>
                        <Slider>
                                {this.state.moviesWillWatch.map((movie)=>{
                                    return(
                                        <li key={movie.id}>
                                            <MovieWillWatchItem 
                                                movie={movie}
                                                removeMoviesToWillWatch = {this.removeMoviesToWillWatch}
                                            />
                                        </li>
                                    );
                                })}
                        </Slider>
                    </MoviesWillWatchContainer> 
                </Container>
        </div>

        );
    }
}

export default App;