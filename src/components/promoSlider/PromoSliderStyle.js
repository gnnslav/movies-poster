import styled from 'styled-components';


export const SliderContainer = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-image: ${props => `url(${props.url})`};
    background-repeat: no-repeat;
    background-position: top center;
    background-origin: content-box;
    background-size: cover;
    opasity: .7;
    ${'' /* border: 1px solid var(--borderColor); */}
`;

export const MovieDescription = styled.div `
    width: 40%;
    height: 100%;
    color: var(--textColor);
    border: 1px solid green;
`;

export const MovieTitle = styled.h3 `
    fond-weight: bold;
    color: white;
`;

export const MovieOverview = styled.p `
    fond-weight: bold;
    color: white;
`;

export const MovieSlidersContainer = styled.div `
    width: 60%;
    height: 100%;
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    ${'' /* align-self: center; */}
    border: 1px solid green;
`;

export const MovieSlider = styled.div `
    width: ${props => props.width};
    height: ${props => props.height};
    background-image: ${props => `url(${props.url})`};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    align-self: center;
    position: relative;
    border: 1px solid red;
`;
