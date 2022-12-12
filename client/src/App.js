import React from 'react'
import styled from 'styled-components'
import SignIn from './pages/login/SignIn.jsx'

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
      <SignIn/>
    </Container>
    </Wrapper>
  );
}

export default App;
