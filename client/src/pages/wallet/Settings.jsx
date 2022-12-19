import React from 'react'
import styled from 'styled-components'
import SettingsIcon from "../../assets/SettingsIcon.svg"
import GoogleIcon from "../../assets/GoogleIcon.svg"
import ArrowRight from "../../assets/ArrowRight.svg"
import SecurityIcon from "../../assets/SecurityIcon.svg"
import CurrencyIcon from "../../assets/CurrencyIcon.svg"
import Telegram from "../../assets/Telegram.svg"
import Twitter from "../../assets/Twitter.svg"
import Linkedin from "../../assets/Linkedin.svg"
import Instagram from "../../assets/Instagram.svg"

const Container = styled.div`
    width: 375px;
    height: 80%;  
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
    position: relative
`

const Top = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 10%;
    position: relative;
    margin-bottom: 20px;
    margin-top: 10px
`

const TopText = styled.div`
    position: absolute;
    left: 40%;
    right: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700
`

const Middle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
    gap: 20px;
    margin-bottom: 130px
`

const MiddleText = styled.div`
    color: #7A728A;
    font-size: 13px;
    font-weight: 500
`

const GoogleBox = styled.div`
    border: 2px solid #E6E6E6;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    border-radius: 8px;

`

const Google = styled.img`
`

const Gmail = styled.div`
    margin-left: 20px;
    font-size: 12px;
    font-weight: 700
`

const Hr = styled.div`
    height: 1px;
    width: 100%;
    border: 1px solid #261840;
    opacity: 0.1
`

const GreyBox = styled.div`
    background-color: #F7F7F7;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    border-radius: 8px
`

const Icon = styled.img`
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    justify-content: center;
`

const Text1 = styled.div`
    font-weight: 700;
    font-size: 14px
` 

const Text2 = styled.div`
    color: #7A728A;
    font-size: 12px
`

const Arrow = styled.img`
    cursor: pointer;
    margin-left: 100px
`

const UsdBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin-left: 170px;
    font-size: 13px;
    font-weight: 700;
    padding: 8px;
    border-radius: 8px
`

const FollowBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Follow = styled.div`
    font-weight: 700;
    font-size: 14px
`

const SocialsBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    margin-left: 130px
`

const SocialIcon = styled.img`
    cursor: pointer
`

const Logout = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F7F7F7;
    color: #7A728A;
    cursor:pointer;
    padding: 20px;
    border-radius: 8px;
    font-weight: 700;
    border: none;
`




const Settings = () => {
  return (
    <Container>
        <Wrapper>
            <Top>
                <TopText>Account</TopText>
            </Top>
            <Middle>
                <MiddleText>Currently logged into</MiddleText>
                <GoogleBox>
                    <Google src={GoogleIcon} alt=""/>
                    <Gmail>kelly@me3.io</Gmail>
                </GoogleBox>
                <GreyBox>
                    <Icon src={SecurityIcon} alt=""/>
                    <TextBox>
                        <Text1>Security</Text1>
                        <Text2>Manage security passcode</Text2>
                    </TextBox>
                    <Arrow src={ArrowRight} alt=""/>
                </GreyBox>
                <Hr></Hr>
                <GreyBox>
                    <Icon src={CurrencyIcon} alt=""/>
                    <TextBox>
                        <Text1>Currency</Text1>
                    </TextBox>
                    <UsdBox>USD</UsdBox>
                </GreyBox>
                <FollowBox>
                    <Follow>Follow us on</Follow>
                    <SocialsBox>
                        <SocialIcon src={Telegram} alt=""/>
                        <SocialIcon src={Twitter} alt=""/>
                        <SocialIcon src={Linkedin} alt=""/>
                        <SocialIcon src={Instagram} alt=""/>
                    </SocialsBox>
                </FollowBox>
            </Middle>
            <Logout>Log out</Logout>
        </Wrapper>
    </Container>
  )
}

export default Settings