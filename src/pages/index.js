import React from 'react'
import Layout from '../components/layout'

import SEO from '../components/seo'
import { HomeHeader, Banner, BannerButton } from '../utils'

import QuickInfo from '../components/HomePageComponent/QuickInfo'
import img from '../images/homeBcg.jpeg'
import Gallery from '../components/HomePageComponent/Gallery'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <HomeHeader img={img}>
      <Banner title="Delice" subtitle="main Street">
        <BannerButton style={{ margin: '2rem auto' }}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
  </Layout>
)

export default IndexPage
