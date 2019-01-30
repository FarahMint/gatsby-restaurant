import React, { Component } from 'react'
import styled from 'styled-components'
import { styles } from '../../utils'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

export default class Footer extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: 'https://www.facebook.com',
      },
      {
        id: 2,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: 'https://www.twitter.com',
      },
      {
        id: 3,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: 'https://www.instagram.com',
      },
    ],
  }

  render() {
    return (
      <FooterWrapper>
        <div className="title">delice</div>
        <div className="icons">
          {this.state.icons.map(item => (
            <a
              key={item.id}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="copyright">&copy; 2019 Delice</p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  padding: 2rem;
  background-color: ${styles.colors.mainBlack};
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.5rem;
    ${styles.transFunction({})};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
  .title {
    width: 10rem;
    text-transform: uppercase;
    text-align: center;
    color: ${styles.colors.mainYellow};
    margin: 0 auto 0.75rem auto;
    padding: 0.3rem 1rem;
    font-size: 1.5rem;

    ${styles.border({ color: `${styles.colors.mainYellow}` })}
  }
`
