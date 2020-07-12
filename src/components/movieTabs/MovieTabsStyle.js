import styled from 'styled-components';

export const MovieTabsContainer = styled.ul`
    width: 100%;
    margin: 16px 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--textColor);
    background-color: var(--mainColor);
    border: 1px solid var(--borderColor);
    @media screen and (max-width: 800px) {
        flex-direction: row;
        margin-right: 10px;
  }
`;

export const MovieTab = styled.li`
    padding: 20px;
    border: 1px solid var(--borderColor);
    background-color: ${props => props.active};
    @media screen and (max-width: 800px) {
        padding: 0;
        text-align: center;
        fond-size: 0.7rem;
        fond-weight: 200;
  }
`;
