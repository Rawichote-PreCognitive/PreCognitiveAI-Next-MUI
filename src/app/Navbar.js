import * as React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button, Container, Drawer, List, ListItem, ListItemText, Menu, MenuItem, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Image from 'next/image';

const Navbar = ({ content }) => {
  const [anchorEl, setAnchorEl] = React.useState({});
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openMenus, setOpenMenus] = React.useState({});

  const handleOpenMenu = (menu) => (event) => {
    setAnchorEl((prev) => ({ ...prev, [menu]: event.currentTarget }));
  };

  const handleCloseMenu = (menu) => () => {
    setAnchorEl((prev) => ({ ...prev, [menu]: null }));
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCloseNavMenu = () => {
    setMobileOpen(false);
  };

  const handleToggle = (menu) => () => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const smoothScroll = (event, sectionId) => {
    event.preventDefault();
    const yOffset = -70; // Adjust this value to set the offset
    const element = document.getElementById(sectionId);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    handleCloseNavMenu();
  };

  const groupedContent = content.reduce((acc, item) => {
    if (!acc[item.menu]) {
      acc[item.menu] = [];
    }
    acc[item.menu].push(item);
    return acc;
  }, {});

  const uniqueMenus = Array.from(new Set(content.map(item => item.menu)));

  const renderMenuItems = (items) => (
    items.map((item) => (
      <MenuItem key={item.section} onClick={(e) => { smoothScroll(e, item.section); }}>
        {item.section.replace(/\\&/g, '&').replace(/_/g, ' ')}
      </MenuItem>
    ))
  );

  const renderDrawerItems = (menu, open, handleToggle) => (
    <React.Fragment key={menu}>
      <ListItem button="true" onClick={handleToggle}> 
        <ListItemText primary={menu} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {groupedContent[menu] && groupedContent[menu].map((item) => (
            <ListItem button="true" key={item.section} onClick={(e) => smoothScroll(e, item.section)}> 
              <ListItemText primary={item.section.replace(/\\&/g, '&').replace(/_/g, ' ')} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 700 }}>
        PreCognitive
      </Typography>
      <List>
        {uniqueMenus.map((menu) => renderDrawerItems(menu, openMenus[menu], handleToggle(menu)))}
      </List>
    </Box>
  );

  const renderButtonWithMenu = (menu, anchorEl, openMenu, closeMenu) => (
    <React.Fragment key={menu}>
      <Button
        aria-controls={`${menu.toLowerCase()}-menu`}
        aria-haspopup="true"
        onClick={openMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        <Typography component="span" sx={{ fontWeight: 700, fontFamily: 'Comfortaa, sans-serif' }}>
          {menu}
        </Typography>
      </Button>
      <Menu
        id={`${menu.toLowerCase()}-menu`}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        {groupedContent[menu] && renderMenuItems(groupedContent[menu])}
      </Menu>
    </React.Fragment>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'black', width: '100%', margin: '0 auto' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Image src="/logos/logo_only.png" alt="logo" width={40} height={40} />
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                marginLeft: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Comfortaa, sans-serif',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              PreCognitive
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                fontFamily: 'Comfortaa, sans-serif',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              PreCognitive
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {uniqueMenus.map((menu) => renderButtonWithMenu(menu, anchorEl[menu], handleOpenMenu(menu), handleCloseMenu(menu)))}
          </Box>
        </Toolbar>
      </Container>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;