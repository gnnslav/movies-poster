import React from "react";
import {CardContainer,
        ImgContainer, 
        CardImg, 
        CardBody, 
        CardBtn, 
      } from './MovieItemStyle';
import { IconPanel, IconStar} from '../icons/IconsStyle';
import star from "../../assets/star.png";
import API_IMG from "./../../config/api";


//const MovieItem = props =>
class MovieItem extends React.Component {
  constructor() {
    super();
    this.state = {
      willWatch: false
    };
  }

  render() {
    //console.log(this.props.movie);
    const {
      movie,
      // removeMovie,
      addMovieToWillWatch,
      removeMoviesToWillWatch
    } = this.props;

    const btnWillWatch = (
        <CardBtn type = "button" 
                 onClick = {() => {
                  this.setState({
                    willWatch: false
                  });      
                  removeMoviesToWillWatch(movie);
                  }
                }
                btnChangeColor = {this.state.willWatch}> 
        </CardBtn>
      );

      const btnRemoveWillWatch = (
        <CardBtn type = "button" 
                 onClick = {() => {
                    this.setState({
                      willWatch: true
                    });
                    addMovieToWillWatch(movie);
                  }
                }
                btnChangeColor = {this.state.willWatch}>
        </CardBtn>
      );


    return (
      <CardContainer width={"220px"}>
        <ImgContainer>
          <CardImg 
            src = {`${API_IMG}${movie.poster_path ||
                  movie.backdrop_path}`
            }
            alt = {
              movie.title
            }></CardImg>
          </ImgContainer>
        <CardBody>
          <h6>{movie.title}</h6>
          <IconPanel>
              <IconStar src={star}></IconStar>
              <p>Rating {movie.vote_average} </p>
              {this.state.willWatch ? btnWillWatch : btnRemoveWillWatch}
          </IconPanel>  
          {/* <DeleteBtn type = "button"
                    onClick = {
                      removeMovie.bind(this, movie)
                    } >
          </DeleteBtn>   */}
        </CardBody>  
      </CardContainer>   
    );
  }
}

export default MovieItem;