import React from "react";
import Head from "next/head";
import Layout from "../components/layout";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export const config = { amp: false };

const Home = () => (
  <Layout>
    <Head>
      <title>Leo Ji, software engineer and news nerd</title>
      <meta property='og:url' content="{serverRuntimeConfig.domain + '/'}" />
    </Head>
    <Box>
      <Typography variant='overline'>
        software engineer and news nerd
      </Typography>
      <Typography variant='h1'>Leo Ji</Typography>
    </Box>
  </Layout>
);

export default Home;
