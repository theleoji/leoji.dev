import React from 'react'
import Head from 'next/head'

import Nav from './nav'
import Footer from './footer'

import 'reset-css'
import '../styles/global.scss'

export default class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className="container">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>

        <Nav />

        {children}

        <Footer />
      </div>
    )
  }
}
