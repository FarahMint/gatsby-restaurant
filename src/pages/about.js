import React from 'react'
// import { Link } from 'gatsby'
import { PageHeader, Banner } from '../utils'
import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import aboutImg from '../images/aboutBcg.jpeg'

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>
      <Banner title="our story" subtitle="a little about us" />
    </PageHeader>
  </Layout>
)

export default AboutPage
