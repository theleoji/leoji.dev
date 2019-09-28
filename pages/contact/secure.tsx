import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'
import Link from 'next/link'
import { Button } from 'atomize'
import { CopyToClipboard } from 'react-copy-to-clipboard'

function Contact() {
  const [copied, setCopied] = useState()

  return (
    <Layout>
      <Head>
        <title>Secure contact | Leo Ji</title>
        <meta
          property="og:url"
          content="{serverRuntimeConfig.domain + '/contact/secure'}"
        />
      </Head>
      <h1 className="title">Secure contact</h1>
      <h2 className="subtitle">if needed.</h2>

      <p>
        I can be contacted via a variety of encrypted and/or private methods.
        Note that, while these methods provide a higher than standard level of
        data security, no system is 100% secure.
      </p>

      <h3>Signal</h3>
      <p>
        Signal is a free, end-to-end encrypted messaging app, which allows you
        to communicate securely. You can send messages, images and video. No
        metadata is retained by Signal. It can be downloaded from an app store.
        Signal can also be configured to delete messages automatically after a
        designated time interval.
      </p>
      <CopyToClipboard text="+1 (847) 262-7365" onCopy={() => setCopied(true)}>
        <Button bg="info600">
          Leo's Signal phone number: +1&nbsp;(847)&nbsp;262-7365
        </Button>
      </CopyToClipboard>
      {copied ? <span style={{ color: 'red' }}>Copied.</span> : null}

      <h3>PGP</h3>
      <p>
        If you use PGP encryption, you can contact me via PGP encrypted email.
        Note that most mail encryption plugins, such as Mailvelope or Enigmail,
        will encrypt your message contents but not the subject line or the name
        of the sender.
      </p>
      <p>
        <Link href="/static/pgp.txt">
          <Button bg="info600">Leo's public key</Button>
        </Link>
      </p>
      <p>
        <a href="https://keybase.io/leoji">
          <Button bg="info500">Leo's keybase.io</Button>
        </a>
      </p>
    </Layout>
  )
}

export default Contact
