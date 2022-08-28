import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import TechnologiesCarousel from "../components/TechnologiesCarousel"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero></Hero>
    <TechnologiesCarousel></TechnologiesCarousel>
  </Layout>
)

export default IndexPage
