import React from 'react'
import styled from 'styled-components'
import { Navbar, Topbar } from './components'
import {AllSet} from "./pages/login"
import { Main, Empty,Swap, History, Settings } from './pages/wallet'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center
`
const Container = styled.div`
    width: 375px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    flex-direction: column;
    background-color: #160E25
`

function App() {
  return (
    <Wrapper>
    <Container>
      <Settings/>
    </Container>
    </Wrapper>
  );
}

export default App;
