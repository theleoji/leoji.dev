import React from 'react'
import ReactGA from 'react-ga'

import { ThemeProvider } from '@material-ui/styles'
import theme from '../styles/theme'

import { Container } from '@material-ui/core'

import Nav from './nav'
import Footer from './footer'

import '../styles/global.scss'

ReactGA.initialize('UA-69406642-5')

export default class Layout extends React.Component {
  props: { children: any; noNav?: boolean }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }
  render() {
    const { children, noNav } = this.props

    return (
      <ThemeProvider theme={theme}>
        {noNav ? null : <Nav />}
        <Container maxWidth='md'>{children}</Container>

        <Container maxWidth='md'>
          <Footer />
        </Container>
      </ThemeProvider>
    )
  }
}
