import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Button } from 'atomize'
import Layout from '../components/layout'

import MetaUrl from '../components/metaUrl'

const Contact = () => (
  <Layout>
    <Head>
      <title>Contact | Leo Ji</title>
      <MetaUrl path="contact" />
    </Head>
    <h1 className="title">Contact Leo</h1>
    <h2 className="subtitle">say hello!</h2>

    <p>I'm usually online, and I'm most easily found at: </p>
    <ul>
      <li>
        email: <a href="mailto:leo@leoji.dev">leo@leoji.dev</a>
      </li>
      <li>
        Twitter: <a href="https://twitter.com/theleoji">@theleoji</a>
      </li>
      <li>
        phone and SMS: <a href="tel:+18723953654">(872) 395-3654</a>
      </li>
    </ul>

    <h2>Need to talk more securely?</h2>
    <p>
      <Link href="/contact/secure">
        <Button bg="black800">Learn more</Button>
      </Link>
    </p>
  </Layout>
)

export default Contact
