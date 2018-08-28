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
  Icon as DSIcon,
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

const StepWrapper = styled(Box)`
  position: relative
  &:before {
    z-index: -1;
    content: '${({ index }) => index}.';
    font-size: 6em;
    position: absolute;
    top: 15px;
    left: -25px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gray[1]};
    line-height: 0;
  }
`
const Step = ({ title, icon, message, index }) => (
  <StepWrapper style={{ maxWidth: '20rem' }} px={2} index={index}>
    <DSIcon name={icon} size={48} />
    <Box>
      <Heading>{title}</Heading>
      <Text>{message}</Text>
    </Box>
  </StepWrapper>
)

const Question = styled(Text).attrs({ f: 4, mt: 3, bold: true })`
  maxwidth: 48rem;
`
const Answer = styled(Text).attrs({ f: 4, color: 'slate' })``

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
  align: 'center',
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
      <Title>The Hack Grant</Title>
      <Text f={4}>
        Coding is the closest thing we have today to a superpower. The Hack
        Grant exists to identify promising <Highlight>young makers</Highlight>{' '}
        to give them resources to expand their ambition.
      </Text>
      <Text f={4} mt={3}>
        Open in Cincinnati until September 9
      </Text>
    </Section>
    <Box bg="snow">
      <Container px={3} py={[5, 6]}>
        <Subtitle>Here’s the deal.</Subtitle>
        <Text color="black" f={4} mb={4} style={{ maxWidth: '48rem' }}>
          The Hack Grant is a $250 award paired with mentorship from Quinn Slack
          given to 1 student in Cincinnati who shows outstanding promise as
          makers, innovators, & programmers.
        </Text>
        {/* TODO: Add a Modal with more info about Quinn Slack */}
        <Profile>
          <Avatar size={72} src="quinn_slack.png" />
          <Box align="left" ml={[3, 4]}>
            <Heading.h3 f={4} mb={1}>
              Quinn Slack
            </Heading.h3>
            <Text f={2} color="slate">
              <A href="https://techcrunch.com/2017/10/06/sourcegraph-raises-20m-bring-more-live-collaboration-to-programming/">
                Founder of Sourcegraph
              </A>
              <br />
              <A href="https://www.forbes.com/sites/kathleenchaykowski/2017/01/03/30-under-30-2017-the-young-innovators-transforming-enterprise-tech/#3452404d335b">
                Forbes 30 Under 30
              </A>
            </Text>
          </Box>
        </Profile>
      </Container>
    </Box>
    <Box>
      <Container px={3} py={[5, 6]} align="left">
        <Flex w={1} justify="space-between">
          <Subtitle f={[5, 6]}>Here’s the process.</Subtitle>
          <Step
            index={1}
            title="Record"
            message="Shoot a 2 minute video about your project."
            icon="videocam"
          />
          <Step
            index={2}
            title="Submit"
            message="Fill out your application submit it for review."
            icon="assignment"
          />
          <Step
            index={3}
            title="Receive"
            message="our decision a week after submissions close."
            icon="event_available"
          />
        </Flex>
      </Container>
    </Box>
    <Box bg={dark} color="white">
      <Container px={3} py={[5, 6]} align="center">
        <Subtitle>Apply now.</Subtitle>
        <Text
          color="smoke"
          f={4}
          mb={4}
          mx="auto"
          style={{ maxWidth: '48rem' }}
        >
          Applications are open from <Highlight>August 25th</Highlight> through{' '}
          <Highlight>September 9th</Highlight>. Decisions will be released a
          week later.
        </Text>
        <ApplyButton to="/apply" bg="pink.5">
          Apply now
        </ApplyButton>
      </Container>
    </Box>
    <Box>
      <Container px={3} py={[5, 6]} align="left">
        <Subtitle f={[5, 6]}>FAQ</Subtitle>
        <Question>Can I apply?</Question>
        <Answer>
          If you’re currently enrolled as a student in Cincinnati public
          schools, the answer is yes.
        </Answer>
        <Question>Do I need to be in a Hack Club?</Question>
        <Answer>
          No, you don’t need to be, and being a member or leader will not
          influence your chances. This grant is open to any high schoolers.
        </Answer>
        <Question>What can I use the money on?</Question>
        <Answer>
          You can use it to fly out to San Francisco to meet Quinn Slack in
          person.
        </Answer>
        <Question>I have another question</Question>
        <Answer>
          Please reach out to
          <A href="mailto:grant@hackclub.com" color="slate" ml={2}>
            grant@hackclub.com
          </A>{' '}
          😊.
        </Answer>
      </Container>
    </Box>
    <Box>
      <Container px={3} py={[5, 6]} align="left">
        <Subtitle f={[5, 6]}>We’re Hack Club.</Subtitle>
        <Text color="black" f={4} mb={4} style={{ maxWidth: '48rem' }}>
          We’re a nonprofit network of high school computer science clubs around
          the world where members learn to code through tinkering and building
          projects.
        </Text>
        <LearnButton href="https://hackclub.com/?ref=grant" bg="cyan.5">
          Learn more
        </LearnButton>
      </Container>
    </Box>
    <Box bg="snow" align="center" px={3} py={5}>
      <Heading.h2 f={4} mb={2}>
        Contact us
      </Heading.h2>
      <Flex color="muted" align="center" justify="center">
        <Icon glyph="email" size={32} />
        <A href="mailto:grant@hackclub.com" color="slate" ml={2}>
          grant@hackclub.com
        </A>
      </Flex>
    </Box>
  </Fragment>
)

export default IndexPage
