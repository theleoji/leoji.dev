/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets, ThemeProvider } from "@material-ui/styles";
import theme from "../styles/theme.tsx";

import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

const metaTitle = "Leo Ji, software engineer and news nerd";

class MyDocument extends Document {
  render() {
    return (
      <html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
          />
          {/* PWA primary color */}
          <meta name='theme-color' content={theme.palette.primary.main} />
          <link
            href='https://fonts.googleapis.com/css?family=DM+Serif+Display:400,400i&display=swap&subset=latin-ext'
            rel='stylesheet'
          />
          <link rel='stylesheet' href='https://use.typekit.net/vsr0fdb.css' />

          <meta name='description' content={metaTitle} />
          <meta property='og:title' content={metaTitle} />
          <meta property='og:type' content='website' />
          <meta
            property='og:image'
            content={serverRuntimeConfig.domain + "/static/bw_jakubiak.jpg"}
          />
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:site' content='@theleoji' />
          <meta property='twitter:creator' content='@theleoji' />
        </Head>
        <body>
          <ThemeProvider theme={theme}>
            <Main />
          </ThemeProvider>
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key='styles'>
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    ]
  };
};

export default MyDocument;
