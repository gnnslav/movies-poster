import React from "react";

//const MovieItem = props =>
class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false
    };
  }

  render() {
    //console.log(props.movie);
    const {
      movie,
      removeMovie,
      addMovieToWillWatch,
      removeMoviesToWillWatch
    } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path ||
            movie.backdrop_path}`}
          alt={movie.title}
        />

        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <div className="d-flex justify-content-between aline-items-center">
            <p className="mb-0">Raiting: {movie.vote_average}</p>
            {this.state.willWatch ? (
              <button
                type="button"
                className="btn btn-success btn-sm"
                onClick={() => {
                  this.setState({
                    willWatch: false
                  });
                  removeMoviesToWillWatch(movie);
                }}
              >
                WillWatch
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  this.setState({
                    willWatch: true
                  });
                  addMovieToWillWatch(movie);
                }}
              >
                Remove WillWatch
              </button>
            )}
            ;
          </div>
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={removeMovie.bind(this, movie)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default MovieItem;
