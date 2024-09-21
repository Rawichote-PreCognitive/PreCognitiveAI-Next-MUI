import * as React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button, Container, Drawer, List, ListItem, ListItemText, ListItemButton, Menu, MenuItem, Collapse } from '@mui/material';
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
    const y = element.getBoundingClientRect().top + yOffset;

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

  const renderMenuItems = (items, menu) =>
    items.map((item) => (
      <MenuItem
        key={item.section}
        onClick={(e) => {
          smoothScroll(e, item.section);
          handleCloseMenu(menu)();
        }}
        sx={{
          backgroundColor: 'black',
          color: '#23d149',
          '&:hover': {
            backgroundColor: '#d24f0e',
            color: 'white',
          },
          '&.Mui-selected': {
            backgroundColor: '#d24f0e',
            color: 'white',
          },
        }}
      >
        {item.section.replace(/\\&/g, '&').replace(/_/g, ' ')}
      </MenuItem>
    ));
  

  const renderDrawerItems = (menu, open, handleToggle) => (
    <React.Fragment key={menu}>
      <ListItem disablePadding>
        <ListItemButton
          onClick={handleToggle}
          sx={{
            backgroundColor: 'black',
            '&:hover': {
              backgroundColor: '#d24f0e',
            },
          }}
        >
          <ListItemText
            primary={menu}
            primaryTypographyProps={{
              sx: {
                color: '#23d149',
                fontSize: '15px',
                fontFamily: 'Comfortaa, sans-serif',
                fontWeight: 700,
              },
            }}
          />
          {open ? (
            <ExpandLess sx={{ color: '#23d149' }} />
          ) : (
            <ExpandMore sx={{ color: '#23d149' }} />
          )}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{
            minWidth: '200px',
            border: '1px solid #d24f0e',
            backgroundColor: 'black',
          }}
        >
          {groupedContent[menu]?.map((item) => (
            <ListItem disablePadding key={item.section}>
              <ListItemButton
                onClick={(e) => smoothScroll(e, item.section)}
                sx={{
                  backgroundColor: 'black',
                  '&:hover': {
                    backgroundColor: '#d24f0e',
                  },
                }}
              >
                <ListItemText
                  primary={item.section.replace(/\\&/g, '&').replace(/_/g, ' ')}
                  primaryTypographyProps={{
                    sx: {
                      color: '#23d149',
                      fontSize: '14px',
                      fontFamily: 'Comfortaa, sans-serif',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ mx:9, my: 2, fontWeight: 700, fontFamily: 'Comfortaa, sans-serif', color: 'white' }}>
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
        PaperProps={{
          sx: {
            backgroundColor: 'black',
            color: '#23d149',
            marginTop: '5px',
            boxShadow: 'none',
            border: '1px solid #d24f0e',
            padding: 0, // Remove any default padding
            '& .MuiMenu-list': {
              padding: 0, // Remove padding from the list
            },
          },
        }}
      >
        {groupedContent[menu] && renderMenuItems(groupedContent[menu], menu)}
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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Typography
              variant="h4"
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
        PaperProps={{
          sx: {
            backgroundColor: 'black',
            fontFamily: 'Comfortaa, sans-serif',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;