import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 375px;
    height: 600px;  
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center
`

const Wrapper = styled.div`
    width: 95%;
    height: 95%;
    display: flex;
    flex-direction: column;
    border: 1px solid;
    position: relative
`

const Top = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 1px solid;
    width: 100%;
    height: 10%;
    position: relative;
    margin-bottom: 20px
`

const SideIcon = styled.img`
    border: 1px solid;
    padding: 10px;
    position: absolute;
    left: 5px
`

const TopText = styled.div`
    border: 1px solid;
    position: absolute;
    left: 40%;
    right: 40%;
    display: flex;
    align-items: center;
    justify-content: center
`

const Middle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
    border: 1px solid;
    gap: 20px;
    margin-bottom: 150px
`

const MiddleText = styled.div`
    border: 1px solid
`

const GoogleBox = styled.div`
    border: 1px solid
`

const GreyBox = styled.div`
    border: 1px solid;
    background-color: #F7F7F7
`

const Icon = styled.div`
    1 px solid
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid
`

const Text1 = styled.div`
    border: 1px solid
` 

const Text2 = styled.div`
    border; 1px solid
`

const Arrow = styled.div`
    border: 1px solid
`

const UsdBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white
`

const FollowBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid
`

const Follow = styled.div`
    border: 1px solid
`

const SocialsBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    border: 1px solid
`

const SocialIcon = styled.img`
    border: 1px solid;
    cursor: pointer
`

const Logout = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F7F7F7;
    color: #7A728A;
    cursor:pointer;
    border; 1px solid;
    padding: 20px
`




const Settings = () => {
  return (
    <Container>
        <Wrapper>
            <Top>
                <SideIcon />
                <TopText>Account</TopText>
            </Top>
            <Middle>
                <MiddleText>Currently logged into</MiddleText>
                <GoogleBox></GoogleBox>
                <GreyBox>
                    <Icon/>
                    <TextBox>
                        <Text1>Security</Text1>
                        <Text2>Manage security passcode</Text2>
                    </TextBox>
                    <Arrow/>
                </GreyBox>
                <GreyBox>
                    <Icon/>
                    <TextBox>
                        <Text1>Currency</Text1>
                        <Arrow />
                    </TextBox>
                    <UsdBox>USD</UsdBox>
                </GreyBox>
                <FollowBox>
                    <Follow>Follow us on</Follow>
                    <SocialsBox>
                        <SocialIcon/>
                        <SocialIcon/>
                        <SocialIcon/>
                        <SocialIcon/>
                    </SocialsBox>
                </FollowBox>
            </Middle>
            <Logout>Logout</Logout>
        </Wrapper>
    </Container>
  )
}

export default Settings