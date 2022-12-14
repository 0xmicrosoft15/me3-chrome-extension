import React from 'react'
import styled from 'styled-components'
import { Navbar, Topbar } from '../../components'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

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

const SmallContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    border: 1px solid;
    gap: 10px
`

const Connect = styled.h3`
    font-weight: 500;
    font-size: 10px
`

const Wallet = styled.h2`
    font-weight: 500;
    font-size: 12px
`

const Text = styled.h3`
    font-weight: 300;
    font-size: 8px
`

const MedWrapper = styled.div`
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 5px;
`
const MedContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border: 1px solid;
    padding: 5px;
    width: 100%;
    gap: 200px
`

const Buttons = styled.button`
    cursor: pointer;
    padding: 0px 10px
`

const Bottom = styled.div`
    flex:2;
    border: 1px solid
`



const Main = () => {
  return (
    <Container>
        <Topbar/>
        <Top>
            <Wrapper>
                <MedWrapper>
                    <MedContainer>
                        <Wallet>Wallet 1</Wallet>
                        <Connect>Not connected</Connect>
                    </MedContainer>
                    <MedContainer>
                        <Text>qweefwefergerfsefrfgerfrfewf</Text>
                        <ContentCopyIcon/>
                    </MedContainer>
                    <MedContainer>
                        <Buttons>Deposit</Buttons>
                        <Buttons>Send</Buttons>
                    </MedContainer>
                </MedWrapper>
            </Wrapper>
        </Top>
        <Bottom>
            <Wrapper>
                <MedContainer>
                    <Buttons>My Holdings</Buttons>
                    <Buttons>NFTs</Buttons>
                </MedContainer>
            </Wrapper>
        </Bottom>
        <Navbar/>
    </Container>
  )
}

export default Main