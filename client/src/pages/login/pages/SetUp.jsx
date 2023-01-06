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
    gap: 20px
`

const Setup = styled.h2`

`
const Safe = styled.h3`
    font-size: 15px;
    text-align: flex-end;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    gap: 5px
`
const Prompt = styled.h3`
    font-weight: 100;
    font-size: 10px
`
const Input = styled.input`
    padding: 20px;
    right: 10px
`
const Button = styled.button`
    cursor: pointer;
    padding: 10px;
    top: 20px
`

const SetUp = () => {
  return (
    <Container>
        {/* <Wrap>
            
            
        </Wrap> */}
        <Top>
            <Title>
                Me3
            </Title>
        </Top>
        <Bottom>
            <Setup>
                Set up your Wallet
            </Setup>
            <Safe>
                Keep your password safe!
                Your password is for this device only.
                Access your Me3 wallet on other devices 
                with your Google account.
            </Safe>
            <Wrapper>
                <Prompt>Enter a strong password</Prompt>
                <Input type="password" placeholder='password'/>
            </Wrapper>
            <Wrapper>
                <Prompt>Confirm password</Prompt>
                <Input type="password" placeholder='password'/>
            </Wrapper>
            <Button>
                Continue
            </Button>
        </Bottom>
    </Container>
  )
}

export default SetUp