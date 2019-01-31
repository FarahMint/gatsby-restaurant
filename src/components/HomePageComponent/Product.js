import React from 'react'
import styled from 'styled-components'
import { styles } from '../../utils'
import Img from 'gatsby-image'

export default function Product({ product }) {
  const { name, price, ingredients } = product

  const { fixed } = product.images
  return (
    <ProductWrapper>
      <Img fixed={fixed} className="img" alt={name} title={name} />
      <div className="text">
        <div className="product-content">
          <h3 className="name">{name}</h3>
          <h4 className="price">{price}</h4>
        </div>
        <p className="info">{ingredients}</p>
      </div>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
  }

  .img {
    border-radius: 0.5rem;
  }
  .product-content {
    display: flex;
    justify-content: space-between;
    font-size: 1.05rem;
    text-transform: uppercase;
  }

  .name {
    color: ${styles.colors.mainYellow};
    margin-left: 0.5rem;
  }
  .price {
    color: ${styles.colors.mainGrey};
  }

  .info {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    word-spacing: 0.2rem;
    color: ${styles.colors.mainBlack};
  }
`
