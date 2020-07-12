import styled from 'styled-components';

import minus from '../../assets/minus.png';


export const MovieItem = styled.div `
    width: 150px;
    height: 200px;
    margin: 10px;
    position: relative;
    background-image: ${props => `url(${props.url})`};
    background-repeat: no-repeat;
    background-size: cover;
`;

export const DeleteBtn = styled.button `
    width: 30px;
    height: 30px;
    text-aline: centre;
    background-image: url(${minus});
    background-size: cover;
    background-color: inherit;
`;