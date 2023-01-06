import React from 'react'
import styled from 'styled-components'
import Transactions from './Transactions.jsx'

const Container = styled.div`
    height: 80%;
    width: 100%;
    background-color: #160E25
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #F7F7F7;
    border-radius: 20px 20px 0px 0px;
    margin-top: 10px;
`

const Body = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    width: 95%; 
    height: 90%; 
`

const History = () => {
  return (
    <Container>
        <Wrapper>
            <Body>
                <Transactions />
                <Transactions/>
            </Body>
        </Wrapper>
    </Container>
  )
}

export default History