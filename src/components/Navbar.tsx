import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { createTheme, ThemeProvider } from '@mui/material';
import avatar from '../assets/images/landry.jpeg';
import { Link } from 'react-scroll';
import { ElevationScroll } from './Scrolls';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';


const pages = ['A propos', 'Offres spéciales', 'Menus', 'Réservation', "Nous contacter"];
const settings = [
    { name: "Linkedin", icon: <LinkedInIcon fontSize='small' />, url: "https://www.linkedin.com/in/manankoraisina-landry-rasendranirina-093778161/" },
    { name: "Facebook", icon: <FacebookIcon fontSize='small' />, url: "https://www.facebook.com/Landris18" },
    { name: "Github", icon: <GitHubIcon fontSize='small' />, url: "https://www.github.com/Landris18" }
];

const theme = createTheme({
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontFamily: 'circular'
                }
            }
        }
    }
});


const Navbar = (props: any) => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: any) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = (url?: string) => {
        setAnchorElUser(null);
        if (url) window.open(url, "_blank");
    };

    return (
        <ElevationScroll {...props}>
            <AppBar>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        {/* Header desktop            */}
                        <FastfoodIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Link smooth spy duration={400} style={{ textDecoration: "none" }} to="hero">
                            <Typography variant="h6" noWrap component="a" href="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'circular', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none' }}>
                                RESTO
                            </Typography>
                        </Link>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center" }} >
                            {pages.map((page) => (
                                <Link
                                    smooth spy
                                    activeClass="nav-item"
                                    to={page === "A propos" ? "about" : page === "Offres spéciales" ? "offres" : page === "Menus" ? "menus" : page === "Réservation" ? "footer" : page === "Nous contacter" ? "footer" : "#"}
                                    key={page}
                                    duration={400}
                                    offset={-90}
                                    style={{ textDecoration: "none", justifyContent: "center" }}>
                                    <Box component="h5" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', textTransform: 'capitalize', fontFamily: "circular", pr: 5, cursor: "pointer" }}>
                                        {page}
                                    </Box>
                                </Link>
                            ))}
                        </Box>

                        {/* Header mobile            */}
                        <FastfoodIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Link smooth spy duration={400} style={{ textDecoration: "none" }} to="hero">
                            <Typography variant="h5" noWrap component="a" href="" sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontFamily: 'circular', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none' }}>
                                RESTO
                            </Typography>
                        </Link>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: "end" }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <Link
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        smooth spy
                                        to={page === "A propos" ? "about" : page === "Offres spéciales" ? "offres" : page === "Menus" ? "menus" : page === "Réservation" ? "footer" : page === "Nous contacter" ? "footer" : "#"}
                                        duration={400}
                                        offset={-90}
                                    >
                                        <MenuItem >
                                            <Typography textAlign="center" sx={{ fontFamily: "circular", fontSize: 14 }}>{page}</Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>

                        {/* Menu profile */}
                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                            <ThemeProvider theme={theme}>
                                <Tooltip title="Landry Manankoraisina" style={{ fontFamily: "circular" }}>
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Avatar" src={avatar} />
                                    </IconButton>
                                </Tooltip>
                            </ThemeProvider>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={() => handleCloseUserMenu()}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting.name} onClick={() => handleCloseUserMenu(setting.url)}>
                                        <Typography textAlign="center" sx={{ fontFamily: "circular", fontSize: 14 }} alignItems={"center"} display={"flex"} columnGap={0.8}>
                                            {setting.icon} {setting.name}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ElevationScroll>
    );
};


export default Navbar;