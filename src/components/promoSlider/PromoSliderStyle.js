import styled from 'styled-components';


export const SliderContainer = styled.div `
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: space-around;
    @media screen and (max-width: 800px) {
        margin: 0 1%;
    }
`;

export const MainImage = styled.div `
    width: 50%;
    height: 100%;
    margin: 0 5%;
    display: flex;
    justify-content: center;
    background-image: ${props => `url(${props.url})`};
    background-position: center center;
    background-size: cover;
    border: var(--borderColor);
    ${'' /* border: 1px solid var(--borderColor); */}
    @media screen and (max-width: 1060px) {
        width: 60%;
    }
    @media screen and (max-width: 800px) {
        width: 80%;
    }
`;

export const SlidersWrap = styled.div`
    width: 50%;
    height: 100%;
    position: relative:
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    border: var(--borderColor);
    @media screen and (max-width: 1060px) {
        width: 40%;
    }
    @media screen and (max-width: 800px) {
        display: none;
    }
`;
export const MovieDescription = styled.div `
    width: 100%;
    height: 50%;
    position: absolute:
    top: 0px;
    text-align: center;
    color: var(--textColor);
`;

export const MovieTitle = styled.h3 `
    font-weight: bold;
`;

export const MovieOverview = styled.p `
    font-weight: lighter;
    padding: 5%;

`;

export const MovieSlidersContainer = styled.div `
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const MovieSlider = styled.div `
    width: ${props => props.width};
    height: ${props => props.height};
    background-image: ${props => `url(${props.url})`};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border: var(--borderColor);
`;
