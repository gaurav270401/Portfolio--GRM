import { AppBar, Toolbar, styled, Button,Box, Hidden,Drawer,List,ListItem,ListItemText, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import { useLayoutEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Header = styled(AppBar)(({ theme, transparent }) => ({
  background: transparent ? 'transparent' : theme.palette.background.paper,
  boxShadow: transparent ? 'none' : theme.shadows[2],
  transition: 'background 0.3s, box-shadow 0.3s',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: transparent ? 'transparent' : theme.palette.background.paper,
    zIndex: -1,
  },
}));

const LogoContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #3e64ff;
  }
`;

const LogoText = styled('div')`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 10px;
`;

const LogoIcon = styled('div')`
  font-size: 24px;
  color: #3e64ff;
`;

const Box1 = styled(Box)`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
 
`;

const StyledButton = styled(Button)`
  margin: 10px;
  ${'' /* color:#3e64ff; */}

`;

const MenuButton = styled(StyledButton)`


  @media (max-width: 768px) {
    display: flex;
 
  }
`;

const DrawerList = styled(List)`
  width: 240px;
`;

const DrawerListItem = styled(ListItem)`
  color: #333;
  text-transform: uppercase;

  &:hover {
    background-color: #3e64ff;
    color: #fff;
  }
`;

const Navbar = ({
  homeRef,
  aboutRef,
  resumeRef,
  servicesRef,
  projectsRef,
  contactsRef
}) => {
  const [navbar, setNavbar] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (ref, section) => {
    animateScroll.scrollTo(ref.current.offsetTop, {
      duration: 800,
      smooth: 'easeInOutQuad'
    });
  };

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }

    const scrollY = window.scrollY;

    if (
      contactsRef.current &&
      scrollY >= contactsRef.current.offsetTop - 10 &&
      scrollY < contactsRef.current.offsetTop + contactsRef.current.offsetHeight - 10
    ) {
      setCurrentSection('contacts');
    } else if (
      projectsRef.current &&
      scrollY >= projectsRef.current.offsetTop - 10 &&
      scrollY < projectsRef.current.offsetTop + projectsRef.current.offsetHeight - 10
    ) {
      setCurrentSection('projects');
    } else if (
      servicesRef.current &&
      scrollY >= servicesRef.current.offsetTop - 10 &&
      scrollY < servicesRef.current.offsetTop + servicesRef.current.offsetHeight - 10
    ) {
      setCurrentSection('services');
    } else if (
      resumeRef.current &&
      scrollY >= resumeRef.current.offsetTop - 10 &&
      scrollY < resumeRef.current.offsetTop + resumeRef.current.offsetHeight - 10
    ) {
      setCurrentSection('resume');
    } else if (
      aboutRef.current &&
      scrollY >= aboutRef.current.offsetTop - 10 &&
      scrollY < aboutRef.current.offsetTop + aboutRef.current.offsetHeight - 10
    ) {
      setCurrentSection('about');
    } else if (homeRef.current && scrollY < homeRef.current.offsetTop + homeRef.current.offsetHeight - 10) {
      setCurrentSection('home');
    }
  };

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (window.scrollY >= 0) {
      window.addEventListener('scroll', changeBackground);

      return () => {
        window.removeEventListener('scroll', changeBackground);
      };
    }
  }, []);

  return (
    <Header position="fixed" transparent={!navbar}>
      <Toolbar>
        <LogoContainer sx={{ flexGrow: 1, color: navbar ? ' #3e64ff' : ' #3e64ff' }}>
          <LogoText>Gaurav</LogoText>
          <LogoIcon>🚀</LogoIcon>
        </LogoContainer>

        <Box1>
          <Hidden mdDown>
            {/* Render these buttons for screens larger than 768px */}
            <>
              <StyledButton
                color={currentSection === 'home' ? 'secondary' : 'primary'}
                onClick={() => scrollToSection(homeRef, 'home')}
              >
                Home
              </StyledButton>
              <StyledButton
                color={currentSection === 'about' ? 'secondary' : 'primary'}
                onClick={() => scrollToSection(aboutRef, 'about')}
              >
                About
              </StyledButton>
              <StyledButton
                color={currentSection === 'resume' ? 'secondary' : 'primary'}
                onClick={() => scrollToSection(resumeRef, 'resume')}
              >
                Resume
              </StyledButton>
              <StyledButton
                color={currentSection === 'services' ? 'secondary' : 'primary'}
                onClick={() => scrollToSection(servicesRef, 'services')}
              >
                Services
              </StyledButton>
              <StyledButton
                color={currentSection === 'projects' ? 'secondary' : 'primary'}
                onClick={() => scrollToSection(projectsRef, 'projects')}
              >
                Projects
              </StyledButton>
              <StyledButton
                color={currentSection === 'contacts' ? 'secondary' : 'primary'}
                onClick={() => scrollToSection(contactsRef, 'contacts')}
              >
                Contact
              </StyledButton>
            </>
          </Hidden>
          <Hidden lgUp>
          <MenuButton  onClick={handleMenuOpen}>
            <MenuIcon /> <Typography>Menu</Typography>
          </MenuButton>

          <Drawer anchor="right" open={menuOpen} onClose={handleMenuClose}>
            <DrawerList>
              <DrawerListItem button onClick={() => scrollToSection(homeRef, 'home')}>
                <ListItemText primary="Home" />
              </DrawerListItem>
              <DrawerListItem button onClick={() => scrollToSection(aboutRef, 'about')}>
                <ListItemText primary="About" />
              </DrawerListItem>
              <DrawerListItem button onClick={() => scrollToSection(resumeRef, 'resume')}>
                <ListItemText primary="Resume" />
              </DrawerListItem>
              <DrawerListItem button onClick={() => scrollToSection(servicesRef, 'services')}>
                <ListItemText primary="Services" />
              </DrawerListItem>
              <DrawerListItem button onClick={() => scrollToSection(projectsRef, 'projects')}>
                <ListItemText primary="Projects" />
              </DrawerListItem>
              <DrawerListItem button onClick={() => scrollToSection(contactsRef, 'contacts')}>
                <ListItemText primary="Contact" />
              </DrawerListItem>
            </DrawerList>
          </Drawer>
          </Hidden>
        </Box1>
      </Toolbar>
    </Header>
  );
};

export default Navbar;


  