import styled from 'styled-components';


export const SliderContainer = styled.div `
    width: 100%;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: beatween;
    background-image: ${props => `url(${props.url})`};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border: 1px solid red;
`;

export const MovieDescription = styled.div `
    width: 40%;
    height: 100%;
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

export const MovieSlidersContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: beatween;
    align-self: center;
    border: 1px solid green;
`;

export const MovieSlider = styled.ul`
    width: ${props => props.width};
    height: ${props => props.height};
    ${'' /* overflow: hidden;
    z-index: 2; */}
    align-self: center;
    position: relative;
    border: 1px solid red;
`;



export const SliderPicture = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: ${props => props.active ? 1 : 0};
    z-index: ${props => props.active ? 3 : 2};
`;

