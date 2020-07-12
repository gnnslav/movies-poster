import React from "react";
import {SELECT_BTN} from '../../config/selectItem';
import {MovieTabsContainer, MovieTab} from './MovieTabsStyle';


const MovieTabs = props => {
  const {sort_by, updateSortBy } = props;

  const handleClick = value => () => {
    updateSortBy(value);
  };

  return(
    <MovieTabsContainer>
      {SELECT_BTN.map((item, index)=>{
        const name = item.substr(0, item.length-5).replace(/_/g, " ").toUpperCase();   
        return(
        <MovieTab key={index} active={sort_by === item ? "var(--hoverColor)" : ""}>
          <div
            onClick={handleClick(item)}>
            {name}
          </div>
        </MovieTab>
        )
      })}
    </MovieTabsContainer>
  );

};

export default MovieTabs;