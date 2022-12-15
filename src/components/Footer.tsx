import { Container, Fab, Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import Reservation from './Reservation';


const Footer = () => {
    return (
        <Container maxWidth={false} style={{ width: "100%", backgroundColor: "#111", margin: "5% 0% 0% 0%", padding: "5% 2% 4% 2%" }}>
            <Grid container rowSpacing={4}>
                <Grid item xs={12} sm={6} md={3} justifyContent="start" px={4}>
                    <FastfoodIcon sx={{ display: { md: 'inline' }, mr: 1, color: "white" }} />
                    <Typography component="a" variant="h6" noWrap sx={{ mr: 2, display: { md: 'inline' }, fontFamily: 'circular', fontWeight: 700, letterSpacing: '.3rem', color: 'white', textDecoration: 'none', }}>
                        RESTO
                    </Typography>
                    <p style={{ color: "white", fontSize: 14, fontWeight: "500", lineHeight: 1.7, width: "80%" }}>
                        Le meilleur restaurant de Fast-Food de l'océan indien est ravi de vous servir tous les jours.
                    </p>
                </Grid>
                <Grid item xs={12} sm={6} md={3} justifyContent="start" px={4}>
                    <Typography component="a" variant="h6" noWrap sx={{ mr: 2, display: { md: 'inline' }, fontFamily: 'circular', fontWeight: 700, color: '#edbb28', textDecoration: 'none' }}>
                        Nous contacter
                    </Typography>
                    <div style={{ lineHeight: 2.5 }}> <LocationOnIcon sx={{ color: 'white', display: { md: 'inline' }, fontSize: 16 }} /> <h5 style={{ color: 'white', display: "inline" }}> Antananarivo 101, Madagascar</h5></div>
                    <div style={{ lineHeight: 2.5 }}> <EmailIcon sx={{ color: 'white', display: { md: 'inline' }, fontSize: 16 }} /> <h5 style={{ color: 'white', display: "inline" }}> landry.aps@gmail.com</h5></div>
                    <div style={{ lineHeight: 2.5 }}> <EmailIcon sx={{ color: 'white', display: { md: 'inline' }, fontSize: 16 }} /> <h5 style={{ color: 'white', display: "inline" }}> landry.manankoraisina@esti.mg</h5></div>
                    <div style={{ lineHeight: 2.5 }}> <PhoneIcon sx={{ color: 'white', display: { md: 'inline' }, fontSize: 16 }} /> <h5 style={{ color: 'white', display: "inline" }}> 0326912919</h5></div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} justifyContent="start" px={4}>
                    <Typography component="a" variant="h6" noWrap sx={{ mr: 2, display: { md: 'inline' }, fontFamily: 'circular', fontWeight: 700, color: '#edbb28', textDecoration: 'none' }}>
                        Navigations
                    </Typography>
                    <Link smooth spy duration={400} offset={-90} to="about" style={{ lineHeight: 2.5, display: "block" }}>
                        <ArrowForwardIosIcon sx={{ color: 'white', display: { md: 'inline' }, fontSize: 12 }} />
                        <h5 style={{ color: 'white', display: "inline", cursor: "pointer" }}> A propos</h5>
                    </Link>
                    <Link smooth spy duration={400} offset={-90} to="offres" style={{ lineHeight: 2.5, display: "block" }}>
                        <ArrowForwardIosIcon sx={{ color: 'white', display: { md: 'inline' }, fontSize: 12 }} />
                        <h5 style={{ color: 'white', display: "inline", cursor: "pointer" }}> Offres spéciales</h5>
                    </Link>
                    <Link smooth spy duration={400} offset={-90} to="menus" style={{ lineHeight: 2.5, display: "block" }}>
                        <ArrowForwardIosIcon sx={{ color: 'white', display: { md: 'inline' }, fontSize: 12 }} />
                        <h5 style={{ color: 'white', display: "inline", cursor: "pointer" }}> Menus</h5>
                    </Link>
                    <Link smooth spy duration={400} offset={-90} to="reservation" style={{ lineHeight: 2.5, display: "block" }}>
                        <ArrowForwardIosIcon sx={{ color: 'white', display: { md: 'inline' }, fontSize: 12 }} />
                        <h5 style={{ color: 'white', display: "inline", cursor: "pointer" }}> Réservation</h5>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3} justifyContent="start" px={4}>
                    <Typography variant="h6" noWrap component="a" sx={{ mr: 2, display: { md: 'inline' }, fontFamily: 'circular', fontWeight: 700, color: '#edbb28', textDecoration: 'none' }}>
                        Faire une reservation
                    </Typography>
                    <Reservation />
                </Grid>
            </Grid>
            <Grid container sx={{ justifyContent: "center", alignItems: "center" }} mt={5}>
                <Stack px={1} className="social-icon">
                    <Fab size="small" sx={{ backgroundColor: "#0075B5", color: "white" }} className="sc-linkedin">
                        <LinkedInIcon />
                    </Fab>
                </Stack>
                <Stack px={1} className="social-icon">
                    <Fab size="small" sx={{ backgroundColor: "#1778F2", color: "white" }} className="sc-facebook">
                        <FacebookIcon />
                    </Fab>
                </Stack>
                <Stack px={1} className="social-icon">
                    <Fab size="small" sx={{ backgroundColor: "#444", color: "white" }} className="sc-github">
                        <GitHubIcon />
                    </Fab>
                </Stack>
            </Grid>
            <p style={{ textAlign: "center", color: "white", fontSize: 14, fontWeight: "500" }}>
                Landris18 copyright {new Date().getFullYear()}
            </p>
        </Container>
    )
};


export default Footer;

