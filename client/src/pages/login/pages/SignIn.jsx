import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { encryption, setCurrency, uploadFile } from '../functions/main_functions'
import { googleInstance } from '../../../utils/google'
import { handleAuthClick } from '../../../utils/googlev2'
import jwt_decode from 'jwt-decode'

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

const CLIENT_ID = '481242808170-q83c0q6apdgi7oedo1gv9dv1fmn3m09j.apps.googleusercontent.com'
const SCOPES = 'https://www.googleapis.com/auth/drive.file'

const SignIn = () => {

    const [user, setUser] = useState({})
    const [tokenClient, setTokenClient] = useState({})
    
    function handleCallBackResponse(response){
        console.log("Encoded JWT ID token: " + response.credential)
        var userObject = jwt_decode(response.credential)
        console.log(userObject)
        setUser(userObject)
        console.log(userObject.email)
        email = userObject.email
        console.log("Email: ", email)
    }

    function authorize() {
        tokenClient.requestAccessToken()
    }

    useEffect(() => {
        /* global google */
        const google = window.google
        google.accounts.id.initialize({
            client_id: CLIENT_ID,
            callback: handleCallBackResponse 
        })
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: 'outline', size: 'large'}
        )
        //Access tokens to upload to user drive
        //tokenClient 
        setTokenClient(google.accounts.oauth2.initTokenClient({
            client_id: CLIENT_ID,
            scope: SCOPES,
            callback: (tokenResponse) => {
                console.log(tokenResponse)
                //we now have access to live token to use for any google API
            }
        }))
        // google.accounts.id.prompt()
    }, [])
    

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
        <Button id = 'signInDiv'></Button>
        {user && 
            <Button onClick={authorize}>Authorize</Button>
        }
        </Wrapper>
    </Container>
  )
}

export default SignIn


// const login = useGoogleLogin({
    //     onSuccess:  async function response(tokenResponse) {
    //         try {
    //             const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",{
    //                 headers: {
    //                     "Authorization": `Bearer ${tokenResponse.access_token}`
    //                 }
    //             })
    //             console.log(res.data)
    //             email = res.data.email
    //             console.log(email)
    //             access_token = tokenResponse.access_token
    //             console.log(access_token)
    //             encryption(email)
    //         }catch(err){
    //             console.log(err)
    //         }
    //     }
    //   })