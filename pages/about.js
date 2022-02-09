import React from "react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import AboutSection from "../components/AboutSection";

function About() {
  return (
    <Layout>
      <PageBanner title="About Us" />
      <AboutSection />
    </Layout>
  );
}

export default About;
