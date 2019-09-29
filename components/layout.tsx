import React from "react";

import { Container } from "@material-ui/core";

import Nav from "./nav";
import Footer from "./footer";

export default class Layout extends React.Component {
  props: { children: any };
  render() {
    const { children } = this.props;

    return (
      <div className='container'>
        <Nav />
        <Container>{children}</Container>

        <Container>
          <Footer />
        </Container>
      </div>
    );
  }
}
