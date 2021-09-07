import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SideBar'

export default function SideBar({ isOpen, toggle }) {
    return (
        <SidebarContainer onClick={toggle} isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizza</SidebarLink>
                <SidebarLink to="/">Deserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}
