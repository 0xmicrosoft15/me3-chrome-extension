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
`

const TopHalf = styled.div`
    display: flex;
    flex: 1
`
const Title = styled.h1`
`
const BottomHalf = styled.div`
    display: flex;
    flex:1
`



const Progress = styled.h3`
`

const Footer = styled.div`
    display: flex;
    flex: 3;
    height: 300px;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid;
    gap: 50px

`

const Logo = styled.div`
    border: 1px solid;
    width: 100px;
    height: 100px
`

const Text = styled.h1`
    font-weight: 500;
    font-size: 10px
`

const PlayStore = () => {
  return (
    <Container>
       <Top>
            <TopHalf>
                <Title>
                    Me3
                </Title>
            </TopHalf>
            <BottomHalf>
                <Progress>
                    Almost there!
                </Progress>
            </BottomHalf>
        </Top>
        <Footer>
            <Text>
                Get Me3 on Google Playstore
            </Text>
            <Text>
                Scan this QR with your phone to download the App
            </Text>
            <Logo>Logo</Logo>
        </Footer>
    </Container>
  )
}

export default PlayStore