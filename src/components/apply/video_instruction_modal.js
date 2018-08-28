import React, { Component, Fragment } from 'react'
import { Text, Heading, Flex } from '@hackclub/design-system'
import { Modal, CloseButton, Overlay } from 'components/modal'
import Link from 'gatsby-link'

class VideoInstructionModal extends Component {
  state = { active: false }
  toggle = () => {
    setTimeout(() => this.setState(state => ({ active: !state.active })), 100)
  }
  setState = this.setState.bind(this)
  render() {
    return (
      <Fragment>
        <Link onClick={() => this.setState({ active: true })}>
          {this.props.children}
        </Link>
        {this.state.active && (
          <Fragment>
            <Modal align="left" my={4} p={[3, 4]}>
              {/* <CloseButton type="button" onClick={() => this.toggle} /> */}
              <Heading.h2 mb={3}>The Project Video</Heading.h2>
              <Text>
                Your application will include a 3 minute demo video uploaded to
                Youtube. If you don’t want other people to see it, make it
                unlisted.{' '}
                <Text.span bold>
                  Don’t mark it as private or disallow embedding
                </Text.span>
                , or we won’t be able to see it.
              </Text>
              <br />
              <Text>
                Don’t include special effects or put time into transitions — we
                don’t want this to turn into a video making contest. If you’re
                going to spend time making something cool, put it into your
                project.
              </Text>
              <br />
              <Text>
                Don’t include loud background music — it sucks when we have to
                give up on an application 10 seconds into their video because we
                can’t clearly hear what they are saying. Make sure you watch the
                video after uploading it to Youtube to make sure the audio is
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
