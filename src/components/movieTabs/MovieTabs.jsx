import React from "react";
import {SELECT_BTN} from '../../config/selectItem';
import {MovieTabsContainer, MovieTab} from './MovieTabsStyle';


const MovieTabs = props => {
  const {sort_by, updateSortBy } = props;
  // const getClassByValue = value => {
  //   // const a = `${sort_by === value ? "blue" : ""}`;
  //   // console.log(a);
  //   // return a;
  //   return `${sort_by === value ? "blue" : ""}`;
  // };

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

  // return (
  //   <ul className="tabs nav nav-pills">
  //     <li className="nav-item">
  //       <div
  //         className={getClassByValue("popularity.desc")}
  //         onClick={handleClick("popularity.desc")}
  //       >
  //         Popularity
  //       </div>
  //     </li>
  //     <li className="nav-item">
  //       <div
  //         className={getClassByValue("release_date.desc")}
  //         onClick={handleClick("release_date.desc")}
  //       >
  //         Release_date
  //       </div>
  //     </li>
  
  //     <li className="nav-item">
  //       <div
  //         className={getClassByValue("revenue.desc")}
  //         onClick={handleClick("revenue.desc")}
  //       >
  //         Up comming
  //       </div>
  //     </li>
  //     <li className="nav-item">
  //       <div
  //         className={getClassByValue("vote_average.desc")}
  //         onClick={handleClick("vote_average.desc")}
  //       >
  //         vote avarage
  //       </div>
  //     </li>
  //     <li className="nav-item">
  //       <div
  //         className={getClassByValue("vote_count.desc")}
  //         onClick={handleClick("vote_count.desc")}
  //       >
  //         vote count
  //       </div>
  //     </li>
  //   </ul>
  // );

  );

};

//export default MovieTabs;
// return (
//   <ul className="tabs nav nav-pills">
//     <li className="nav-item">
//       <div
//         className={getClassByValue("popularity.desc")}
//         onClick={handleClick("popularity.desc")}
//       >
//         Popularity
//       </div>
//     </li>
//     <li className="nav-item">
//       <div
//         className={getClassByValue("release_date.desc")}
//         onClick={handleClick("release_date.desc")}
//       >
//         Release_date
//       </div>
//     </li>

//     <li className="nav-item">
//       <div
//         className={getClassByValue("revenue.desc")}
//         onClick={handleClick("revenue.desc")}
//       >
//         Up comming
//       </div>
//     </li>
//     <li className="nav-item">
//       <div
//         className={getClassByValue("vote_average.desc")}
//         onClick={handleClick("vote_average.desc")}
//       >
//         vote avarage
//       </div>
//     </li>
//     <li className="nav-item">
//       <div
//         className={getClassByValue("vote_count.desc")}
//         onClick={handleClick("vote_count.desc")}
//       >
//         vote count
//       </div>
//     </li>
//   </ul>
// );
export default MovieTabs;