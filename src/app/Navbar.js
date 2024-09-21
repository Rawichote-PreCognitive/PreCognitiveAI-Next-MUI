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

  const neonGreen = '#23d149';
  const darkOrange = '#d24f0e';

  // Common styles
  const whiteColor = { color: 'white' };
  const neonGreenColor = { color: neonGreen };
  const blackBackground = { backgroundColor: 'black' };
  const comfortaaW700 = { fontFamily: 'Comfortaa, sans-serif', fontWeight: 700 };
  const whiteOnOrange = { color: 'white', backgroundColor: darkOrange };
  const hoverItem = { '&:hover': whiteOnOrange};
  const itemStyle = {...comfortaaW700, ...hoverItem, ...neonGreenColor,}
  const itemButtonStyle = {...blackBackground, ...hoverItem, ...whiteColor};
  const companyNameStyles = {...comfortaaW700, color: 'inherit', textDecoration: 'none'};
  const xlCompanyNameStyles = {marginLeft: 2, display: { xs: 'none', md: 'flex' }, ...companyNameStyles};
  const sideNavDrawerStyles = { ...blackBackground, ...comfortaaW700, ...whiteColor };
  const sideNavStyles = {...sideNavDrawerStyles, mx: 9, my: 2 };

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
    const yOffset = -70; // Offset value for the scrolling view
    const element = document.getElementById(sectionId);
    const y = element.getBoundingClientRect().top + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    handleCloseNavMenu();
  };

  // Group content by/to menu
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
        sx={{...itemStyle, '&.Mui-selected': whiteOnOrange}}
      >
        {item.section.replace(/\\&/g, '&').replace(/_/g, ' ')}
      </MenuItem>
    ));
  
  // Side navigation drawer menu items
  const renderDrawerItems = (menu, open, handleToggle) => (
    <React.Fragment key={menu}>
      <ListItem disablePadding>
        <ListItemButton onClick={handleToggle} sx={itemButtonStyle} >
          <ListItemText primary={menu} primaryTypographyProps={{sx: {...itemStyle, fontSize: '16px'}}}/>
            {open ? (<ExpandLess sx={neonGreenColor} />) : (<ExpandMore sx={neonGreenColor} />)}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{minWidth: '200px', border: `1px solid ${darkOrange}`, ...blackBackground}}
        >
          {groupedContent[menu]?.map((item) => (
            <ListItem disablePadding key={item.section}>
              <ListItemButton
                onClick={(e) => smoothScroll(e, item.section)}
                sx={itemButtonStyle} >
                <ListItemText
                  primary={item.section.replace(/\\&/g, '&').replace(/_/g, ' ')}
                  primaryTypographyProps={{sx: {...itemStyle, fontSize: '14px'}}}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );

  // Desktop menu items rendering
  const renderButtonWithMenu = (menu, anchorEl, openMenu, closeMenu) => (
    <React.Fragment key={menu}>
      <Button
        aria-controls={`${menu.toLowerCase()}-menu`}
        aria-haspopup="true"
        onClick={openMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        <Typography component="span" sx={{ ...comfortaaW700 }}>
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
            ...blackBackground,
            ...neonGreenColor,
            marginTop: '5px',
            boxShadow: 'none',
            border: `1px solid ${darkOrange}`,
            padding: 0, // Remove any default padding
            '& .MuiMenu-list': { padding: 0}, // Remove padding from the list
          },
        }}
      >
        {groupedContent[menu] && renderMenuItems(groupedContent[menu], menu)}
      </Menu>
    </React.Fragment>
  );

  // Logo and company name for desktop
  const lxLogo = (
    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
      <Image src="/logos/logo_only.png" alt="logo" width={40} height={40} />
      <Typography variant="h4" noWrap component="a" href="/" sx={xlCompanyNameStyles}>
        PreCognitive
      </Typography>
    </Box>
  );

  // Company name for mobile
  const smLogo = (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <Typography variant="h5" noWrap component="a" href="/" sx={companyNameStyles}>
        PreCognitive
      </Typography>
    </Box>
  );

  // Main menu items for desktop
  const xlMenu = (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
      {uniqueMenus.map((menu) => renderButtonWithMenu(menu, anchorEl[menu], handleOpenMenu(menu), handleCloseMenu(menu)))
      }
    </Box>
  );

  // Hamburger menu for mobile
  const hambergerMenu = (
    <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
      <IconButton size="large" aria-label="open drawer" onClick={handleDrawerToggle} color="inherit" >
        <MenuIcon />
      </IconButton>
    </Box>
  );

  // Side navigation drawer
  const sideNavDrawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={sideNavStyles}>PreCognitive</Typography>
      <List>
        {uniqueMenus.map((menu) => renderDrawerItems(menu, openMenus[menu], handleToggle(menu)))}
      </List>
    </Box>
  );

  // Side navigation drawer for mobile
  const sideNav = (
    <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}
      ModalProps={{keepMounted: true}}
      PaperProps={{ sx: sideNavDrawerStyles }}
    >
      {sideNavDrawer}
    </Drawer>
  );
  
  return (
    <AppBar position="sticky" sx={{ ...blackBackground, width: '100%', margin: '0 auto' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {lxLogo}
          {smLogo}
          {hambergerMenu}
          {xlMenu}
        </Toolbar>
      </Container>
      {sideNav}
    </AppBar>
  );
};

export default Navbar;