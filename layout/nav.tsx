import React, { useState, Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  SwipeableDrawer,
  IconButton,
  Link as MuiLink,
  List,
  ListItem,
  ListItemIcon,
  ListItemText as MuiListItemText,
  Box
} from '@material-ui/core'
import {
  Description as BlogIcon,
  ContactMail as ContactIcon,
  Home as HomeIcon,
  Menu as MenuIcon,
  CameraAlt as CameraAltIcon
} from '@material-ui/icons'

const ListItemLink = ({ children, href, currentPath, ...rest }) => {
  const selected = href === currentPath

  return (
    <Link href={href}>
      <MuiLink underline='none'>
        <ListItem button selected={selected} {...rest}>
          {children}
        </ListItem>
      </MuiLink>
    </Link>
  )
}

const ListItemText = ({ children, ...props }) => (
  <MuiListItemText primary={children} {...props} />
)

export default () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const router = useRouter()
  const currentPath = router.pathname
  return (
    <Fragment>
      <SwipeableDrawer
        open={isDrawerOpen}
        onOpen={event => setDrawerOpen(true)}
        onClose={event => setDrawerOpen(false)}
      >
        <Box width='25vw' minWidth='400px'>
          <List component='nav' aria-label='main'>
            <ListItemLink href='/' currentPath={currentPath}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>
                home <br />
                <small>where the ~ is</small>
              </ListItemText>
            </ListItemLink>
            <MuiLink
              href='https://leoji.blog/'
              target='_blank'
              rel='noopener'
              underline='none'
            >
              <ListItem button>
                <ListItemIcon>
                  <BlogIcon />
                </ListItemIcon>
                <ListItemText>
                  blog <br />
                  <small>where i say things</small>
                </ListItemText>
              </ListItem>
            </MuiLink>
            <MuiLink
              href='https://photos.leoji.codes'
              target='_blank'
              rel='noopener'
              underline='none'
            >
              <ListItem button>
                <ListItemIcon>
                  <CameraAltIcon />
                </ListItemIcon>
                <ListItemText>
                  photos <br />
                  <small>things that look pretty</small>
                </ListItemText>
              </ListItem>
            </MuiLink>
            <ListItemLink href='/contact/' currentPath={currentPath}>
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
      </SwipeableDrawer>
      <IconButton onClick={event => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
    </Fragment>
  )
}
