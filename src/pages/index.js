import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import { Container, Flex, Text, Heading } from '@hackclub/design-system'

const Section = Container.withComponent(Flex)
Section.defaultProps = {
  flexDirection: 'column',
  align: 'center',
  justify: 'center',
  mx: 'auto',
  py: [5, 6],
}

const IndexPage = () => (
  <Fragment>
    <Section>
      <Heading>The Hack Club Scholarship</Heading>
      <Text>
        This scholarship is for high school students who see coding as a
        superpower and take the initiative to code in their own free time —
        beyond just what they are assigned in class.
      </Text>
      <Text>
        Applicants will submit a project (website, app, etc.) they built with
        code and record a video demo. They’ll also include a brief write-up
        about what they worked on with a video demo.
      </Text>
      <Link to="apply">Apply now</Link>
    </Section>
    <Section>
      <Heading.h3>Prizes</Heading.h3>
      <ul align="left">
        <li>
          1st place: $400 & mentorship sessions with start-up founders
          <ul>
            <li>
              Quinn Slack: Founder of Sourcegraph, Forbes 30 Under 30 2017
            </li>
            <li>Tom Preston-Werner: CoFounder of GitHub, Chatterbug</li>
          </ul>
        </li>
        <li>
          <Text>4 runners-up get $25</Text>
        </li>
        <li>
          <Text>
            1 applicant from each state will win access to Hack Club’s expedited
            application process.
          </Text>
        </li>
      </ul>
    </Section>
    <Section>
      <Heading.h3>Rules</Heading.h3>
      <ul align="left">
        <li>
          <Text>Applications are due on Sept 3rd. at midnight </Text>
        </li>
        <li>
          <Text>
            Any student currently enrolled in a high school (grades 8-12) in
            Cincinnati. See if{' '}
            <Link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Cincinnati_Public_Schools#Secondary_Schools"
            >
              your state is eligible
            </Link>
            .
          </Text>
        </li>
        <li>
          <Text>
            If your project was built by a team, you must be able to show you
            made a significant contribution (ie. version control history).
          </Text>
        </li>
        <li>
          <Text>
            The project must be on a public platform (the web, Google Play, App
            Store).
          </Text>
        </li>
      </ul>
    </Section>
    <Section>
      <Heading.h3>Contact us</Heading.h3>
      <Text>
        Contact us at{' '}
        <Link to="mailto:scholarship@hackclub.com">
          scholarship@hackclub.com
        </Link>{' '}
        if you have any questions.
      </Text>
    </Section>
  </Fragment>
)

export default IndexPage
