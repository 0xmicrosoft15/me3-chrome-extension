import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 10%;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

const Logo = styled.h1`
    margin-right: 30px
`
const MedContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction:row;
    margin-left: 30px;
`

const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    margin-right: 20px;
`
const ChainLogo = styled.img`
    border: 1px solid;
    padding: 20px
`

const ChainName = styled.h1`
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Logo>Me3</Logo>
            <MedContainer>
                <Wrap>
                    <ChainLogo/>
                    <ChainName>Polygon</ChainName>
                </Wrap>
                <MenuIcon/>
            </MedContainer>
        </Wrapper>
    </Container>
  )
}

export default Navbar