import React, { Fragment } from 'react'
import { Heading, Text, Field, Flex, Card } from '@hackclub/design-system'
import ApplicationForm from 'components/apply/application_form'

const ApplyPage = () => (
  <Fragment>
    <Flex flexDirection="column" justify="center" align="center">
      <Heading my={3}>Your application</Heading>
      <Card boxShadowSize="md" p={3} my={3}>
        <ApplicationForm />
      </Card>
    </Flex>
  </Fragment>
)

export default ApplyPage
