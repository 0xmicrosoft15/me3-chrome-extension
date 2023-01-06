import React from 'react'
import styled from 'styled-components'
import { Navbar, Topbar } from './components'
import {AllSet, SignIn} from "./pages/login/pages"
import { Main, Empty,Swap, History, Settings } from './pages/wallet/pages'
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
      <SignIn/>
      {/* <Topbar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/Swap" element={<Swap/>}/>
          <Route path="/History" element={<History/>}/>
          <Route path="/Settings" element={<Settings/>}/>
        </Routes>
      <Navbar/> */}
    </Container>
    </Wrapper>
  );
}

export default App;
