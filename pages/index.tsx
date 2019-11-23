import React from 'react'
import Head from 'next/head'
import Layout from '../layout/layout'

import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

import Image from 'react-image'

const Home = () => (
  <Layout>
    <Head>
      <title>Leo Ji, software engineer and news nerd</title>
      <meta property='og:url' content={serverRuntimeConfig.domain + '/'} />
    </Head>
    <Box>
      <Typography variant='overline'>
        software engineer and news nerd
      </Typography>
      <Typography variant='h1'>Leo Ji</Typography>
      <Typography gutterBottom component='div'>
        <Image src='/static/leoji.jpg' width='100%' />
      </Typography>
      <Typography paragraph>
        Hi. I'm Leo. I'm currently a software engineer at The Washington Post.
      </Typography>
      <Typography paragraph>
        Previously, I studied at Northwestern University, where I held multiple
        roles in student-run organizations.
      </Typography>

      <Divider />

      <Typography variant='h4' component='h2' gutterBottom>
        Things I've built
      </Typography>
      <Card>
        <CardContent>
          <Typography variant='h5' component='h3' gutterBottom>
            Rush Hour Promise Calculator
          </Typography>
          <Typography paragraph>
            A small Javascript web app that provides an estimate for expected
            travel time between two WMATA rail stations.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' href='https://rush-hour-promise.leoji.codes/'>
            View
          </Button>
        </CardActions>
      </Card>
    </Box>
  </Layout>
)

export default Home
