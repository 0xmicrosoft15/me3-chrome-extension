import React from 'react'
import styled from 'styled-components'
import { Navbar, Topbar } from './components'
import {AllSet} from "./pages/login"
import { Main } from './pages/wallet'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center
`
const Container = styled.div`
    width: 375px;
    height: 600px;
    border: solid 1px;
    display: flex;
    align-items: center;
    justify-content: center
`

function App() {
  return (
    <Wrapper>
    <Container>
      <Main/>
    </Container>
    </Wrapper>
  );
}

export default App;
