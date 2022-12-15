import React from 'react'
import styled from 'styled-components'
import Polygon from "../../assets/Polygon.svg"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 90%;
    gap: 150px;
    border-radius: 8px;
    height: 50px;
    cursor: pointer
`

const ChainWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row
`

const ChainLogo = styled.img`
    height: 30px
`

const NameWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column
`
const ChainShortName = styled.div`
    font-weight: 500;
    font-size: 15px
`

const ChainLongName = styled.div`
    font-size: 10px
`

const AmtWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column
`

const TokenAmt = styled.div`
    font-size: 15px;
    font-weight: 500px
`

const UsdAmt = styled.div`
    font-size: 10px;
    font-weight: 200
`

const Chain = () => {
  return (
    <Container>
        <ChainWrapper>
            <ChainLogo src={Polygon} alt=""/>
            <NameWrapper>
                <ChainShortName>MATIC</ChainShortName>
                <ChainLongName>Polygon</ChainLongName>
            </NameWrapper>
        </ChainWrapper>
        <AmtWrapper>
            <TokenAmt>54.0345</TokenAmt>
            <UsdAmt>$62.33</UsdAmt>
        </AmtWrapper>
    </Container>
  )
}

export default Chain