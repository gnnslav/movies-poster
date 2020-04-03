import React from "react";

const MovieTabs = props => {
  const { sort_by, updateSortBy } = props;

  const getClassByValue = value => {
    return `nav-link ${sort_by === value ? "active" : ""}`;
  };

  const handleClick = value => () => {
    updateSortBy(value);
  };

  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={getClassByValue("popularity.desc")}
          onClick={handleClick("popularity.desc")}
        >
          Popularity
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassByValue("revenue.desc")}
          onClick={handleClick("revenue.desc")}
        >
          Up comming
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassByValue("vote_average.desc")}
          onClick={handleClick("vote_average.desc")}
        >
          vote avarage
        </div>
      </li>
    </ul>
  );
};

export default MovieTabs;
