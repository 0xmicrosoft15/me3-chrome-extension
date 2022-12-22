import React from 'react'
import styled from 'styled-components'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { setCurrency } from '../functions/main_functions'

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

var access_token;
var email

const SignIn = () => {

    const login = useGoogleLogin({
        onSuccess:  async function response(tokenResponse) {
            try {
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",{
                    headers: {
                        "Authorization": `Bearer ${tokenResponse.access_token}`
                    }
                })
                console.log(res.data)
                email = res.data.email
                console.log(email)
                access_token = tokenResponse.access_token
                console.log(access_token)
            }catch(err){
                console.log(err)
            }
        }
      })
      
    

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
        <Button onClick={() => login().then(setCurrency())}>
            Sign in with Google
        </Button>
        </Wrapper>
    </Container>
  )
}

export default SignIn