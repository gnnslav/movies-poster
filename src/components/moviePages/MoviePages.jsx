import React from "react";
import {PaginationContainer, PageItem, PageLink} from "./MoviePagesStyle";
import leftArrowIcon from "../../assets/leftArrowsIcon.svg";
import rightArrowIcon from "../../assets/rightArrowsIcon.svg";

class MoviePages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstPageOfRange: 3
    };
  }
  
  handleChangePages = (value) => () => {
    let start = this.state.firstPageOfRange;
    const updatePage = start += value;
     if(updatePage < 3 || updatePage > 495){
      return;
    }
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

  activeItem = (item) => {
    return ((this.state.page === item) ? "var(--hoverColor)" : "");
  };

  render(){
    const { updatePage, totalPages } = this.props;
    console.log(updatePage);
    return (
      <PaginationContainer>
        
          <PageItem>
            <PageLink onClick={this.handleChangePages(-1)} >prev</PageLink>
          </PageItem>
          <PageItem>
            <PageLink onClick={()=>updatePage(1)} >1</PageLink>
          </PageItem>
          {(this.state.firstPageOfRange === 3) 
          ? 
            <PageItem>
              <PageLink onClick={()=>updatePage(2)} >2</PageLink>
            </PageItem>
          :
          <PageItem>
            <PageLink onClick={this.handleChangePages(-1)} >
              <img src={leftArrowIcon} alt="#"></img>
            </PageLink>
          </PageItem>
          }
          {this.getRange(this.state.firstPageOfRange).map((item) => {
            return (
              <PageItem key={item} active={this.activeItem(item)}>
                <PageLink onClick={() => {updatePage(item)}}>
                  {item}
                </PageLink>
              </PageItem>
            );
          })}
          {(this.state.firstPageOfRange === (totalPages-7)) 
            ? 
            <PageItem>
              <PageLink onClick={()=>updatePage(totalPages-1)} >
                {totalPages-1}
              </PageLink>
            </PageItem>
            :
            <PageItem>
              <PageLink onClick={this.handleChangePages(10)} >
               <img src={rightArrowIcon}alt="#"></img>
              </PageLink>
            </PageItem>
          }
          <PageItem>
              <PageLink onClick={()=>updatePage(totalPages)}>
                {totalPages}
              </PageLink>
            </PageItem>
           <PageItem>
            <PageLink onClick={this.handleChangePages(1)}>
              next
            </PageLink>
          </PageItem>
        
      </PaginationContainer>
    );
  }
}

export default MoviePages;