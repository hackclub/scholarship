import React, { Component, Fragment } from 'react'
import { Text, Heading } from '@hackclub/design-system'
import { Modal, CloseButton, Overlay } from 'components/modal'
import styled from 'styled-components'

const Link = styled(Text.span).attrs({ color: 'info' })`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

class VideoInstructionModal extends Component {
  state = { active: false }

  toggle = e => {
    e.preventDefault()
    this.setState(state => ({ active: !state.active }))
  }

  render() {
    return (
      <Fragment>
        <Link onClick={this.toggle}>{this.props.children}</Link>
        {this.state.active && (
          <Fragment>
            <Modal align="left" my={4} p={[3, 4]} color="black">
              <CloseButton type="button" onClick={this.toggle} />
              <Heading.h2 mb={3}>The Project Video</Heading.h2>
              <Text f={2}>
                Your application will include a 2 minute demo video uploaded to
                YouTube. If you don’t want other people to see it, make it
                unlisted.{' '}
                <Text.span bold>
                  Don’t mark it as private or disallow embedding
                </Text.span>
                , or we won’t be able to see it.
              </Text>
              <Text f={2} my={2}>
                Don’t include special effects or put time into transitions — we
                don’t want this to turn into a video making contest. If you’re
                going to spend time making something cool, put it into your
                project.
              </Text>
              <Text f={2}>
                Don’t include loud background music — it sucks when we have to
                give up on an application 10 seconds into their video because we
                can’t clearly hear what they are saying. Make sure you watch the
                video after uploading it to YouTube to make sure the audio is
                good.
              </Text>
            </Modal>
            <Overlay onClick={this.toggle} />
          </Fragment>
        )}
      </Fragment>
    )
  }
}

export default VideoInstructionModal
