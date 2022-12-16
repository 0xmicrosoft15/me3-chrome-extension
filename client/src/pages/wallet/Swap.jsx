import React from 'react'
import styled from 'styled-components'
import { Topbar, Navbar } from '../../components'

const Container = styled.div`
    height: 100%;
    width: 100%
`

const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 78%;
    border: 1px solid
    
`

const Wrapper = styled.div`
    width: 95%;
    height: 95%;
    border-radius: border-radius: 20px 20px 0px 0px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid;
`

const BigContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid;
    margin-top: 20px
`

const TextBig = styled.div`

`

const Input = styled.div`
    display:flex;
    width: 90%;
    flex-direction: row;
    border: 1px solid
`

const AmtWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`

const TokenAmt = styled.div`

`

const UsdAmt = styled.div`

`

const ChainWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row
`

const ChainLogo = styled.img`

`

const ChainName = styled.div`

`

const TextSmall = styled.div`

`

const Swap = () => {
  return (
    <Container>
        <Topbar/>
        <Body>
            <Wrapper>
            <BigContainer>
                <TextBig>Swap</TextBig>
                <Input>
                    <AmtWrapper>
                        <TokenAmt></TokenAmt>
                        <UsdAmt></UsdAmt>
                    </AmtWrapper>
                    <ChainWrapper>
                        <ChainLogo/>
                        <ChainName>MATIC</ChainName>
                    </ChainWrapper>
                    <TextSmall></TextSmall>
                </Input>
            </BigContainer>
            <BigContainer>
                <TextBig>To</TextBig>
                <Input>
                    <AmtWrapper>
                        <TokenAmt></TokenAmt>
                        <UsdAmt></UsdAmt>
                    </AmtWrapper>
                    <ChainWrapper>
                        <ChainLogo/>
                        <ChainName>MATIC</ChainName>
                    </ChainWrapper>
                    <TextSmall></TextSmall>
                </Input>
            </BigContainer>
            <BigContainer>
                <TextBig>Swap</TextBig>
                <Input>
                    <AmtWrapper>
                        <TokenAmt></TokenAmt>
                        <UsdAmt></UsdAmt>
                    </AmtWrapper>
                    <ChainWrapper>
                        <ChainLogo/>
                        <ChainName>MATIC</ChainName>
                    </ChainWrapper>
                    <TextSmall></TextSmall>
                </Input>
            </BigContainer>
            </Wrapper>
        </Body>
        <Navbar/>
    </Container>
  )
}

export default Swap