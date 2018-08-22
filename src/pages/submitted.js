import React, { Component } from 'react'
import { Heading, Text, Loading } from '@hackclub/design-system'
import storage from 'storage'

class SubmittedPage extends Component {
  state = { data: null }

  componentDidMount() {
    this.setState({
      data: storage.get('data')
    })
  }

  render() {
    return (
      <div>
        <Heading>Application submitted successfully!</Heading>
        <Text>Here’s your application info:</Text>
        {this.state.data}
      </div>
    )
  }
}

export default SubmittedPage
