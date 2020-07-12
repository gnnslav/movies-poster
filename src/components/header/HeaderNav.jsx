import React from 'react';
import {Link} from 'react-router-dom';

import {HeaderContainer, Logo, MenuList, MenuItem, CurrentItem} from "./HeaderNavStyle";

const Header = (props)=>{
    const {movieWillWatch} = props;
    return(
        <HeaderContainer>
            <Logo></Logo>
            <MenuList>
                <MenuItem> 
                    <Link to="/"> Home </Link>
                </MenuItem>
                <MenuItem> 
                    <Link to="/WillWatchList">Will watch list</Link>
                  </MenuItem>
                <CurrentItem>
                    {movieWillWatch > 0 ? movieWillWatch : ''}
                </CurrentItem>
            </MenuList>

        </HeaderContainer>
    );
}

export default Header;