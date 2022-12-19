import React from 'react'
import styled from 'styled-components'
import Swap from "../assets/TabSwap.png"
import Wallet from "../assets/TabWallet.png"
import History from "../assets/TabHistory.svg"
import {Link} from "react-router-dom"


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 10%;
    width: 100%;
    background-color: #FFFFFF;
    position: absolute;
    bottom: 0;
    border-top: 1px solid #E4E4E4
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 100px
`

const SmallContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    cursor: pointer
`

const Img = styled.img`
    width: 20px;
    height: 18px
`

const Text = styled.text`
    color: #7A728A;
    font-size: 10px
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Link to="/" style={{textDecoration:'none'}}>
                <SmallContainer>
                    <Img src={Wallet} alt=""/>
                    <Text>Wallet </Text>
                </SmallContainer>
            </Link>
            <Link to="/Swap" style={{textDecoration:'none'}}>
                <SmallContainer>
                    <Img src={Swap} alt=""/>
                        <Text>Swap</Text>
                </SmallContainer>   
            </Link>
            <Link to="History" style={{textDecoration:'none'}}>
                <SmallContainer>
                    <Img src={History} alt=""/>
                    <Text>History</Text>
                </SmallContainer>
            </Link>
        </Wrapper>
    </Container>
  )
}

export default Navbar