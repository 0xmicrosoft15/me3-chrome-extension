import React from 'react'
import styled from 'styled-components'
import Menu from "../assets/Menu.png"
import Me3 from "../assets/logo_small.png"
import Polygon from "../assets/Polygon.svg"
import Arrow from "../assets/ArrowDown.svg"



const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 10%;
    background-color: #160E25;
    width: 100%
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-top: 10px
`

const Logo = styled.img`
    
`
const MedContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction:row;
    margin-left: 70px;

`

const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 4px;
    margin-right: 10px;
    width: 118px;
    height: 36px;
    padding: 2px 6px 2px 2px;
    background-color: rgba(247, 247, 247, 0.1);
    border-radius: 8px;
`
const ChainLogo = styled.img`
    width: 30px;
    height: 30px;
`

const ChainName = styled.div`
    width: 50px;
    height: 18px;
    color: white    
`
const ArrowDown = styled.img`
    cursor: pointer;
    margin-left: 10px
`

const MenuLogo = styled.img`
    width: 18px;
    height: 16px;
    cursor: pointer
`
 
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Logo src={Me3} alt=""/>
            <MedContainer>
                <Wrap>
                    <ChainLogo src={Polygon} alt=""/>
                    <ChainName>Polygon</ChainName>
                    <ArrowDown src={Arrow} alt=""/>
                </Wrap>
                <MenuLogo src={Menu} alt=""/>
            </MedContainer>
        </Wrapper>
    </Container>
  )
}

export default Navbar