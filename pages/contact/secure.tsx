import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'

import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

import { CopyToClipboard } from 'react-copy-to-clipboard'

import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Typography from '@material-ui/core/Typography'

const nbsp = String.fromCharCode(160)

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false)

  return (
    <Layout>
      <Head>
        <title>Secure methods of contact | Leo Ji</title>
        <meta
          property='og:url'
          content={serverRuntimeConfig.domain + '/contact/secure'}
        />
      </Head>
      <Typography variant='h1' className='title'>
        Secure methods of contact
      </Typography>
      <Typography variant='h2' className='subtitle'>
        if needed.
      </Typography>

      <Typography paragraph>
        I can be contacted via a variety of encrypted and/or private methods.
        Note that, while these methods provide a higher than standard level of
        data security, no system is 100% secure.
      </Typography>

      <Typography variant='h3'>Signal</Typography>
      <Typography paragraph>
        Signal is a free, end-to-end encrypted messaging app, which allows you
        to communicate securely. You can send messages, images and video. No
        metadata is retained by Signal. It can be downloaded from an app store.
        Signal can also be configured to delete messages automatically after a
        designated time interval.
      </Typography>
      <CopyToClipboard
        text='+1 (847) 262-7365'
        onCopy={() => setIsCopied(true)}
      >
        <Button variant='outlined' color='primary'>
          {!isCopied
            ? `Copy Signal number: +1${nbsp}(847)${nbsp}262-7365`
            : `Copied`}
        </Button>
      </CopyToClipboard>

      <Typography variant='h3'>PGP</Typography>
      <Typography paragraph>
        If you use PGP encryption, you can contact me via PGP encrypted email.
        Note that most mail encryption plugins, such as Mailvelope or Enigmail,
        will encrypt your message contents but not the subject line or the name
        of the sender.
      </Typography>
      <ButtonGroup variant='outlined' color='primary'>
        <Button href='/static/pgp.txt'>{`Public${nbsp}key`}</Button>

        <Button href='https://keybase.io/leoji'>keybase.io</Button>
      </ButtonGroup>
    </Layout>
  )
}

export default Contact
