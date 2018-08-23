/* (max@hackclub.com) File copied from https://github.com/hackclub/site/blob/2e6fd60c48455de38ee3dc59f1c625a1674d0f2f/src/components/Modal.js */
import React, { Fragment } from 'react'
import { Box, IconButton } from '@hackclub/design-system'
import styled, { keyframes } from 'styled-components'
import ScrollLock from 'react-scrolllock'

const modalKeyframes = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
  }

  85% {
    transform: translate(-50%, -50%) scale(1.025);
  }

  100% {
    transform: translate(-50%, -50%) scale(1);
  }
`

const Modal = styled(Box)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii[2]};
  box-shadow: ${({ theme }) => theme.boxShadows[2]};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1100;

  ${({ theme }) => theme.mediaQueries.md} {
    animation: ${modalKeyframes} ease-in 0.25s;
  }

  // Responsive size control
  width: ${props => props.width || '36rem'};
  max-width: 95vw;
  max-height: 95vh;
  margin-left: auto;
  margin-right: auto;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  > button:first-child {
    position: fixed;
    top: 0;
    right: 0;
  }
`

const Overlayer = styled(Box)`
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(6px);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Overlay = props => (
  <Fragment>
    <Overlayer {...props} />
    <ScrollLock />
  </Fragment>
)

const CloseButton = props => (
  <IconButton name="close" color="muted" circle p={3} {...props} />
)

export default { Modal, Overlay, Overlayer, CloseButton }
