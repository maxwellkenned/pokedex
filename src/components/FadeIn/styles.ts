import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    /* margin-top: 10px; */
  }

  100% {
    opacity: 1;
    /* margin-top: 0; */
  }
`

export const FadeIn = styled.div`
  animation: ${fadeIn} 1s;
  justify-content: center;
  align-items: center;

  .show {
    animation: ${fadeIn} 1s;
    justify-content: center;
    align-items: center;
  }
`
