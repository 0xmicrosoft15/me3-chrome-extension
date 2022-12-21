import React from 'react'
import styled from 'styled-components'
import SwapArrow from "../../../assets/Swap.svg"
import Polygon from "../../../assets/Polygon.svg"

const Container = styled.div`
    height: 80%;
    width: 100%;
    background-color: #160E25
`

const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #F7F7F7;
    border-radius: 20px 20px 0px 0px;
    margin-top: 10px
`

const Wrapper = styled.div`
    width: 95%;
    height: 95%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-left: 10px;
    margin-top: 10px
`

const BigContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 10px;
`

const TextBig = styled.div`
    font-weight: 600
`

const Input = styled.div`
    display:flex;
    align-items: center;
    width: 95%;
    height: 50px;
    flex-direction: row;
    position: relative;
    background-color: white;
    border-radius: 8px;
    margin-left: 5px;
    border: 2px solid #E4E4E4
`

const AmtWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5px
`

const TokenAmt = styled.div`
    font-weight: 700
`

const UsdAmt = styled.div`
    font-weight: 250
`

const ChainWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    position: absolute;
    right: 10px;
    gap: 5px 
`
const Hr = styled.div`
    width: 1px;
    height: 30px;
    background-color: #E4E4E4
`

const ChainLogo = styled.img`

`

const ChainName = styled.div`

`

const TextSmall = styled.div`
    color: #7A728A;
    font-size: 12px
`

const SwapContainer = styled.div`
    width: 95%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SwapIcon = styled.img`
    width: 30px;
    height: 30px;
`

const FeeContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
    border-radius: 8px;
    position: relative;
    margin-bottom: 10px
`
const Fees = styled.div`
    color: #7A728A
`

const FeeAmt = styled.div`
    color: #7A728A;
    position: absolute;
    right: 10px
`

const Button = styled.button`
    cursor: pointer;
    background-color: #D5BDF2;
    color: white;
    padding: 25px 0px;
    border-radius: 8px;
    border: none;
    margin-right: 10px
`

const Swap = () => {
  return (
    <Container>
        <Body>
            <Wrapper>
            <BigContainer>
                <TextBig>Swap</TextBig>
                <Input>
                    <AmtWrapper>
                        <TokenAmt>54.0345</TokenAmt>
                        <UsdAmt>$62.33</UsdAmt>
                    </AmtWrapper>
                    <ChainWrapper>
                        <Hr/>
                        <ChainLogo src={Polygon} alt=""/>
                        <ChainName>MATIC</ChainName>
                    </ChainWrapper>      
                </Input>
                <TextSmall>MAX 1.12 MATIC</TextSmall>
            </BigContainer>
            <SwapContainer>
                <SwapIcon src={SwapArrow} alt=""/>
            </SwapContainer>
            <BigContainer>
                <TextBig>To</TextBig>
                <Input>
                    <AmtWrapper>
                        <TokenAmt>62.33</TokenAmt>
                        <UsdAmt></UsdAmt>
                    </AmtWrapper>
                    <ChainWrapper>
                        <Hr />
                        <ChainLogo/>
                        <ChainName>USDC</ChainName>
                    </ChainWrapper> 
                </Input>
                <TextSmall>1 Matic = 1.23usd</TextSmall>
            </BigContainer>
            <BigContainer>
                <FeeContainer>
                    <Fees>Estimated Fees</Fees>
                    <FeeAmt>0 ETH</FeeAmt>
                </FeeContainer>
                <Button>Review Swap</Button>
            </BigContainer>
            </Wrapper>
        </Body>
    </Container>
  )
}

export default Swap