import React from 'react'
import Link from 'next/link'

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul className="nav">
          <li>
            <Link href="/">
              <a>
                home <br />
                <small>where the ~ is</small>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://leoji.blog/">
              <a target="_blank" rel="noopener">
                blog <br />
                <small>where i say things</small>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>
                contact me
                <br />
                <small>to say nice things</small>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}
