import React from "react";

import { API_URL, API_KEY_3 } from "./config/api";
import MovieItem from "./components/MovieItem";
import MovieTabs from "./components/MovieTabs";
import MoviePages from "./components/MoviePages";


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc",
      page: 1
    };
    this.removeMovie = this.removeMovie.bind(this);
    this.addMovieToWillWatch = this.addMovieToWillWatch.bind(this);
    this.removeMoviesToWillWatch = this.removeMoviesToWillWatch.bind(this);
  }
  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log(prevProps, prevState);
    //console.log(this.props, this.state);
    if (prevState.sort_by !== this.state.sort_by || prevState.page !== this.state.page) {
      this.getMovies();
    }
  }

  getMovies = () => {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${
        this.state.sort_by
      }&page=${this.state.page}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          movies: data.results,
          total_pages: data.total_pages
        });
      });
  };

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
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col-12 mb-4">
                <MovieTabs
                  sort_by={this.state.sort_by}
                  updateSortBy={this.updateSortBy}
                />
                <div className="col-12 mb-4">
                  <MoviePages
                    page={this.state.page}
                    total_pages={this.state.total_pages}
                    updatePage={this.updatePage}
                  />
                </div>
              </div>
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6 mb-1" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMoviesToWillWatch={this.removeMoviesToWillWatch}
                    />
                  </div>
                );
              })}
              ;
            </div>
          </div>
          <div className="col-3">
            <p> will watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


