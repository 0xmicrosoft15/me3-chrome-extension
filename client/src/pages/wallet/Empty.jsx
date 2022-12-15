import React from 'react'
import styled from 'styled-components'
import BigWallet from "../../assets/BigWallet.svg"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column
`

const Wallet = styled.img`

`

const Text = styled.text`
    color: #442B73;
    font-size: 10px
`

const Empty = () => {
  return (
    <Container>
        <Wallet src={BigWallet} alt=""/>
        <Text>There's nothing here yet!</Text>
        <Text>Deposit tokens into your wallet to start using it.</Text>
    </Container>
  )
}

export default Empty