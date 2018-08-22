import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import { Heading, Text, Field } from '@hackclub/design-system'
import ApplicationForm from 'components/application_form'

const ApplyPage = () => (
  <Fragment>
    <Heading>Your application</Heading>
    <ApplicationForm />
  </Fragment>
)

export default ApplyPage
