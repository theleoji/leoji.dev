import React from 'react'

import { ThemeProvider } from '@material-ui/styles'
import theme from '../styles/theme'

import { Container } from '@material-ui/core'

import Nav from './nav'
import Footer from './footer'

import '../styles/global.scss'

export default class Layout extends React.Component {
  props: { children: any }
  render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Nav />
        <Container>{children}</Container>

        <Container>
          <Footer />
        </Container>
      </ThemeProvider>
    )
  }
}
