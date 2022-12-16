import React from 'react'
import styled from 'styled-components'
import Transaction from './Transaction'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
`

const Date = styled.div`
    font-weight: 700

`

const Transactions = () => {
  return (
    <Container>
        <Date>25 August 2022</Date>
        <Transaction/>
        <Transaction/>
    </Container>
  )
}

export default Transactions