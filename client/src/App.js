import React from 'react'
import styled from 'styled-components'
import { Navbar, Topbar } from './components'
import {AllSet} from "./pages/login"
import { Main, Empty,Swap, History, Settings } from './pages/wallet'
import {Route, Routes} from "react-router-dom"

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
    flex-direction: column;
    background-color: #160E25;
    position: relative
`

function App() {
  return (
    <Wrapper>
    <Container>
      <Topbar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/Swap" element={<Swap/>}/>
          <Route path="/History" element={<History/>}/>
          <Route path="/Settings" element={<Settings/>}/>
        </Routes>
      <Navbar/>
    </Container>
    </Wrapper>
  );
}

export default App;
