import styled from "styled-components";


export const PaginationContainer = styled.ul`
    margin: 16px auto;
    display: flex;
    flex-direction: row;
`;

export const PageItem = styled.li`
    width: 40px;
    height: 40px;
    border: 1px solid var(--borderColor);
    background-color: ${props => props.active}
`;

export const PageLink = styled.div`
    padding: 4px;
    text-align: center;
    vertical-align: middle;
    background-color: inherit;
`;