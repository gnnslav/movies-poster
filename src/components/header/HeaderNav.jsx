import React from 'react';

import {HeaderContainer, Logo, MenuList, MenuItem, CurrentItem} from "./HeaderNavStyle";

const Header = (props)=>{
    const {movieWillWatch} = props;
    return(
        <HeaderContainer>
            <Logo></Logo>
            <MenuList>
                <MenuItem> Home
                    {/* <a href="#">Home</a> */}
                </MenuItem>
                <MenuItem> Will watch list
                    {/* <a href="#">Will Watch List</a> */}
                </MenuItem>
                <CurrentItem>
                    {movieWillWatch > 0 ? movieWillWatch : ''}
                </CurrentItem>
            </MenuList>

        </HeaderContainer>
    );
}

export default Header;