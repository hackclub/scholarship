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
`

const HeroIcon = styled(Icon)`
  filter: drop-shadow(
    0 0 4px ${({ theme }) => hexa(theme.colors.pink[5], 0.75)}
  );
`

const Title = styled(Heading.h1).attrs({ f: [6, 8, 9], mt: 2, mb: [3, 4] })`
  line-height: 1;
`

const ApplyButton = styled(Button.withComponent(GsLink)).attrs({
  bg: 'cyan.5',
  color: 'white',
  py: 3,
  px: 4,
  f: 2,
})`
  text-transform: uppercase;
`

const Profile = Card.withComponent(Avatar)
Profile.defaultProps = {
  boxShadowSize: 'md',
}

const Section = Container.withComponent(Flex)
Section.defaultProps = {
  flexDirection: 'column',
  maxWidth: 48,
  align: 'center',
  justify: 'center',
  mx: 'auto',
  py: [2, 4],
}
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
    <Section pt={4} px={3} pb={5}>
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
      <Section>
        {/* TODO: Add a Modal with more info about Quinn Slack */}
        <Flex flexDirection={['column', 'row']} align="center">
          <Text f={4} align={['center', 'right']}>
            The Hack Club scholarship is a $500 award paired with mentorship
            from Quinn Slack given to 1 student in Cincinnati who shows
            outstanding promise as a programmer.
          </Text>
          <Box w={0.375} ml={[0, 4]}>
            <Profile src="quinn_slack.png" />
          </Box>
        </Flex>
      </Section>
    </Box>
    <Section>
      <Text f={4}>
        We’re Hack Club, a nonprofit network of high school computer science
        clubs around the world where members learn to code through tinkering and
        building projects.
      </Text>
    </Section>
    <Box bg={dark} color="white" mt={7}>
      <Section py={[4, 5, 6]}>
        <SectionHeading mb={3}>You can apply</SectionHeading>
        <Text color="smoke" f={3}>
          Applications are open from <Highlight>August 25th</Highlight> through{' '}
          <Highlight>September 9th</Highlight> and decisions will be released a
          week after.
        </Text>
        <ApplyButton to="apply" mt={4}>
          Apply now
        </ApplyButton>
      </Section>
    </Box>
    <Section my={5}>
      <SectionHeading>Contact us</SectionHeading>
      <Flex color="cyan.7" align="center">
        <Icon glyph="email" size={32} />
        <Link href="mailto:scholarship@hackclub.com" color="inherit" ml={2}>
          scholarship@hackclub.com
        </Link>
      </Flex>
    </Section>
  </Fragment>
)

export default IndexPage
