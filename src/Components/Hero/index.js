import React, {useState} from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './Hero'

export default function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle =() =>{
        setIsOpen(!isOpen);
    }

    return (
        <HeroContainer>

            <Navbar toggle={toggle}/>
            <SideBar toggle={toggle} isOpen={isOpen}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}
