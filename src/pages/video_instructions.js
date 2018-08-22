import React from 'react'
import Link from 'gatsby-link'
import { Heading, Text } from '@hackclub/design-system'

const VideoInstructionPage = () => (
  <div>
    <Heading>The demo video</Heading>
    <Text>
      Your application will include a 1 minute demo video uploaded to Youtube.
      If you don’t want other people to see it, make it unlisted.{' '}
      <Text.span bold>Don’t mark it as private or disallow embedding</Text.span>
      , or we won’t be able to see it.
    </Text>
    <Text>
      Don’t include special effects or put time into transitions — we don’t want
      this to turn into a video making contest. If you’re going to spend time
      making something cool, put it into your project.
    </Text>
    <Text>
      Don’t include loud background music — it sucks when we have to give up on
      an application 10 seconds into their video because we can’t clearly hear
      what they are saying. Make sure you watch the video after uploading it to
      Youtube to make sure the audio is good.
    </Text>
  </div>
)

export default VideoInstructionPage
