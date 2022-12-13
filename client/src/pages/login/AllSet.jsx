import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    left: 20px
`

const Top = styled.div`
    width: 80%;
    flex: 1;
    margin-left: 20%;
    border: 1px solid;
    position: relative
`

const Title = styled.h1`
    position: absolute;
    bottom: 0
`

const Bottom = styled.div`
    display: flex;
    flex: 4;
    margin-left: 20%;
    flex-direction: column;
    border: 1px solid;
    align-items: center;
    justify-content: center
`
const Logo = styled.div`
    radius: 50px;
    border: 1px solid
`
const Success = styled.h1`

`
const Message = styled.h3`

`

const Button = styled.button`
    cursor: pointer;
    padding: 20px 50px;
    margin-top: 150px
`

const AllSet = () => {
  return (
    <Container>
        <Top>
            <Title>
                Me3
            </Title>
        </Top>
        <Bottom>
            <Logo>Tick</Logo>
            <Success>You're all set!</Success>
            <Message>Manage your tokens on multiple chains with your new Me3 wallet.</Message>
            <Button>Continue</Button>
        </Bottom>
    </Container>
  )
}

export default AllSet