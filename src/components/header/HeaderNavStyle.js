import styled from "styled-components";

export const HeaderContainer = styled.header`
    max-width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    color: var(--textColor);
`;

export const Logo = styled.div`
    width: 40%;
    height: 100%;
`;

export const MenuList = styled.ul`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end; 
`;

export const MenuItem = styled.li`
    min-width: 20%;   
    display: block;
    padding: 5px;
    align-items: center;
    text-align: center;
    &:hover{
        cursor: pointer;
        background-color: var(--hoverColor);
    }
`;

export const CurrentItem = styled.div`
    width: 30px;
    height: 30px;
    margin: 5px;
    padding: 1px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid var(--borderColor);
    background-color: var(--hoverColor);
`;
