import React from 'react'
// import { Link } from 'gatsby'
import { FaBeer } from 'react-icons/fa'
import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>
      Hi Gatsby <FaBeer />
    </h3>
  </Layout>
)

export default IndexPage
