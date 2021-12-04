import React from 'react';

import { HeaderContainer, NavBar, NavLinks, NavBarContainer, LogoContainer, Li, H1, LinksContainer, SignOutContainer, GreyContainer } from './HeaderStyles';

const Header = props => {
    return (
        <>
        <GreyContainer />
        <HeaderContainer>
            <NavBar>
                <NavBarContainer>
                    <LogoContainer>
                        <H1>Sleep Tracker</H1>
                    </LogoContainer>
                    
                    
                </NavBarContainer>
            </NavBar>
        </HeaderContainer>
        </>
    )
}

export default Header;