import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 80%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px
`

const Title = styled.h1`
`
const Google = styled.div`
    padding: 50px;
    border: 1px solid
`
const Text = styled.h2`
    padding: 20px 40px;
    border: 1px solid
`
const Disclaimer = styled.h3`
    padding: 10px 20px;
    border: 1px solid;
    font-size: 8px;
    display: flex;
    align-items:center;
    justify-content: center
`
const Button = styled.button`
    border-radius: 10px;
    border: 1px solid;
    cursor: pointer;
    font-weight: 500;  
`

const SignIn = () => {
  return (
    <Container>
        <Wrapper>
        <Title>
            Me3
        </Title>
        <Google>
        Google
        </Google>
        <Text>
            Text
        </Text>
        <Disclaimer>
            By continuing, you agree to our Terms of Use and Privacy Policy
        </Disclaimer>
        <Button>
            Sign in with Google
        </Button>
        </Wrapper>
    </Container>
  )
}

export default SignIn