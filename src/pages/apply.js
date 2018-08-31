import React, { Fragment } from 'react'
import { Heading, Text, Field, Flex, Card as C } from '@hackclub/design-system'
import ApplicationForm from 'components/apply/application_form'
import styled from 'styled-components'

const Card = styled(C).attrs({
  boxShadowSize: 'md',
  borderRadius: 3,
  p: 4,
  my: 3,
})``

const ApplyPage = () => (
  <Fragment>
    <Flex
      flexDirection="column"
      justify="center"
      align="center"
      mx="auto"
      style={{ maxWidth: '32em' }}
    >
      <Heading.h2 my={3} f={[4, 6]}>
        Before you apply
      </Heading.h2>
      <Card align="left">
        <Text>Please ensure you have:</Text>
        <ul>
          <li>A valid email account can send and receive emails</li>
          <li>Looked at the example projects</li>
          <li>
            Recorded your video and uploaded it as an unlisted video on YouTube
          </li>
        </ul>
        <Text>
          Filling out this form indicates you are a high school student actively
          enrolled in Cincinnati Public School District.
        </Text>
      </Card>
      <Heading.h2 my={3} f={[4, 6]}>
        Your application
      </Heading.h2>
      <Card>
        <ApplicationForm />
      </Card>
    </Flex>
  </Fragment>
)

export default ApplyPage
