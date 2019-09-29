import React, { useState, Fragment } from "react";
import Link from "next/link";
import { width } from "@material-ui/system";

import {
  Drawer,
  IconButton,
  Link as MuiLink,
  List,
  ListItem,
  ListItemIcon,
  ListItemText as MuiListItemText,
  Box
} from "@material-ui/core";
import {
  Description as BlogIcon,
  ContactMail as ContactIcon,
  Home as HomeIcon,
  Menu as MenuIcon
} from "@material-ui/icons";

const ListItemLink = ({
  children,
  href,
  target = null,
  rel = null,
  ...rest
}) => (
  <Link href={href}>
    <MuiLink target={target} rel={rel}>
      <ListItem button {...rest}>
        {children}
      </ListItem>
    </MuiLink>
  </Link>
);

const ListItemText = ({ children, ...props }) => (
  <MuiListItemText primary={children} {...props} />
);

export default () => {
  const [isDrawerOpen, setDrawerOpen] = useState();

  return (
    <Fragment>
      <Drawer open={isDrawerOpen} onClose={event => setDrawerOpen(false)}>
        <Box width='25vw'>
          <List component='nav' aria-label='main'>
            <ListItemLink href='/'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>
                home <br />
                <small>where the ~ is</small>
              </ListItemText>
            </ListItemLink>
            <ListItemLink
              href='https://leoji.blog/'
              target='_blank'
              rel='noopener'
            >
              <ListItemIcon>
                <BlogIcon />
              </ListItemIcon>
              <ListItemText>
                blog <br />
                <small>where i say things</small>
              </ListItemText>
            </ListItemLink>
            <ListItemLink href='/contact/'>
              <ListItemIcon>
                <ContactIcon />
              </ListItemIcon>
              <ListItemText>
                contact me
                <br />
                <small>to say nice things</small>
              </ListItemText>
            </ListItemLink>
          </List>
        </Box>
      </Drawer>
      <IconButton onClick={event => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
    </Fragment>
  );
};
