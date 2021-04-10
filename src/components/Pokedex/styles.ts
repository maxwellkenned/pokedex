import styled from 'styled-components'
import { getContrast, lighten, shade } from 'polished'

export const Wrapper = styled.main<{ bg: string }>`
  background-color: ${props => lighten(0.1, props.bg) || '#fff'};
  color: ${props => (getContrast(props.bg, '#000') > 3 ? '#000' : '#fff')};
  display: flex;
  overflow: hidden;
  flex: 1;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: all 2s;

  h1 {
    width: 100%;
    text-align: center;
    font-size: 3rem;
    text-shadow: 0px -2px 7px #00000070;
    margin-top: 3rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 641px) {
      font-size: 2rem;
      margin-top: 0;
    }
  }

  div.search {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    width: 80%;

    form {
      position: relative;
      max-width: 500px;
      display: flex;
      justify-content: center;
      align-items: center;

      > div {
        position: absolute !important;
        right: 0;
      }
    }

    input {
      box-shadow: 0px 1px 10px 0px #00000070;
      border: none;
      height: 30px;
      width: 350px;
      border-radius: 3px;
      padding: 5px 20px;
      font-size: 1rem;
      text-align: center;

      @media screen and (max-width: 641px) {
        width: 100%;
        padding: 5px 15px;
      }

      &:focus {
        outline: none;
      }

      &::placeholder {
        text-align: center;
        color: #333;
        font-size: 1rem;

        @media screen and (max-width: 641px) {
          font-size: 14px;
        }
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
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 350px;

        @media screen and (max-width: 641px) {
          min-width: max(70%, 224px);
          width: max(70%, 224px);
          line-height: 1.4rem;
          font-size: 1.4rem;
        }
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

    .contentImage {
      min-height: 500px;

      @media screen and (max-width: 641px) {
        min-height: 239px;
        height: 239px;
        width: 239px;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      span {
        margin-top: 10px;
        margin-bottom: 3rem;

        @media screen and (max-width: 641px) {
          margin-bottom: 1rem;
        }
      }
    }
  }
`
