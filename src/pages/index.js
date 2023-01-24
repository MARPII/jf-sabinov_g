import * as React from "react"
import { Link } from 'gatsby';

import "../styles/test.scss"
import FooterSection from './footerSection';
import ServicesSection from './servicesSection';
import HomeSection from './homeSection';
import PricingSection from './pricingSection';
import ProjectsSection from './projectsSection';
import AboutSection from './aboutSection';
import ReviewsSection from './reviewsSection';
import ContactSection from './contactSection';
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },

]
const IndexPage = () => {
  return (
    <main>
      <HomeSection />
      <ServicesSection />
      <PricingSection />
      <ProjectsSection />
      <AboutSection />
      <ReviewsSection />
      <ContactSection />
      <FooterSection />

    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Homfe Page</title>
export default IndexPage
