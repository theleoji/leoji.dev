import React from 'react'

export default (props: { path: string }) => (
  <meta property="og:url" content="{serverRuntimeConfig.domain}/{path}" />
)
