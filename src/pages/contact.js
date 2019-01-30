import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import contactImg from '../images/contactBcg.jpeg'

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={contactImg}>
      <Banner title="Contact us" subtitle={`let's get in touch`} />
    </PageHeader>
  </Layout>
)

export default ContactPage
