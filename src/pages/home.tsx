import { useEffect, useState } from 'react';
import '../assets/css/app.css';
import '../assets/css/home.css';
import Navbar from '../components/navbar';
import { Box, Button, Fab, Grid, Paper, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import EastIcon from "@mui/icons-material/East";
import SectionTitle from '../components/sectionTitle';
import promotion from '../assets/images/promotion.png';
import hero from '../assets/images/hero.png';
import burger from '../assets/images/burger.png';
import { getSpeciallOffers } from '../services';
import useMediaQuery from '@mui/material/useMediaQuery';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-scroll';
import { ScrollToTop } from '../components/scrolls';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';


const Home = (props: any) => {

	const [offers, setOffers] = useState<any>([])
	const matchesQuery = useMediaQuery('(max-width:1340px)');

	useEffect(() => {
		const getOffers = async () => {
			const data = await getSpeciallOffers();
			setOffers(data);
		}
		getOffers();
	}, []);


	return (
		<>
			<Container id="hero" sx={{ height: "100vh" }} maxWidth={false}>
				<Navbar />
				<Stack direction="column" maxWidth={{ xs: "80%", md: "60%" }} justifyContent="end" sx={{ bgcolor: 'transparent', marginLeft: '8%' }}>
					<Typography variant="h2" sx={{ fontFamily: "circular", color: "white", fontSize: { xs: "2.2rem", md: "3.5rem" } }} mt={{ md: "32vh", xs: "25vh" }}>
						Des menus que vous ne trouverez pas ici, vous ne les trouverez pas nulle part ailleurs.
					</Typography>
					<Button className='button-reservation' endIcon={<ShoppingCartOutlinedIcon />} variant="contained" disableElevation
						sx={{ my: 2, color: 'white', textTransform: 'capitalize', fontFamily: "circular", fontSize: "16px", width: "160px", backgroundColor: "#000", borderRadius: "50px" }}
					>
						Reservation
					</Button>
				</Stack>
			</Container>

			<section id="about">
				<Container maxWidth="lg" style={{ marginTop: "5%" }}>
					<SectionTitle text={"Resto c'est quoi ?"} />
					<Grid container item spacing={2} my={5} sx={{ justifyContent: "center", alignItems: "center" }}>
						<Grid container item xs={12} md={5}>
							<Container maxWidth={false} style={{ textAlign: "center", }}>
								<Box className="rotated-image" component="img" alt="Food" src={hero} sx={{ width: 300, maxWidth: { xs: 250, md: 300 } }} />
							</Container>
						</Grid>
						<Grid container item xs={12} md={7}>
							<Container maxWidth={false} sx={{ textAlign: { xs: "center", md: "start" } }}>
								<Typography sx={{ display: { xs: "none", md: "block" }, color: "white", fontFamily: "circular", fontSize: 13, py: 0.5, px: 2, backgroundColor: "#edbb28", borderRadius: 50, width: 108 }}>
									A propos de nous
								</Typography>
								<h2 style={{ color: "#e7b10c" }}>Le meilleur restaurant de fast food de l'océan indien, c'est ici.</h2>
								<p style={{ lineHeight: 1.7, color: "#000", fontSize: 16, fontFamily: "Josefin Sans, circular", fontWeight: "500" }}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum enim tortor, sit amet egestas neque placerat ut. Nulla ut elit auctor ipsum tincidunt interdum non sed nunc. Donec mollis, justo in ullamcorper luctus, magna velit posuere tortor, vel suscipit libero orci vitae orci.
								</p>
							</Container>
						</Grid>
					</Grid>
				</Container>
			</section>

			<section id="offres">
				<Container maxWidth={false} style={{ width: "100%", padding: "2% 5% 0% 5% " }}>
					<h2 style={{ color: "#222", textAlign: matchesQuery ? "center" : "start" }}>OFFRES SPECIALES</h2>
					<Grid container item spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
						<Grid container item xs={12} md={matchesQuery ? 6 : 4} sx={{ textAlign: { xs: "center", md: "start" } }} >
							<Container maxWidth={false} >
								<Box component="img" src={promotion} alt="Food" sx={{ width: 350, maxWidth: { xs: 250, md: 350 }, borderRadius: 3 }} />
								<h3>Burger King x4</h3>
								<p style={{ lineHeight: 1.5, fontFamily: "Josefin Sans, circular", fontSize: 15, color: "#000" }}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum enim tortor, sit amet egestas neque.
								</p>
								<h2 style={{ lineHeight: 0 }}>20 $</h2>
								<Button className='button-reservation' endIcon={<EastIcon />} variant="contained" disableElevation sx={{ color: 'white', fontFamily: "circular", fontSize: "12px", width: "190px", backgroundColor: "#000", borderRadius: "50px" }}>
									Voir les autres
								</Button>
							</Container>
						</Grid>
						<Grid container item xs={12} md={matchesQuery ? 6 : 8} rowSpacing={8} mt={{ xs: 1, md: 0 }}>
							{offers.map((offer: any) => (
								<Grid className="paper" key={offer.id} item xs={12} sm={6} md={4} px={{ xs: 1, md: 0 }} pl={{ xs: 0, md: 2 }} py={1} sx={{ justifyContent: "center", alignItems: "center", lignContents: "center" }}>
									<Paper elevation={0} sx={{ textAlign: "center", justifyContent: "center", pb: 0, minHeight: 140, backgroundColor: "whitesmoke", borderRadius: 4 }}>
										<Box component="img" src={offer?.image} alt="Food" sx={{ width: 150, maxWidth: { xs: 150, md: 150 }, marginTop: -10 }} />
										<Container>
											{offer?.name}
										</Container>
										<Grid container item justifyContent="center">
											<Typography sx={{ fontFamily: "circular", fontSize: 13, py: 0.2, px: 1, backgroundColor: "#edbb28", borderRadius: 50, width: 40 }}>
												{offer?.price}
											</Typography>
										</Grid>
									</Paper>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Container>

				<Container maxWidth={false} style={{ width: "100%", backgroundColor: "#111", margin: "6% 0% 0% 0%", padding: "6% 0% 6% 0%" }} >
					<Container maxWidth='xl'>
						<Grid container item spacing={4} sx={{ justifyContent: "space-between", alignItems: "center" }}>
							<Grid container item justifyContent="center" xs={12} md={7} >
								<Container maxWidth={false}>
									<Typography sx={{ fontFamily: "circular", fontSize: 13, py: 0.2, px: 2, backgroundColor: "#fc0330", borderRadius: 50, width: 45, color: "#fff" }}>
										Gratuit
									</Typography>
									<Typography variant={matchesQuery ? "h3" : "h2"} sx={{ fontFamily: "circular", color: "white", mt: 2 }}>
										Plus de 100 Burgers offertent gratuitement tous les jours.
									</Typography>
									<p style={{ fontFamily: "Josefin Sans, circular", fontSize: 15, color: "#fff", lineHeight: 2 }}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
									<Button className="voir-plus" variant="outlined" sx={{ borderRadius: 50, color: "#fff", borderColor: "#fff", fontFamily: "circular", textTransform: "none" }}>
										Voir plus
									</Button>
								</Container>
							</Grid>
							<Grid container item justifyContent={{ xs: "center", md: "end" }} xs={12} md={5} >
								<Box component="img" src={burger} alt="Food" sx={{ width: 500, maxWidth: { xs: 300, md: 500 } }} />
							</Grid>
						</Grid>
					</Container>
				</Container>
			</section>

			<section id="menus">
				<Container maxWidth={false} style={{ width: "100%", margin: "5% 0% 0% 0%" }} >
					<SectionTitle text={"Menus disponibles"} />
					<p style={{ textAlign: "center", color: "#222", fontSize: 16, fontFamily: "Josefin Sans, circular", fontWeight: "500" }}>
						Tous les menus listés ici sont disponibles, réserver une table dès maintenant pour les savourer.
					</p>
				</Container>
			</section>

			<section id="footer">
				<Container maxWidth={false} style={{ width: "100%", backgroundColor: "#111", margin: "5% 0% 0% 0%", padding: "5% 2% 4% 2%" }}>
					<Grid container rowSpacing={4}>
						<Grid item xs={12} sm={6} md={3} justifyContent="start" px={4}>
							<FastfoodIcon sx={{ display: { md: 'inline' }, mr: 1, color: "white" }} />
							<Typography
								component="a" variant="h6" noWrap
								sx={{ mr: 2, display: { md: 'inline' }, fontFamily: 'circular', fontWeight: 700, letterSpacing: '.3rem', color: 'white', textDecoration: 'none', }}
							>
								RESTO
							</Typography>
							<p style={{ color: "white", fontSize: 14, fontWeight: "500", lineHeight: 1.7, width: "80%" }}>
								Le meilleur restaurant de Fast-Food de l'océan indien est ravi de vous servir tous les jours.
							</p>
						</Grid>
						<Grid item xs={12} sm={6} md={3} justifyContent="start" px={4}>
							<Typography
								component="a" variant="h6" noWrap
								sx={{ mr: 2, display: { md: 'inline' }, fontFamily: 'circular', fontWeight: 700, color: '#edbb28', textDecoration: 'none' }}
							>
								Nous contacter
							</Typography>
							<div style={{ lineHeight: 2.5 }}> <LocationOnIcon sx={{ color: 'white', display: { md: 'inline' }, fontSize: 16 }} /> <h5 style={{ color: 'white', display: "inline" }}> Antananarivo 101, Madagascar</h5></div>
							<div style={{ lineHeight: 2.5 }}> <EmailIcon sx={{ color: 'white', display: { md: 'inline' }, fontSize: 16 }} /> <h5 style={{ color: 'white', display: "inline" }}> landry.aps@gmail.com</h5></div>
							<div style={{ lineHeight: 2.5 }}> <EmailIcon sx={{ color: 'white', display: { md: 'inline' }, fontSize: 16 }} /> <h5 style={{ color: 'white', display: "inline" }}> landry.manankoraisina@esti.mg</h5></div>
							<div style={{ lineHeight: 2.5 }}> <PhoneIcon sx={{ color: 'white', display: { md: 'inline' }, fontSize: 16 }} /> <h5 style={{ color: 'white', display: "inline" }}> 0326912919</h5></div>
						</Grid>
						<Grid item xs={12} sm={6} md={3} justifyContent="start" px={4}>
							<Typography
								component="a" variant="h6" noWrap
								sx={{ mr: 2, display: { md: 'inline' }, fontFamily: 'circular', fontWeight: 700, color: '#edbb28', textDecoration: 'none' }}
							>
								Navigations
							</Typography>
							<Link smooth spy duration={400} offset={-90} to="about" style={{ lineHeight: 2.5, display: "block", cursor: "pointer" }}>
								<ArrowForwardIosIcon sx={{ color: 'white', display: { md: 'inline' }, fontSize: 12 }} />
								<h5 style={{ color: 'white', display: "inline" }}> A propos</h5>
							</Link>
							<Link smooth spy duration={400} offset={-90} to="offres" style={{ lineHeight: 2.5, display: "block", cursor: "pointer" }}>
								<ArrowForwardIosIcon sx={{ color: 'white', display: { md: 'inline' }, fontSize: 12 }} />
								<h5 style={{ color: 'white', display: "inline" }}> Offres spéciales</h5>
							</Link>
							<Link smooth spy duration={400} offset={-90} to="menus" style={{ lineHeight: 2.5, display: "block", cursor: "pointer" }}>
								<ArrowForwardIosIcon sx={{ color: 'white', display: { md: 'inline' }, fontSize: 12 }} />
								<h5 style={{ color: 'white', display: "inline" }}> Menus</h5>
							</Link>
							<Link smooth spy duration={400} offset={-90} to="reservation" style={{ lineHeight: 2.5, display: "block", cursor: "pointer" }}>
								<ArrowForwardIosIcon sx={{ color: 'white', display: { md: 'inline' }, fontSize: 12 }} />
								<h5 style={{ color: 'white', display: "inline" }}> Réservation</h5>
							</Link>
						</Grid>
						<Grid item xs={12} sm={6} md={3} justifyContent="start" px={4}>
							<Typography variant="h6" noWrap component="a" sx={{ mr: 2, display: { md: 'inline' }, fontFamily: 'circular', fontWeight: 700, color: '#edbb28', textDecoration: 'none', }}>
								Newsletter
							</Typography>
							<p style={{ color: "white", fontSize: 14, fontWeight: "500" }}>
								Inscrivez-vous pour ne rien rater de Resto.
							</p>
							<input placeholder="Votre adresse email" style={{ display: "block", fontFamily: 'circular', backgroundColor: '#191a1c', borderRadius: 25, paddingLeft: 20, border: 'none', color: '#fff', height: 35 }} />
							<Fab variant="extended" sx={{ boxShadow: "none", height: 30, fontFamily: "circular", textTransform: "capitalize", marginTop: 1.5 }}>
								<SendIcon sx={{ mr: 1, fontSize: 15 }} />
								Envoyer
							</Fab>
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
						Resto copyright {new Date().getFullYear()}
					</p>
				</Container>
			</section>

			<ScrollToTop {...props}>
				<Link smooth spy duration={400} style={{ textDecoration: "none" }} to="hero">
					<Fab sx={{ backgroundColor: "#edbb28" }} size="small" aria-label="scroll back to top">
						<KeyboardArrowUpIcon />
					</Fab>
				</Link>
			</ScrollToTop>
		</>
	);
}


export default Home;
