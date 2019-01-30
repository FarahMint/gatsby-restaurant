import React from 'react'
import styled from 'styled-components'
import { styles } from '../utils'

export function Title({ title, message }) {
  return (
    <TitleWrapper>
      <h3 className="message">{message}</h3>
      <h2 className="title">{title}</h2>
      <div className="underline" />
    </TitleWrapper>
  )
}

Title.defaultProps = {
  message: 'our message',
  title: 'our title',
}
const TitleWrapper = styled.div`
  text-align: center;
  .message {
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: '.2rem' })};
    font-size: 2rem;
    color: ${styles.colors.mainGrey};
  }
  .title {
    ${styles.letterSpacing({ spacing: '.3rem' })};
    font-size: 2rem;
    color: ${styles.colors.mainGrey};
    text-transform: uppercase;
  }
  .underline {
    width: 5rem;
    height: 0.3rem;
    background-color: ${styles.colors.mainYellow};
    margin: 0.5rem auto;
  }
`
