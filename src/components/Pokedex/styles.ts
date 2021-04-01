import styled from 'styled-components'
import { getContrast, lighten, shade } from 'polished'

export const Wrapper = styled.main<{ bg: string }>`
  background-color: ${props => lighten(0.1, props.bg) || '#fff'};
  color: ${props => (getContrast(props.bg, '#000') > 3 ? '#000' : '#fff')};
  width: 100%;
  height: 100%;
  padding: 3rem;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 2s;

  h1 {
    font-size: 3rem;
    text-shadow: 0px -2px 7px #00000070;
    margin-bottom: 2rem;
  }

  div.search {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;

    input {
      box-shadow: 0px 1px 10px 0px #00000070;
      border: none;
      height: 30px;
      width: 350px;
      border-radius: 3px;
      padding: 5px 20px;
      font-size: 1rem;

      &:focus {
        outline: none;
      }

      &::placeholder {
        text-align: center;
        color: #333;
        font-size: 1rem;
      }
    }
  }

  section {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2,
    span {
      text-transform: capitalize;
    }

    h2 {
      font-size: 2rem;
    }

    span {
      font-size: 1.2rem;
    }

    div.contentDescription {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      h2 {
        min-width: 350px;
      }

      button {
        color: ${props =>
          getContrast(props.bg, '#000') > 3 ? '#000' : '#fff'};
        background: inherit;
        border: none;
        font-size: 2.5rem;
        font-weight: bold;
        padding: 0 1rem;
        cursor: pointer;

        &:focus {
          outline: none;
        }

        &:hover {
          color: ${props =>
            getContrast(props.bg, '#000') > 3
              ? lighten(0.3, '#000')
              : shade(0.2, '#fff')};
        }
      }
    }

    .image {
      min-height: 500px;
      min-width: 400px;

      span {
        margin-bottom: 3rem;
      }
    }
  }
`
