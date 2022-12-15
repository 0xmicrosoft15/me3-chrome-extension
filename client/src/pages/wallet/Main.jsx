import React from 'react'
import styled from 'styled-components'
import { Navbar, Topbar } from '../../components'
import Circle from "../../assets/Ellipse.svg"
import Copy from "../../assets/Copy.svg"
import DownArrow from "../../assets/DownArrow.svg"
import SendArrow from "../../assets/SendArrow.svg"
import Empty from './Empty.jsx'

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
    margin-left: 20px;
    margin-top: 10px;
    background-color: rgba(255, 255, 255, 0.03);
    border-radius: 8px
`


const SmallContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 10px;
    margin-right: 150px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px
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

const CopyIcon = styled.img`

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
    gap: 180px
`

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 15px
`

const Down = styled.img`
    margin-right: 5px
`

const Send = styled.img`
    margin-right: 5px
`

const Buttons = styled.button`
    cursor: pointer;
    padding: 15px 50px;
    background-color: #9957E5;
    color: white;
    border: none;
    border-radius: 8px;
`

const Bottom = styled.div`
    flex:2;
    background-color: #F7F7F7;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px 20px 0px 0px
`

const BottomWrapper = styled.div`
    height: 300px;
    width: 350px;
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    margin-top: 5px;
    background-color: rgba(255, 255, 255, 0.03);
    align-items: center
`

const HoldingNftWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex:1
`

const HoldingsContainer = styled.div`
    border-radius: 8px;
    cursor: pointer;
    padding: 5px 40px;
    background-color: #261840;
    color: white;
    font-size: 12px
`

const AssetsWrapper = styled.div`
    flex: 7;
    display:flex;
    width: 95%;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: column
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
                            <CopyIcon src={Copy} alt=""/>
                        </SmallContainer>
                    </MedContainer>
                    <MedContainer>
                        <ButtonWrapper>
                            <Buttons>
                                <Down src={DownArrow} alt=""/>
                                Deposit
                            </Buttons>
                            <Buttons>
                                <Send src={SendArrow} alt=""/>
                                Send
                            </Buttons>
                        </ButtonWrapper>
                    </MedContainer>
                </MedWrapper>
            </TopWrapper>
        </Top>
        <Bottom>
            <BottomWrapper>
                <HoldingNftWrapper>
                    <HoldingsContainer>My Holdings</HoldingsContainer>
                    <HoldingsContainer>My NFTs</HoldingsContainer>
                </HoldingNftWrapper>
                <AssetsWrapper>
                    <Empty/>
                </AssetsWrapper>
            </BottomWrapper>
        </Bottom>
        <Navbar/>
    </Container>
  )
}

export default Main