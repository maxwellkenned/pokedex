import Image from 'next/image'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from {
        transform:rotate(0deg);
    }
  to {
      transform:rotate(360deg);
  }
`

export const Container = styled.div``

export const Spin = styled(Image)`
  /* animation: ${spin} infinite linear; */
  animation-name: ${spin};
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`
