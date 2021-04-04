import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(0) translateY(5px) translateZ(0);
  }

  100% {
    opacity: 1;
    transform: translateX(0) translateY(0) translateZ(0);
  }
`

export const FadeIn = styled.div`
  animation: ${fadeIn} 1s;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;

  .show {
    animation: ${fadeIn} 1s;
    justify-content: center;
    align-items: center;
  }
`
