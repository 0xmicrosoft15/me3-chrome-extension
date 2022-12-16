import React from 'react'
import styled from 'styled-components'
import Swap from "../assets/TabSwap.png"
import Wallet from "../assets/TabWallet.png"
import History from "../assets/TabHistory.svg"


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 10%;
    width: 100%;
    background-color: #FFFFFF
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
    gap: 5px
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
            <SmallContainer>
                <Img src={Wallet} alt=""/>
                <Text>Wallet</Text>
            </SmallContainer>
            <SmallContainer>
                <Img src={Swap} alt=""/>
                <Text>Swap</Text>
            </SmallContainer>
            <SmallContainer>
                <Img src={History} alt=""/>
                <Text>History</Text>
            </SmallContainer>
        </Wrapper>
    </Container>
  )
}

export default Navbar