import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Technologies from "../components/Technologies"
import MyWork from "../components/MyWork"
import Experiences from "../components/Experiences"
import EmailContactForm from "../components/EmailContactForm"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero></Hero>
    <Technologies></Technologies>
    <MyWork></MyWork>
    <Experiences></Experiences>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
