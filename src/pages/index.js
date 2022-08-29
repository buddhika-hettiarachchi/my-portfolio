import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Technologies from "../components/Technologies"
import MyWork from "../components/MyWork"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero></Hero>
    <Technologies></Technologies>
    {/* <MyWork></MyWork> */}
  </Layout>
)

export default IndexPage
