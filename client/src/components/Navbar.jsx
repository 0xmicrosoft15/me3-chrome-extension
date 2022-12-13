import React from 'react'
import styled from 'styled-components'

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

const Button = styled.button`
    cursor:pointer;
    margin-left: 30px;
    margin-right: 30px
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Button>Wallet</Button>
            <Button>Swap</Button>
            <Button>History</Button>
        </Wrapper>
    </Container>
  )
}

export default Navbar