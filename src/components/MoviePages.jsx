import React from "react";

class MoviePages extends React.Component {
  constructor() {
    super();

    this.state = {
      firstPageOfRange: 1
    };

    this.handleChangePages = this.handleChangePages.bind(this);
  }

  handleChangePages = value => () => {
    const updatePage = this.state.range += value;

    this.setState({
      firstPageOfRange: updatePage
    });
  };

  getRange = (startPage, step = 1) => {
    const range = [];
    let i = startPage;
    const endPage = startPage + 5;
    while (i <= endPage) {
      range.push(i);
      i += step;
    }
    return range;
  };

  render(){
    
    const { page, updatePage } = this.props;

    return (
      <div className="row">
        <ul className="pagination">
          <li className="page-item">
            <div className="page-link" onClick={this.handleChangePages(-1)} >            prev
            </div>
          </li>
          {this.getRange(this.state.firstPageOfRange).map((item, index) => {
            return (
              <li
                className={`page-item ${page === item ? "active" : ""}`}
                key={item}
              >
                <div
                  className="page-link"
                  onClick={() => {
                    console.log(item);
                    updatePage(item);
                  }}
                >
                  {item}
                </div>
              </li>
            );
          })}
          <li className="page-item">
            <div className="page-link" onClick={this.handleChangePages(1)}>
              prev
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default MoviePages;