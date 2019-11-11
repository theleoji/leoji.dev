import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../layout/layout'

import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Image from 'material-ui-image'

export const config = { amp: false }

const Contact = () => (
  <Layout>
    <Head>
      <title>Contact | Leo Ji</title>
      <meta
        property='og:url'
        content={serverRuntimeConfig.domain + '/contact'}
      />
    </Head>

    <Typography variant='h1' className='title'>
      Contact Leo
    </Typography>
    <Typography variant='h2' className='subtitle'>
      say hello!
    </Typography>

    <Typography gutterBottom component='div'>
      <Image src='/static/flags.jpg' aspectRatio={16 / 9} />
    </Typography>

    <Typography paragraph>
      I'm usually online, and I'm most easily found at:
    </Typography>
    <List>
      <ListItem>
        <ListItemText>
          email: <a href='mailto:leo@leoji.dev'>leo@leoji.dev</a>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          Twitter: <a href='https://twitter.com/theleoji'>@theleoji</a>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          phone and SMS: <a href='tel:+18723953654'>(872) 395-3654</a>
        </ListItemText>
      </ListItem>
    </List>

    <Typography variant='h3'>Need to talk more securely?</Typography>
    <Typography paragraph>
      <Link href='/contact/secure/'>
        <Button variant='contained' color='primary'>
          Learn more
        </Button>
      </Link>
    </Typography>
  </Layout>
)

export default Contact
