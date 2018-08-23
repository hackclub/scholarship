import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex, Link } from '@hackclub/design-system'
import Icon from 'spectrum-icons'

const animation1 = keyframes`
  0% {
    clip: rect(62px, 9999px, 68px, 0);
  }
  5% {
    clip: rect(45px, 9999px, 9px, 0);
  }
  10% {
    clip: rect(9px, 9999px, 76px, 0);
  }
  15% {
    clip: rect(89px, 9999px, 83px, 0);
  }
  20% {
    clip: rect(44px, 9999px, 8px, 0);
  }
  25% {
    clip: rect(59px, 9999px, 24px, 0);
  }
  30% {
    clip: rect(96px, 9999px, 51px, 0);
  }
  35% {
    clip: rect(38px, 9999px, 28px, 0);
  }
  40% {
    clip: rect(92px, 9999px, 1px, 0);
  }
  45% {
    clip: rect(63px, 9999px, 80px, 0);
  }
  50% {
    clip: rect(1px, 9999px, 49px, 0);
  }
  55% {
    clip: rect(7px, 9999px, 49px, 0);
  }
  60% {
    clip: rect(35px, 9999px, 16px, 0);
  }
  65% {
    clip: rect(93px, 9999px, 72px, 0);
  }
  70% {
    clip: rect(55px, 9999px, 52px, 0);
  }
  75% {
    clip: rect(58px, 9999px, 68px, 0);
  }
  80% {
    clip: rect(94px, 9999px, 95px, 0);
  }
  85% {
    clip: rect(81px, 9999px, 24px, 0);
  }
  90% {
    clip: rect(98px, 9999px, 12px, 0);
  }
  95% {
    clip: rect(2px, 9999px, 96px, 0);
  }
  100% {
    clip: rect(95px, 9999px, 47px, 0);
  }
`
const animation2 = keyframes`
  0% {
    clip: rect(57px, 9999px, 7px, 0);
  }
  5% {
    clip: rect(61px, 9999px, 22px, 0);
  }
  10% {
    clip: rect(34px, 9999px, 47px, 0);
  }
  15% {
    clip: rect(92px, 9999px, 40px, 0);
  }
  20% {
    clip: rect(6px, 9999px, 40px, 0);
  }
  25% {
    clip: rect(39px, 9999px, 46px, 0);
  }
  30% {
    clip: rect(33px, 9999px, 17px, 0);
  }
  35% {
    clip: rect(5px, 9999px, 17px, 0);
  }
  40% {
    clip: rect(40px, 9999px, 70px, 0);
  }
  45% {
    clip: rect(14px, 9999px, 34px, 0);
  }
  50% {
    clip: rect(26px, 9999px, 30px, 0);
  }
  55% {
    clip: rect(15px, 9999px, 100px, 0);
  }
  60% {
    clip: rect(10px, 9999px, 32px, 0);
  }
  65% {
    clip: rect(49px, 9999px, 61px, 0);
  }
  70% {
    clip: rect(61px, 9999px, 22px, 0);
  }
  75% {
    clip: rect(85px, 9999px, 36px, 0);
  }
  80% {
    clip: rect(38px, 9999px, 59px, 0);
  }
  85% {
    clip: rect(21px, 9999px, 88px, 0);
  }
  90% {
    clip: rect(46px, 9999px, 16px, 0);
  }
  95% {
    clip: rect(13px, 9999px, 35px, 0);
  }
  100% {
    clip: rect(75px, 9999px, 13px, 0);
  }
`
const LogoLink = styled(Link).attrs({
  bold: true,
  f: 4,
  color: 'muted',
  align: 'left',
})`
  text-decoration: none;
  position: relative;
  width: 200px;
  display: inline-block;

  &:before,
  &:after {
    content: '${props => props.children}';
    position: absolute;
    top: 0;
    color: ${({ theme }) => theme.colors.muted};
    background: ${({ theme }) => theme.colors.gray[1]};
    overflow: hidden;
    clip: rect(0, 256px, 0, 0);
  }

  &:after {
    left: 2px;
    text-shadow: -1px 0 ${({ theme }) => theme.colors.primary};
    animation: ${animation1} 2s infinite linear alternate-reverse;
  }

  &:before {
    left: -2px;
    text-shadow: -1px 0 ${({ theme }) => theme.colors.alt};
    animation: ${animation2} 4s infinite linear alternate-reverse;
  }
`
const Logo = () => (
  <LogoLink
    target="_blank"
    href="https://hackclub.com/?ref=scholarship"
    children="Hack Club"
  />
)

const Header = ({ siteTitle }) => (
  <Flex bg="gray.1" justify="center" align="center" py={[2]} px={[3, 4]} mb={4}>
    <Logo />
    <Link
      ml="auto"
      color="muted"
      href="mailto:scholarship@hackclub.com"
      style={{ lineHeight: 0 }}
    >
      <Icon glyph="email" />
    </Link>
  </Flex>
)

export default Header
