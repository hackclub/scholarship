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
import VideoInstructionModal from 'components/video_instruction_modal'

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

const StepCounter = styled(Flex)`
  position: relative;
  z-index: 1;
  &:after {
    content: '${({ index }) => index}.';
    z-index: -1;
    text-shadow: 0 0 5px rgba(0,0,0,0.1);
    font-size: 6em;
    position: absolute;
    top: 15px;
    left: -25px;
    font-weight: bold;
    color: #fff;
    line-height: 0;
  }
`
const Step = ({ title, icon, message, index }) => (
  <Box mt={5}>
    <StepCounter index={index} flexDirection="row" align="center">
      <DSIcon name={icon} size={48} />
      <Heading> {title}</Heading>
    </StepCounter>
    <Text f={3} style={{ maxWidth: '36rem' }}>
      {message}
    </Text>
  </Box>
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

const Highlight = styled(Text.span).attrs({
  bold: true,
  color: 'white',
})`
  border-radius: ${({ theme }) => theme.pill};
`

const IndexPage = () => (
  <Fragment>
    <Section pt={[4, 5]} px={3} pb={[5, 6]}>
      <Flex justify="center" color="pink.5">
        <HeroIcon glyph="idea" size={72} />
      </Flex>
      <Title>The Hack Club Scholarship</Title>
      <Text f={4}>
        A $250 unrestricted grant awarded to a high schooler in Cincinnati,
        giving them the resources to expand their ambition. Applications open
        until September 9.
      </Text>
    </Section>
    <Box bg="snow">
      <Container px={3} py={[5, 6]}>
        <Subtitle>Here’s the deal.</Subtitle>
        <Text color="black" f={4} mb={4} style={{ maxWidth: '48rem' }}>
          The Hack Club Scholarship is a $250 award paired with mentorship from
          Quinn Slack given to one student in Cincinnati interested in tech.
        </Text>
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
        <Subtitle f={[5, 6]}>We’re Hack Club.</Subtitle>
        <Text color="black" f={4} mb={4} style={{ maxWidth: '48rem' }}>
          We’re a nonprofit network of high school computer science clubs around
          the world where members learn to code through tinkering and building
          projects.
        </Text>
        <LearnButton href="https://hackclub.com/?ref=scholarship" bg="cyan.5">
          Learn more
        </LearnButton>
      </Container>
    </Box>
    <Box bg="snow">
      <Container px={3} py={[5, 6]} align="left">
        <Flex w={1} justify="space-between" flexDirection="column">
          <Subtitle f={[5, 6]}>Here’s the process.</Subtitle>
          <Step
            index={1}
            title="Build"
            message={
              <Fragment>
                Choose a project to build, or something you’ve already worked
                on. Look at the <A href="#example-projects">example projects in the FAQ</A> to get an idea of we’re looking for.
              </Fragment>
            }
            icon="build"
          />
          <Step
            index={2}
            title="Record"
            message={
              <Fragment>
                Shoot a 2 minute video about your project. Make sure to follow
                the <VideoInstructionModal children="video guidelines" />.
              </Fragment>
            }
            icon="videocam"
          />
          <Step
            index={3}
            title="Submit"
            message="Once you fill out your application, submit it. You’ll receive a confirmation that it was submitted successfully."
            icon="assignment"
          />
          <Step
            index={4}
            title="Receive"
            message="You'll get our decision a week after submissions close."
            icon="event_available"
          />
        </Flex>
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
          influence your chances. This scholarship is open to any high
          schoolers.
        </Answer>
        <Question id="example-projects">What sort of projects should I talk about?</Question>
        <Answer>
          If you’re looking for inspiration, check out these{' '}
          <Text.span bold>example projects</Text.span> from high schoolers
          around the world
          <ul>
            <li>
              <A href="https://lachlanjc.me/fossilfunded" bold>Fossil Funded</A> –
              see who funds your local representatives.
            </li>
            <li>
              <A href="https://github.com/jajoosam/zap" bold>Zap</A> – search the web
              for any text you select.
            </li>
            <li>
              <A href="https://getnoodl.es/" bold>Noodles</A> – save all your
              recipies in one place.
            </li>
          </ul>
        </Answer>
        <Question>What are the requirements for the video?</Question>
        <Answer>
          Read the{' '}
          <VideoInstructionModal children="instructions for making your video" />
          .
        </Answer>
        <Question>Can I use prior projects in the video?</Question>
        <Answer>
          Absolutely! You’re free to use any projects you’ve previously built,
          or start building something new.
        </Answer>
        <Question>Can I use prior projects in the video?</Question>
        <Answer>
          Absolutely! You’re free to use any projects you’ve previously built,
          or start building something new.
        </Answer>
        <Question>I don’t have a project</Question>
        <Answer>You’ve got 2 weeks! Build something.</Answer>
        <Question>Can I apply with an unfinished project?</Question>
        <Answer>
          Absolutely! Show us what you’ve got so far and make sure to talk about
          where you’re hoping to take it in your application.
        </Answer>
        <Question>What can I use the money on?</Question>
        <Answer>
          The funds are unrestricted — you can use it for anything.
        </Answer>
        <Question>I have another question</Question>
        <Answer>
          Please reach out to
          <A href="mailto:scholarship@hackclub.com" color="slate" ml={2}>
            scholarship@hackclub.com
          </A>{' '}
          😊.
        </Answer>
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
    <Box bg="snow" align="center" px={3} py={5}>
      <Heading.h2 f={4} mb={2}>
        Contact us
      </Heading.h2>
      <A href="mailto:scholarship@hackclub.com" color="muted">
        <Flex align="center" justify="center">
          <Icon glyph="email" size={32} />
          <Text.span color="slate" ml={2}>
            scholarship@hackclub.com
          </Text.span>
        </Flex>
      </A>
    </Box>
  </Fragment>
)

export default IndexPage
