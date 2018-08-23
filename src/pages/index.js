import React, { Fragment } from 'react'
import GsLink from 'gatsby-link'
import {
  Container,
  Flex,
  Box,
  Text,
  Heading,
  LargeButton as Button,
  Link,
  Card,
  Image,
} from '@hackclub/design-system'
import styled from 'styled-components'

const ApplyButton = Button.withComponent(GsLink)

const Profile = Card.withComponent(Image)
Profile.defaultProps = {
  style: { borderRadius: '50%' },
  boxShadowSize: 'md',
}

const Section = Container.withComponent(Flex)
Section.defaultProps = {
  flexDirection: 'column',
  maxWidth: 52,
  align: 'center',
  justify: 'center',
  mx: 'auto',
  py: [2, 5],
}
const SectionHeading = Heading.h3
SectionHeading.defaultProps = {
  f: [3, 6],
  mt: [2, 5, 7],
  mb: [1, 2],
}
const Highlight = Text.span
Highlight.defaultProps = {
  bold: true,
}

const IndexPage = () => (
  <Fragment>
    <Section mt={5}>
      <Heading.h1 f={[6, 9]} my={[4, 7]}>
        The Hack Club <br /> Scholarship
      </Heading.h1>
      <hr width="100%" />
      <Text f={4}>
        Hack Club is a nonprofit network of computer science clubs where members
        learn to code through tinkering and building projects.
      </Text>
    </Section>
    <Section>
      {/* TODO: Add a Modal with more info about Quinn Slack */}
      <Flex flexDirection={['column', 'row']} align="center">
        <Text f={4} align={['center', 'right']}>
          The Hack Club scholarship is a $500 award paired with mentorship from
          Quinn Slack given to 1 student in Cincinnati who shows outstanding
          promise as a programmer.
        </Text>
        <Box w={0.375} ml={[0, 4]}>
          <Profile src="quinn_slack.png" />
        </Box>
      </Flex>
    </Section>
    <Section>
      <Text f={4}>
        Coding is the closest thing we have today to a superpower. The Hack Club
        scholarship exists to identify promising young makers to give them
        resources to expand their ambition.
      </Text>
    </Section>
    <Box bg="#111" color="white" mt={7}>
      <Section>
        <SectionHeading mt={5} mb={3}>
          You can apply
        </SectionHeading>
        <Text fontWeight="lightest" f={3}>
          Applications are open from <Text.span bold>August 25th</Text.span>{' '}
          through <Text.span bold>September 9th</Text.span> and decisions will
          be released a week after.
        </Text>
        <Card bg="#111">
          <ApplyButton to="apply" bg="white" color="black" mt={4} mb={5}>
            Apply now
          </ApplyButton>
        </Card>
      </Section>
    </Box>
    <Section mb={5}>
      <SectionHeading>Contact us</SectionHeading>
      <Link href="mailto:scholarship@hackclub.com">
        scholarship@hackclub.com
      </Link>
    </Section>
  </Fragment>
)

export default IndexPage
