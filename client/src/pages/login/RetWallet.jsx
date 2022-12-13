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
    border: 1px solid
`

const Wrapper = styled.div`
    height: 100%;
    margin-left: 50px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    gap: 10px
`

const Progress = styled.h3`
`

const Message = styled.h2`

`

const Download = styled.h3`
    
`

const Footer = styled.div`
    height: 50px;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: row
`

const Logo = styled.div`
    border: 1px solid;
    width: 40px;
    height: 40px
`

const Text = styled.h1`
    font-weight: 500;
    font-size: 10px
`
const RetWallet = () => {
  return (
    <Container>
        {/* <Wrapper>
        
        <Progress>
            Almost there
        </Progress>
        <Message>
            We're retrieving your multichain wallet
        </Message>
        <Download>
            In the meantime, download the Me3 App on Google Playstore to use your wallet on your phone
        </Download>
        <Footer>
            <Logo>Logo</Logo>
            <Text>
                Get Me3 on Google Playstore
            </Text>
        </Footer>
        </Wrapper> */}
        <Top>
            <Title>
                Me3
            </Title>
        </Top>
        <Bottom>Bottom</Bottom>
    </Container>
  )
}

export default RetWallet