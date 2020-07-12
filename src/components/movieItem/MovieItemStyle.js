import styled from 'styled-components';
import plus from '../../assets/plus.png';
import tick from '../../assets/tick.png';


export const CardContainer = styled.div `
    position: relative;
    width: ${props => props.width};
    height: 320px;
    margin: 5px;
    background-color: var(--mainColor);
    color: var(--textColor);
    line-height: 50%;
    border: 1px solid var(--borderColor);
`;

export const ImgContainer = styled.div `
    width: 100%;
    height: 70%;
`;

export const CardImg = styled.img `
    width: 100%;
    height: 100%;
`;

export const CardBody = styled.div `
    width: 100%;
    height: 30%;
    padding-top: 15px;
    text-align: center;
`;

export const CardBtn = styled.button `
    width: 30px;
    height: 30px;
    background-image: ${props => props.btnChangeColor ? `url(${tick})` : `url(${plus})`};
    background-size: cover;
    background-color: inherit;
`;

// export const DeleteBtn = styled.button `
//     background-color: red;
// `;