import React from 'react'
import Head from 'next/head'

import Nav from './nav'
import Footer from './footer'

import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

import '../styles/global.scss'
export default class Layout extends React.Component {
  props: { children: any }
  render() {
    const { children } = this.props
    const metaTitle = 'Leo Ji, software engineer and news nerd'

    return (
      <div className="container">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content={metaTitle} />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content={serverRuntimeConfig.domain + '/static/bw_jakubiak.jpg'}
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:site" content="@theleoji" />
          <meta property="twitter:creator" content="@theleoji" />
        </Head>
        <Nav />

        {children}

        <Footer />
      </div>
    )
  }
}
