import React from 'react'
import Link from 'gatsby-link'
import { Heading, Text, Field } from '@hackclub/design-system'
import api from 'api'

const handleSubmit = e => {
  e.preventDefault()
  const gFormPath = 'https://docs.google.com/forms/d/e/1FAIpQLSfLgwkQPwzw6ybaZej4e0L8AW7Y7gjHyVukSaGEkFOq5euxXQ/formResponse'
  const formData = new FormData(e.target)
  api.post(gFormPath, { data: formData, mode: 'no-cors' }).then(res => {
    console.log(res)
  }).catch(e => {
    console.error(e)
  })
}

const fieldNames = {
  first_name: 'entry.1165277067',
  last_name: 'entry.951033769',
  high_school_name: 'entry.1908826850',
  project_video_url: 'entry.1590760348',
  project_description: 'entry.2103516634',
  project_technologies: 'entry.73657139',
}

const ApplyPage = () => (
  <div>
    <Heading>Your application</Heading>
    <form onSubmit={handleSubmit}>
      <Field label="First name" name={fieldNames['first_name']} id={fieldNames['first_name']} />
      <Field label="Last name" name={fieldNames['last_name']} />
      <Field
        label="What school do you go to?"
        name={fieldNames['high_school_name']}
      />
      <Field
        label={
          <div>
            Video demo of your project. Read the{' '}
            <Link to="video_instructions" target="_blank">
              instructions
            </Link>{' '}
            on making it.
          </div>
        }
        name={fieldNames['project_video_url']}
        placeholder="https://www.youtube.com/watch?v=cFEarBzelBs"
      />
      <Field
        label="Describe your project"
        name={fieldNames['project_description']}
        type="textarea"
      />
      <Field
        label="List the technologies you used"
        name={fieldNames['project_technologies']}
        placeholder="html, css, js..."
      />
      <Field onSubmit={handleSubmit} type="submit" />
    </form>
  </div>
)

export default ApplyPage
