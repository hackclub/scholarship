import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import {
  Container,
  Flex,
  Box,
  Text,
  Heading,
  LargeButton as Button,
  Link as A,
  Card,
  Avatar,
  hexa,
} from '@hackclub/design-system'
import Icon from 'spectrum-icons'
import styled, { injectGlobal } from 'styled-components'

const dark = '#17171d'
injectGlobal`
  body {
    color: ${dark};
  }
  p a:hover {
    text-decoration: underline;
  }
`

const HeroIcon = styled(Icon)`
  filter: drop-shadow(
    0 0 4px ${({ theme }) => hexa(theme.colors.pink[5], 0.75)}
  );
`

const Title = styled(Heading.h1).attrs({ f: [6, 8, 9], mt: 2, mb: [3, 4] })`
  line-height: 1;
`
const Subtitle = styled(Heading.h2).attrs({ f: [5, 6, 7], mb: [3, 4] })`
  line-height: 1;
`
const btn = {
  py: 3,
  px: 4,
  f: 2,
  chevronRight: true,
  target: '_blank',
}
const LearnButton = styled(Button).attrs(btn)`
  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.cyan[5]},
    ${({ theme }) => theme.colors.cyan[6]}
  );
  text-transform: uppercase;
`
const ApplyButton = styled(Button.withComponent(Link)).attrs(btn)`
  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.pink[5]},
    ${({ theme }) => theme.colors.pink[6]}
  );
  text-transform: uppercase;
`

const Profile = styled(Container.withComponent(Flex)).attrs({
  maxWidth: 32,
  bg: 'white',
  p: [3, 4],
  mx: 0,
  align: 'center'
})`
  border-radius: ${({ theme }) => theme.radii[2]};
`

const Section = styled(Container.withComponent(Flex)).attrs({
  flexDirection: 'column',
  maxWidth: 48,
  align: 'center',
})``
const SectionHeading = styled(Heading.h3).attrs({
  f: [3, 6],
  bold: true,
  mb: 3,
})``

const Highlight = styled(Text.withComponent('mark')).attrs({
  bold: true,
  bg: 'pink.5',
  color: 'white',
  px: 2,
})`
  border-radius: ${({ theme }) => theme.pill};
`

const IndexPage = () => (
  <Fragment>
    <Section pt={[4, 5]} px={3} pb={[5, 6]}>
      <Flex justify="center" color="pink.5">
        <HeroIcon glyph="idea" size={72} />
      </Flex>
      <Title>
        The Hack Club <br /> Scholarship
      </Title>
      <Text f={4}>
        Coding is the closest thing we have today to a superpower. The Hack Club
        Scholarship exists to identify promising{' '}
        <Highlight>young makers</Highlight> to give them resources to expand
        their ambition.
      </Text>
      <Text f={4} mt={3}>
        Open in Cincinnati until September 9
      </Text>
    </Section>
    <Box bg="snow">
      <Container px={3} py={[5, 6]}>
        <Subtitle>Here’s the deal.</Subtitle>
        <Text color="black" f={4} mb={4} style={{ maxWidth: '48rem' }}>
          The Hack Club Scholarship is a $500 award paired with mentorship from
          Quinn Slack given to 1 student in Cincinnati who shows outstanding
          promise as a programmer.
        </Text>
        {/* TODO: Add a Modal with more info about Quinn Slack */}
        <Profile>
          <Avatar size={72} src="quinn_slack.png" />
          <Box align="left" ml={[3, 4]}>
            <Heading.h3 f={4} mb={1}>
              Quinn Slack
            </Heading.h3>
            <Text f={2} color="slate">
              Forbes 30 Under 30.
              <br />
              Founder of Sourcegraph.
            </Text>
          </Box>
        </Profile>
      </Container>
    </Box>
    <Box>
      <Container px={3} py={[5, 6]} align="center">
        <Subtitle f={[5, 6]}>We’re Hack Club.</Subtitle>
        <Text
          color="black"
          f={4}
          mb={4}
          mx="auto"
          style={{ maxWidth: '48rem' }}
        >
          We’re a nonprofit network of high school computer science clubs around
          the world where members learn to code through tinkering and building
          projects.
        </Text>
        <LearnButton href="https://hackclub.com/?ref=scholarship" bg="cyan.5">
          Learn more
        </LearnButton>
      </Container>
    </Box>
    <Box bg={dark} color="white">
      <Container px={3} py={[5, 6]}>
        <Subtitle>Apply now.</Subtitle>
        <Text color="smoke" f={4} mb={4} style={{ maxWidth: '48rem' }}>
          Applications are open from <Highlight>August 25th</Highlight> through{' '}
          <Highlight>September 9th</Highlight>. Decisions will be released a
          week after.
        </Text>
        <ApplyButton to="/apply" bg="pink.5">
          Apply now
        </ApplyButton>
      </Container>
    </Box>
    <Box bg="snow" align="center" px={3} py={5}>
      <Heading.h2 f={4} mb={2}>
        Contact us
      </Heading.h2>
      <Flex color="muted" align="center" justify="center">
        <Icon glyph="email" size={32} />
        <A href="mailto:scholarship@hackclub.com" color="slate" ml={2}>
          scholarship@hackclub.com
        </A>
      </Flex>
    </Box>
  </Fragment>
)

export default IndexPage
