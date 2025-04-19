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
        <Container maxWidth={false} sx={{ width: "100%", backgroundColor: "#111", py: 7, mt: { xs: 10, md: 15 } }} >
            <Container maxWidth={"lg"}>
                <Grid container rowSpacing={2}>
                    <Grid item xs={12} sm={6} md={3} justifyContent="start">
                        <FastfoodIcon sx={{ display: "inline", mr: 1, color: "white" }} />
                        <Typography component="a" variant="h6" noWrap sx={{ mr: 2, display: "inline", fontFamily: 'circular', fontWeight: 700, letterSpacing: '.3rem', color: 'white', textDecoration: 'none', }}>
                            RESTO
                        </Typography>
                        <p style={{ color: "white", fontSize: 14, fontWeight: "500", lineHeight: 1.7, width: "80%" }}>
                            Le meilleur restaurant de Fast-Food de l'océan indien est ravi de vous servir tous les jours.
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} justifyContent="start">
                        <Typography component="a" variant="h6" noWrap sx={{ mr: 2, fontFamily: 'circular', fontWeight: 700, color: '#edbb28', textDecoration: 'none' }}>
                            Nous contacter
                        </Typography>
                        <Stack spacing={3.5} mt={3}>
                            <Stack direction={"row"} alignItems={"center"} columnGap={0.5}> <LocationOnIcon sx={{ color: 'white', fontSize: 16 }} /> <h5 style={{ color: 'white', margin: 0 }}> Antananarivo 101, Madagascar</h5></Stack>
                            <Stack direction={"row"} alignItems={"center"} columnGap={0.5}> <EmailIcon sx={{ color: 'white', fontSize: 16 }} /> <h5 style={{ color: 'white', margin: 0 }}> landry.aps@gmail.com</h5></Stack>
                            <Stack direction={"row"} alignItems={"center"} columnGap={0.5}> <PhoneIcon sx={{ color: 'white', fontSize: 16 }} /> <h5 style={{ color: 'white', margin: 0 }}> 0326912919</h5></Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} justifyContent="start">
                        <Typography component="a" variant="h6" noWrap sx={{ mr: 2, fontFamily: 'circular', fontWeight: 700, color: '#edbb28', textDecoration: 'none' }}>
                            Navigations
                        </Typography>
                        <Stack spacing={3.5} mt={3}>
                            <Link smooth spy duration={400} offset={-90} to="about" style={{ display: "flex", alignItems: "center", columnGap: 2 }}>
                                <ArrowForwardIosIcon sx={{ color: 'white', fontSize: 12 }} />
                                <h5 style={{ color: 'white', cursor: "pointer", margin: 0 }}> A propos</h5>
                            </Link>
                            <Link smooth spy duration={400} offset={-90} to="offres" style={{ display: "flex", alignItems: "center", columnGap: 2 }}>
                                <ArrowForwardIosIcon sx={{ color: 'white', fontSize: 12 }} />
                                <h5 style={{ color: 'white', cursor: "pointer", margin: 0 }}> Offres spéciales</h5>
                            </Link>
                            <Link smooth spy duration={400} offset={-90} to="menus" style={{ display: "flex", alignItems: "center", columnGap: 2 }}>
                                <ArrowForwardIosIcon sx={{ color: 'white', fontSize: 12 }} />
                                <h5 style={{ color: 'white', cursor: "pointer", margin: 0 }}> Menus</h5>
                            </Link>
                            <Link smooth spy duration={400} offset={-90} to="reservation" style={{ display: "flex", alignItems: "center", columnGap: 2 }}>
                                <ArrowForwardIosIcon sx={{ color: 'white', fontSize: 12 }} />
                                <h5 style={{ color: 'white', cursor: "pointer", margin: 0 }}> Réservation</h5>
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} justifyContent="start">
                        <Typography variant="h6" noWrap component="a" sx={{ mr: 2, fontFamily: 'circular', fontWeight: 700, color: '#edbb28', textDecoration: 'none' }}>
                            Faire une reservation
                        </Typography>
                        <Reservation />
                    </Grid>
                </Grid>
                <Grid container sx={{ justifyContent: "center", alignItems: "center" }} mt={5}>
                    <Stack px={1} className="social-icon" onClick={() => window.open("https://www.linkedin.com/in/manankoraisina-landry-rasendranirina-093778161/", "_blank")}>
                        <Fab size="small" sx={{ backgroundColor: "#0075B5", color: "white" }} className="sc-linkedin">
                            <LinkedInIcon />
                        </Fab>
                    </Stack>
                    <Stack px={1} className="social-icon" onClick={() => window.open("https://www.facebook.com/Landris18", "_blank")}>
                        <Fab size="small" sx={{ backgroundColor: "#1778F2", color: "white" }} className="sc-facebook">
                            <FacebookIcon />
                        </Fab>
                    </Stack>
                    <Stack px={1} className="social-icon" onClick={() => window.open("https://www.github.com/Landris18", "_blank")}>
                        <Fab size="small" sx={{ backgroundColor: "#444", color: "white" }} className="sc-github">
                            <GitHubIcon />
                        </Fab>
                    </Stack>
                </Grid>
                <p style={{ textAlign: "center", color: "white", fontSize: 14, fontWeight: "500" }}>
                    Landris18 copyright {new Date().getFullYear()}
                </p>
            </Container>
        </Container>
    )
};


export default Footer;