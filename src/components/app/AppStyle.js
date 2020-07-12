import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: var(--mainColor);
    border: 1px solid var(--borderColor);
`;

export const ContentBox = styled.section`
    width: 80%;
    margin: 0 auto;
    display: flex;
    @media screen and (max-width: 800px) {
        width: 100%;
        flex-direction: column;
  }
`;

export const Col = styled.div`
    width: ${props => props.width};
    border: var(--borderColor);
    @media screen and (max-width: 800px) {
        width: 100%;
  }
`;

export const MoviesBox = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const MoviesWillWatchContainer = styled.div `
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--borderColor);
    overflow: hidden;
`;


export const SortPanel = styled.div `
    width: 100%;
    height: 30px;
    color: var(--textColor);
    font-weight: bold;
`;

export const Slider = styled.ul `
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: row;
`;