import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    left: 20px
`

const Top = styled.div`
    width: 80%;
    flex: 1;
    margin-left: 20%;
    border: 1px solid;
    position: relative
`

const Title = styled.h1`
    position: absolute;
    bottom: 0
`

const Bottom = styled.div`
    display: flex;
    flex: 4;
    margin-left: 20%;
    flex-direction: column;
    border: 1px solid
`

const PlayStore = () => {
  return (
    <Container>
        <Top>
            <Title>
                Me3
            </Title>
        </Top>
        <Bottom>Bottom</Bottom>
    </Container>
  )
}

export default PlayStore