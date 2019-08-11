import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'

const Home = () => (
  <Layout>
    <Head>
      <title>Leo Ji, software engineer and news nerd</title>
      <meta property="og:url" content="{serverRuntimeConfig.domain + '/'}" />
    </Head>
    <h1 className="title">Leo Ji</h1>
    <h2 className="subtitle">software engineer, news nerd</h2>

    <p>I'm currently a software engineer at The Washington Post. </p>
    <p>In my spare time, I take photographs as I walk around the city. </p>
    <p>
      I graduated in March 2019 from Northwestern University with a major in
      journalism, a minor in computer science, and a certificate in
      human-centered design.
    </p>
  </Layout>
)

export default Home
