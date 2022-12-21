import React from 'react'
import styled from 'styled-components'
import { useGoogleLogin } from '@react-oauth/google'

var access_token;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    border: 1px solid
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
    padding: 10px
`

const SignIn = () => {

    
    const login = useGoogleLogin({
        onSuccess: function(tokenResponse){
            access_token = tokenResponse.access_token;
            console.log(access_token)
        }
      });
    
    
      
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
        <Button onClick={() => login()}>
            Sign in with Google
        </Button>
        </Wrapper>
    </Container>
  )
}

export default SignIn