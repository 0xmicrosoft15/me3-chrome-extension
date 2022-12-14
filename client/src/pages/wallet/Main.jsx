import React from 'react'
import styled from 'styled-components'
import { Navbar, Topbar } from '../../components'

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column
`

const Top = styled.div`
    flex:1;
    border: 1px solid;
`
const Wrapper = styled.div`
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 13px;
    margin-top: 10px;
`
const SmallWrapper = styled.div`
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 2;
    gap: 5px
`

const SmallContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border: 1px solid;
`

const Connect = styled.h3`
    font-weight: 200
`

const Wallet = styled.h2`
    font-weight: 500
`

const Text = styled.h3`
    font-weight: 200
`

const MedWrapper = styled.div`
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 3;
    gap: 5px;
`
const MedContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border: 1px solid;
    padding: 5px;
    width: 100%
`

const Buttons = styled.button`
    cursor: pointer
`

const Bottom = styled.div`
    flex:1;
    border: 1px solid
`



const Main = () => {
  return (
    <Container>
        <Topbar/>
        <Top>
            <Wrapper>
                <SmallWrapper>
                    <SmallContainer>small</SmallContainer>
                    <SmallContainer>small</SmallContainer>
                    <SmallContainer>small</SmallContainer>
                </SmallWrapper>
                <MedWrapper>
                    <MedContainer>Med</MedContainer>
                    <MedContainer>Med</MedContainer>
                    <MedContainer>Med</MedContainer>
                </MedWrapper>
            </Wrapper>
            
            {/* <SmallContainer>
                <Connect>Not connected</Connect>
            </SmallContainer>
            <SmallContainer>
                <Wallet>Wallet 1</Wallet>
            </SmallContainer>
            <Text>Deposit tokens into your wallet</Text> */}
        </Top>
        <Bottom>Bottom</Bottom>
        <Navbar/>
    </Container>
  )
}

export default Main