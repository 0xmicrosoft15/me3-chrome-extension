import React from 'react'
import styled from 'styled-components'
import Pending from "../../assets/Ellipse_purple.svg"
import PendingIcon from "../../assets/Pending3.svg"

const Container = styled.div`
    height: 70px;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border: 1px solid;
    border-radius: 8px;
    top: 10px;
    background-color: white;
    border: none;
    margin-left: 8px
`

const Wrapper = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center
`

const Left = styled.div`
    height: 90%;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex:1
` 

const Logo = styled.img`
    height: 60px;
    width: 60px
`

const StatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3px;
    height: 90%;
    width: 80%;
`

const Type = styled.div`
    font-size: 12px;
    font-weight: 700
`

const Detail = styled.div`
    font-size: 10px;
    color: #7A728A;
    font-weight: 700
`

const ProgressWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 5px
`

const Circle = styled.img`

`

const Progress = styled.div`
    font-size: 8px
`

const Right = styled.div`
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex:1;
    flex-direction: column;
    gap: 3px;
` 

const ToContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    right: 5px;
    
    height: 40%;
    width: 90%;
    justify-content: flex-end;   
`

const TokenToAmt = styled.div`
    font-size: 15px;
    font-weight: 700
`

const TokenTo = styled.div`
    font-size: 15px;
    font-weight: 700
`

const TokenFromContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    right: 5px;

    height: 40%;
    width: 90%;
    justify-content: flex-end;
    color: #7A728A;
    font-weight: 700;
    font-size: 13px
`

const TokenFromAmt = styled.div`
`

const TokenFrom = styled.div`

`

const Transaction = () => {
  return (
    <Container>
        <Wrapper>
        <Left>
            <Logo src={PendingIcon}/>
            <StatusContainer>
                <Type>Swap</Type>
                <Detail>ETH to SLP</Detail>
                <ProgressWrapper>
                    <Circle src={Pending} alt=""/>
                    <Progress>Pending</Progress>
                </ProgressWrapper>
            </StatusContainer>
        </Left>
        <Right>
            <ToContainer>
                <TokenToAmt>356,294.00</TokenToAmt>
                <TokenTo>SLP</TokenTo>
            </ToContainer>
            <TokenFromContainer>
                <TokenFromAmt>1.20</TokenFromAmt>
                <TokenFrom>ETH</TokenFrom>
            </TokenFromContainer>
        </Right>
        </Wrapper>
    </Container>
  )
}

export default Transaction