import React from 'react'
import styled from 'styled-components'
import { Navbar, Topbar } from '../../components'
import Circle from "../../assets/Ellipse.svg"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #160E25
`

const Top = styled.div`
    flex:1;
`
const TopWrapper = styled.div`
    height: 142px;
    width: 335px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 13px;
    margin-top: 10px;
    background-color: rgba(255, 255, 255, 0.03);
    border-radius: 8px
`


const SmallContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    border: 1px solid;
    gap: 10px;
    margin-right: 170px
`
const ConnectWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px
`
const Connect = styled.h3`
    font-weight: 200;
    font-size: 10px;
    color: #FFFFFF
`

const Ellipse = styled.img`
    width: 5px;
    height: 5px
`

const Wallet = styled.h2`
    font-weight: 500;
    font-size: 12px;
    color: white
`

const Text = styled.h3`
    font-weight: 300;
    font-size: 8px;
    color: white
`

const MedWrapper = styled.div`
    height: 142px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13px;
`
const MedContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    
    width: 100%;
    gap: 200px
`

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 5px
`
const Buttons = styled.button`
    cursor: pointer;
    padding: 15px 50px;
    background-color: #9957E5;
    color: white;
    border: none;
    border-radius: 8px
`

const Bottom = styled.div`
    flex:2;
    border: 1px solid;
    background-color: #F7F7F7
`
const BottomWrapper = styled.div`
`



const Main = () => {
  return (
    <Container>
        <Topbar/>
        <Top>
            <TopWrapper>
                <MedWrapper>
                    <MedContainer>
                        <Wallet>Wallet 1</Wallet>
                            <ConnectWrapper>
                        <Ellipse src={Circle} alt=""/>
                        <Connect>Not connected</Connect>
                        </ConnectWrapper>
                    </MedContainer>
                    <MedContainer>
                        <SmallContainer>
                            <Text>qweefwefergerfsefrfgerfrfewf</Text>
                            <ContentCopyIcon/>
                        </SmallContainer>
                    </MedContainer>
                    <MedContainer>
                        <ButtonWrapper>
                            <Buttons>Deposit</Buttons>
                            <Buttons>Send</Buttons>
                        </ButtonWrapper>
                    </MedContainer>
                </MedWrapper>
            </TopWrapper>
        </Top>
        <Bottom>
            <BottomWrapper>
                <MedContainer>
                    <Buttons>My Holdings</Buttons>
                    <Buttons>NFTs</Buttons>
                </MedContainer>
            </BottomWrapper>
        </Bottom>
        <Navbar/>
    </Container>
  )
}

export default Main