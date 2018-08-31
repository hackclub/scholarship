import React, { Fragment } from 'react'
import api from 'api'
import storage from 'storage'
import Link from 'gatsby-link'
import { Heading, Field, Button } from '@hackclub/design-system'
import VideoInstructionModal from 'components/video_instruction_modal'
import * as yup from 'yup'
import { withFormik } from 'formik'
import styled from 'styled-components'

const fieldNames = {
  email: 'entry.381661279',
  first_name: 'entry.1165277067',
  last_name: 'entry.951033769',
  high_school_name: 'entry.1908826850',
  project_video_url: 'entry.1590760348',
  project_description: 'entry.2103516634',
  project_technologies: 'entry.73657139',
}

const Submit = styled(Button.withComponent('input')).attrs({ w: 1, mt: 3 })``

const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <form onSubmit={handleSubmit}>
    <Field
      label="Email address"
      name="email"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email}
      error={touched.email && errors.email}
      type="email"
    />
    <Field
      label="First name"
      name="first_name"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.first_name}
      error={touched.first_name && errors.first_name}
    />
    <Field
      label="Last name"
      name="last_name"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.last_name}
      error={touched.last_name && errors.last_name}
    />
    <Field
      label="What school do you go to?"
      name="high_school_name"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.high_school_name}
      error={touched.high_school_name && errors.high_school_name}
    />
    <Field
      label={
        <div>
          Video demo of your project. Read the{' '}
          <VideoInstructionModal children="instructions" /> on making it.
        </div>
      }
      name="project_video_url"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.project_video_url}
      error={touched.project_video_url && errors.project_video_url}
      placeholder="https://www.youtube.com/watch?v=cFEarBzelBs"
    />
    <Field
      label="Describe your project"
      name="project_description"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.project_description}
      error={touched.project_description && errors.project_description}
      type="textarea"
    />
    <Field
      label="List the technologies you used"
      name="project_technologies"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.project_technologies}
      error={touched.project_technologies && errors.project_technologies}
      placeholder="html, css, js..."
    />
    <Submit onSubmit={handleSubmit} disabled={isSubmitting} type="submit" />
  </form>
)

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    first_name: '',
    last_name: '',
    high_school_name: '',
    project_video_url: '',
    project_description: '',
    project_technologies: '',
  }),
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .required('required')
      .email('must be a valid email'),
    first_name: yup.string().required('required'),
    last_name: yup.string().required('required'),
    high_school_name: yup.string().required('required'),
    project_video_url: yup
      .string()
      .required('required')
      .url(),
    project_description: yup.string().required('required'),
    project_technologies: yup.string(),
  }),
  handleSubmit: (data, { setSubmitting }) => {
    const gFormPath =
      'https://proxyparty.hackclub.com/docs.google.com/forms/d/e/1FAIpQLSfLgwkQPwzw6ybaZej4e0L8AW7Y7gjHyVukSaGEkFOq5euxXQ/formResponse'
    const start = Date.now()
    const formData = new FormData()
    Object.keys(data).forEach(key =>
      formData.append(fieldNames[key], data[key])
    )
    api
      .post(gFormPath, { data: formData })
      .then(_ => {
        const waitDuration = Math.max(3000 - (Date.now() - start), 100)
        setTimeout(() => {
          storage.set('data', data)
          location.href = `submitted`
        }, waitDuration)
      })
      .catch(e => {
        console.error(e)
      })
  },
})(InnerForm)
